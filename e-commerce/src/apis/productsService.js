import axiosClient from "./axiosClient"

const getProducts = async () => {
    const res = await axiosClient.get('/product');
    console.log('getProducts res', res);
    return res.data;
}

export { getProducts };