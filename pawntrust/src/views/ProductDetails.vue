<template>
    <div >
        <TopBar></TopBar>
        <div class="mainContainer">
            <div style="display: flex; flex-direction: column; align-items: center;justify-content: flex-start;width: 10%;height: 600px;overflow-y:auto;scrollbar-width: none;">
                <div v-for="(slide , i) in slides" :key="i">
                    <img :class="model == i ? 'corosalImageStyle' : 'corosalImageStyleNormal'" @click="clickOnImage(i)" style="width:100px ; height:100px; " :src="slide.imageUrl"/>
                </div>
            </div>
            <div class="corosalCard">
                <v-carousel
                height="600"
                hide-delimiters
                hide-delimiter-background
                v-model="model"
                >
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <img style="width:100%; height:600px;" :src="slide.imageUrl" />
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="InformationCard" v-if="origin == 'OwnProduct'">
                <v-card style="position: relative;width: 100%;">
                    <span @click="editProduct()" class="status-badge" style="display: flex;align-items: center;cursor: pointer;">
                        <div v-if="!editLoader">
                            <v-icon color="#FFF" size="16" style="margin-right: 8px;">{{ editON ? 'mdi-check-bold' : 'mdi-square-edit-outline'}}</v-icon>
                            <span>{{ editON ? 'Save' : 'Edit' }}</span>
                        </div>
                        <div v-else>
                            <v-progress-circular
                                indeterminate
                                size=16
                                color="#FFF"
                            ></v-progress-circular>
                        </div>
                    </span>
                    <div>
                        <div v-if="!editON" style="display:flex;flex-direction: column;align-items: flex-start;padding:5%;margin-bottom: 4%;">
                            <!-- <v-divider vertical style="margin-top:10px;"></v-divider> -->
                            <span class="fontStyleBold">$ {{ price }}</span>
                            <span class="fontStyleLightBold">{{ category }}</span>
                            <span class="fontStyleLightBold">{{ name }}</span>
                            <span style="text-align: left;">{{ description }}</span>
                            <span style="text-align: left;">{{ status == 'IN_SALE' ? 'Ready for Sale' : 'Out of stock' }}</span>
                            <!-- <span class="fontStyleSmaller">Bought 2 months before</span> -->
                        </div>
                        <div v-else style="display:flex;flex-direction: column;align-items: flex-start;padding:5%;margin-bottom: 4%;">
                            <span class="fontStyleLightBold">Price</span>
                            <v-text-field
                            style="width: 100%;"
                            outlined solo flat dense elevation="0" block full-width color="#F19B14"
                            v-model="price"
                            ></v-text-field>
                            <span class="fontStyleLightBold">Name</span>
                            <v-text-field
                            style="width: 100%;"
                            outlined solo flat dense elevation="0" block full-width color="#F19B14"
                            v-model="name"
                            ></v-text-field>
                            <span class="fontStyleLightBold">Description</span>
                            <v-textarea
                            style="width: 100%;"
                            rows = "3" outlined solo flat dense elevation="0" block full-width color="#F19B14"
                            v-model="description"
                            ></v-textarea>
                            <span class="fontStyleLightBold">status</span>
                            <v-text-field
                            style="width: 100%;"
                            outlined solo flat dense elevation="0" block full-width color="#F19B14"
                            v-model="status"
                            ></v-text-field>
                        </div>
                    </div>
                </v-card>
            </div>
            <div v-else class="InformationCard">
                <v-card style="display:flex;flex-direction: column;align-items: flex-start;padding:5%;margin-bottom: 4%;width: 100%;position: relative;">
                    <span class="status-badge">{{ category }}</span>
                    <!-- <v-divider vertical style="margin-top:10px;"></v-divider> -->
                    <span class="fontStyleBold">$ {{ price }}</span>
                    <span class="fontStyleLightBold">{{ name }}</span>
                    <span style="text-align: left;">{{ description }}</span>
                    <span style="text-align: left;">{{ status }}</span>
                    <!-- <span class="fontStyleSmaller">Bought 2 months before</span> -->
                </v-card>
                <!-- <v-card style="width:100%;margin-bottom:4%; padding:4%;">
                    <div>
                        <div class="d-flex-row-center">
                            <div  style="margin-right:4%;">
                                <v-avatar
                                color="#F19B14"
                                size="50"
                                >
                                <span class="white--text text-h5">RS</span>
                                </v-avatar>
                            </div>
                            <div>
                                <span class="text-h6">Ravipati Yeswanth</span>
                            </div>
                        </div>
                    </div>
                </v-card> -->
                <div style="width: 112%;">
                    <!-- <v-card @click="viewProfile()" style="width:100%;padding:3%;box-shadow: none;">
                        <div class="Notified-2">View Profile</div>
                    </v-card> -->
                    <pawnStoreCard :pawnstore = "store"/>
                </div>
                <div @click="click = !click" class="InterestedWidth">
                        <v-btn
                        class="Interested"
                        >
                            Add to Cart
                        </v-btn>
                        <v-btn
                        class="Interested"
                        >
                            Buy Now
                        </v-btn>
                        <v-btn
                        class="Interested"
                        >
                            Wishlist
                        </v-btn>
                        <!-- <div  :class="click ? 'Notified' : 'Interested'">{{ click ? 'Notified' : 'Add to Wishlist' }}</div> -->
                </div>
            </div>
        </div>
        <Footer ></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
