import axios from 'axios'

const cropsApi = axios.create({
    baseURL: 'http://localhost:8000/crop/api/v1/crop/'
})

export const getAllCrops = () => cropsApi.get("/");

export const getCrop = (id) => cropsApi.get(`/${id}/`);

export const createCrop = (crop) => cropsApi.post("/", crop);

export const deleteCrop = (id) =>  cropsApi.delete(`/${id}`);

export const updateCrop = (id, crop) => cropsApi.put(`/${id}/`, crop)