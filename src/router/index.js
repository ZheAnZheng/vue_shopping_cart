import Vue from 'vue'
import VueRouter from 'vue-router'
// import Checkout from '../views/Checkout.vue'
import AddressForm from "../views/AddressForm.vue"
import DeliveryForm from "../views/DeliveryForm.vue"
import PaymentForm from "../views/PaymentForm.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/checkout/address",
  },
  {
    path: "/checkout/address",
    name: "address",
    component: AddressForm,
  },
  {
    path: "/checkout/delivery",
    name: "delivery",
    component: DeliveryForm,
  },
  {
    path: "/checkout/payment",
    name: "payment",
    component: PaymentForm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
