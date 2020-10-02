<template>
<div class="container-fluid">
    <div class="row mt-5">

            <CategoryList />
      
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-3  col-sm-12 mt-4 ml-3 mr-3 product-box text-center " style="" v-for="(p, i) in products" :key="i">
                    <p>
                        <img :src="productImages + p.image" class="img-fluid" style="width:200px; height: 200px;" />
                    </p>
                    <h3 class="product-name">
                        {{ p.name }}
                    </h3>
                    <!--<p>
                        {{ p.description }}
                    </p>-->
                    <p class="product-price">
                        {{ p.price | currency }}
                    </p>
                    <p>
                        <button
                            class="btn btn-primary"
                            @click="handleAddProduct(p)"
                        >
                            <i class="fa fa-shopping-cart"></i> Add to cart
                        </button>
                    </p>
                </div>
            </div>

            <ProductPagination />
        </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

import CategoryList from "./CategoryList";
import ProductPagination from "./ProductPagination";

export default {
    components: {
        CategoryList,
        ProductPagination,
    },
    computed: {
        ...mapState(["products", "productImages"]),
    },
    methods: {
        ...mapMutations(["setCurrentCategory", "setCurrentPage"]),
        ...mapMutations({ addProduct: "cart/addProduct" }),
        ...mapActions(["setProductsByCategoryAction"]),
        handleAddProduct(product) {
            this.addProduct(product);
        },
    },
    created() {
        this.setCurrentPage(1);
        let category = this.$route.params.category;
        this.setProductsByCategoryAction(category);
        this.setCurrentCategory(category);
    },
    beforeRouteUpdate(to, from, next) {
        this.setCurrentPage(1);
        let category = to.params.category;
        this.setProductsByCategoryAction(category);
        this.setCurrentCategory(category);
        next();
    },
};
</script>

<style scoped>
.product-box{
    border-radius: 10px; 
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, .06), 0 1px 4px
rgba(0, 0, 0, .08);
    border: 1px solid #d3147b;
}

.btn-primary{
    background-color: #639;
    border-color: #639;
    font-family: Nunito, sans-serif;
    font-size: .813rem;
    border-radius: 40px;
}

.product-name{
    font-family: Nunito, sans-serif;
}
.product-price{
    color: #639;
    font-family: Nunito, sans-serif;
    font-size: 16px;
    font-weight: 600;
}
</style>
