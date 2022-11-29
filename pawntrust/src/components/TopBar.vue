<template>
    <div>
        <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mainMobileClass' : 'mainDesktopClass'">
            <div :class="($mq =='mobile' || $mq == 'tablet')  ? 'mobileLogo' : 'DesktopLogo'">
                <img :class="($mq =='mobile') ? 'logoImageMobile' :  ''"
                    src="https://pawntrust.com/wp-content/uploads/2022/10/header-logo.png"
                />
            </div>
            <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mobileTopBarContent' : 'DesktopTopBarContent'">
                <div :class="($mq =='mobile' || $mq == 'tablet') ? 'topBarMobile' : 'topBarDesktop'">
                    <div :class="($mq =='mobile' || $mq == 'tablet') ? 'headerAlignMobile' : 'headerAlignDesktop'">
                        <v-avatar
                        color="#F19B14"
                        size="36"
                        >
                        <v-btn icon style="cursor: pointer;" href="mailto:info@pawntrust.com">
                            <v-icon
                                small
                                color="#FFFFFF"
                                >
                                mdi-email
                            </v-icon>
                        </v-btn>
                        </v-avatar>
                        <div class="emailandPhone">
                            &nbsp;<span> info@pawntrust.com</span>
                        </div>
                    </div>
                    <v-divider vertical style="margin:0% 2%"></v-divider>
                    <div :class="($mq =='mobile' || $mq == 'tablet')? 'headerAlignMobile' : 'headerAlignDesktop'">
                        <v-avatar
                        color="#F19B14"
                        size="36"
                        >
                            <v-btn icon style="cursor: pointer;" href="tel:+%201%20888%20243%202680">
                                <v-icon
                                    small
                                    color="#FFFFFF"
                                    >
                                    mdi-phone
                                </v-icon>
                            </v-btn>
                        </v-avatar>
                        <div style="font-size:16px; font-weight:900" class="emailandPhone">
                            <span>(888)-243-2680</span>
                        </div>
                    </div>
                    <div :class="($mq =='mobile' || $mq == 'tablet') ? 'headerAlignMobile' : 'headerAlignDesktop'">
                        <v-btn icon style="cursor: pointer;" href="https://www.facebook.com/pawntrust" target="_blank"><v-icon color="#F19B14" size="40">mdi-facebook</v-icon></v-btn>
                        <v-btn icon style="cursor: pointer;" href="https://twitter.com/dinewiseinc" target="_blank"><v-icon color="#F19B14" size="40">mdi-twitter</v-icon></v-btn>
                        <v-btn icon style="cursor: pointer;" href="https://www.reddit.com/user/pawntrust" target="_blank"><v-icon color="#F19B14" size="40">mdi-reddit</v-icon></v-btn>
                    </div>
                    
                    <div :class="($mq =='mobile' || $mq == 'tablet') ? 'headerAlignMobile' : 'headerAlignDesktop'">
                        <v-btn
                        style="text-transform:capitalize; background-color:#F19B14;color:#000000;"
                        @click="SignIn()"
                        >
                            <span style="font-weight:600">Sign In</span>
                        </v-btn>
                        <v-btn
                        style="text-transform:capitalize; background-color:#F19B14;color:#000000;"
                        @click="SignUp()"
                        >
                        <span style="font-weight:600">Sign Up</span>
                        </v-btn>
                    </div>
                </div>
                <v-divider></v-divider>
                <div v-if="$mq == 'desktop'" class="commonHeaderClass">
                        <Heading :heading-name="'Home'"/>
                        <Heading :heading-name="'Search'"/>
                        <Heading :heading-name="'Features'" :items="featureItems"/>
                        <Heading :heading-name="'Pawn It'"/>
                        <Heading :heading-name="'Sell It'"/>
                        <Heading :heading-name="'More'" :items="moreItems"/>
                </div>
                <div v-else>
                    <Heading :heading-name="'More'" :items="allItems"/>
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
                ],
                allItems :[
                    { title: 'Search' },
                    { title: 'Pawn Shops' },
                    { title: 'Microlending' },
                    { title: 'Non-Fungible Tokens' },
                    {title: 'Contact Us'},
                    { title: 'About Us' },
                    { title: 'Investor Relations' },
                    { title: 'Pawn It' },
                    { title: 'Sell It' },
                    {title: 'Home'},
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
            },
            SignIn(){
                this.$router.push({
                    name:'Login'
                })
            },
            SignUp(){
                this.$router.push({
                    name:'SignUp'
                })
            }
        }
    }
</script>

<style scoped>
.mainMobileClass {
    display:flex; flex-direction : row;justify-content:flex-end; width: 100%;padding: 8px;
}
.mainDesktopClass {
    display:flex; flex-direction : row;justify-content:center; width: 100%;padding: 8px;
}

.topBarMobile{
    display:flex; flex-direction : column;justify-content:space-around;padding:14px
}

.topBarDesktop{
    display:flex; flex-direction : row;justify-content:space-around;padding:14px
}

.headerAlignMobile{
    display:flex; flex-direction : row;justify-content:flex-end;padding: 3% 0%;
}

.headerAlignDesktop{
    display:flex; flex-direction : row;justify-content:space-around;width:20%;
}

.mobileLogo{
    width: 50%;display: flex;flex-direction: row; justify-content: center;align-items:center;
}

.DesktopLogo{
    width: 30%;display: flex;flex-direction: row; justify-content: center;align-items:center;
}
.mobileTopBarContent{
    width:50%;
}
.DesktopTopBarContent{
    width:70%;
}
.logoImageMobile{
    width:100%;
}
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