import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "https://localhost:44304/api";

const pagesUrl = `${baseUrl}/pages`;
const categoriesUrl = `${baseUrl}/categories`;
const productsUrl = `${baseUrl}/products`;
const productImagesUrl = "https://localhost:44304/media/products/";

export default new Vuex.Store({

    strict: true,
    state: {
        pages: [],
        categories: [],
        products: [],
        productImages : productImagesUrl,
        currentPage: 1,
        pageCount: 0,
        pageSize: 4,
        currentCategory: "all"
    },
    mutations: {
        setPages(state, pages) {
            state.pages = pages;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setProducts(state, products) {
            state.products = products;
        },
        setPageCount(state, count) {
            state.pageCount = Math.ceil(Number(count) / state.pageSize);
        },
    },
    actions: {
        async setPagesAction(context) {
            context.commit("setPages", (await Axios.get(pagesUrl)).data);
        },
        async setCategoriesAction(context) {
            context.commit("setCategories", (await Axios.get(categoriesUrl)).data);
        },
        async setProductsByCategoryAction(context, category) {
            let url; 
            let productCountUrl;

            if (category != "all") {
                url = `${productsUrl}/${category}?p=${context.state.currentPage}`;
                productCountUrl = `${productsUrl}/count/${category}`;
            } else {
                url = `${productsUrl}`;
                productCountUrl = `${productsUrl}/count/all`;
            }

            let productCount = (await Axios.get(productCountUrl)).data;

            context.commit("setPageCount", productCount);
            context.commit("setProducts", (await Axios.get(url)).data);
        },
    }

});