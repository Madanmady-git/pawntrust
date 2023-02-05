<template>
    <div>
        <TopBar></TopBar>
        <div v-if="$mq == 'desktop'">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2071.331691630778!2d-84.3862489769204!3d33.77469388925303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5046f5730dc11%3A0x1093833a7eb0ce38!2s730%20Midtown!5e0!3m2!1sen!2sin!4v1669055037440!5m2!1sen!2sin" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div v-else-if="$mq == 'tablet'">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.464362533766!2d-84.38705298481712!3d33.77450478068235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5046f5730dc11%3A0x1093833a7eb0ce38!2s730%20Midtown!5e0!3m2!1sen!2sin!4v1670053402414!5m2!1sen!2sin" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div v-else>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.464362533766!2d-84.38705298481712!3d33.77450478068235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5046f5730dc11%3A0x1093833a7eb0ce38!2s730%20Midtown!5e0!3m2!1sen!2sin!4v1670053402414!5m2!1sen!2sin" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="mainClass">
            <span style="font-size:2rem;font-weight:600; color:#FFFFFF;">Contact Us</span>
            <v-divider style="border-top:3.5px solid #FFFFFF; width:8%;margin-top:1%;margin:auto;margin-bottom: 2%;"></v-divider>
            <div style="display:flex; flex-direction:column;align-items: center;">
                <div class="contactUs">
                    <div style="width:45%">
                        <v-text-field
                        :rules="nameRule"
                        v-model="firstName"
                        label="First Name"
                        solo 
                        flat
                        append-icon="mdi-account"
                        >
                        </v-text-field>
                    </div>
                    <div style="width:45%">
                        <v-text-field
                        :rules="nameRule"
                        v-model="lastName"
                        label="Last Name"
                        solo 
                        flat
                        append-icon="mdi-account"
                        >
                        </v-text-field>
                    </div>
                </div>
                <div class="contactUs">
                    <div style="width:45%">
                        <v-text-field
                        v-model="email"
                        :rules = "emailRules"
                        label="Email Address"
                        solo 
                        flat
                        append-icon="mdi-email"
                        >
                        </v-text-field>
                    </div>
                    <div style="width:45%">
                        <v-text-field
                        v-model="mobileNumber"
                        :rules="mobileNumberRules"
                        label="Phone Number"
                        solo 
                        flat
                        append-icon="mdi-phone"
                        >
                        </v-text-field>
                    </div>
                </div>
                <div class="contactUs1">
                    <v-textarea
                    v-model="message"
                    solo
                    label="Message"
                    flat
                    outlined
                    >
                    </v-textarea>
                </div>
                <div class="contactUs2">
                    <div>
                        <span style="font-weight:600;font-size: 1.2rem;color: #000000;">Captcha</span>
                        <span style="color:red;font-weight:600;font-size: 1.2rem;">*</span>
                    </div>
                    <div style="display:flex; flex-direction:row;">
                        <div style="display:flex;justify-content:center;align-items:center; ">
                            <span > {{randomInt1}} + {{randomInt2}} = </span>
                        </div>
                        <v-text-field
                        v-model="captchaInput"
                        solo
                        flat
                        hide-details
                        size="1%"
                        >
                        </v-text-field>
                    </div>
                </div>
            </div>
            <div>
                <v-btn 
                @click="SubmitMail()"
                :disabled = "validationCheck()"
                class="submit"
                    rounded
                    color="#0E2334;"
                    dark
                    left
                >
                Submit Now
                <v-icon
                    right
                    dark
                >
                mdi-chevron-right-circle
                </v-icon>
                </v-btn>
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
                        <br>
                        <br>
                        <br>
                        {{popUpContent}}
                        <br>
                        <br>
                        <br>
                        <br>
                        <v-btn v-if="mailSuccess" color="#F19B14" text-color="#FFFFFF" @click="clearForm()">ok</v-btn>
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
import emailjs from 'emailjs-com';
    export default {
        components : { TopBar, Footer },
        data(){
            return{
                firstName : '',
                lastName : '',
                email: '',
                mobileNumber : '',
                message : '',
                captchaInput : '',
                randomInt1 : 1,
                randomInt2 : 1,
                dialog : false,
                popUpContent : 'Sending your mail....📧📧...📨',
                mailSuccess : false,
                emailRules : [
                                v => !!v || 'Email is required',
                                v => (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(v)) || 'Enter valid Email'
                            ],
                mobileNumberRules: [
                    v => !!v || 'Phone Number is required',
                    v => (v.length == 10) || 'Phone Number should 10 digits',
                    v => v > 0 || 'Phone Number cannot be negative',
                ],
                nameRule : [
                    v => !!v || 'This field is mandatary',
                    v => (/^[a-zA-Z]+$/.test(v)) || 'Only Characters are allowed'
                ]
            }
        },
        mounted(){
            this.randomInt1 = Math.floor((Math.random() * 10) + 1);
            this.randomInt2 = Math.floor((Math.random() * 10) + 1);
        },
        methods:{
            SubmitMail(){
                this.dialog = true;
                console.log("here..." , process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID);
                emailjs.send('service_0b25vj3', 'template_k8x5kf5',
                {
                'from_name': this.firstName+' '+this.lastName,
                'mobileNumber': this.mobileNumber,
                'email': this.email,
                'message': this.message
                },
                'uFRs5Fgu_WZBtxC_t'
                ).then((response)=>{
                    console.log('response', response);
                    this.mailSuccess = true;
                    this.popUpContent = 'You have contacted us successfully'
                })
                .catch((error) =>{
                console.log('error', error)
                    this.dialog = true;
                    this.mailSuccess = true;
                    this.popUpContent = 'Please give right email';
                })
            },
            validationCheck(){
                return (this.randomInt1 + this.randomInt2 != this.captchaInput) || this.firstName+this.lastName == '' || this.email == '' || this.mobileNumber == '';
            },
            clearForm(){
                this.dialog = false
                this.firstName = '',
                this.lastName = '',
                this.email = '',
                this.mobileNumber = '',
                this.message = '',
                this.captchaInput = ''
                window.location.reload(true);

            }
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {
    .contactUs{
        display:flex; flex-direction:row;justify-content: space-around;width:100%;
    }
    .contactUs2{
        display:flex;flex-direction:column; align-items:flex-start;width:95%;
    }
    .contactUs1{
       width:95%;
    }
    .mainClass{
        background-color:#F19B14;
    }

    
}

@media screen and (min-width:901px) {
    .contactUs{
        display:flex; flex-direction:row;justify-content: space-around;width:80%;
    }
    .contactUs2{
        display:flex;flex-direction:column; align-items:flex-start;width:76%;
    }
    .contactUs1{
       width:76%;
    }
    .mainClass{
        background-color:#F19B14;
    }
}

.submit{
        margin: 4%;
    }
</style>