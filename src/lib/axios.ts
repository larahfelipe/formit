import axios from 'axios';

import config from '@/common/config';

export const api = axios.create({
  baseURL: config.apiUrl
});
