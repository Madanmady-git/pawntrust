<template>
    <div >
        <TopBar></TopBar>
        <v-divider style="width:100%;"></v-divider>
        <div class="mainContainer">
            <div class="navBar">
                <v-navigation-drawer
                        >
                        <v-list>
                            <div style="display:flex ;justify-content: center;align-items: center;">
                                <div style="width:80%;margin: 4% 0% 6% 0%;">
                                    <v-text-field
                                    placeholder="Search"
                                    filled
                                    rounded
                                    hide-details
                                    dense
                                    >
                                    </v-text-field>
                                </div>
                            </div>
                            <div style="display:flex ;justify-content: center;align-items: center;">
                                <v-btn 
                                @click="SellItAction()"
                                style="display: flex;width:80%; box-shadow: none;text-transform: capitalize;color: #FFF;background-color: #F19B14;">
                                    Sell It
                                </v-btn>
                            </div>
                            <!-- <div style="display:flex ;justify-content: center;align-items: center;padding: 8% 0%;">
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
                            </div> -->
                            <v-list-group
                                value="opener"
                                prepend-icon="mdi-shape"
                                active-class="leftAlignment"
                                
                                exact-active-class="ListItem"
                                color="#F19B14"
                                >
                                <template v-slot:activator>
                                    <v-list-item-title>Categories</v-list-item-title>
                                </template>
                                <v-list-item-group
                                >
                                <v-list-item
                                    v-for="([title, icon], i) in admins"
                                    :key="i"
                                    link
                                    color="#F19B14"
                                    @click="onClickCategory(title)"
                                >
                                    <v-list-item-title v-text="title"></v-list-item-title>

                                    <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                    </v-list-item-icon>
                                </v-list-item>

                                </v-list-item-group>
                            </v-list-group>

                            <v-list-group
                                value="opener"
                                prepend-icon="mdi-format-list-bulleted-type"
                                >
                                <template v-slot:activator>
                                    <v-list-item-title>Brands</v-list-item-title>
                                </template>
                                <v-list-item-group
                                >
                                <v-list-item
                                    v-for="(title, i) in Brands"
                                    :key="i"
                                    link
                                >
                                    <v-list-item-title v-text="title"></v-list-item-title>
                                        <v-checkbox
                                        style="margin-top:0px; padding:0px;"
                                        hide-details
                                        >
                                    </v-checkbox>
                                </v-list-item>
                                </v-list-item-group>
                            </v-list-group>
                            <v-list-group
                                value="opener"
                                prepend-icon="mdi-filter"
                                >
                                <template v-slot:activator>
                                    <v-list-item-content>
                                    <v-list-item-title>Price</v-list-item-title>
                                    </v-list-item-content>
                                </template>
                                <div style="display:flex ;flex-direction: column; justify-content: center;align-items: center;margin-top:12%;">
                                <div style="width:80%;">
                                    <v-range-slider
                                        v-model="rangeValue"
                                        hint="Select from and to price"
                                        max="1000"
                                        min="0"
                                        thumb-label="always"
                                        thumb-size="32"
                                        thumb-color="#F19B14"
                                        step="10"
                                    >
                                </v-range-slider>
                                <div style="display: flex;flex-direction: row;justify-content: space-between;width: 100%;">
                                    <div style="width: 40%;">
                                        <v-text-field
                                            v-model="rangeValue[0]"
                                                :value="rangeValue[0]"
                                                hide-details
                                                single-line
                                                type="number"
                                                outlined
                                                dense
                                                @change="$set(rangeValue, 0, $event)"
                                        ></v-text-field>
                                    </div>
                                    <div style="display: flex;justify-content: center;align-items: center;">
                                        <span >to</span>
                                    </div>
                                    <div style="width: 40%;">
                                        <v-text-field
                                            :value="rangeValue[1]"
                                            hide-details
                                            outlined
                                            single-line
                                            dense
                                            type="number"
                                            @change="$set(rangeValue, 1, $event)"
                                        ></v-text-field>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </v-list-group>
                            <!-- <v-list-group
                                :value="true"
                                prepend-icon="mdi-filter"
                                >
                                <template v-slot:activator>
                                    <v-list-item-content>
                                    <v-list-item-title>Filters</v-list-item-title>
                                    </v-list-item-content>
                                </template>

                                <v-list-item
                                    v-for="([title, icon], i) in cruds"
                                    :key="i"
                                    link
                                >
                                    <v-list-item-title v-text="title"></v-list-item-title>

                                    <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                            </v-list-group> -->
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
                <div style="display:flex ;justify-content: center;align-items: center;">
                    <div style="width:90%;margin: 3% 0%;">
                        <v-text-field
                        placeholder="Search"
                        filled
                        rounded
                        dense
                        hide-details
                        >
                        </v-text-field>
                    </div>
                </div>

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
                <!-- <div class="cardContent mobileCardContent">
                    <span style="font-size:2.3rem;font-weight:600;">Buy It</span>
                </div> -->
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
                opener : true,
                range:[0 , 1000],
                rangeValue:[0, 1000],
                categoryItems:[
                    {
                    action: 'mdi-shape',
                    active: true,
                    items: [
                        { title: 'Watches' },
                        { title: 'Jewelllary' },
                        { title: 'Gold' },
                        { title: 'White Gold' },
                        { title: 'Diamonds' }
                    ],
                    title: 'Categories',
                    },
                    {
                    action: 'mdi-filter-menu',
                    items: [
                        { title: 'Location' },
                        { title: 'Price' }
                    ],
                    title: 'Filter',
                    },
                ],
                items2: [
                'Sell It', 'Categories', 'Price'
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                admins: [
                    ['Watches', 'mdi-watch'],
                    ['Jewelllary', 'mdi-baseball-diamond'],
                    ['Gold', 'mdi-gold'],
                    ['White Gold', 'mdi-podium-gold'],
                    ['Diamonds', 'mdi-diamond'],
                ],
                Brands : ['Gucci', 'Fossil', 'Rolex', 'Quartz', 'Fastrack'],
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
            },
            onClickCategory(category){
                let categoryDetails = {
                    'Watches' : ['Gucci', 'Fossil', 'Rolex', 'Quartz', 'Fastrack'],
                    'Jewelllary' : ['TIFFANY & CO', 'CARTIER', 'CHOPARD'],
                    'Gold' : ['BUCCELLATI', 'GRAFF'],
                    'White Gold' : ['BUCCELLATI', 'GRAFF'],
                    'Diamonds' : ['HARRY WINSTON', 'DAVID YURMAN']
                }
                this.Brands  = categoryDetails[category];
                console.log("Brands", this.Brands);
            },
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

    .leftAlignment{
        display: flex;
        justify-content:center;
        align-items:flex-start;
        flex-direction: column;
        background-color: #F19B14;
        color: #FFF;
    }
    .ListItem{
        background-color: #F19B14;
        color: #FFF;
    }
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

<style>
.leftAlignment.v-input--selection-controls {
    margin-top: 0px !important; 
    padding-top: 4px !important;
    }
</style>