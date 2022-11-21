<template>
    <div>
        <div style="display:flex; flex-direction : row;justify-content:center; width: 100%;padding: 8px;">
            <div style="width: 30%;display: flex;justify-content: center;align-items:center;">
                <img 
                    src="https://pawntrust.com/wp-content/uploads/2022/10/header-logo.png"
                />
            </div>
            <div style="width: 70%;">
                <div style="display:flex; flex-direction : row;justify-content:space-around;padding:14px">
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%">
                        <v-avatar
                        color="#F19B14"
                        size="36"
                        >
                        <v-icon
                            small
                            color="#FFFFFF"
                            >
                            mdi-email
                        </v-icon>
                        </v-avatar>
                        <div class="emailandPhone">
                            &nbsp;<span> info@pawntrust.com</span>
                        </div>
                    </div>
                    <v-divider vertical style="margin:0% 2%"></v-divider>
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%">
                        <v-avatar
                        color="#F19B14"
                        size="36"
                        >
                            <v-icon
                                small
                                color="#FFFFFF"
                                >
                                mdi-phone
                            </v-icon>
                        </v-avatar>
                        <div style="font-size:16px; font-weight:900" class="emailandPhone">
                            <span>(888)-243-2680</span>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%">
                        <v-icon color="#F19B14" size="40">mdi-facebook</v-icon>
                        <v-icon color="#F19B14" size="40">mdi-twitter</v-icon>
                        <v-icon color="#F19B14" size="40">mdi-reddit</v-icon>
                    </div>
                    
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%;">
                        <v-btn
                        style="text-transform:capitalize; background-color:#F19B14;color:#000000;"
                        @click="searchMethod"
                        >
                            <span style="font-weight:600">Sign In</span>
                        </v-btn>
                        <v-btn
                        style="text-transform:capitalize; background-color:#F19B14;color:#000000;"
                        @click="searchMethod"
                        >
                        <span style="font-weight:600">Sign Up</span>
                        </v-btn>
                    </div>
                </div>
                <v-divider></v-divider>
                <div class="commonHeaderClass">
                        <Heading :heading-name="'Home'"/>
                        <Heading :heading-name="'Search'"/>
                        <Heading :heading-name="'Features'" :items="featureItems"/>
                        <Heading :heading-name="'Pawn It'"/>
                        <Heading :heading-name="'Sell It'"/>
                        <Heading :heading-name="'More'" :items="moreItems"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from '../components/Headings.vue';
export default {
        components: { Heading },
        data(){
            return{
                search : '',
                featureItems : [
                    { title: 'Pawn Shops' },
                    { title: 'Microlending' },
                    { title: 'Non-Fungible Tokens' },
                ],
                moreItems : [
                    {title: 'Contact Us'},
                    { title: 'About Us' },
                    { title: 'Investor Relations' },
                ]
            }
        },
        methods: {
            searchMethod(word){
                console.log("Entered in search Area");
                this.$router.push({
                    name:'Search',
                    params : {
                        searchword : word
                    }
                })
            }
        }
    }
</script>

<style scoped>
.headerClass {
    font-size: 16px;
    font-weight: 600;
    padding: 12px 0% 0% 0%;
    display: flex;
    flex-direction: column;
}
.commonHeaderClass {
    display:flex;
    flex-direction : row;
    justify-content: space-evenly;
}

.emailandPhone {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
}

.avatarClass {
    display:flex;flex-direction: row; justify-content:center;
}
</style>