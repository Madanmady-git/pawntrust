<template>
    <div >
        <TopBar></TopBar>
        <div style="padding:0% 7%;">
            <div >
                <div class="flexCenter">
                    <img style="width: 25%;margin:auto;padding: 2%;" src="../assets/sellit.png"/>
                </div>
            </div>
            <!-- <div style="width: 40%;margin:auto;padding: 2% 0% 0% 0%;">
                <template >
                    <v-file-input
                        placeholder="Select file to sell it"
                        outlined
                        dense
                        prepend-inner-icon="mdi-upload"
                        prepend-icon=""
                        color="#F19B14"
                        background-color="#FFFFFF"
                        height="20"
                    ></v-file-input>
                </template>
            </div> -->
            <div style="text-align:left;">
                <span style="font-size:2.3rem;font-weight:600;">Sell It</span>
            </div>
            <div style="text-align:left;">
                <span style="font-size:1rem;color:#000000;  font-weight:600;">Welcome to PawnTrust and thank you for choosing us for your pawn needs!</span>
                <br>
                <br>
                <span style="font-size:1rem;color:#000000; font-weight:600;">As you have chosen to sell your item, we have made this process as effortless and quicker than ever thought possible. In fact, our revolutionary process is the first of its kind in the pawn industry.</span>
                <br>
                <br>
                <span style="font-size:1rem;color:#000000; font-weight:600;">Simply take a photo of the item you wish to sell and we will give you a quote instantly. If you choose to follow through with the transaction, a shipping label will be generated for the item to arrive in our distribution center in Atlanta, Georgia. Once the product is received, it is checked and verified for authenticity. Once verified, it is sent to audit where a pawn contract will be initiated and you will be able to esign the appropriate document directly on the app. Payment will then be issued immediately through the blockchain (cryptocurrency), Paypal, debit card, or ACH.</span>
                <br>
                <br>
                <br>
                <br>
                <span style="font-size:1rem;color:#000000; font-weight:600;">We appreciate your business.</span>
                <br>
                <br>
            </div>
            <div>
                <img 
                style="width:100%;"
                src="https://pawntrust.com/wp-content/uploads/2022/11/set-one-hundred-dollar-bills-close-up-2048x1367.jpg"
                />
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer },
        data(){
            return{
                slides : 3,
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
.flexCenter{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>