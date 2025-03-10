
import { api } from "../utils/requester.js";

const endpoints = {
    "baseUrl": "http://localhost:3030/jsonstore/games",
}

async function create(data) {
    return await api.post(endpoints.baseUrl, data);
}

async function getAll() {
    return await api.get(endpoints.baseUrl);
}

// async function getDetails(id) {
//     return await api.get(endpoints.fruitDetails+id);
// }

// async function update(id,data) {
//     return await api.put(endpoints.fruitDetails+id,data);
// }

// async function deleteGame(id) {
//     return await api.del(endpoints.fruitDetails+id);
// }

export const dataService = {
    create,
    getAll,
    // getDetails,
    // update,
    // deleteGame,
}

