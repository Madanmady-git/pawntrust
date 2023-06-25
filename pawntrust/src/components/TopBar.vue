<template>
    <div>
        <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mainMobileClass' : 'mainDesktopClass'">
            <div v-if="$mq == 'desktop'" class="DesktopLogo">
                <img :class="($mq =='mobile') ? 'logoImageMobile' :  ''"
                    src="../assets/header-logo.png"
                />
            </div>
            <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mobileTopBarContent' : 'DesktopTopBarContent'">
                <div :class="($mq =='mobile' || $mq == 'tablet') ? 'topBarMobile' : 'topBarDesktop'">
                    <!-- <div :class="($mq =='mobile' || $mq == 'tablet')? 'headerAlignMobile' : 'headerAlignDesktop'">
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
                    <v-divider vertical style="margin:0% 2%"></v-divider>
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
                    </div> -->
                    <div :class="($mq =='mobile' || $mq == 'tablet') ? 'headerAlignMobile2' : 'headerAlignDesktop'">
                        <v-btn icon style="cursor: pointer;" href="https://www.facebook.com/pawntrust" target="_blank"><v-icon color="#F19B14" size="40">mdi-facebook</v-icon></v-btn>
                        <v-btn icon style="cursor: pointer;" href="https://twitter.com/dinewiseinc" target="_blank"><v-icon color="#F19B14" size="40">mdi-twitter</v-icon></v-btn>
                        <v-btn icon style="cursor: pointer;" href="https://www.instagram.com/dinewiseinc/" target="_blank"><v-icon color="#F19B14" size="40">mdi-instagram</v-icon></v-btn>
                    </div>
                    
                    <div :class="($mq =='mobile' || $mq == 'tablet') ? 'headerAlignMobile3' : 'headerAlignDesktop'">
                        <v-btn
                        :small="$mq != 'desktop'"
                        style="text-transform:capitalize; background-color:#F19B14;color:#000000;box-shadow: none;"
                        @click="SignIn()"
                        >
                            <span style="font-weight:600">Sign In</span>
                        </v-btn>
                        <v-btn
                        :small="$mq != 'desktop'"
                        style="text-transform:capitalize; background-color:#F19B14;color:#000000;box-shadow: none;"
                        @click="SignUp()"
                        >
                        <span style="font-weight:600;">Sign Up</span>
                        </v-btn>
                    </div>
                    <div class="topBarRight">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="topBarProfile" v-bind="attrs" v-on="on">
                                    <!-- <div class="profilePhoto">
                                        <img style="width: 36px" src="../assets/UserProfileIcon.png" />
                                        <div class="profileLetter">{{ name.charAt(0) }}</div>
                                    </div> -->
                                    <div>
                                        <v-avatar
                                        color ="#F19B14"
                                        size="40"
                                        >
                                            <span style="color: #FFF;">{{ name.charAt(0) }}</span>
                                        </v-avatar>
                                    </div>
                                    <div class="profileName">
                                    {{name}}
                                        <!-- <img class="dropDown" src="../assets/downArrowwhite.svg" /> -->
                                        <v-icon color ="#F19B14">mdi-menu-down</v-icon>
                                    </div>
                                </div>
                            </template>
                            <v-card class="cardDesign">
                                <div style="padding:16px">
                                    <div style="color: #2b308e; font-weight: 600; font-size: 14px">
                                        Welcome {{name}}
                                    </div>
                                    <div class="dropDownInfo" @click="clickedProfile()">
                                        <div class="iconDesign"><v-icon color ="#F19B14">mdi-account-circle</v-icon></div>
                                        <div class="txtcolor">&nbsp;Profile</div>
                                    </div>
                                    <div class="dropDownInfo">
                                        <div class="iconDesign"><v-icon color ="#F19B14">mdi-help-circle</v-icon></div>
                                        <div class="txtcolor">&nbsp;Help</div>
                                    </div>
                                    <div class="dropDownInfo">
                                        <div class="iconDesign"><v-icon color ="#F19B14">mdi-cog</v-icon></div>
                                        <div class="txtcolor">&nbsp;Settings</div>
                                    </div>
                                    <div class="dropDownInfo" @click="dialog = true">
                                        <!-- <div class="iconDesign"><img src="../assets/logoutIcon.svg" /></div> -->
                                        <v-icon color ="#F19B14">mdi-logout</v-icon>
                                        <div class="txtcolor">&nbsp;Logout</div>
                                    </div>
                                </div>
                            </v-card>
                        </v-menu>
                        <div style="margin-left: 12px;">
                            <v-icon size="40" color="#F19B14">mdi-cart</v-icon>
                        </div>
                    </div>
                </div>
                <v-divider></v-divider>
                <div :class="$mq != 'desktop' ? 'mobileMenuClass' : ''">
                    <div style="width:40%;">
                        <div v-if="$mq != 'desktop'" class="mobileLogo">
                            <img style="width:100%;"
                                src="../assets/header-logo.png"
                            />
                        </div>
                    </div>
                    <div>
                        <div v-if="$mq == 'desktop'" class="commonHeaderClass">
                                <Heading :heading-name="'Home'"/>
                                <Heading :heading-name="'Pawn Scan'"/>
                                <Heading :heading-name="'Pawn It'" :page="'PawnIt'"/>
                                <Heading :heading-name="'Sell It'" :page="'SellIt'"/>
                                <Heading :heading-name="'Buy It'" :page="'BuyIt'"/>
                                <Heading :heading-name="'Partners'" :items="featureItems"/>
                                <Heading :heading-name="'More'" :items="moreItems"/>
                            </div>
                            <div v-else>
                                <Heading :heading-name="'More'" :items="allItems"/>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from '../components/Headings.vue';
