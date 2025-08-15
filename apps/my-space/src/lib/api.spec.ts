// apps/my-space/src/lib/api.spec.ts
import { getMessage, getHello } from './api';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Integration Tests', () => {
  it('/api should return welcome message', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { message: 'Assalam o alaikum! Welcome to space-api!' } });
    const data = await getMessage();
    expect(data).toEqual({ message: 'Assalam o alaikum! Welcome to space-api!' });
  });

  it('/api/hello should return hello message', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { message: 'Hello from space-api!' } });
    const data = await getHello();
    expect(data).toEqual({ message: 'Hello from space-api!' });
  });
});
