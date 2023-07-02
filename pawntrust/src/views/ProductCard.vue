<template>
    <div>
        <v-card class="ProductCard" @click="viewProduct()">
            <div style="display:flex;justify-content: center;">
                <img style="width:200px; height:200px;" :src="this.$props.product.imageUrls[0]" />
            </div>
            <v-divider style="margin-top:10px;"></v-divider>
            <span class="alignLeft fontStyleBold">$ {{ this.$props.product.price }}</span>
            <span class="alignLeft fontStyleLightBold">{{ this.$props.product.name }}</span>
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