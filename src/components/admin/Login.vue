<template>
<div class="col-md-4 offset-md-4 col-sm-12">
    <div class="card p-4 mt-5" style="border-radius: 50px;">
    
    <h2 class="header-text">Login - Ackcio</h2>
<hr />

        <h4
            v-if="showFailureMessage"
            class="bg-danger text-white text-center p-2"
        >
            Authentication failed, please try again.
        </h4>

        
        <div class="form-group">
            <label class="custom-label" for="">Username <font color="red">*</font></label>
            <input type="text" class="form-control" v-model="username" />
        </div>

        <div class="form-group">
            <label class="custom-label" for="">Password <font color="red">*</font></label>
            <input type="password" class="form-control" v-model="password" />
        </div>

        <div class="text-center">
            <button class="btn btn-success m-1" @click="handleAuth">
                Log in
            </button>
        </div>
  
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            username: null,
            password: null,
            showFailureMessage: false,
        };
    },
    computed: {
        ...mapState({ authenticated: (state) => state.auth.authenticated }),
    },
    methods: {
        ...mapActions({ authenticate: "auth/authenticate" }),
        async handleAuth() {
            await this.authenticate({
                username: this.username,
                password: this.password,
            });

            if (this.authenticated) {
                this.$router.push("/admin");
            } else {
                this.showFailureMessage = true;
            }
        },
    },
};
</script>
<style scoped>
.custom-label { font-family: Nunito, sans-serif; font-size: .813rem;
font-weight: 600; }
.header-text
{
    font-family: Nunito, sans-serif; font-size: 20px;
    text-align: center;
}
</style>