import axiosClient from "./axiosClient"

const addToCart = async (data) => {
    return await axiosClient.post(`/cart`, data);
}

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`);
}

const removeFromCart = async (data) => {
    return await axiosClient.delete(`/cart/deleteItem`, { data });
}

export { addToCart, getCart, removeFromCart };