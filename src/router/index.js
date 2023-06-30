import { createRouter, createWebHistory } from "vue-router";
// import store from "@/store";
import RegisterViewNew from "@/views/Auth/RegisterViewNew.vue";
import LoginViewNew from "@/views/Auth/LoginViewNew.vue";
import ForgetView from "@/views/Auth/ForgetView.vue";
import ResetPasswordView from "@/views/Auth/ResetPasswordView.vue";
import AppLayout from "@/components/AppLayout";
import DashboardView from "@/views/Admin/DashboardView";
import HomeView from "@/views/HomeView";
import NotFound from "@/views/Auth/NotFound";
import FansList from "@/components/FansList";
import CeilingFans from "@/views/Product/CeilingFans";
import TableFans from "@/views/Product/TableFans";
import FloorFans from "@/views/Product/FloorFans";
import BatteryChargeFans from "@/views/Product/BatteryChargeFans";
import CeilingIslandFans from "@/views/Product/CeilingIslandFans";
import IndustryFans from "@/views/Product/IndustryFans";
import TowerFans from "@/views/Product/TowerFans";
import WallFans from "@/views/Product/WallFans";
import SteamFans from "@/views/Product/SteamFans";
import SolarPowerFans from "@/views/Product/SolarPowerFans";
import BoxFans from "@/views/Product/BoxFans";
import CoolAirFans from "@/views/Product/CoolAirFans";
import VentilatorFans from "@/views/Product/VentilatorFans";
import AirConditioner from "@/views/Product/AirConditioner";
import ConditionerFans from "@/views/Product/ConditionerFans";
import AirCurtainFans from "@/views/Product/AirCurtainFans";
import AllFans from "@/views/Product/AllFans";
import ProductDetail from "@/views/Product/ProductDetail";
import ShoppingCart from "@/views/Product/ShoppingCart";
import CheckoutForm from "@/views/Product/CheckoutForm";
import SaveForLater from "@/views/Product/SaveForLater";
import UpdateProduct from "@/views/Admin/UpdateProduct";
import DashboardTable from "@/views/Admin/DashboardTable";
import TheEvent from "@/components/TheEvent";
import CreateProductTest from "@/views/Admin/CreateProductTest";
import AboutUs from "@/components/AboutUs";
import CreateArticle from "@/views/Admin/PostArticle";
import TheContact from "@/components/TheContact";
import TheGallery from "@/components/TheGallery";
import WishList from "@/components/WishList";
import SearchResult from "@/components/SearchResult";
import ImportExcel from "@/views/Admin/ImportExcel";
import ImportImage from "@/views/Admin/ImportImage";
import ProductTrash from "@/views/Admin/ProductTrash";
import ReportProductTable from "@/views/Admin/ReportProductTable";
import SuccessPayment from "@/views/Product/SuccessPayment";

const routes = [
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/home",
    name: "app.home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/event",
    name: "event",
    component: TheEvent,
  },
  {
    path: "/contact",
    name: "contact",
    component: TheContact,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: TheGallery,
  },
  {
    path: "/search-result/:search",
    name: "search-result",
    component: SearchResult,
    props: true
  },
  {
    path: "/app",
    name: "app",
    redirect: "/home",
    component: AppLayout,
    children: [
      {
        path: "fans",
        name: "app.fans",
        component: FansList,
        children: [
          {
            path: "all",
            name: "app.fans.all",
            component: AllFans,
          },
          {
            path: "ceiling",
            name: "app.fans.ceiling",
            component: CeilingFans,
          },
          {
            path: "table",
            name: "app.fans.table",
            component: TableFans,
          },
          {
            path: "floor",
            name: "app.fans.floor",
            component: FloorFans,
          },
          {
            path: "battery",
            name: "app.fans.batterycharge",
            component: BatteryChargeFans,
          },
          {
            path: "island",
            name: "app.fans.ceilingisland",
            component: CeilingIslandFans,
          },
          {
            path: "industry",
            name: "app.fans.industry",
            component: IndustryFans,
          },
          {
            path: "wall",
            name: "app.fans.wall",
            component: WallFans,
          },
          {
            path: "steam",
            name: "app.fans.steam",
            component: SteamFans,
          },
          {
            path: "tower",
            name: "app.fans.tower",
            component: TowerFans,
          },
          {
            path: "solar",
            name: "app.fans.solar",
            component: SolarPowerFans,
          },
          {
            path: "box",
            name: "app.fans.box",
            component: BoxFans,
          },
          {
            path: "cool-air",
            name: "app.fans.coolair",
            component: CoolAirFans,
          },
          {
            path: "ventilator",
            name: "app.fans.ventilator",
            component: VentilatorFans,
          },
          {
            path: "conditioner",
            name: "app.fans.conditioner",
            component: AirConditioner,
          },
          {
            path: "conditioner-fan",
            name: "app.fans.conditionerfan",
            component: ConditionerFans,
          },
          {
            path: "air-curtain",
            name: "app.fans.aircurtain",
            component: AirCurtainFans,
          },
        ],
      },
    ],
  },
  {
    path: "/shopping-cart",
    name: "cart",
    component: ShoppingCart,
  },
  {
    path: "/wishlist",
    name: "save-for-later",
    component: SaveForLater,
  },
  {
    path: "/wishlist-list",
    name: "wishlist",
    component: WishList,
  },
  {
    path: "/check-out",
    name: "checkout",
    component: CheckoutForm,
  },
  {
    path: "/detail/:id/:type",
    name: "fans.detail",
    component: ProductDetail,
    props: true,
  },
  {
    path: "/success-payment",
    name: "cart.success",
    component: SuccessPayment,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/list",
    component: DashboardView,
    meta: {
      requiresAuth: true,
      requireAdmin: true,
    },
    children: [
      {
        path: "list",
        name: "dashboard.list",
        component: DashboardTable,
      },
      {
        path: "create",
        name: "dashboard.create",
        component: CreateProductTest,
      },
      {
        path: "update/:id",
        name: "dashboard.update",
        component: UpdateProduct,
        props: true,
      },
      {
        path: "article-create",
        name: "dashboard.article",
        component: CreateArticle,
      },
      {
        path: "excel",
        name: "dashboard.excel",
        component: ImportExcel,
        props:true
      },
      {
        path: "image/:id",
        name: "dashboard.image",
        component: ImportImage,
        props:true
      },
      {
        path: "report",
        name: "dashboard.report",
        component: ReportProductTable,
      },
      {
        path: "trash",
        name: "dashboard.trash",
        component: ProductTrash,
      },
    ],
  },

  {
    path: "/register",
    name: "Registration",
    component: RegisterViewNew,
  },

  {
    path: "/login",
    name: "Login",
    component: LoginViewNew,
    meta: {
      requiresGuest: true,
    },
  },

  {
    path: "/forget-password",
    name: "Forget",
    component: ForgetView,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/reset-password",
    name: "Reset",
    component: ResetPasswordView,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !store.state.user.token) {
//     next({ name: "Login" });
//   }
//   else {
//     next();
//   }
// });
export default router;
