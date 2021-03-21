import * as Express from 'express';
import { JSONObject } from '../types';

export const getData = (req: Express.Request): JSONObject => {
  if (req.method === 'GET') {
    return req.query as Record<string, string | string[]>;
  }
  return (req.body || {}) as JSONObject;
};
