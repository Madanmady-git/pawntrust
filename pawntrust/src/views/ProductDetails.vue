<template>
    <div >
        <TopBar></TopBar>
        <div style="display:flex; flex-direction: row; width:100%;">
            <div style="display: flex; width:70%;">
                <v-carousel
                cycle
                height="600"
                hide-delimiter-background
                >
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <img style="width:100%; height:600px;" :src="slide" />
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div style="display:flex;flex-direction: column;align-items: flex-start;width: 30%;padding:5%">
                <!-- <v-divider vertical style="margin-top:10px;"></v-divider> -->
                <span class="fontStyleBold">$ 400</span>
                <span class="fontStyleLightBold">IWC Luxury Watch</span>
                <span style="text-align: left;">Exclusive Swiss Made Luxury watch and very rare model in this brand Exclusive Swiss Made Luxury watch and very rare model in this brand Exclusive Swiss Made Luxury watch and very rare model in this brand Exclusive Swiss Made Luxury watch and very rare model in this brand</span>
                <span class="fontStyleSmaller">Bought 2 months before</span>
            </div>
        </div>
        <Footer ></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer },
        data() {
            return { 
                category : '',
                slides:['https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg', 'https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg', 'https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg']
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
    .ProductCard {
        width: 240px;
        padding: 3%;
        display: flex;
        flex-direction: column;
        margin-bottom :10%;
    }
    .alignLeft{
        display: flex;
        justify-content: flex-start;
        padding: 2% 6%;
    }
    .fontStyleBold{
        font-size: 1.6rem;
        font-weight: bold;
    }
    .fontStyleLightBold{
        font-size: 1rem;
        font-weight: 550;
    }
    .fontStyleSmaller{
        font-size: 0.8rem;
        font-weight: 550;
    }
}


</style>