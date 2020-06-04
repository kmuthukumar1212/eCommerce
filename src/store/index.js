import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(vuex);

const baseUrl = "https://localhost:44304/api";

const pagesUrl = `${baseUrl}/pages`;

export default new Vuex.Store({

    strict: true,
    state: {
        pages: []
    },
    mutations: {
        setPages(state, pages) {
            state.pages = pages;
        }
    },
    actions: {
        async setPagesAction(context) {
            context.commit("setPages", (await Axios.get(pagesUrl)).data);
        }
    }

});