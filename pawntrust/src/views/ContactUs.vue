<template>
    <div>
        <TopBar></TopBar>
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