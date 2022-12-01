<template>
    <div>
        <TopBar></TopBar>
        <div>
            <div style="padding:0% 7%;">
                <div style="text-align:left;">
                    <span><span style="font-size:2.3rem;font-weight:600;">Search</span></span>
                    <br>
                    <span style="font-size:1.6rem;color:#000000; font-family:Open Sans Hebrew Condensed, Sans-serif;font-weight:600;">We make doing business with pawn shops private, efficient and easier for you. Here, you have instant access to inventory from 10,000 verified pawn shops in Texas and Georgia with more coming soon!</span>
                    <br>
                    <br>
                </div>
            </div>
            <div :class="searchFieldFlag ? 'searchBar2' : 'searchBar'">
                <div class="searchMain">
                    <v-text-field
                    v-model="searchField"
                    clearable
                    solo
                    flat
                    rounded
                    color="#FFFFFF"
                    placeholder="Search among millions of pawn shops across the world"
                    style="background-color:#F19B14; height: 6%; width:30%;border-color:#F19B14;border:1px solid #F19B14"
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    >
                    </v-text-field>
                    <!-- <v-text-field
                    v-model="zipcodeField"
                    clearable
                    solo
                    flat
                    rounded
                    color="#FFFFFF"
                    placeholder="Enter Zipcode"
                    style="background-color:#F19B14; height: 6%; width:30%;border-color:#F19B14;border:1px solid #F19B14"
                    prepend-inner-icon="mdi-map-marker"
                    hide-details
                    >
                    </v-text-field> -->
                    <v-btn
                    style="text-transform: capitalize;margin-left:1%; box-shadow: none;"
                    :disabled = "(searchField.length == 0)"
                    :loading="searchFieldLoadingFlag"
                    @click="searchbyStores(searchField)"
                    >
                        Search
                    </v-btn>
                </div>
            </div>
        </div>
        <div v-if="searchFieldFlag" class="cardsContent">
            <div class="SearchResults">
                <div v-for="store in pawnstores" :key="store.name" class="flexCenter"> 
                    <pawnStoreCard :pawnstore="store" ></pawnStoreCard>
                </div>
                <!-- <div>
                    <v-btn
                    rounded small outlined style="background-color:#FFFFFF;color:#F19B14; text-transform: capitalize;box-shadow: none;"
                    >
                    Show More Results
                    </v-btn>
                    <span>Showing {{}} - {{}} out of {{totalCount}}</span>
                </div> -->
            </div>
            <div v-if="openMapFlag" style="width:50%;">
                <Map :searchField="searchField" :pawnstores="pawnstores"></Map>
            </div>
            <div v-else style="margin:auto">
                <span>Select pawn store to get map details</span>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
import pawnStoreCard from '../components/pawnStoreCard.vue';
import Map from '../components/Map.vue';
import axios from 'axios'
    export default {
        components : { TopBar, Footer, pawnStoreCard, Map },
        data(){
            return{
                slides : 3,
                zipcodeField : '',
                searchField : '',
                searchFieldFlag : false,
                searchFieldLoadingFlag : false,
                openMapFlag : true,
                pawnstores : [],
                totalCount:0
            }
        },
        mounted(){

        },
        methods:{
            openMap(){
                this.openMapFlag = true;
            },
            searchbyStores(field){
                this.searchFieldLoadingFlag = true;
                axios.get('http://a5e4b65a5c6d3478dacab9c107809059-68476208.us-west-2.elb.amazonaws.com/api/v1/search?searchValue='+field)
                .then((response)=>{
                    console.log('response', response)
                    this.pawnstores = response.data.searchResults;
                    this.totalCount = response.data.recordsTotal;
                    this.searchFieldFlag = true;
                    this.searchFieldLoadingFlag = false;
                })
                .catch((error)=>{
                    console.log('error', error)
                    this.searchFieldFlag = false;
                    this.searchFieldLoadingFlag = false;
                    alert("Error in search")
                })
            }
        }
    }

</script>

<style scoped>

@media screen and (max-width:950px){
    .searchMain{
        width:90%;
        margin:auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .searchBar{
        height:20vh;
        background-color:#F19B14;
        display: flex;
        margin:auto
    }
    .searchBar2{
        height:10vh;
        background-color:#F19B14;
        display: flex;
        margin:auto
    }
}

@media screen and (min-width:951px){
    .searchMain{
        width:40%;
        margin:auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .cardsContent{
        display: flex;
        height:80vh;
        width:100%;
    }
    .SearchResults{
        width:50%;padding:2%;  overflow-y: scroll;height: 80vh;
    }
    .searchBar{
        height:36vh;
        background-color:#F19B14;
        display: flex;
        margin:auto
    }

    .searchBar2{
        height:12vh;
        background-color:#F19B14;
        display: flex;
        margin:auto
    }
}
.bannerBackground{
    background:url('../assets/bannerImage.jpeg');
    width:100%;
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;
}

.flexColumn{
    display: flex;
}

.flexCenter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>