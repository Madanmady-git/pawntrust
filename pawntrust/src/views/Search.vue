<template>
    <div>
        <TopBar></TopBar>
        <div>
            <v-carousel
            hide-delimiters
            :show-arrows="false"
            height="100vh"
            interval="8000"
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                    <!-- <img 
                    style="width:100%;height:100vh;"
                    src = "../assets/bannerImage.jpeg" /> -->
                    <div class="bannerBackground" style="display:flex; flex-direction:column;justify-content:center;">
                        <!-- <span style="font-size:3rem;font-weight:900;align-items: flex-start; color:#FFFFFF;width:80%;">PawnTrust Is A Revolutionary Evolution In Pawn Shops and Microlending</span>
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
                        </v-btn> -->
                        <div style="width:80%;margin-left: 10%;display: flex;flex-direction: row;">
                            <v-text-field
                            solo
                            flat
                            placeholder="Search among millions of pawn shops across the world"
                            style="background-color:#FFFFFF; color:#000000 ; height: 6%; width:40%;"
                            prepend-inner-icon="mdi-magnify"
                            >
                            </v-text-field>
                            <div style="width:50%;margin-left: 4%;">
                                <v-text-field
                                solo
                                flat
                                placeholder="Enter Zipcode"
                                style="background-color:#FFFFFF; color:#000000 ; height: 6%; width:30%;"
                                prepend-inner-icon="mdi-map-marker"
                                >
                                </v-text-field>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>
            </v-carousel>
            <div style="padding:0% 7%;">
                <div style="text-align:left;">
                    <span><span style="font-size:2.3rem;font-weight:600;">Search</span></span>
                    <br>
                    <span style="font-size:1rem;color:#000000">You can access the almost 10,000 pawn shops across the United States, without leaving your home! Start here to bring every pawn shop to your doorstep, 24 hours a day.</span>
                    <br>
                    <br>
                </div>
                <div >
                <div class="flexCenter">
                    <img style="width: 25%;margin:auto;" src="https://pawntrust.com/wp-content/uploads/2022/11/man-with-his-mobile-phone-working-network-connection-768x512.jpg"/>
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
</style>