<template>
    <div>
        <TopBar></TopBar>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2071.331691630778!2d-84.3862489769204!3d33.77469388925303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5046f5730dc11%3A0x1093833a7eb0ce38!2s730%20Midtown!5e0!3m2!1sen!2sin!4v1669055037440!5m2!1sen!2sin" width="1200" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div style="background-color:#F19B14;height: 94vh;">
            <span style="font-size:2rem;font-weight:600; color:#FFFFFF;">Contact Us</span>
            <v-divider style="border-top:3.5px solid #FFFFFF; width:8%;margin-top:1%;margin:auto;margin-bottom: 2%;"></v-divider>
            <div style="display:flex; flex-direction:column;align-items: center;">
                <div style="display:flex; flex-direction:row;justify-content: space-around;width:80%">
                    <div style="width:45%">
                        <v-text-field
                        label="First Name"
                        solo 
                        flat
                        append-icon="mdi-account"
                        >
                        </v-text-field>
                    </div>
                    <div style="width:45%">
                        <v-text-field
                        label="Last Name"
                        solo 
                        flat
                        append-icon="mdi-account"
                        >
                        </v-text-field>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row;justify-content: space-around;width:80%">
                    <div style="width:45%">
                        <v-text-field
                        label="Email Address"
                        solo 
                        flat
                        append-icon="mdi-email"
                        >
                        </v-text-field>
                    </div>
                    <div style="width:45%">
                        <v-text-field
                        label="Phone Number"
                        solo 
                        flat
                        append-icon="mdi-phone"
                        >
                        </v-text-field>
                    </div>
                </div>
                <div style="width:76%">
                    <v-textarea
                    solo
                    label="Message"
                    flat
                    >
                    </v-textarea>
                </div>
                <div style="display:flex;flex-direction:column; align-items:flex-start;width:76%">
                    <div>
                        <span style="font-weight:600;font-size: 1.2rem;color: #000000;">Captcha</span>
                        <span style="color:red;font-weight:600;font-size: 1.2rem;">*</span>
                    </div>
                    <div style="display:flex; flex-direction:row;">
                        <div style="display:flex;justify-content:center;align-items:center; ">
                            <span > 3 + 4 = </span>
                        </div>
                        <v-text-field
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
                style="margin: 0px 4%;"
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
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer },
    }

</script>