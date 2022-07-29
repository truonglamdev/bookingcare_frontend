/* eslint-disable no-unused-vars */
import axios from 'axios';
import _ from 'lodash';
import config from './config';

const instance = axios.create({
    baseURL: config.api.API_BASE_URL,
    // withCredentials: true
});

instance.interceptors.response.use((response) => {
    // eslint-disable-next-line no-unused-vars
    // const { data } = response;
    return response.data;
});

export default instance;
