import Axios from 'axios';

export const host = 'http://ed8999cdce8d.ngrok.io';

export const userAxios = Axios.create({
  baseURL: `${host}/api/users`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  },
});

export const routeAxios = Axios.create({
  baseURL: `${host}/api/routes`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  },
});

export const routeTimeAxios = Axios.create({
  baseURL: `${host}/api/routetimes`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  },
});

export const ticketAxios = Axios.create({
  baseURL: `${host}/api/tickets`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  },
});

export const customerAxios = Axios.create({
  baseURL: `${host}/api/customers`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  },
});

export const citiesAxios = Axios.create({
  baseURL: `${host}/api/cities`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  },
});

export default Axios.create({
  baseURL: `${host}/api`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8;',
  },
});
