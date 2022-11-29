<template>
    <div>
        <TopBar></TopBar>
        <div>
            <div style="height:60vh;background-color:#F19B14;display: flex;margin:auto">
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
                    @click="searchbyStores(searchField)"
                    >
                        Search
                    </v-btn>
                </div>
            </div>
            <div style="padding:0% 7%;">
                <div style="text-align:left;">
                    <span><span style="font-size:2.3rem;font-weight:600;">Search</span></span>
                    <br>
                    <span style="font-size:1rem;color:#000000">You can access the almost 10,000 pawn shops across the United States, without leaving your home! Start here to bring every pawn shop to your doorstep, 24 hours a day.</span>
                    <br>
                    <br>
                </div>
                <div >    
            </div>
            </div>
        </div>
        <div v-if="zipcodeFieldFlag || searchFieldFlag" class="cardsContent" @click="openMap">
            <div class="SearchResults">
                <div v-for="store in pawnstores" :key="store.name" class="flexCenter"> 
                    <pawnStoreCard :pawnstore="store"></pawnStoreCard>
                </div>
            </div>
            <div v-if="openMapFlag" style="width:50%;">
                <Map></Map>
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
                zipcodeFieldFlag : false,
                searchFieldFlag : false,
                openMapFlag : false,
                pawnstores : [{
                    'name' : 'Cash Converters 510 Kenhorst Plaza',
                    'address' : '510 Kenhorst Plaza Reading PA 19607',
                    'mobileNumber' : '+1 610-796-2999',
                    'rating':'4.0'
                },
                {
                    'name' : 'Cash Pawn 102 South Hasler Boulevard',
                    'address' : '102 South Hasler Boulevard Bastrop TX 78602',
                    'mobileNumber' : '+1 512-581-3338',
                    'rating':'4.0'
                },
                {
                    'name' : 'PAWN 311 Texas 71 Frontage Rd',
                    'address' : '311 Texas 71 Frontage Rd Bastrop TX 78602',
                    'mobileNumber' : '+1 512-303-9337',
                    'rating':'4.0'
                },
                {
                    'name' : 'Cash Pawn 516 Leander Road',
                    'address' : '516 Leander Road Georgetown TX 78626',
                    'mobileNumber' : '+1 512-931-2911',
                    'rating':'4.0'
                },
                {
                    'name' : 'Cash Pawn 8409 North Lamar Boulevard',
                    'address' : '8409 North Lamar Boulevard Austin TX 78753',
                    'mobileNumber' : '+1 512-836-8388',
                    'rating':'2.0'
                }]
            }
        },
        mounted(){

        },
        methods:{
            openMap(){
                this.openMapFlag = true;
            },
            searchbyStores(field){
                this.searchFieldFlag = true;
                axios.get('http://a5e4b65a5c6d3478dacab9c107809059-68476208.us-west-2.elb.amazonaws.com/api/v1/search?searchValue='+field)
                .then((response)=>{
                    console.log('response', response)
                    this.pawnstores = response.data.searchResults;
                })
                .catch((error)=>{
                    console.log('error', error)
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