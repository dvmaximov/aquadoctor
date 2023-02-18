import axios from 'axios';

const host = 'http://localhost:5000';

export const getAll = async (table) => {
  try {
    const result = await axios.get(`${host}/${table}`);
    return result.data;
  } catch {
    return [];
  }
};

export const insert = async (
  table, payload
) => {
  await axios.post(`${host}/${table}`, payload);
};
