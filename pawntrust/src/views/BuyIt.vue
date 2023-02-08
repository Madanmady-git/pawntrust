<template>
    <div >
        <TopBar></TopBar>
        <div class="mainDiv">
            <div class="cardContent">
                <span style="font-size:2.3rem;font-weight:600;">Buy It</span>
            </div>
            <div class="cardContentHeader">
                <div class="cardContent">
                    <div>
                        <span>Select Category</span>
                    </div>
                    <div>
                        <v-select
                            v-model="category"
                            hide-details
                            color="#F19B14"
                            outlined
                            :items="['Watches' , 'Jewellary', 'Gold', 'White Gold', 'Diamonds']"
                            placeholder="Select Category"
                        ></v-select>
                    </div>
                </div>
                <div>
                    <div>
                        <v-select
                            v-model="category"
                            hide-details
                            color="#F19B14"
                            outlined
                            :items="['low to high', 'high to low']"
                            placeholder="Filter by Price"
                        ></v-select>
                    </div>
                </div>
            </div>
            <div class="cardContent">
                <span style="font-size:1.3rem;font-weight:600;padding: 2% 0%;">Products</span>
            </div>
            <div class="cardContent">
                <div class="cardContentHorizontal">
                    <div v-for="i in 13" :key="i">
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
        <Footer ></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
import ProductCard from './ProductCard.vue';
    export default {
        components : { TopBar, Footer, ProductCard },
        data() {
            return { 
                category : ''
             }
            },
        methods:{
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {
    .cardContent{
        width: 80%;
    }
    .mainDiv{
        width: 80%;
        display: flex;
        justify-content: center;
    }
}

@media screen and (min-width:901px) {
    .cardContent{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .cardContentHeader{
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .cardContentHorizontal{
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        gap:2%;
        /* align-items: center; */
    }
    .mainDiv{
        /* width: 80%; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}


</style>