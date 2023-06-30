import { register, login } from "@/services/user-api";
import {
  getProductByType,
  getProducts,
  getProductsTrash,
  getReportList,
} from "@/services/products-api";
import {
  getAirConditioner,
  getAirCoolerSystem,
  getAirCurtainFans,
  getAllFans,
  getAllFansByBrandAndOrder,
  getBatteryFans,
  getBoxFans,
  getCeilingFans,
  getCeilingIslandFans,
  getConditionerFans,
  getFloorFans,
  getIndustryFans,
  getSolarPowerFans,
  getSteamFans,
  getTableFans,
  getTowerFans,
  getVentilatorFans,
  getWallFans,
} from "@/services/fans-api";
import axiosClient from "axios";

export function loginActions({ commit }, user) {
  return login(user)
    .then(({ data }) => {
      console.log(data.user);
      commit("setUser", data.user);
      commit("setToken", data.token);
      return data;
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      commit("errorMessages", error);
    });
}

export function registerActions({ commit }, user) {
  return register(user)
    .then(({ data }) => {
      commit("setUser", data.user);
      commit("setToken", data.token);
      return data;
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      commit("errorMessages", error);
    });
}

export function logoutActions({ commit }) {
  commit("setToken", null);
  location.reload();
}

export function setCurrentUser({ commit }, data) {
  commit("setUser", data);
  commit("setToken", localStorage.getItem("token"));
}

export function getProduct(
  { commit },
  { url = null, search = "", perPage = 10, type = "" }
) {
  url = url || process.env.VUE_APP_API_URL + "fans/allList";
  return getProducts(url, search, perPage, type).then(({ data }) => {
    commit("setProduct", data);
    return data;
  });
}

export function getReportsList(
  { commit },
  { url = null, search = "", perPage = 10, type = "" }
) {
  url = url || process.env.VUE_APP_API_URL + "report/all-report";
  return getReportList(url, search, perPage, type).then(({ data }) => {
    commit("setReport", data);
    return data;
  });
}

export function getTrash(
  { commit },
  { url = null, search = "", perPage = 10, type = "" }
) {
  url = url || process.env.VUE_APP_API_URL + "product/trash";
  return getProductsTrash(url, search, perPage, type).then(({ data }) => {
    commit("setProductTrash", data);
    return data;
  });
}

export function getSameProduct({ commit }, { type = "" }) {
  return getProductByType(type).then(({ data }) => {
    commit("setSameProduct", data);
    return data;
  });
}

// eslint-disable-next-line no-unused-vars
export async function createProduct({ commit }, product) {
  const formData = new FormData();
  formData.append("name", product.value.name);
  formData.append("product_code", product.value.product_code);
  formData.append("price", product.value.price);
  for (let i = 0; i < product.value.image.length; i++) {
    formData.append("image[]", product.value.image[i]);
  }
  for (let i = 0; i < product.value.video.length; i++) {
    formData.append("video[]", product.value.video[i]);
  }
  formData.append("description", product.value.description);
  formData.append("about", product.value.about);
  formData.append("type_id", product.value.type_id);
  formData.append("brand_id", product.value.brand_id);
  formData.append("technical_id", product.value.technical_id);
  product = formData;
  return await axiosClient.post(
    process.env.VUE_APP_API_URL + "product/create",
    product
  );
}

// eslint-disable-next-line no-unused-vars
export async function updateProduct({ commit }, productUpdate) {
  const id = productUpdate.value.id;
  const formData = new FormData();
  for (let i = 0; i < productUpdate.value.image.length; i++) {
    formData.append("image[]", productUpdate.value.image[i]);
  }
  for (let i = 0; i < productUpdate.value.video.length; i++) {
    formData.append("video[]", productUpdate.value.video[i]);
  }
  formData.append("id", productUpdate.value.id);
  formData.append("name", productUpdate.value.name);
  formData.append("product_code", productUpdate.value.product_code);
  formData.append("price", productUpdate.value.price);
  formData.append("description", productUpdate.value.description);
  formData.append("about", productUpdate.value.about);
  formData.append("type_id", productUpdate.value.type_id);
  formData.append("brand_id", productUpdate.value.brand_id);
  formData.append("technical_id", productUpdate.value.technical_id);
  formData.append("_method", "PUT");
  productUpdate = formData;
  return await axiosClient.post(
    process.env.VUE_APP_API_URL + `products/${id}`,
    productUpdate
  );
}

