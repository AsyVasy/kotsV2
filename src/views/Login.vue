<template>
    <section class="page login">
        <h1 class="title">Connexion</h1>
        <FormLogin />
        <router-link class="text" to="/register"> Pas de compte ? Inscris toi ici ...</router-link>
    </section>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";
export default {
    components: {
        FormLogin
    }
}
</script>

<style lang="scss" scoped>
    .page {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly
        }


    h1 {
        color: white;
        font-family: 'Burbank Big Condensed';
        font-size: 35px
    }

    .text {
        color: white
    }



</style>
