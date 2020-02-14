import Axios from 'axios';

export const host = 'http://tranthuan1997.ddns.net';

export const userAxios = Axios.create({
  baseURL: `${host}/api/users`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  }
});