import pawnStoreCard from '../components/pawnStoreCard.vue';
    export default {
        components : { TopBar, Footer, pawnStoreCard },
        data() {
            return { 
                token : '',
                category : '',
                click:false,
                origin: '',
                index : 0,
                corosalImage : '',
                model : 0,
                price : '',
                name : '',
                description: '',
                status: '',
                editLoader : false,
                slides:['https://assets.pawnamerica.com/ProductImages//7756ddc7-3ef1-43ad-b66b-eeb853ef9918.jpg', 
                        'https://assets.pawnamerica.com/ProductImages//ef551069-b09c-4c52-ade1-d73b43034ad1.jpg',
                        'https://assets.pawnamerica.com/ProductImages//996c0e   `````b4-9cbc-498a-b6b9-2e49cc9269fc.jpg',
                        'https://assets.pawnamerica.com/ProductImages//2573e930-2e2e-4249-9e50-e89492acb4f8.jpg',
                        'https://assets.pawnamerica.com/ProductImages//ffd04573-5cab-4217-ab07-359138dc8154.jpg',
                        'https://assets.pawnamerica.com/ProductImages//8b411689-2468-4489-a91f-72febcab1573.jpg'
                    ],
                store : {
                    uuid : 'sampleuuid',
                    name : 'Malabar Golds',
                    website: 'www.malabar.com',
                    address: 'Chennai , India, 6000001',
                    phone: '+91 987654321',
                    rating: 4.5,
                    reviewCount : 50
                },
                editON : false
             }
            },
        mounted(){
            this.token = this.$cookies.get('token');
            if (!this.token) {
                this.$router.push({
                    name : 'Home'
                }).catch(error => {
                    console.log('error', error)
                })
            }
            let product = JSON.parse(this.$route.query.data)
            console.log('product', product) 
            this.name = product.name;
            this.price = product.price;
            this.description = product.description;
            this.slides = product.imagesInfo;
            this.category = product.category;
            this.origin = product.origin;
            this.status = product.status;
        },
        methods:{

            viewProfile(){
                this.$router.push({
                    name: 'BuyIt'
                }).catch(error => {
                    console.log(error)
                })
            },
            clickOnImage(index){
                console.log("chekcme", index);
                this.model = index;
            },
            editProduct(){
                this.editLoader = true;
            }
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {
    .mainContainer{
        display:flex;
        flex-direction: column;
        align-items: center;
        width:100%;
    }
    .corosalCard{
        display: flex; width:90%;
    }
    .InformationCard{
        display:flex;flex-direction: column;align-items: flex-start;width: 90%;
    }
    .status-badge {
        position: absolute;
        top: 0;
        right: 0;
        background-color: red;
        color: white;
        padding: 4px 8px;
        font-size: 12px;
        border: 2px red solid;
        /* Other styles for the badge */
    }
    .InterestedWidth{
        width:100%;margin-bottom:4%
    }
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
    .Interested{
        width: 100%;
        padding: 3%;
        color: #F19B14;
        border: 2px #FFF solid;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 600;
    }
    .Notified{
        width: 100%;
        padding: 3%;
        border: 2px white solid;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 600;
        background-color: #F19B14;
        color:#FFFFFF;
    }
    .Notified-2{
        width: 100%;
        padding: 3%;
        border: 2px #f2f2f2 solid;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        background-color: #F19B14;
        color:#FFFFFF;
    }
}

@media screen and (min-width:901px) {
    .mainContainer{
        display:flex;
        flex-direction: row;
        width:100%;
        padding: 16px;
    }
    .corosalCard{
        display: flex; width:50%;
    }
    .InformationCard{
        display:flex;flex-direction: column;align-items: flex-start;width: 40%;padding:1% 2%;
    }
    .status-badge {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #F19B14;
        color: white;
        padding: 4px 8px;
        font-size: 0.8rem;
        font-weight: bold;
        /* Other styles for the badge */
    }
    .InterestedWidth{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 4%;
        width:100%;margin-bottom:4%;
    }
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
    .Interested{
        width: 30%;
        padding: 3%;
        color: #F19B14;
        border: 2px #F19B14 solid;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
    }
    .Notified{
        width: 100%;
        padding: 3%;
        border: 2px white solid;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 600;
        background-color: #F19B14;
        color:#FFFFFF;
    }
    .Notified-2{
        width: 100%;
        padding: 3%;
        border: 2px #f2f2f2 solid;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        background-color: #F19B14;
        color:#FFFFFF;
    }
}
.corosalImageStyle{
    border: 2px #F19B14 solid;
    border-radius: 8px;
}
.corosalImageStyleNormal{
    border-radius: 8px;
}
.d-flex-row-center{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>

<style>
::-webkit-scrollbar {display:none;}
</style>