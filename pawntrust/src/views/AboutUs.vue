<template>
    <div>
        <TopBar></TopBar>
        <div class="aboutMain">
            <img style="width:100%;" src ="https://pawntrust.com/wp-content/uploads/2022/10/about-1-img.png"/>
            <div style="background-color: #F19B14;width:100%;display: flex;justify-content: center;flex-direction: column;">
                <span style="font-size:2rem; font-weight:600;color:#FFFFFF;display: flex; justify-content: flex-start;padding: 0px 4%;">About Us</span>
                <v-divider style="border-top:3.5px solid #FFFFFF; width:8%;margin-top:1%;display: flex; justify-content: flex-start;margin: 0px 4%;"></v-divider>
                <p style="color:#FFFFFF; text-align:left;padding: 2% 4%;">
                    {{aboutusparagraph}}
                </p>
                <div style="display:flex;justify-content:flex-start;padding-bottom: 1%;">
                    <v-btn 
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
        <!-- <div>
            <img style="width:100%;" src ="https://pawntrust.com/wp-content/uploads/2022/10/footer-shape-2.png" />
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
            aboutusparagraph: "PawnTrust is a data intelligence platform in the pawn and microlending vertical.  Our mission is to provide a trusted platform in the business of lending monies to the masses using a list of verified pawn brokers and lenders across the United States, providing capital to individuals to help meet short-term financial needs while combining technology and data to transform the industry. PawnTrust, through its verified pawn brokers, will create a worldwide marketplace for all pawn inventory that can be bought and sold through an app accessible across the country."
        })
    }
</script>

<style scoped>

@media screen and (max-width:950px){
    .aboutMain{
        display:flex;
        flex-direction: column;
    }
}

@media screen and (min-width:951px) {
    .aboutMain{
        display:flex;
        flex-direction: row;
    }
}
</style>