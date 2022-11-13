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
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
    export default {
        components : { TopBar },
        data(){
            return {
                dialog : true
            }
        },
        methods : {
            goHome(){
                this.$router.push({
                    name:'Home'
                })
            }
        }
    }
</script>

<style>
</style>