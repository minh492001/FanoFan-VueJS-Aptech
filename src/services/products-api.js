import axiosClient from "axios";

export const getProducts = async (url, search, perPage) => {
    return await axiosClient.get(url, {
        params: {
            search,
            per_page: perPage,
        },
    });
};
export const getProductsTrash = async (url, search, perPage) => {
    return await axiosClient.get(url, {
        params: {
            search,
            per_page: perPage,
        },
    });
};
export const getReportList = async (url, search, perPage) => {
    return await axiosClient.get(url, {
        params: {
            search,
            per_page: perPage,
        },
    });
};
export const getProductByType = async (type) => {
    return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/by-type", {
        params: {
            type,
        },
    });
};
