import axiosClient from "axios";

export const getAllFansList = async (search) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/allList", {
    params: { search },
  });
};

export const getAllFans = async (url, brand, order_by_type, search) => {
  return await axiosClient.get(url, {
    params: { brand, order_by_type, search },
  });
};
export const getAllFansByBrandAndOrder = async ( brand,order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/all", {
    params: { brand, order_by_type },
  });
};
export const getCeilingFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/ceiling", {
    params: { brand, order_by_type },
  });
};

export const getFloorFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/floor", {
    params: { brand, order_by_type },
  });
};

export const getTowerFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/tower", {
    params: { brand, order_by_type },
  });
};

export const getWallFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/wall", {
    params: { brand, order_by_type },
  });
};

export const getCeilingIslandFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/island", {
    params: { brand, order_by_type },
  });
};

export const getSteamFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/steam", {
    params: { brand, order_by_type },
  });
};

export const getIndustryFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/industry", {
    params: { brand, order_by_type },
  });
};

export const getSolarPowerFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/solar", {
    params: { brand, order_by_type },
  });
};

export const getTableFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/table", {
    params: { brand, order_by_type },
  });
};

export const getBoxFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/box", {
    params: { brand, order_by_type },
  });
};

export const getBatteryFans = async (brand, order_by_type) => {
  return await axiosClient.get(process.env.VUE_APP_API_URL + "fans/battery", {
    params: { brand, order_by_type },
  });
};

export const getAirCurtainFans = async (brand, order_by_type) => {
  return await axiosClient.get(
    process.env.VUE_APP_API_URL + "fans/air-curtain",
    {
      params: { brand, order_by_type },
    }
  );
};

export const getVentilatorFans = async (brand, order_by_type) => {
  return await axiosClient.get(
    process.env.VUE_APP_API_URL + "fans/ventilator",
    {
      params: { brand, order_by_type },
    }
  );
};

export const getAirConditioner = async (brand, order_by_type) => {
  return await axiosClient.get(
    process.env.VUE_APP_API_URL + "fans/air-conditioner",
    {
      params: { brand, order_by_type },
    }
  );
};

export const getAirCoolerSystem = async (brand, order_by_type) => {
  return await axiosClient.get(
    process.env.VUE_APP_API_URL + "fans/air-cooler",
    {
      params: { brand, order_by_type },
    }
  );
};

export const getConditionerFans = async (brand, order_by_type) => {
  return await axiosClient.get(
    process.env.VUE_APP_API_URL + "fans/conditioner-fan",
    {
      params: { brand, order_by_type },
    }
  );
};
