<template>
    <div>
        <TopBar></TopBar>
        <div>
            <div style="height:60vh;background-color:#F19B14;display: flex;margin:auto">
                <div style="width:70%;margin:auto;display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
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
                    <v-text-field
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
                    </v-text-field>
                    <v-btn
                    style="text-transform: capitalize;margin-left:1%; box-shadow: none;"
                    @click="searchbyStores(searchField, zipcodeField)"
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
        <div v-if="zipcodeFieldFlag || searchFieldFlag" class="flexColumn" style="height:80vh; width:100%;" @click="openMap">
            <div style="width:50%;padding:2%;  overflow-y: scroll;height: 80vh;">
                <div v-for="store in pawnstores" :key="store.name" class="flexCenter"> 
                    <pawnStoreCard :pawnstore="store"></pawnStoreCard>
                </div>
            </div>
            <div v-if="openMapFlag" style="width:50%;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.573523002731!2d-97.98699930238476!3d29.57231232980548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cb86a56b871f1%3A0x69d202f4c09a4f34!2s1000%20W%20Court%20St%2C%20Seguin%2C%20TX%2078155%2C%20USA!5e0!3m2!1sen!2sin!4v1668966529128!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    export default {
        components : { TopBar, Footer, pawnStoreCard },
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
                    'mobileNumber' : '+1 610-796-2999'
                },
                {
                    'name' : 'Cash Pawn 102 South Hasler Boulevard',
                    'address' : '102 South Hasler Boulevard Bastrop TX 78602',
                    'mobileNumber' : '+1 512-581-3338'
                },
                {
                    'name' : 'PAWN 311 Texas 71 Frontage Rd',
                    'address' : '311 Texas 71 Frontage Rd Bastrop TX 78602',
                    'mobileNumber' : '+1 512-303-9337'
                },
                {
                    'name' : 'Cash Pawn 516 Leander Road',
                    'address' : '516 Leander Road Georgetown TX 78626',
                    'mobileNumber' : '+1 512-931-2911'
                },
                {
                    'name' : 'Cash Pawn 8409 North Lamar Boulevard',
                    'address' : '8409 North Lamar Boulevard Austin TX 78753',
                    'mobileNumber' : '+1 512-836-8388'
                }]
            }
        },
        methods:{
            openMap(){
                this.openMapFlag = true;
            },
            searchbyStores(){
                this.searchFieldFlag = true;
            }
        }
    }

</script>

<style scoped>
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