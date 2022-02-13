import Vue from "vue";
import VueRouter from "vue-router";
import AddressForm from "../views/AddressForm.vue";
import DeliveryForm from "../views/DeliveryForm.vue";
import PaymentForm from "../views/PaymentForm.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/address",
    name: "address",
    component: AddressForm,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: DeliveryForm,
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentForm,
  },
  {
    path: "/",
    name: "Home",
    redirect: "/address",
  },
];

const router = new VueRouter({
  mode: "hash",
  base: "/vue_shopping_cart",
  routes,
});

export default router;
