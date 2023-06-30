export function setUser(state, data) {
  state.user = {
    ...state.user,
    id: data.id,
    name: data.name,
    email: data.email,
    is_Admin: data.is_admin,
  };
}

export function setToken(state, token) {
  state.user.token = token;
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}

export function setProduct(state, data = null) {
  if (data) {
    state.products = {
      ...state.products,
      data: data[0].data,
      links: data[0].links,
      from: data[0].from,
      to: data[0].to,
      limit: data[0].per_page,
      total: data[0].total,
      page: 1,
    };
  }
}

export function setReport(state, data = null) {
  if (data) {
    state.reports = {
      ...state.reports,
      data: data[0].data,
      links: data[0].links,
      from: data[0].from,
      to: data[0].to,
      limit: data[0].per_page,
      total: data[0].total,
      page: 1,
    };
  }
}

export function setProductTrash(state, data = null) {
  if (data) {
    state.productsTrash = {
      ...state.productsTrash,
      data: data[0].data,
      links: data[0].links,
      from: data[0].from,
      to: data[0].to,
      limit: data[0].per_page,
      total: data[0].total,
      page: 1,
    };
  }
}

export function errorMessages(state, err) {
  state.error = err.response.data.errors;
}

export function setFeatureItem(state, data) {
  state.featureProduct = data.feature;
}

export function setAllFan(state, data) {
  state.allFansList = {
    ...state.allFansList,
    data: data[0].data,
    links: data[0].links,
    from: data[0].from,
    to: data[0].to,
    limit: data[0].per_page,
    total: data[0].total,
    page: 1,
  };
}

export function setSameProduct(state, data) {
  state.sameProduct = {
    ...state.sameProduct,
    data: data,
  };
}
export function setAllFanByBrandAndOrder(state, data) {
  state.allFanByBrandAndOrder = data.all_fan;
}
export function setCeilingFan(state, data) {
  state.ceilingFans.data = data;
}

export function setTableFan(state, data) {
  state.tableFans.data = data;
}

export function setFloorFan(state, data) {
  state.floorFans.data = data;
}

export function setTowerFan(state, data) {
  state.towerFans.data = data;
}

export function setWallFan(state, data) {
  state.wallFans.data = data;
}

export function setIslandFan(state, data) {
  state.ceilingIslandFans.data = data;
}

export function setSteamFan(state, data) {
  state.steamFans.data = data;
}

export function setBoxFan(state, data) {
  state.boxFans.data = data;
}

export function setBatteryFan(state, data) {
  state.batteryChargeFans.data = data;
}

export function setSolarFan(state, data) {
  state.solarPowerFans.data = data;
}

export function setIndustryFan(state, data) {
  state.industryFans.data = data;
}

export function setAirCooler(state, data) {
  state.industryFans.data = data;
}

export function setAirConditioning(state, data) {
  state.industryFans.data = data;
}

export function setVentilatorFan(state, data) {
  state.industryFans.data = data;
}

export function setAirCurtainFan(state, data) {
  state.industryFans.data = data;
}

export function setConditionerFan(state, data) {
  state.industryFans.data = data;
}

export function addToCart(state, { product, quantity }) {
  let productInCart = state.cart.products.find((item) => {
    return (item.id = product.id);
  });
  if (productInCart) {
    productInCart.quantity += quantity;
  }
  state.cart.push({
    product,
    quantity,
  });
}

export const getCartItems = (state, data) => {
  state.cart = data;
  console.log(state.cart);
};
export const getCartCount = (state, data) => {
  state.cart.count = data;
};

export const changeTotal = (state, data) => {
  state.cart.total_price = data;
};
export const changeQty = (state, { id, quantity }) => {
  state.cart.cart_items[id].quantity = quantity;
};
