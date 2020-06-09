<template>
    <div>
        <h2 class="text-center p-2">
            {{ editMode ? "Edit Product" : "Add Product" }}
        </h2>

        <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="product.name" />
        </div>

        <div class="form-group">
            <label for="">Description</label>
            <textarea
                class="form-control"
                v-model="product.description"
            ></textarea>
        </div>

        <div class="form-group">
            <label for="">Price</label>
            <input type="text" class="form-control" v-model="product.price" />
        </div>

        <div class="form-group">
            <label for="">Image</label>
            <input type="file" class="form-control" @change="onFileSelected" />
        </div>

        <div class="form-group">
            <label for="">Category</label>
            <select class="form-control" @change="onChange">
                <option :value="null">Choose a category</option>
                <option
                    v-for="(c, i) in categories"
                    :key="i"
                    :value="c.id"
                    :selected="c.id == product.categoryId"
                >
                    {{ c.name }}
                </option>
            </select>
        </div>

        <div class="text-center">
            <router-link to="/admin/products" class="btn btn-secondary m-1"
                >Cancel</router-link
            >
            <button class="btn btn-primary m-1" @click="handleProduct">
                {{ editMode ? "Edit" : "Add" }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
// import { mapState, mapActions, mapMutations } from "vuex";

export default {
    data() {
        return {
            product: {
                name: null,
                description: null,
                price: null,
                image: null,
                category: null,
            },
        };
    },
    computed: {
        ...mapState(["categories"]),
        editMode() {
            return this.$route.params["op"] == "edit";
        },
    },
    methods: {
        onFileSelected(e) {
            this.product.image = e.target.files[0];
        },
        onChange(e) {
            this.product.category = e.target.value;
        },
    },
    created() {
        if (this.editMode) {
            Object.assign(
                this.product,
                this.$store.getters.productById(this.$route.params["id"])
            );
        }
    },
};
</script>
