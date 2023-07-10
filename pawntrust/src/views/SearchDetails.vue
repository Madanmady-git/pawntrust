<template>
    <div>
        <TopBar></TopBar>
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
                        This feature is coming soon
                        <br>
                        <br>
                        <br>
                        <br>
                        <v-btn color="#F19B14" text-color="#FFFFFF" @click="goHome">ok</v-btn>
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
    export default {
        components : { TopBar, Footer },
        data(){
            return {
                dialog : true
            }
        },
        methods : {
            goHome(){
                this.$router.push({
                    name:'Home'
                }).catch(error => {
                    console.log('error', error)
                })
            }
        }
    }
</script>

<style>
</style>