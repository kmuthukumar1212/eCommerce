<template>
    <div class="row p-3">
        <div class="col-3 p-2 side-bar-left">
            <router-link to="/admin/products" class="btn btn-block btn-primary mb-3">
            Products</router-link>
           
            <router-link to="/admin/orders" class="btn btn-block btn-primary mb-3"
                >Orders</router-link>
        </div>

        <div class="col-9">
            <router-view />
        </div>
    </div>
</template>

<script>

</script>
<style scoped>
.row
{
    font-family: Nunito, sans-serif;
}
.side-bar-left
{  
    height: calc(100vh - 80px);
    background: #fff;
    box-shadow: 0 4px 20px 1px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.08);
}
.side-bar-left .navigation-left{
    list-style: none;
    text-align: center;
    width: 120px;
    height: 100%;
    margin: 0;
    padding: 0;
}
.side-bar-left .navigation-left .nav-item
{
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #dee2e6;
}
.btn-primary{
    background: #639;
    border-color:#639;
}
</style>
