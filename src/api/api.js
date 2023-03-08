import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '167f568b-1831-4864-822c-bb00b58d9308',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  followUser(usersId) {
    return instance.post(`follow/${usersId}`).then((response) => response.data);
  },
  unfollowUser(usersId) {
    return instance.delete(`follow/${usersId}`).then((response) => response.data);
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};
