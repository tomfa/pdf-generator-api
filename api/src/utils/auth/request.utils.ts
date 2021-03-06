/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Express from 'express';
import { NotAuthenticatedError } from '../errors/NotAuthenticatedError';
import { decodeUrlSafeBase64, isValidUrlSafeBase64 } from '../base64';
import { BadAuthenticationError } from '../errors/BadAuthenticatedError';
import { getAuth } from './token';
import { Auth, User } from './types';

const getAuthHeader = (req: Express.Request): string | null => {
  const { authorization: authHeader } = req.headers;
  if (Array.isArray(authHeader)) {
    return authHeader[0].split(' ').reverse()[0];
  }
  if (typeof authHeader === 'string') {
    return authHeader.split(' ').reverse()[0];
  }
  return null;
};

export const getUser = (req: Express.Request): Auth | null => {
  const authHeader = getAuthHeader(req);
  if (authHeader) {
    return getAuth(authHeader);
  }
  const token = req.query?.token;
  if (!token) {
    return null;
  }
  if (!isValidUrlSafeBase64(token) || typeof token !== 'string') {
    throw new BadAuthenticationError('Invalid api token');
  }
  return getAuth(decodeUrlSafeBase64(token));
};

export const getUserOrThrow = (req: Express.Request): User => {
  const user = getUser(req);
  if (!user) {
    throw new NotAuthenticatedError();
  }
  return user;
};
