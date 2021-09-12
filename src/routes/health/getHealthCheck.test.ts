import supertest from 'supertest';
import { app } from '../../app';

const request = supertest.agent(app.callback());

describe('getHealthCheck', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  describe('calling get', () => {
    it('returns 200', async () => {
      const response = await request.get('/health/health');

      expect(response.text).toEqual('Health Check OK from api-request-logs');
      expect(response.status).toEqual(200);
    });
  });
});
