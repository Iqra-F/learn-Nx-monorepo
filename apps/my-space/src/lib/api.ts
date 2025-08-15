// apps/my-space/src/lib/api.ts
import axios from 'axios';

export const getMessage = async () => {
  const res = await axios.get('http://localhost:3333/api');
  return res.data;
};

export const getHello = async () => {
  const res = await axios.get('http://localhost:3333/api/hello');
  return res.data;
};
