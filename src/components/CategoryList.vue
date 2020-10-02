<template>
    <div class="col-md-2 col-sm-12 category-div">
        <h3>Categories</h3>

        <ul class="nav flex-column mt-3">
            <li class="nav-item">
                <router-link class="nav-link" to="/categories/all">
                    All
                </router-link>
            </li>
            <li class="nav-item" v-for="(category, i) in categories" :key="i">
                <router-link class="nav-link" :to="'/categories/' + category.slug">
                    {{ category.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(["categories"]),
    },
};
</script>

<style scoped>

.category-div
{
    border-radius: 10px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, .06), 0 1px 4px rgba(0, 0, 0, .08); 
}
.nav-item a
{
    font-family: Nunito, sans-serif; 
    font-size: 16px; 
    font-weight: 600;
    color: #47404f;
}
a.router-link-active {
    background: #639;
    color: white;
    border-radius: 10px;
}
</style>