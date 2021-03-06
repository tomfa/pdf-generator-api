import * as Express from 'express';
import { FOLDER } from '@pdf-generator/shared';
import { getUploadUrl, list, move, remove } from '../storage/fileStorage';
import { BadRequestError } from '../utils/errors/BadRequestError';
import { getUserOrThrow } from '../utils/auth/request.utils';
import config from '../config';
import { getData, getFileDataFromKey, getFileDataFromUrl } from './utils';

export const listFiles = (folder: FOLDER) => async (
  req: Express.Request,
  res: Express.Response
) => {
  const owner = getUserOrThrow(req).username;
  const files = await list({ folder, owner });
  return res.json({ data: files, message: 'OK' });
};

export const getUploadURL = (folder: FOLDER) => async (
  req: Express.Request,
  res: Express.Response
) => {
  const { name } = getData(req);
  const owner = getUserOrThrow(req);
  if (!name) {
    throw new BadRequestError({ field: 'name', error: 'query param missing' });
  }
  const { url: uploadUrl } = await getUploadUrl({
    folder,
    owner: owner.username,
    filename: String(name),
  });
  const file = getFileDataFromUrl(
    uploadUrl.replace(
      config.services.s3.s3BucketUrl,
      config.services.s3.endpointUrl
    )
  );
  return res.json({ message: 'OK', data: { uploadUrl, file } });
};

const mapDataInputToStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.map(String);
  }
  return [String(value)];
};

export const deleteFiles = (prefix: FOLDER) => async (
  req: Express.Request,
  res: Express.Response
) => {
  const { files, permanent } = getData(req);
  const owner = getUserOrThrow(req);
  if (!files) {
    throw new BadRequestError({ field: 'files', error: 'query param missing' });
  }
  const allowedPermanantValues = ['1', '0', 'true', 'false'];
  if (!!permanent && !allowedPermanantValues.includes(permanent as string)) {
    throw new BadRequestError({
      field: 'permanent',
      error: `query param must be unset or one of ${allowedPermanantValues}`,
    });
  }

  const keys = mapDataInputToStringArray(files).map(
    key => `${owner.username}/${prefix}/${key}`
  );

  let data = [];
  if (['1', 'true'].includes(permanent as string)) {
    await remove({ keys });
  } else {
    await Promise.all(
      keys.map(key => {
        if (key.endsWith('.archived')) {
          return;
        }
        const archiveKey = `${key}.archived`;
        return move(key, archiveKey);
      })
    );
    data = keys.map(k => ({ ...getFileDataFromKey(k), archived: true }));
  }
  return res.json({ data, message: 'OK' });
};
