import axiosClient from "./axiosClient"

const addToCart = async (data) => {
    return await axiosClient.post(`/cart`, data);
}

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`);
}

export { addToCart, getCart };