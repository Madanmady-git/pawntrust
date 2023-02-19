<template>
    <div >
        <TopBar></TopBar>
        <div class="mainContainer">
            <div class="corosalCard">
                <v-carousel
                cycle
                height="600"
                hide-delimiter-background
                >
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <img style="width:100%; height:600px;" :src="slide" />
                    </v-carousel-item>
                </v-carousel>
            </div>
            
            <div class="InformationCard">
                <v-card style="display:flex;flex-direction: column;align-items: flex-start;padding:5%;margin-bottom: 4%;">
                    <!-- <v-divider vertical style="margin-top:10px;"></v-divider> -->
                    <span class="fontStyleBold">$ 400</span>
                    <span class="fontStyleLightBold">IWC Luxury Watch</span>
                    <span style="text-align: left;">Exclusive Swiss Made Luxury watch and very rare model in this brand Exclusive Swiss Made Luxury watch and very rare model in this brand Exclusive Swiss Made Luxury watch and very rare model in this brand Exclusive Swiss Made Luxury watch and very rare model in this brand</span>
                    <span class="fontStyleSmaller">Bought 2 months before</span>
                </v-card>
                <v-card @click="click = !click" class="InterestedWidth">
                    <div  :class="click ? 'Notified' : 'Interested'">{{ click ? 'Notified' : 'I am interested' }}</div>
                </v-card>
                <v-card style="width:100%;margin-bottom:4%; padding:4%;">
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
                        <div>
                            <v-card @click="viewProfile()" style="width:100%;padding:3%;box-shadow: none;">
                                <div class="Notified-2">View Profile</div>
                            </v-card>
                        </div>
                    </div>
                </v-card>
            </div>
        </div>
        <Footer ></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer },
        data() {
            return { 
                category : '',
                click:false,
                slides:['https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg', 'https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg', 'https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg']
             }
            },
        methods:{
            viewProfile(){
                this.$router.push({
                    name: 'BuyIt'
                })
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
        border: 2px black solid;
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
    }
    .corosalCard{
        display: flex; width:70%;
    }
    .InformationCard{
        display:flex;flex-direction: column;align-items: flex-start;width: 30%;padding:5%
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
        border: 2px black solid;
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

.d-flex-row-center{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>