<template>
    <div>
        <TopBar></TopBar>
        <div class="main">
            <div style="width:50%;" class="secondDivClass">
                <div class="stepsClass">
                    <div>
                        <v-stepper v-model="e6" :vertical="$mq != 'mobile'"  style="box-shadow: none;">
                            <v-stepper-step :complete="e6 > 1" step="1">
                            Financial Information
                            <small>Summarize if needed</small>
                            </v-stepper-step>

                            <v-stepper-content step="1">
                            </v-stepper-content>

                            <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

                            <v-stepper-content step="2">
                            </v-stepper-content>

                            <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

                            <v-stepper-content step="3">
                            </v-stepper-content>

                            <v-stepper-step step="4">View setup instructions</v-stepper-step>
                            <v-stepper-content step="4">
                            </v-stepper-content>
                        </v-stepper>
                    </div>
                </div>
            </div>
            <div style="width:50%" class="secondDivClass">
                <div style="width:80%">
                    <div class="flexCol alignLeftClass">
                        <span style="font-size:1rem; font-weight:400; text-transform:uppercase;">Financial Information</span>
                        <span style="font-size:1.6rem; font-weight:600;">What is your estimated personal credit score?</span>
                        <span>A low credit score will not prevent your business from obtaining an approval.</span>
                    </div>
                    <div class="flexRow options" style="flex-wrap: wrap;">
                        <v-btn outlined class="btnclass">Excellent (720+)</v-btn>
                        <v-btn outlined class="btnclass">Great (680-719)</v-btn>
                        <v-btn outlined class="btnclass">Average (650-679)</v-btn>
                        <v-btn outlined class="btnclass">Fair (600-649)</v-btn>
                        <v-btn outlined class="btnclass">Not so great (599 or less)</v-btn>
                    </div>
                    <div>
                        <v-btn class="btnclass" style="width:100%; background-color:#F19B14;color:#FFF;">Proceed</v-btn>
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
            return { es6: 1 }
        }
        }
</script>

<style>

/* mobile */
@media screen and (max-width:500px){
    .main{
        display: flex;
        flex-direction: column;
        width:100% !important;
        height: 60vh;
    }
}

/* desktop */
@media screen and (min-width:501px){
    .main{
        display: flex;
        flex-direction: row;
        width:100% !important;
        height: 60vh;
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

.secondDivClass{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btnclass{
    text-transform: capitalize;
    box-shadow: none;
    width:40%;
    margin: 2% 0%;
}

.options{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
