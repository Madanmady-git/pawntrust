<template>
    <div>
        <v-card class="ProductCard" @click="viewProduct()">
            <div style="display:flex;justify-content: center;">
                <img style="width:200px; height:200px;" src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" />
            </div>
            <v-divider style="margin-top:10px;"></v-divider>
            <span class="alignLeft fontStyleBold">$ 400</span>
            <span class="alignLeft fontStyleLightBold">IWC Luxury Watch</span>
            <!-- <span class="alignLeft" style="text-align: left;">Exclusive Swiss Made Luxury watch and very rare model in this brand</span>
            <span class="alignLeft fontStyleSmaller">Bought 2 months before</span> -->
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['product'],
    data: () => ({
            token : 'Hello',
            username : null,
            password : null
        }),
    mounted(){
        console.log('product', this.$props.product)
    },
    methods:{
        viewProduct(){
            this.$router.push({
                name : 'ProductDetails'
            })
        }
    }
}
</script>

<style scoped>

@media screen and (max-width:900px) {
    .ProductCard {
        display: flex;
        flex-direction: column;
    }
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