export function getAllF({ commit }, { url, brand = "", order_by_type = "" }) {
  url = url || process.env.VUE_APP_API_URL + "fans/by-brand";
  return getAllFans(url, brand, order_by_type).then(({ data }) => {
    commit("setAllFan", data);
    return data;
  });
}
export function getListByBrandAndOrder(
  { commit },
  { brand = "", order_by_type = "" }
) {
  return getAllFansByBrandAndOrder(brand, order_by_type).then(({data}) => {
    commit("setAllFanByBrandAndOrder", data);
    return data;
  });
}

export function getCeilingF(
  { commit },
  { brand = "", order_by_type = "", search = "" }
) {
  return getCeilingFans(brand, order_by_type, search).then(({ data }) => {
    commit("setCeilingFan", data);
    return data;
  });
}

export function getFloorF({ commit }, { brand = "", order_by_type = "" }) {
  return getFloorFans(brand, order_by_type).then(({ data }) => {
    commit("setFloorFan", data);
    return data;
  });
}

export function getTowerF({ commit }, { brand = "", order_by_type = "" }) {
  return getTowerFans(brand, order_by_type).then(({ data }) => {
    commit("setTowerFan", data);
    return data;
  });
}

export function getWallF({ commit }, { brand = "", order_by_type = "" }) {
  return getWallFans(brand, order_by_type).then(({ data }) => {
    commit("setWallFan", data);
    return data;
  });
}

export function getCeilingIslandF(
  { commit },
  { brand = "", order_by_type = "" }
) {
  return getCeilingIslandFans(brand, order_by_type).then(({ data }) => {
    commit("setIslandFan", data);
    return data;
  });
}

export function getSteamF({ commit }, { brand = "", order_by_type = "" }) {
  return getSteamFans(brand, order_by_type).then(({ data }) => {
    commit("setSteamFan", data);
    return data;
  });
}

export function getIndustryF({ commit }, { brand = "", order_by_type = "" }) {
  return getIndustryFans(brand, order_by_type).then(({ data }) => {
    commit("setIndustryFan", data);
    return data;
  });
}

export function getBatteryChargeF(
  { commit },
  { brand = "", order_by_type = "" }
) {
  return getBatteryFans(brand, order_by_type).then(({ data }) => {
    commit("setBatteryFan", data);
    return data;
  });
}

export function getTableF({ commit }, { brand = "", order_by_type = "" }) {
  return getTableFans(brand, order_by_type).then(({ data }) => {
    commit("setTableFan", data);
    return data;
  });
}

export function getBoxF({ commit }, { brand = "", order_by_type = "" }) {
  return getBoxFans(brand, order_by_type).then(({ data }) => {
    commit("setBoxFan", data);
    return data;
  });
}

export function getSolarF({ commit }, { brand = "", order_by_type = "" }) {
  return getSolarPowerFans(brand, order_by_type).then(({ data }) => {
    commit("setSolarFan", data);
    return data;
  });
}

export function getConditionerF(
  { commit },
  { brand = "", order_by_type = "" }
) {
  return getConditionerFans(brand, order_by_type).then(({ data }) => {
    commit("setConditionerFan", data);
    return data;
  });
}

export function getAirCoolerS({ commit }, { brand = "", order_by_type = "" }) {
  return getAirCoolerSystem(brand, order_by_type).then(({ data }) => {
    commit("setAirCooler", data);
    return data;
  });
}

export function getAirConditionerF(
  { commit },
  { brand = "", order_by_type = "" }
) {
  return getAirConditioner(brand, order_by_type).then(({ data }) => {
    commit("setAirConditioning", data);
    return data;
  });
}

export function getVentilatorF({ commit }, { brand = "", order_by_type = "" }) {
  return getVentilatorFans(brand, order_by_type).then(({ data }) => {
    commit("setVentilatorFan", data);
    return data;
  });
}

export function getAirCurtainF({ commit }, { brand = "", order_by_type = "" }) {
  return getAirCurtainFans(brand, order_by_type).then(({ data }) => {
    commit("setAirCurtainFan", data);
    return data;
  });
}

export const getCartItem = ({ commit }, data) => {
  commit("getCartItems", data);
};
export const getCount = ({ commit }, data) => {
  commit("getCartCount", data);
};
export const changeTotalPrice = ({ commit }, data) => {
  commit("changeTotal", data);
};
export const changeEachItemQty = ({ commit }, { id, quantity }) => {
  commit("changeQty", { id, quantity });
};
export const deleteCartItem = () => {};
