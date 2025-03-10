// import { api } from "../utils/requester.js";
// import { userUtil } from "../utils/userUtils.js";


// const endpoints = {
//     register: "http://localhost:3030/users/register",
//     login: "http://localhost:3030/users/login",
//     logout: "http://localhost:3030/users/logout"
// }

// async function register(data) {
//     const userData = await api.post(endpoints.register, data);
//     userUtil.setUser(userData);
// }

// async function login(data) {
//     const userData = await api.post(endpoints.login, data);
//     userUtil.setUser(userData);
// }

// async function logout() {
//     await api.get(endpoints.logout);
//     userUtil.clearUserData();
// }

// export const userService = {
//     register,
//     login,
//     logout
// }