export default {
        components: { Heading },
        props:['page'],
        data(){
            return{
                search : '',
                name: 'Yeshwanth',
                featureItems : [
                    // { title: 'Pawn Shops' },
                    { title: 'Titlepal' },
                    // { title: 'Microlending' },
                    // { title: 'Non-Fungible Tokens' },
                ],
                moreItems : [
                    {title: 'Contact Us'},
                    { title: 'About Us' },
                    { title: 'Investor Relations' },
                ],
                allItems :[
                    { title: 'Home'},
                    { title: 'Pawn Scan' },
                    { title: 'Pawn It' },
                    { title: 'Sell It' },
                    { title: 'Buy It' },
                    // { title: 'Pawn Shops' },
                    { title: 'Titlepal' },
                    // { title: 'Microlending' },
                    // { title: 'Non-Fungible Tokens' },
                    { title: 'Contact Us'},
                    { title: 'About Us' },
                    { title: 'Investor Relations' },
                    
                ]
            }
        },
        methods: {
            searchMethod(word){
                console.log("Entered in search Area");
                this.$router.push({
                    name:'Pawn Scan',
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
            },
            clickedProfile(){
                this.$router.push({
                    name : 'Profile'
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
    display:flex; flex-direction : column;align-items: flex-end; padding:1%;
}

.topBarDesktop{
    display:flex; flex-direction : row;justify-content:space-around;padding:14px
}

.headerAlignMobile{
    display:flex; flex-direction : row;justify-content:flex-end;padding: 1% 0%;
}
.headerAlignMobile2{
    width:50%; display:flex; flex-direction : row;justify-content:space-between; padding: 1% 0%;
}

.headerAlignMobile3{
    width:60%; display:flex; flex-direction : row;justify-content:space-between; padding: 1% 0%;
}

.headerAlignDesktop{
    display:flex; flex-direction : row;justify-content:space-around;width:20%;
}

.mobileLogo{
    width: 100%;display: flex;flex-direction: row; justify-content: center;align-items:center;
}

.DesktopLogo{
    width: 30%;display: flex;flex-direction: row; justify-content: center;align-items:center;
}
.mobileTopBarContent{
    width:100%;
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

.mobileMenuClass{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.topBarRight {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.topBarProfile {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.iconWrap {
    display: flex;
    flex-direction: row;
}

.topBarRight {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.profilePhoto {
    margin-right: 16px;
}

.iconStyle {
    width: 100%;
    margin-top: 8px;
}

.topBarIcon {
    height: auto;
    margin-right: 36px;
}

.text {
    padding: 16px 0;
}

.profileName {
    margin-top: 8px;
    margin-left: 8px;
}

.dropDown {
    margin-right: 10px;
}

.cardDesign {
    background: #ffffff;
    border-radius: 8px;
}

.langcardDesign {
    height: auto;
    width: 180px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 8px;
}

.notcardDesign {
    /* margin-top: -50px; */
    width: 414px;
    height: auto;
    /* margin-left: 1330px; */
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 8px;
}

.dropDownInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* padding: 10px; */
    padding-top: 8px;
    cursor: pointer;
}

.dropDownInfonot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>