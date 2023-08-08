<template>
    <div>
        <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mainMobileClass' : 'mainDesktopClass'">
            <div v-if="$mq == 'desktop'" class="DesktopLogo">
                <img :class="($mq =='mobile') ? 'logoImageMobile' :  ''"
                    src="../assets/header-logo.png"
                />
            </div>
            <div v-if="$mq == 'desktop'" :class="($mq =='mobile' || $mq == 'tablet') ? 'headerAlignMobile2' : 'headerAlignDesktop'">
                <v-btn icon style="cursor: pointer;" href="https://www.facebook.com/pawntrust" target="_blank"><v-icon color="#F19B14" size="40">mdi-facebook</v-icon></v-btn>
                <v-btn icon style="cursor: pointer;" href="https://twitter.com/dinewiseinc" target="_blank"><v-icon color="#F19B14" size="40">mdi-twitter</v-icon></v-btn>
                <v-btn icon style="cursor: pointer;" href="https://www.instagram.com/dinewiseinc/" target="_blank"><v-icon color="#F19B14" size="40">mdi-instagram</v-icon></v-btn>
            </div>
            <div :class="($mq =='mobile' || $mq == 'tablet') ? 'mobileTopBarContent' : 'DesktopTopBarContent'">
                <div :class="$mq != 'desktop' ? 'mobileMenuClass' : ''">
                    <div style="width:40%;">
                        <div v-if="$mq != 'desktop'" class="mobileLogo">
                            <img style="width:100%;"
                                src="../assets/header-logo.png"
                            />
                        </div>
                    </div>
                    <div :class="($mq =='mobile' || $mq == 'tablet') ? 'headerAlignMobile2' : 'headerNoAlignDesktop'">
                        <v-btn icon style="cursor: pointer;" href="https://www.facebook.com/pawntrust" target="_blank"><v-icon color="#F19B14" size="40">mdi-facebook</v-icon></v-btn>
                        <v-btn icon style="cursor: pointer;" href="https://twitter.com/dinewiseinc" target="_blank"><v-icon color="#F19B14" size="40">mdi-twitter</v-icon></v-btn>
                        <v-btn icon style="cursor: pointer;" href="https://www.instagram.com/dinewiseinc/" target="_blank"><v-icon color="#F19B14" size="40">mdi-instagram</v-icon></v-btn>
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
                token : '',
                search : '',
                showSignInSignUp: true,
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
                    // { title: 'Pawn It' },
                    { title: 'Sell It' },
                    // { title: 'Buy It' },
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
        mounted(){
            this.token = this.$cookies.get('token');
            this.name = this.$cookies.get('name');
            if (this.token) {
                this.showSignInSignUp = false;
            } else {
                this.showSignInSignUp = true;
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
                }).catch(error => {
                    console.log(error)
                })
            },
            SignIn(){
                this.$router.push({
                    name:'Login'
                }).catch(error => {
                    console.log(error)
                })
            },
            logOut(){
                this.$cookies.remove('token');
                this.$router.push({
                    name : 'Login'
                }).catch(error => {
                    console.log(error)
                })
            },
            SignUp(){
                this.$router.push({
                    name:'SignUp'
                }).catch(error => {
                    console.log(error)
                })
            },
            clickedProfile(){
                this.$router.push({
                    name : 'Profile'
                })
                .catch((error)=>{
                    console.log('error', error)
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
    display:flex; flex-direction : row;justify-content:space-around;align-items: center; width:100%;
}
.headerNoAlignDesktop{
    display: none;
}
.mobileLogo{
    width: 100%;display: flex;flex-direction: row; justify-content: center;align-items:center;
}

.DesktopLogo{
    width: 100%;display: flex;flex-direction: row; justify-content: center;align-items:center;
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