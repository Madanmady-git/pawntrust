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
                    <img src="https://pawntrust.com/wp-content/uploads/2022/10/investor-img.png"
                />
                </v-avatar>
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