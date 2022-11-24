<template>
    <div>
        <TopBar></TopBar>
        <div style="margin-bottom: 5%;position: relative;">
            <v-carousel
            hide-delimiters
            :show-arrows="false"
            cycle
            height="100vh"
            interval="6000"
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                    <!-- <img 
                    style="width:100%;height:100vh;"
                    src = "../assets/bannerImage.jpeg" /> -->
                    <div class="bannerBackground" style="display:flex; flex-direction:column;justify-content:center; align-items:center;">
                        <span style="font-size:3rem;font-weight:900;align-items: flex-start; color:#FFFFFF;width:80%;">PawnTrust Is A Revolutionary Evolution In Pawn Shops and Microlending</span>
                        <v-btn
                        rounded
                        color="#F19B14"
                        height="6%"
                        style="margin-right: 62%;margin-top: 2%;"
                        >
                            <span style="color:#FFFFFF; font-weight: 600;">Get Started</span>
                            <v-icon
                                right
                                dark
                                color="#FFFFFF"
                            >
                            mdi-chevron-right-circle
                            </v-icon>
                        </v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div style="position:absolute;margin-top: -18%;width: 100%;">
            <img
            style=" width:100%;"
            src="https://pawntrust.com/wp-content/uploads/2022/10/banner-shape.png"/>
        </div>
        <div>
            <span style="font-size:2rem;font-weight:500; color:#F19B14">&nbsp; Services</span>
            <v-divider style="border-top:3.5px solid orange; width:4%; margin:auto; margin-top:10px;"></v-divider>
        </div>
        <div >
            <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mobileCategories' : 'desktopCategories'">
                <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mobileCategory' : 'desktopCategory'">
                    <img
                    @click="temporaryMethod"
                    style="width:100%; height:auto;padding:10% 4%;cursor: pointer;"
                    src = "../assets/pawnshops.png"/>
                    <span style="font-size:1.1rem;font-weight:550; color:#0E2334">Pawn Shops</span>
                    <v-divider style="border-top:3.5px solid orange; width:15%; margin:auto; margin-top:10px;margin-bottom: 20px;"></v-divider>
                    <p style="text-align:left;">{{pawnshopsparagraph}}</p>
                </div>
                <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mobileCategory' : 'desktopCategory'">
                    <img
                    @click="temporaryMethod"
                    style="width:100%; height:auto;padding:10% 4%;cursor: pointer;"
                    src = "../assets/microlending.png"/>
                    <span style="font-size:1.1rem;font-weight:550; color:#0E2334">Microlending</span>
                    <v-divider style="border-top:3.5px solid orange; width:15%; margin:auto; margin-top:10px;margin-bottom: 20px;"></v-divider>
                    <p style="text-align:left;">{{microlendingparagraph}}</p>
                </div>
                <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mobileCategory' : 'desktopCategory'">
                    <img 
                    @click="temporaryMethod"
                    style="width:100%; height:auto;padding:10% 4%;cursor: pointer;"
                    src = "../assets/nonfungible.png"/>
                    <span style="font-size:1.1rem;font-weight:550; color:#0E2334">Non-Fungible Tokens</span>
                    <v-divider style="border-top:3.5px solid orange; width:15%; margin:auto; margin-top:10px;margin-bottom: 20px;"></v-divider>
                    <p style="text-align:left;">{{nonfungibleparagraph}}</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer},
        data: () => ({
            slides : 3,
            pawnshopsparagraph : "We will bring the pawn shop online, providing worldwide access through our app. This gives the customer the ability to do business online, rather than the traditional method of walking into a brick-and-mortar shop, where there is substandard service and embarrassment from face-to-face contact. The app will further collaborate worldwide inventory giving the individual Pawn Shop exponential exposure.Moreover, this app allows a consumer to take a picture of their item and get a quote instantaneously. They will have the option to choose whether to “sell” or “pawn” the item. Once that choice is made, a shipping label will be generated for the item to arrive in our distribution center in Atlanta, Georgia. Once the product is received, it is checked and verified for authenticity. Once verified it is sent to audit where “Pawn” or Buy” contracts are initiated and the consumer e-sign the appropriate document directly on the app. Payment will then be issued immediately through the blockchain (cryptocurrency), Paypal, debit card, or ACH.With respect to PawnTrust’s Global Inventory, we will utilize the latest software that automatically prices items being sold through artificial intelligence.",
            pawncompaniesparagraph : "Our app “TitlePawn” allows anyone with a free, clear auto title the ability to get cash in minutes. Once an application is received, the applicant is verified through the app. These algorithms range from customer verification, and the ability to pay as well as vehicle inspection. After verifying this information and upon approval, money is immediately deposited via the blockchain (cryptocurrency), Paypal, debit card, or ACH.",
            microlendingparagraph : "PawnTrust will lend capital to small businesses. These loans will be based on the consumer’s monthly revenues. PawnTrust will purchase revenue streams at a discounted rate that allows its consumers immediate capital to grow their business. Our virtual underwriting method can approve our clients and fund the same day.",
            nonfungibleparagraph : "With the NFT on the blockchain, we can put any product from any pawn shop nationwide as a Non-fungible token. This way you get millions of views to buy immediately through crypto. This will turn PawnTrust into a pawn shop market place for people to buy and sell…world wide.",
            
        }),
        methods : {
            temporaryMethod(){
                this.$router.push({
                    name:'Search',
                })
            }
        }
  }
</script>

<style scoped>
.mobileCategories{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:2%;
}

.desktopCategories{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
}

.mobileCategory{
    width:100%;
}

.desktopCategory{
    width:25%;
}
.headerClass {
    font-size: 16px;
    font-weight: 600;
    padding: 12px 0% 0% 0%;
    display: flex;
    flex-direction: column;
}
.commonHeaderClass {
    display:flex;
    flex-direction : row;
    justify-content: space-evenly;
}

.emailandPhone {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
}
.bannerBackground{
    background:url('../assets/bannerImage.jpeg');
    width:100%;
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center center;
}

.avatarClass {
    display:flex;flex-direction: row; justify-content:center;
}
</style>

