<template>
    <div>
        <TopBar></TopBar>
        <div>
            <div style="padding:0% 7%;">
                <div style="text-align:left;">
                    <span><span style="font-size:2.3rem;font-weight:600;">Pawn Scan</span></span>
                    <br>
                    <span style="font-size:1.5rem; font-family:Open Sans Hebrew Condensed, Sans-serif;">We have made doing business with pawn shops private, efficient and easier. Here, you have instant access to  pawn shops in these ZIP CODES or any city in Texas with more coming soon! </span>
                        <!-- <u
                        style="text-decoration-color:navy;color: #0E2334; text-color:orange;cursor:pointer;font-weight: 600;" 
                        @click="(dialog = true)"
                        > ZIP CODES</u> or any city in Texas with more coming soon!</span> -->
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
                        Pawn Scan
                    </v-btn>
                </div>
            </div>
        </div>
        <div v-if="(totalCount==0)" class="flexCenter" style="height:18vh;">
                <span>No Search Results Found 😑😔😞</span>
        </div>
        <div v-else-if="searchFieldFlag" class="cardsContent">
            <div class="SearchResults">
                <!-- <div class="sortMainClass">
                    <v-select
                        color="orange"
                        label="Sort By"
                        :items="sortByItems"
                        outlined
                    >
                    <template v-slot:item="{item, attrs, on}">
                        <v-radio-group v-model="radioGroup" v-on="on" v-bind="attrs" @change="searchbyStores(searchField)">
                            <v-radio
                                :label="item"
                                :value="item"
                            >
                            </v-radio>
                        </v-radio-group>
                    </template>
                    </v-select>
                </div> -->
                <div v-for="store in pawnstores" :key="store.name" class="flexCenter"> 
                    <pawnStoreCard :pawnstore="store" ></pawnStoreCard>
                </div>
                <div class="flexCenter">
                    <v-btn
                    rounded outlined style="background-color:#FFFFFF;color:#F19B14; text-transform: capitalize;box-shadow: none;"
                    @click="showMore(searchField)"
                    :loading="showMoreLoading"
                    :disabled="(end >= totalCount)"
                    >
                    Show More Results
                    </v-btn>
                    <span>Showing {{(1)}} - {{(end)}} out of {{totalCount}}</span>
                    <!-- {{pawnstores.length}} -->
                </div>
            </div>
            <div v-if="openMapFlag" style="width:50%;">
                <Map :searchField="searchField" :pawnstores="pawnstores" :filterpawnStores="filterpawnStores"
                    :unfilterpawnStores="unfilterpawnStores"></Map>
            </div>
            <div v-else style="margin:auto">
                <span>Select pawn store to get map details</span>
            </div>
        </div>
        <div>
            <v-dialog
            v-model="dialog"
            max-width="600px"
            hide-overlay
            >
                <template>
                    <v-card>
                            11101   
                            11103
                            11106
                            15601
                            22201
                            22314
                            29407
                            29575
                            31322
                            31907
                            32801
                            33432
                            38115
                            38116
                            55401
                            60098
                            75006
                            75034
                            75501
                            76033
                            77002
                            77003
                            77004
                            77005
                            77006
                            77007
                            77008
                            77009
                            77010
                            77011
                            77014
                            77015
                            77016
                            77017
                            77018
                            77020
                            77021
                            77022
                            77023
                            77024
                            77025
                            77026
                            77027
                            77028
                            77029
                            77031
                            77033
                            77034
                            77035
                            77036
                            77037
                            77038
                            77039
                            77040
                            77042
                            77045
                            77046
                            77047
                            77049
                            77051
                            77053
                            77054
                            77055
                            77056
                            77057
                            77058
                            77060
                            77061
                            77063
                            77064
                            77065
                            77066
                            77067
                            77068
                            77069
                            77070
                            77071
                            77072
                            77073
                            77074
                            77076
                            77077
                            77079
                            77080
                            77081
                            77082
                            77083
                            77084
                            77086
                            77087
                            77088
                            77089
                            77090
                            77091
                            77092
                            77093
                            77095
                            77096
                            77098
                            77099
                            77204
                            77219
                            77301
                            77327
                            77338
                            77340
                            77346
                            77357
                            77365
                            77373
                            77375
                            77377
                            77379
                            77380
                            77396
                            77401
                            77449
                            77450
                            77459
                            77471
                            77477
                            77478
                            77479
                            77489
                            77494
                            77502
                            77503
                            77504
                            77505
                            77506
                            77511
                            77518
                            77520
                            77521
                            77530
                            77532
                            77536
                            77539
                            77546
                            77571
                            77573
                            77581
                            77587
                            77591
                            77598
                            77701
                            77840
                            78209
                            78210
                            78217
                            78504
                            78586
                            78629
                            79101
                            83835
                            85282
                            89074
                            91205
                            98121
                            10003
                            10036
                            10309
                            11238
                            17201
                            17257
                            17325
                            19053
                            23518
                            27332
                            27612
                            28213
                            28461
                            30701
                            30747
                            32011
                            32218
                            32566
                            33064
                            33132
                            33759
                            34420
                            34432
                            35055
                            35601
                            35645
                            35956
                            37343
                            38555
                            40509
                            44095
                            47119
                            50801
                            64507
                            65203
                            65401
                            71046
                            72364
                            74145
                            76105
                            77012
                            77013
                            77019
                            77030
                            77032
                            77041
                            77043
                            77044
                            77059
                            77062
                            77075
                            77078
                            77094
                            77336
                            77339
                            77382
                            77386
                            77388
                            77406
                            77429
                            77469
                            77498
                            77523
                            77531
                            77565
                            77583
                            77586
                            77802
                            77803
                            83815
                            84627
                            85501
                            88210
                            91730
                            95818
                            98901
                        <br>
                        <br>
                    </v-card>
                </template>
            </v-dialog>
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
                radioGroup: 'Rating (high to low)',
                dialog:false,
                slides : 3,
                zipcodeField : '',
                searchField : '',
                searchFieldFlag : false,
                searchFieldLoadingFlag : false,
                openMapFlag : true,
                pawnstores : [],
                totalCount:-1,
                paginatedPawnStores:[],
                start:0,
                end:0,
                showMoreLoading:false,
                noResultsFound:false,
                sortByItems : [
                    'Rating (high to low)',
                    'Rating (low to high)',
                    'ReviewCount (high to low)',
                    'ReviewCount (low to high)',
                ]
            }
        },
        mounted(){

        },
        methods:{
            filterpawnStores(polygonMessage, polygonObject) {
                console.log(polygonMessage);
                console.log(polygonObject);
                //Polygon Contains Location API:
                //https://developers.google.com/maps/documentation/javascript/examples/poly-containsLocation
            },
            unfilterpawnStores(polygonMessage, polygonObject) {
                console.log(polygonMessage);
                console.log(polygonObject);
                //Polygon Contains Location  API:
                //https://developers.google.com/maps/documentation/javascript/examples/poly-containsLocation
            },
            openMap(){
                this.openMapFlag = true;
            },
            searchbyStores(field){
                this.searchFieldLoadingFlag = true;
                this.start=0;
                axios.get('https://api.pawntrust.com/api/v1/search?searchValue='+field+'&start='+String(this.start)+'&length=20')
                .then((response)=>{
                    console.log('response', response);
                    this.pawnstores = response.data.searchResults;
                    this.totalCount = response.data.recordsTotal;
                    this.searchFieldFlag = true;
                    this.searchFieldLoadingFlag = false;
                    this.end = this.pawnstores.length;
                    if(this.end == 0) this.noResultsFound=true
                })
                .catch((error)=>{
                    console.log('error', error)
                    this.searchFieldFlag = false;
                    this.searchFieldLoadingFlag = false;
                    alert("Error in search")
                })
            },
            showMore(field){
                if(this.end < this.totalCount){
                    this.showMoreLoading = true;
                    axios.get('https://api.pawntrust.com/api/v1/search?searchValue='+field+'&start='+String(this.end)+'&length=20')
                    .then((response)=>{
                        console.log('response', response)
                        this.paginatedPawnStores = response.data.searchResults
                        this.pawnstores = this.pawnstores.concat(this.paginatedPawnStores);
                        this.showMoreLoading = false;
                        this.start = this.end;
                        this.end = this.end+this.paginatedPawnStores.length;
                    })
                    .catch((error)=>{
                        console.log('error', error)
                        this.showMoreLoading = false;
                        alert("Error in search")
                    })
                }
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
    .sortMainClass{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
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
    .sortMainClass{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
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