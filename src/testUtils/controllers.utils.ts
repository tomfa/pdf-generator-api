import { MockRequest } from '@jest-mock/express/dist/src/request';
import { getMockReq, getMockRes } from '@jest-mock/express';

type APIResponse = {
  status: number;
  json?: Record<string, any>;
  message?: string;
};
export const testRequest = async (
  controller: (req: Express.Request, res: Express.Request) => unknown,
  options?: MockRequest,
): Promise<APIResponse> => {
  const req = getMockReq(options);
  const { res } = getMockRes();
  await controller(req, res);

  // @ts-ignore
  const status = res.status.mock.calls?.[0]?.[0] || 200;
  // @ts-ignore
  const json = res.json.mock.calls?.[0]?.[0];
  const message = json?.message;
  return { status, json, message };
};