<template>
    <div >
        <TopBar></TopBar>
        <div>
            <div>
                <div style="background-color: rgb(250 224 182);padding:8px">
                    <span style="    font-size: 1.4rem;font-weight: bold;">ITEM DETAILS</span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer },
        data() {
            return {
             }
            },
        methods:{
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {

}

@media screen and (min-width:901px) {
}


</style>