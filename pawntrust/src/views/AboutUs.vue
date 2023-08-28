<template>
    <div>
        <TopBar></TopBar>
        <div class="aboutMain">
            <img style="width:100%;" src ="../assets/about-1-img.png"/>
            <div style="background-color: #F19B14;width:100%;display: flex;justify-content: center;flex-direction: column;">
                <span style="font-size:2rem; font-weight:600;color:#FFFFFF;display: flex; justify-content: flex-start;padding: 0px 4%;">About Us</span>
                <v-divider style="border-top:3.5px solid #FFFFFF; width:8%;margin-top:1%;display: flex; justify-content: flex-start;margin: 0px 4%;"></v-divider>
                <p style="color:#FFFFFF; text-align:left;padding: 2% 4%;">
                    {{aboutusparagraph}}
                </p>
                <div style="display:flex;justify-content:flex-start;padding-bottom: 1%;">
                    <v-btn 
                    @click="(clicked = !clicked)"
                    style="margin: 0px 4%;"
                        rounded
                        color="#0E2334;"
                        dark
                        left
                    >
                    LEARN MORE
                    <v-icon
                        right
                        dark
                    >
                    mdi-chevron-right-circle
                    </v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="aboutMain2" v-if="clicked">
            <div class="ImageClassMain">
                <img style="width:100%" src ="../assets/about-1-img..png"/>
            </div>
            <div class="contentClass">
                <v-divider style="border-top:3.5px solid orange; width:4%; margin-top:10px;"></v-divider>
                <br>
                <div style="display:flex; flex-direction:row">
                    <span style="font-size:2rem; font-weight:600; color:#000">More About &nbsp;</span>
                    <span style="font-size:2rem; font-weight:600; color:#F19B14">Us</span>
                </div>
                <br>
                <span class="details">PawnTrust is a revolutionary evolution in the pawn shop and microlending industries!</span>
                <br>
                <span class="details">We offer instant, worldwide access to pawn shops and their services; small business loans; direct lending to pawn shops;  as well as Titlepal.</span>
                <br>
                <span class="details">We are bringing the pawn shop online providing worldwide access through our revolutionary mobile app. This gives the customer the ability to do business online, rather than the traditional method of walking into a brick-and-mortar shop, where there is substandard service and embarrassment from face-to-face contact. The app will further collaborate worldwide inventory giving the individual Pawn Shop exponential exposure.</span>
                <br>
                <span class="details">Moreover, this app allows a consumer to take a picture of their item and get a quote instantaneously. They will have the option to choose whether to “sell” or “pawn” the item. Once that choice is made, a streamlined process to complete the transaction in record time is at their fingertips.</span>
                <br>
                <span class="details">PawnTrust is the leader in small business loans, offering  a wide range of products in our particular space of interest. PawnTrust will lend capital to small businesses – from $25,000 to $2-million. These loans will be based on the consumer’s monthly revenues. PawnTrust will purchase revenue streams at a discounted rate that allows its consumers immediate capital to grow their business. Our virtual underwriting method can approve our clients and fund the same day.</span>
                <br>
                <span class="details">PawnTrust is a direct lender to Pawn Shops that allows an owner to increase its receivables and create additional revenue.</span>
                <br>
                <span class="details">Our app “Titlepal” allows anyone with a free, clear auto title the ability to get cash in minutes. Once an application is received, the applicant is verified through the app. These algorithms range from customer verification, and the ability to pay as well as vehicle inspection. After verifying this information and upon approval, money is immediately deposited via the blockchain (cryptocurrency) Paypal, debit card, or ACH</span>
                <br>
                <span class="details">PawnTrust is a direct lender to Pawn Shops that allows an owner to increase its receivables and create additional revenue.</span>
            </div>
        </div>
        <!-- <div>
            <img style="width:100%;" src ="../assets/footer-shape-2.png" />
        </div> -->
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer },
        data: () => ({
            aboutusparagraph: "PawnTrust, through its verified pawn brokers, will create a worldwide marketplace for all pawn inventory that can be bought and sold through our platform accessible across the country.",
            aboutusparagraph2: "",
            clicked: false
        })
    }
</script>

<style scoped>

@media screen and (max-width:950px){
    .aboutMain{
        display:flex;
        flex-direction: column;
    }
    .aboutMain2{
        display:flex;
        flex-direction: column;
        
        
    }
    .ImageClassMain{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
    .details{
    font-size: 1rem;
    font-weight: bolder;
    font-family:"Roboto", Sans-serif;
    color: #626262;
    text-align:left
    }
    .contentClass{
        padding: 3% 4%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}

@media screen and (min-width:951px) {
    .aboutMain{
        display:flex;
        flex-direction: row;
    }
    .aboutMain2{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .ImageClass{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    .ImageClassMain{
        width:40%;
        margin: 3% 0%;
    }
    .contentClass{
        width:40%;
        padding: 3% 2%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .details{
    font-size: 1rem;
    font-weight: bolder;
    font-family:"Roboto", Sans-serif;
    color: #626262;
    text-align:left
}
}
</style>