import Vue from "vue";
import VueRouter from "vue-router";

import Pages from "../components/Pages";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import Thanks from "../components/Thanks";

import Admin from "../components/admin/Admin";
import Products from "../components/admin/Products";
import ProductEditor from "../components/admin/ProductEditor";

import Orders from "../components/admin/Orders";
import Login from "../components/admin/Login";

import dataStore from "../store";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/categories/:category", component: ProductList },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkout", component: Checkout },
        { path: "/thanks", component: Thanks },
        { path: "/login", component: Login },
        {
            path: "/admin",
            component: Admin,
            beforeEnter(to, from, next) {
                if (dataStore.state.auth.authenticated) {
                    next();
                } else {
                    next("/login");
                }
            },
            children: [
                { path: "products", component: Products },
                {
                    path: "products/:op(add|edit)/:id(\\d+)?",
                    component: ProductEditor,
                },

                { path: "orders", component: Orders },
                { path: "*", redirect: "/admin/products" },
            ],
        },

        { path: "/:slug?", component: Pages },
        { path: "*", redirect: "/" },
    ],
});