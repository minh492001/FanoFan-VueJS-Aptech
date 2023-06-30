export default {
  user: {
    id: "",
    name: "",
    email: "",
    is_Admin: 0,
    token: sessionStorage.getItem("TOKEN"),
    image:
      "https://www.google.com/search?q=background+white&sxsrf=AJOqlzUymtilsM371tm9Lw4BjzqhEXUk1w:1677509795996&source=lnms&tbm=isch&sa=X&ved=2ahUKEwilkP37-rX9AhWahlYBHbHsBl4Q_AUoAXoECAEQAw&biw=1536&bih=746&dpr=1.25#imgrc=tlAeg3abE67M5M",
  },

  error: {},
  featureProduct: {},
  products: {
    data: [],
    links: [],
    from: null,
    to: null,
    limit: null,
    total: null,
    page: 1,
  },
  reports: {
    data: [],
    links: [],
    from: null,
    to: null,
    limit: null,
    total: null,
    page: 1,
  },
  productsTrash: {
    data: [],
    links: [],
    from: null,
    to: null,
    limit: null,
    total: null,
    page: 1,
  },
  cart: [],
  totalQuantity: 0,

  allFansList: {
    data: [],
    links: [],
    from: null,
    to: null,
    limit: null,
    total: null,
    page: 1,
  },

  sameProduct: {
    data: [],
  },
  recommendProduct: {
    data: [],
  },
  brand: { data: [] },
  allFansByBrandAndOrder: {data:[]},
  ceilingFans: { data: [] },
  tableFans: { data: [] },
  floorFans: { data: [] },
  towerFans: { data: [] },
  wallFans: { data: [] },
  ceilingIslandFans: { data: [] },
  steamFans: { data: [] },
  boxFans: { data: [] },
  batteryChargeFans: { data: [] },
  solarPowerFans: { data: [] },
  industryFans: { data: [] },
  conditionerFans: { data: [] },
  airConditioning: { data: [] },
  airCurtains: { data: [] },
  coolAirSystems: { data: [] },
  ventilators: { data: [] },

  types: [
    { value: 1, name: "Ceiling Fan" },
    { value: 2, name: "Floor Fan" },
    { value: 3, name: "Tower Fan" },
    { value: 4, name: "Wall Fan" },
    { value: 5, name: "Ceiling Island Fan" },
    { value: 6, name: "Box Fan" },
    { value: 7, name: "Steam Fan" },
    { value: 8, name: "Industry Fan" },
    { value: 9, name: "Table Fan" },
    { value: 10, name: "Battery Charge Fan" },
    { value: 11, name: "Solar Power Fan" },
    { value: 12, name: "Conditioner Fan" },
    { value: 13, name: "Air Cooler System" },
    { value: 14, name: "Air Conditioning" },
    { value: 15, name: "Air Curtain" },
    { value: 16, name: "Ventilator" },
  ],

  technicals: [{ value: 1, name: "Technical ID 1" }],

  fansListHeader: [
    {
      image: "/assets/images/fan/fanlistheader/ceiling.jpg",
      name: "Ceiling Fan",
      to: { name: "app.fans.ceiling" },
    },
    {
      image: "/assets/images/fan/fanlistheader/floor.jpg",
      name: "Pedestral",
      to: { name: "app.fans.floor" },
    },

    {
      image: "/assets/images/fan/fanlistheader/tower.jpg",
      name: "Tower Fan",
      to: { name: "app.fans.tower" },
    },

    {
      image: "/assets/images/fan/fanlistheader/wall.jpg",
      name: "Wallmount Fan",
      to: { name: "app.fans.wall" },
    },

    {
      image: "/assets/images/fan/fanlistheader/island.jpg",
      name: "CeilingIsland Fan",
      to: { name: "app.fans.ceilingisland" },
    },
    {
      image: "/assets/images/fan/fanlistheader/box.jpg",
      name: "Box Fan",
      to: { name: "app.fans.box" },
    },

    {
      image: "/assets/images/fan/fanlistheader/steam.jpg",
      name: "Steam Fan",
      to: { name: "app.fans.steam" },
    },

    {
      image: "/assets/images/fan/fanlistheader/industry.jpg",
      name: "Industry Fan",
      to: { name: "app.fans.industry" },
    },
    {
      image: "/assets/images/fan/fanlistheader/table.jpg",
      name: "Table Fan",
      to: { name: "app.fans.table" },
    },

    {
      image: "/assets/images/fan/fanlistheader/battery.jpg",
      name: "Electric Fan",
      to: { name: "app.fans.batterycharge" },
    },
    {
      image: "/assets/images/fan/fanlistheader/solar.jpg",
      name: "Solar Fan",
      to: { name: "app.fans.solar" },
    },
    {
      image: "/assets/images/fan/fanlistheader/conditioner-fan.jpg",
      name: "Conditioner Fan",
      to: { name: "app.fans.conditionerfan" },
    },
    {
      image: "/assets/images/fan/air conditioner/ac.jpg",
      name: "Conditioner",
      to: { name: "app.fans.conditioner" },
    },
    {
      image: "/assets/images/fan/fanlistheader/cool-air-system.jpg",
      name: "CoolAir System",
      to: { name: "app.fans.coolair" },
    },
    {
      image: "/assets/images/fan/fanlistheader/Ventilators.jpg",
      name: "Ventilator",
      to: { name: "app.fans.ventilator" },
    },
    {
      image: "/assets/images/fan/fanlistheader/air-curtain.jpg",
      name: "Air Curtain",
      to: { name: "app.fans.aircurtain" },
    },
  ],

  brands: [
    {
      value: 1,
      name: "Panasonic",
      image: "/assets/images/fan/brand/Panasonic-Logo-35.png",
    },
    {
      value: 2,
      name: "Beurer",
      image: "/assets/images/fan/brand/Beurer-Logo-35.png",
    },
    {
      value: 3,
      name: "Fukata",
      image: "/assets/images/fan/brand/Fukata-logo-35.png",
    },
    {
      value: 4,
      name: "Haichi",
      image: "/assets/images/fan/brand/Haichi-35.png",
    },
    {
      value: 5,
      name: "Koenic",
      image: "/assets/images/fan/brand/koenic-logo-35.png",
    },
    {
      value: 6,
      name: "Kosmo",
      image: "/assets/images/fan/brand/Kosmo-logo.png",
    },
    {
      value: 7,
      name: "Chika",
      image: "/assets/images/fan/brand/logo-chika-35.png",
    },
    {
      value: 8,
      name: "Ching Hai",
      image: "/assets/images/fan/brand/logo-chinghai-nho.png",
    },
    {
      value: 9,
      name: "Dreamer",
      image: "/assets/images/fan/brand/logo-dreamer-nho.png",
    },
    {
      value: 10,
      name: "Haiki",
      image: "/assets/images/fan/brand/logo-HAIKI-35.png",
    },
    {
      value: 11,
      name: "Hasaki",
      image: "/assets/images/fan/brand/logo-hasaki-nho.png",
    },
    {
      value: 12,
      name: "Toshiba",
      image: "/assets/images/fan/brand/toshiba_n.jpg",
    },
    {
      value: 13,
      name: "Midea",
      image: "/assets/images/fan/brand/logo-midea-nho.png",
    },
    {
      value: 14,
      name: "Hatari",
      image: "/assets/images/fan/brand/logo-hatari-nho.png",
    },
    {
      value: 15,
      name: "NaKami",
      image: "/assets/images/fan/brand/logo-nakami-nho.png",
    },
    {
      value: 16,
      name: "Nanoco",
      image: "/assets/images/fan/brand/logo-nanoco-nho.png",
    },
    {
      value: 17,
      name: "Steba",
      image: "/assets/images/fan/brand/logo-steba-nho.png",
    },
    {
      value: 18,
      name: "Xiaomi",
      image: "/assets/images/fan/brand/logo-xiaomi-nho.png",
    },
    {
      value: 19,
      name: "Mitsubishi",
      image: "/assets/images/fan/brand/mitsubishi-electric-nho.png",
    },
    {
      value: 20,
      name: "Natifan",
      image: "/assets/images/fan/brand/natifan-logo-35.png",
    },
    {
      value: 21,
      name: "Sowun",
      image: "/assets/images/fan/brand/Sowun-logo-35.png",
    },
    {
      value: 22,
      name: "Tolsen",
      image: "/assets/images/fan/brand/tolsen-35.png",
    },
    {
      value: 23,
      name: "Unie",
      image: "/assets/images/fan/brand/unie-logo-35.png",
    },
    {
      value: 24,
      name: "Wing",
      image: "/assets/images/fan/brand/wing-logo-35.png",
    },
    {
      value: 25,
      name: "Alaska",
      image: "/assets/images/fan/brand/logo-alaska-anhnho.png",
    },
    {
      value: 26,
      name: "Kadeka",
      image: "/assets/images/fan/brand/logo-kadeka-nho.png",
    },
    {
      value: 27,
      name: "NIQ",
      image: "/assets/images/fan/brand/NIQ-logo-35.png",
    },
  ],
  navigation: [
    { title: "Table Fan", to: { name: "app.fans.table" } },
    { title: "Ceiling Fan", to: { name: "app.fans.ceiling" } },
    { title: "Battery Charge Fan", to: { name: "app.fans.batterycharge" } },
    { title: "Floor Fan", to: { name: "app.fans.floor" } },
    { title: "Box Fan", to: { name: "app.fans.box" } },
    { title: "Tower Fan", to: { name: "app.fans.tower" } },
    { title: "Wall Fan", to: { name: "app.fans.wall" } },
    { title: "Steam Fan", to: { name: "app.fans.steam" } },
    { title: "Industry Fan", to: { name: "app.fans.industry" } },
    { title: "Ceiling Island Fan", to: { name: "app.fans.ceilingisland" } },
    { title: "Solar Power Fan", to: { name: "app.fans.solar" } },
  ],
};
