<template>
    <div >
        <TopBar></TopBar>
        <v-divider style="width:100%;"></v-divider>
        <div class="mainContainer">
            <div class="navBar">
                <v-navigation-drawer
                        >
                        <v-list>
                            <!-- <div style="display:flex ;justify-content: center;align-items: center;">
                                <v-btn 
                                @click="SellItAction()"
                                style="display: flex;width:80%; box-shadow: none;text-transform: capitalize;color: #FFF;background-color: #F19B14;">
                                    Sell It
                                </v-btn>
                            </div> -->
                            <div style="display:flex ;justify-content: center;align-items: center;padding: 8% 0%;">
                                <div style="width:80%;">
                                    <v-select
                                        dense
                                        color="#F19B14"
                                        v-model="value"
                                        :items="categories"
                                        label="Categories"
                                        multiple
                                        solo
                                        hide-details
                                        outlined
                                        flat
                                        style="color:#FFF"
                                        >
                                    </v-select>
                                </div>
                            </div>
                            <div style="display:flex ;flex-direction: column; justify-content: center;align-items: center;">
                                <v-btn 
                                @click="(price = !price)"
                                style="display: flex;width:80%; box-shadow: none;text-transform: capitalize;margin-bottom: 40px;"
                                outlined
                                >
                                    Price
                                </v-btn>
                                <div v-if="price" style="width:80%;">
                                    <v-range-slider
                                        hint="Select from and to price"
                                        max="1000"
                                        min="0"
                                        thumb-label="always"
                                        thumb-size="32"
                                        thumb-color="#F19B14"
                                        step="10"
                                    >
                                    <!-- <template v-slot:prepend>
                                        <v-text-field
                                            :model-value="range[0]"
                                            hide-details
                                            single-line
                                            type="number"
                                            variant="outlined"
                                            density="compact"
                                            style="width: 70px"
                                            @change="$set(range, 0, $event)"
                                        ></v-text-field>
                                        </template>
                                        <template v-slot:append>
                                        <v-text-field
                                            :model-value="range[1]"
                                            hide-details
                                            single-line
                                            type="number"
                                            variant="outlined"
                                            style="width: 70px"
                                            density="compact"
                                            @change="$set(range, 1, $event)"
                                        ></v-text-field>
                                        </template> -->
                                </v-range-slider>

                                </div>
                            </div>
                        </v-list>
                </v-navigation-drawer>
            </div>
            <div class="TabBar">
                <v-tabs
                    v-model="tab"
                    active-class="TabClass"
                    hide-slider
                    >

                    <v-tab
                        v-for="item in items2"
                        :key="item"
                        style="text-transform:capitalize;font-size: 1rem;font-weight: 600;"
                        @click=tabClick(item)
                    >
                        {{ item }}
                    </v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <div v-if="categoriesFlag" style="display:flex ;justify-content: center;align-items: center;padding: 8% 0%;">
                    <div style="width:80%;">
                        <v-select
                            dense
                            color="#F19B14"
                            v-model="value"
                            :items="categories"
                            label="Categories"
                            multiple
                            solo
                            hide-details
                            outlined
                            flat
                            style="color:#FFF"
                            >
                        </v-select>
                    </div>
                </div>
                <div style="display: flex;justify-content: center;align-items: center;">
                    <div v-if="price" style="width:80%;margin-top: 40px;">
                        <v-range-slider
                            hint="Im a hint"
                            max="1000"
                            min="10"
                            thumb-label="always"
                            thumb-size="32"
                            thumb-color="#F19B14"
                        ></v-range-slider>
                    </div>
                </div>
            </div>
            <div class="mainDiv">
                <div class="cardContent mobileCardContent">
                    <span style="font-size:2.3rem;font-weight:600;">Buy It</span>
                </div>
                <!-- <div class="cardContentHeader">
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
                </div> -->
                <div class="cardContent mobileCardContent">
                    <span style="font-size:1.3rem;font-weight:600;padding: 2% 0%;">Products</span>
                </div>
                <div class="cardContent3">
                    <div class="cardContentHorizontal">
                        <div v-for="i in 13" :key="i">
                            <ProductCard/>
                        </div>
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
                category : '',
                items: [
                    // { title: 'Category', icon: 'mdi-view-dashboard' },
                    // { title: 'Price', icon: 'mdi-view-dashboard' },
                ],
                tab: null,
                categories:['Jewellary', 'Watches', 'Gold', 'White Gold', 'Diamonds'],
                value:'',
                price:false,
                categoriesFlag : false,
                range:[0 , 1000],
                items2: [
                'Sell It', 'Categories', 'Price'
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            
             }
            },
        methods:{
            SellItAction(){
                    this.$router.push({
                        name:"SellIt"
                    })
                },
                tabClick(item){
                    console.log(item)
                    if(item=='Categories') this.categoriesFlag = !this.categoriesFlag
                    if(item=='Price') this.price = !this.price
                }
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {
    .mainContainer{
        /* display: flex; */
        /* flex-direction: column; */
    }
    .mobileCardContent{
        padding-left: 3%;
    }
    .cardContent{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .cardContent3{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .mainDiv{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .navBar{
        display: none;
    }
    .TabBar{

    }
    .TabClass{
        background-color: #F19B14;
        color: #FFF;
        border-radius: 12px;
    }
    .cardContentHorizontal{
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        gap:2%;
        column-gap: 2%;
        align-items: center;
    }
}

@media screen and (min-width:901px) {
    .mainContainer{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .cardContent, .cardContent3{
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
    .TabBar{
        display: none;
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
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}


</style>