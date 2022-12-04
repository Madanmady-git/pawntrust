<template>
    <div>
        <TopBar></TopBar>
        <div class="main">
            <div class="secondDivClass">
                <div v-if="move > 1">
                    <v-btn class="btnclass" style="background-color:grey;color:#FFF;align-items: left;" @click = "decrementStep()"><v-icon small>mdi-arrow-left</v-icon>Back</v-btn>
                </div>
                <div v-if="$mq == 'mobile'">
                    <v-stepper v-model="move" style="box-shadow:none;" alt-labels>
                    <v-stepper-header>
                        <v-stepper-step :complete="move > 1" step="1">
                            <small>Financial</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="move > 2" step="2">
                            <small>Income</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="move > 3" step="3">
                            <small>Personal</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="4">
                            <small>Submit</small>
                        </v-stepper-step>
                    </v-stepper-header>
                    </v-stepper>
                </div>
                <div v-else>
                    <div>
                        <v-stepper v-model="move" vertical style="box-shadow: none;">
                            <v-stepper-step :complete="move > 1" step="1">
                            Financial Information
                            <small>Summarize if needed</small>
                            </v-stepper-step>

                            <v-stepper-content step="1">
                            </v-stepper-content>

                            <v-stepper-step :complete="move > 2" step="2">Annual Income</v-stepper-step>

                            <v-stepper-content step="2">
                            </v-stepper-content>

                            <v-stepper-step :complete="move > 3" step="3">Personal Information</v-stepper-step>

                            <v-stepper-content step="3">
                            </v-stepper-content>

                            <v-stepper-step  step="4">Submit</v-stepper-step>

                            <v-stepper-content step="4">
                            </v-stepper-content>

                        </v-stepper>
                    </div>
                </div>
            </div>
            <div class="secondDivClass2">
                <div v-if="move == 1" style="width:80%">
                    <div class="flexCol alignLeftClass">
                        <span style="font-size:1rem; font-weight:400; text-transform:uppercase;">Financial Information</span>
                        <span style="font-size:1.6rem; font-weight:600;">What is your estimated personal credit score?</span>
                        <span>A low credit score will not prevent your business from obtaining an approval.</span>
                    </div>
                    <div class="flexRow" style="flex-wrap: wrap;">
                        <v-btn block outline class="btnclass" @click = "incrementStep()">Excellent (720+)</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">Great (680-719)</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">Average (650-679)</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">Fair (600-649)</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">Not so great (599 or less)</v-btn>
                    </div>
                    <!-- <div>
                        <v-btn class="btnclass" style="width:100%; background-color:#F19B14;color:#FFF;">Proceed</v-btn>
                    </div> -->
                </div>
                <div v-else-if="move == 2" style="width:80%">
                    <div class="flexCol alignLeftClass">
                        <span style="font-size:1rem; font-weight:400; text-transform:uppercase;">Annual Income</span>
                        <span style="font-size:1.6rem; font-weight:600;">What is your annual income?</span>
                        <span>A low annual income will not prevent your business from obtaining an approval.</span>
                    </div>
                    <div class="flexRow" style="flex-wrap: wrap;">
                        <v-btn block outline class="btnclass" @click = "incrementStep()">less than 25,000</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">25,000 to 50,000</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">50,000 to 75,000</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">75,000 to 1,00,000</v-btn>
                        <v-btn block outline class="btnclass" @click = "incrementStep()">more than 1,00,000</v-btn>
                    </div>
                    <!-- <div>
                        <v-btn class="btnclass" style="width:100%; background-color:#F19B14;color:#FFF;">Proceed</v-btn>
                    </div> -->
                </div>
                <div v-else-if="move == 3" style="width:80%">
                    <div class="flexCol alignLeftClass">
                        <span style="font-size:1rem; font-weight:400; text-transform:uppercase;">Personal Details</span>
                    </div>
                    <div class="LoginMain">
                        <div class="heightStyle">
                            <v-card style = "padding:6% 0%;box-shadow: none;">
                                <span class="flexStart content">Username</span>
                                <v-text-field flat solo outlined placeholder="Enter Username"></v-text-field>
                                <span class="flexStart content">Password</span>
                                <v-text-field flat solo outlined placeholder="Enter Password"></v-text-field>
                                <span class="flexStart content">Mobile Number</span>
                                <v-text-field flat solo outlined placeholder="Enter Mobile Number"></v-text-field>
                                <span class="flexStart content">Email</span>
                                <v-text-field flat solo outlined placeholder="Enter Email"></v-text-field>
                            </v-card>
                        </div>
                    </div>
                    <div>
                        <v-btn class="btnclass" @click = "incrementStep()" style="width:100%; background-color:#F19B14;color:#FFF;">Proceed</v-btn>
                    </div>
                </div>
                <div v-else-if="move == 4" style="width:80%">
                    <div class="flexCol alignLeftClass">
                        <span style="font-size:1rem; font-weight:400; text-transform:uppercase;">Verification</span>
                    </div>
                    <div class="LoginMain">
                        <div class="heightStyleOTP">
                            <v-card style = "padding:6% 0%;box-shadow: none;">
                                <span class="flexStart content">OTP</span>
                                <!-- <v-text-field flat solo outlined placeholder="Enter Username"></v-text-field> -->
                                <v-otp-input
                                    length="4"
                                ></v-otp-input>
                            </v-card>
                        </div>
                    </div>
                    <div>
                        <v-btn class="btnclass" @click = "incrementStep()" style="background-color:#F19B14;color:#FFF;">Verify OTP</v-btn>
                    </div>
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
        components : { TopBar, Footer },
        data() {
            return { move: 1 }
            },
        methods:{
            incrementStep(){
                this.move = this.move+1;
            },
            decrementStep(){
                this.move = this.move-1;
            }
        }
    }
</script>

<style scoped>

.flexStart{
    display: flex;
    justify-content: flex-start;
}

.content{
    font-weight:600;
}
/* mobile */
@media screen and (max-width:500px){
    .main{
        display: flex;
        flex-direction: column;
        width:100% !important;
    }
    .secondDivClass{
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    box-shadow: none;
    }

    .secondDivClass2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .options{
    display: flex;
    flex-direction: column;
    }

    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    /* width:40%; */
    margin: 2% 0%;
    }

    .LoginMain{
        /* width:80%;
        margin:0px auto; */
        /* height: 100vh; */
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .heightStyle{
        width:100%;
        margin-top:5%;
    }
    
}

/* desktop */
@media screen and (min-width:501px){
    .main{
        width:100%;
        display: flex;
        flex-direction: row;
        width:100% !important;
        /* height: 60vh; */
    }
    .secondDivClass{
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .secondDivClass2{
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 0%;
    }

    .options{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    }

    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    width:40%;
    margin: 2% 0%;
    }

    .LoginMain{
        /* height: 60vh; */
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .heightStyle{
        width:100%;
        /* margin-top:5%; */
    }
    .heightStyleOTP{
        width:40%;
    }
}


.flexCol{
    display: flex;
    flex-direction: column;
}
.flexRow{
    display: flex;
    flex-direction: row;
}
.insideNumber{
    background-color:#F19B14; 
    color:#FFF;
}

.stepsClass{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:auto;
}

.fullWidthandHeight{
    width:100% !important;
    height: 60vh;
}

.alignLeftClass{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    text-align: left;
}

</style>
