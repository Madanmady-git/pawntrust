<template>
    <div>
        <TopBar></TopBar>
        <div style="display:flex;flex-direction: row; justify-content:center;align-items:center;">
            <div style="width:50%;">
                <span style="font-size:2rem;font-weight:600; color:#000000">Investor</span>
                <span style="font-size:2rem;font-weight:500; color:#F19B14">&nbsp; Relations</span>
                <v-divider style="border-top:3.5px solid orange; width:10%;margin:auto; 0px 4%; margin-top:10px; margin-bottom:10px;"></v-divider>
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
        
            <div style="width:50%; height:100%;padding:8% 0%">
                <v-avatar
                size="80%"
                >
                    <img src="../assets/investor-img.png"
                />
                </v-avatar>
            </div>
        </div>
        <div style="display: flex; flex-direction: row;justify-content: center;margin-top: 5%;">
            <div class="InvestorRelImages">
                <div class="relationImage1">
                    <img
                    style="width:100%"
                    src="../assets/realations-img.png" />
                </div>
                <div class="relationImage2">
                    <img
                    src="../assets/inves-img1.png" />
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
        data: () => ({

        })
}
</script>

<style scoped >

@media screen and (max-width:900px) {
    .InvestorRelImages{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .relationImage1{
        width:95%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (min-width:901px) {
    .InvestorRelImages{
        width:95%;display: flex; flex-direction: row;
    }
    .relationImage1{
        width:70%;display: flex;flex-direction: column;justify-content: center;
    }
    .relationImage2{
        width:30%;
    }
}
    
</style>