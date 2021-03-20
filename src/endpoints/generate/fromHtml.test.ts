import { generatePdfFromHtml } from './fromHtml';
import { encodeBase64 } from '../../utils/encoding';
import { testRequest } from '../../testUtils/controllers.utils';

describe('generatePdfFromHtml', () => {
  // TODO: Replace with env var
  const bucketUrl = 'https://s3.eu-north-1.amazonaws.com/pdfs.webutvikling.org';

  it('requires html parameter', async () => {
    const { status, message } = await testRequest(generatePdfFromHtml, {
      query: { html: '' },
    });

    expect(status).toBe(400);
    expect(message).toEqual('Query param "html" is missing');
  });
  it('requires html parameter to be base64', async () => {
    const { status, message } = await testRequest(generatePdfFromHtml, {
      query: { html: '<h1>This is not b64</h1>' },
    });

    expect(status).toBe(400);
    expect(message).toEqual('Query param "html" is not base64 encoded');
  });
  it('redirects to url for generated pdf', async () => {
    const base64Html = encodeBase64('<h1>This is b64</h1>');
    const { status, headers } = await testRequest(generatePdfFromHtml, {
      query: { html: base64Html },
    });

    expect(status).toBe(302);
    expect(headers.location.endsWith('.pdf')).toBe(true);
    expect(headers.location.startsWith(bucketUrl)).toBe(true);
  });
});