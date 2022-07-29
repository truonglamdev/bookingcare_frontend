/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from '../axios';
const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
};

const handleGetAllUser = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
};

// eslint-disable-next-line no-unused-vars
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
};

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', { data: { id: userId } });
};

const editUserService = (data) => {
    return axios.put('/api/edit-user', data);
};
export { handleLoginApi, handleGetAllUser, createNewUserService, deleteUserService, editUserService };
