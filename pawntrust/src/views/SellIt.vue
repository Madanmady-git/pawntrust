<template>
    <div >
        <TopBar></TopBar>
        <div style="padding:0% 7%;">
            <!-- <div >
                <div class="flexCenter">
                    <img style="width: 25%;margin:auto;padding: 2%;" src="../assets/sellit.png"/>
                </div>
            </div> -->
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
            <div class="stepper">
                <div>
                    <v-stepper v-model="move" style="box-shadow:none;" alt-labels>
                    <v-stepper-header style="box-shadow:none;">
                        <v-stepper-step :complete="move > 1" step="1">
                            <small>Information</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="move > 2" step="2">
                            <small>Category</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="move > 3" step="3">
                            <small>Upload</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="4">
                            <small>Submit</small>
                        </v-stepper-step>
                    </v-stepper-header>
                    </v-stepper>
                </div>
            </div>
            <div>
                <div v-if="(move == 1)" style="text-align:left;">
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
                <div v-else-if="(move == 2)" class="outerMenuContent">
                    <div class="menuContent">
                        <v-btn block outline class="btnclass" :color="(category == 'Watches') ? 'orange' : ''" @click = "clickedCategory('Watches')">Watches</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'Jewellery') ? 'orange' : ''" @click = "clickedCategory('Jewellery')">Jewellery</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'Gold') ? 'orange' : ''" @click = "clickedCategory('Gold')">Gold</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'White Gold') ? 'orange' : ''" @click = "clickedCategory('White Gold')">White Gold</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'Diamonds') ? 'orange' : ''" @click = "clickedCategory('Diamonds')">Diamonds</v-btn>
                    </div>
                </div>
                <div v-else-if="(move == 3)" class="uploadStyle">
                    <div class="uploadPage">
                        <div class="cardUpload">
                            <v-card min-height="30px" class="btnclass" style="background-color:#F19B14;color:#FFF;display: flex; flex-direction: row; justify-content: center;align-items: center;box-shadow: none;width: auto;">&nbsp; &nbsp;File upload&nbsp;<v-icon small color="#FFF">mdi-upload</v-icon> &nbsp;&nbsp;</v-card>
                            <div style="display:flex; alignItems:center;height: 80%; border:2px grey solid;border-radius: 10px;">
                                <v-file-input
                                    v-model="choosenFile1"
                                    placeholder="Click to upload from device"
                                    solo
                                    flat
                                    dense
                                ></v-file-input>
                            </div>
                        </div>
                        <div class="cardUpload">
                            <v-card min-height="30px" class="btnclass" style="background-color:#F19B14;color:#FFF;display: flex; flex-direction: row; justify-content: center;align-items: center;box-shadow: none;width: auto;"> &nbsp;&nbsp;Camera&nbsp;<v-icon small color="#FFF">mdi-camera</v-icon> &nbsp;&nbsp;</v-card>
                            <div style="display:flex; alignItems:center;height: 80%; border:2px grey solid;border-radius: 10px;">
                                <v-file-input
                                    solo
                                    flat
                                    dense
                                    v-model="choosenFile2"
                                    placeholder="Click here to open Camera"
                                    capture="user"
                                    accept="image/*"
                                >hi</v-file-input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="buttonsAlign">
                    <v-btn
                        v-if="(move>1)" 
                        class="btnclass" 
                        style="background-color:#F19B14;color:#FFF;"
                        @click = "decrementStep()">
                            <v-icon small>mdi-arrow-left</v-icon>
                            &nbsp;Back
                    </v-btn>
                    <v-btn 
                        :disabled = "((move == 2 && category == '' || (move==3 ? true : false)) && ((move == 2 ? true : false) || (move == 3 && choosenFile1 == null && choosenFile2 == null)))"
                        @click="incrementStep()"
                        class="btnclass" 
                        style="background-color:#F19B14;color:#FFF;">
                        {{(move != 3) ? 'Next' : "Submit"}}&nbsp;
                        <v-icon small>mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
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
        data() {
            return { 
                move: 1,
                category : '',
                choosenFile1 : null,
                choosenFile2 : null
             }
            },
        methods:{
            incrementStep(){
                this.move = this.move+1;
            },
            decrementStep(){
                this.move = this.move-1;
            },
            clickedCategory(value){
                this.category = value;
            }
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {
    .stepper{
        width:100%;
        /* border: 3px blue solid; */
        margin: 0;
        /* display: flex;
        justify-content: center;
        align-items: center; */
    }
    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    width:45%;
    margin: 2% 0%;
    }
    .buttonsAlign{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .menuContent{
        flex-wrap: wrap;
        display: flex; 
        flex-direction: row;
        width:100%;
    }
    .uploadStyle{
        width:100%;
        display: flex;
        flex-direction: column;
    }
    .uploadPage{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cardUpload{
        width:90%;
        padding: 4%;
    }
}

@media screen and (min-width:901px) {
    .stepper{
        width:80%;
        margin: auto;
    }
    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    width:25%;
    margin: 2% 0%;
    }
    .buttonsAlign{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .outerMenuContent{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .menuContent{
        width: 50%;
        flex-wrap: wrap;
        display: flex; 
        flex-direction: row;
        justify-content: center;
    }
    .uploadPage{
        width: 75%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 35vh;
    }
    .uploadStyle{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .cardUpload{
        width:33%;
    }
}
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