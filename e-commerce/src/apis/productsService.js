import axiosClient from "./axiosClient"

const getProducts = async (query) => {
    const { sortType, page, limit } = query;
    const queryLimit = limit === 'All' ? '' : limit
    const res = await axiosClient.get(`/product?sortType=${sortType}&page=${page}&limit=${queryLimit}`);
    return res.data;
}

export { getProducts };