<template>
    <div>
        <TopBar :profileName = "name"></TopBar>
        <div style="padding: 0px 64px;">
            <div style="display: flex;justify-content: flex-start;">
                <span style="font-size:x-large;font-weight: 600;">My Profile</span>
            </div>
            <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
                <div v-for="(card,index) in cardItems" :key="index">
                    <v-card
                    @click="setActiveCard(card.name)"
                    :style="(activeCard == card.name) ? 'border:3px #F19B14 solid' : ''" style="height:100px;width:300px;display: flex;flex-direction: column; justify-content: center;align-items: center;margin: 32px 0px;border-radius: 8px;">
                        <v-icon :color="activeCard == card.name ? '#F19B14' : ''">{{ card.icon }}</v-icon>
                        <span>{{ card.name }}</span>
                    </v-card>
                </div>
            </div>
            <div>
                <div v-if="contentLoader" class="text-center" style="height: 50vh;display: flex;align-items: center;justify-content: center;">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </div>
                <div v-else>
                    <div v-if="activeCard == 'Profile'">
                        <div style="display: flex;flex-direction: row;justify-content:center;align-items: center;">
                            <div style="display: flex;flex-direction: column;align-items: flex-start;width:30%">
                                <span class="flexStart content">Business Name</span>
                                <v-text-field v-model="name" :value="name" :disabled="clickedUpdate" flat solo outlined placeholder="Enter First Name" style="width:100%;"></v-text-field>
                                <span class="flexStart content">Mobile Number</span>
                                <v-text-field v-model="mobileNumber" :value="mobileNumber" :disabled="clickedUpdate" flat solo outlined placeholder="Enter Mobile Number" style="width:100%;"></v-text-field>
                                <span class="flexStart content">Email</span>
                                <v-text-field v-model="emailId" :value="emailId" :disabled="clickedUpdate" flat solo outlined placeholder="Enter Email" style="width:100%;"></v-text-field>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: row;justify-content:center;align-items: center;">
                            <div style="display: flex;flex-direction: row;justify-content:space-evenly;align-items: center;margin-bottom: 64px;width: 30%;">
                                <div style="width:20%">
                                    <v-btn block color="#F19B14"
                                    :disabled="!clickedUpdate"
                                    @click="update()"
                                    >
                                        <span style="color:#FFF">Update</span>
                                    </v-btn>
                                </div>
                                <div style="width:20%">
                                    <v-btn block color="#F19B14" 
                                    :disabled="clickedUpdate"
                                    @click="save()">
                                        <span style="color:#FFF">Save</span>
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeCard == 'Products'">
                        <div v-if="productdetails?.length > 0" style="display: flex;flex-wrap: wrap;background-color: rgb(243, 237, 237);border-radius: 8px;">
                            <div v-for="product,index in productdetails" :key="index">
                                <ProductCard style = "margin: 16px" :product = product />
                            </div>
                        </div>
                        <div v-else>
                            <div style="min-height: 40vh;display: flex;justify-content: center;align-items: center;">
                                <span style="color: #000;">No products have been uploaded</span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeCard == 'Orders'">
                        <div v-if="orders?.length > 0" style="display: flex;flex-wrap: wrap;background-color: rgb(243, 237, 237);border-radius: 8px;">
                            <div v-for="order,index in orders" :key="index">
                            </div>
                        </div>
                        <div v-else>
                            <div style="min-height: 40vh;display: flex;justify-content: center;align-items: center;">
                                <span style="color: #000;">No orders found</span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeCard == 'Change Password'">
                        <div style="display: flex;flex-direction: row;justify-content:center;align-items: center;">
                            <div v-if="!password" style="display: flex;flex-direction: column;align-items: flex-start;width:30%">
                                <span class="flexStart content">Old Password <span style="color:red;">*</span></span>
                                <v-text-field  flat solo outlined placeholder="Enter Old Password" style="width:100%;"></v-text-field>
                                <span class="flexStart content">New Password<span style="color:red;">*</span></span>
                                <v-text-field flat solo outlined placeholder="Enter New Password" style="width:100%;"></v-text-field>
                                <span class="flexStart content">Confirm Password<span style="color:red;">*</span></span>
                                <v-text-field type="password" flat solo outlined placeholder="Confirm Password" style="width:100%;"></v-text-field>
                            </div>
                            <div v-else style="display: flex;flex-direction: column;align-items: flex-start;width:30%">
                                <span class="flexStart content">Enter OTP sent to your mobile number</span>
                                <v-otp-input
                                length="6"
                                ></v-otp-input>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: row;justify-content:space-evenly;align-items: center;margin-bottom: 64px;">
                            <div style="width:20%">
                                <v-btn block color="#F19B14"
                                @click="changePassword()"
                                >
                                    <span style="color:#FFF">Change Password</span>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import axios from 'axios';
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
import ProductCard from './ProductCard.vue';
    export default {
        components : { TopBar, Footer, ProductCard},
        data(){
            return {
                dialog : true,
                activeCard:'Profile',
                clickedUpdate : true,
                password : false,
                token : '',
                name: '',
                mobileNumber : '98756543210',
                emailId: '',
                contentLoader: false,
                orders : [],
                cardItems : [
                    {
                        icon : 'mdi-account-circle',
                        name : 'Profile'
                    },
                    {
                        icon : 'mdi-bag-checked',
                        name : 'Products'
                    },
                    {
                        icon : 'mdi-cart-check',
                        name : 'Orders'
                    },
                    {
                        icon : 'mdi-key-change',
                        name : 'Change Password'
                    },
                ],
                productdetails : [
                    {
                        imageUrls : ['https://www.dpreview.com/files/p/articles/5473139871/DEBF2BEA-C0A2-482F-B66C-9071BC523CB8.png'],
                        price : '999',
                        name : 'iPhone 14 pro'
                    },
                    {
                        imageUrls : ['https://www.dpreview.com/files/p/articles/5473139871/DEBF2BEA-C0A2-482F-B66C-9071BC523CB8.png'],
                        price : '999',
                        name : 'iPhone 14 pro'
                    },
                    {
                        imageUrls : ['https://www.dpreview.com/files/p/articles/5473139871/DEBF2BEA-C0A2-482F-B66C-9071BC523CB8.png'],
                        price : '999',
                        name : 'iPhone 14 pro'
                    },
                    {
                        imageUrls : ['https://www.dpreview.com/files/p/articles/5473139871/DEBF2BEA-C0A2-482F-B66C-9071BC523CB8.png'],
                        price : '999',
                        name : 'iPhone 14 pro'
                    },
                    {
                        imageUrls : ['https://www.dpreview.com/files/p/articles/5473139871/DEBF2BEA-C0A2-482F-B66C-9071BC523CB8.png'],
                        price : '999',
                        name : 'iPhone 14 pro'
                    },
                    ,
                    {
                        imageUrls : ['https://www.dpreview.com/files/p/articles/5473139871/DEBF2BEA-C0A2-482F-B66C-9071BC523CB8.png'],
                        price : '999',
                        name : 'iPhone 14 pro'
                    },
                    {
                        imageUrls : ['https://www.dpreview.com/files/p/articles/5473139871/DEBF2BEA-C0A2-482F-B66C-9071BC523CB8.png'],
                        price : '999',
                        name : 'iPhone 14 pro'
                    }
                ]
            }
        },
        mounted(){
            this.token = this.$cookies.get('token');
            if (!this.token) {
                this.$router.push({
                    name : 'Home'
                })
            } else {
                this.getProfileDetails();
            }
        },
        methods : {
            goHome(){
                this.$router.push({
                    name:'Home'
                })
            },
            getProfileDetails(){
                this.contentLoader = true;
                let headers = {
                    'Authorization' :  `Bearer ${this.token}`
                }
                console.log('headers', headers)
                axios.get('https://api.pawntrust.com/api/v1/getProfile', {headers : headers})
                .then(response => {
                    this.contentLoader = false;
                    this.name = response.data.username;
                    this.emailId = response.data.email;
                })
                .catch(error => {
                    console.log('error', error)
                    this.contentLoader = false;
                })
            },
            setActiveCard(name){
                this.contentLoader = true;
                this.activeCard = name;
                if(this.activeCard == 'Products'){
                    let headers = {
                        'Authorization' :  `Bearer ${this.token}`
                    }
                    axios.get('https://api.pawntrust.com/api/v1/sellIt', {headers : headers})
                    .then(response => {
                        this.productdetails = response.data.items;
                        this.contentLoader = false;
                    })
                    .catch(error => {
                        console.log('error', error)
                        this.contentLoader = false;
                    })
                } else {
                    this.contentLoader = false;
                }
            },
            update(){
                this.clickedUpdate = false;
            },
            save(){
                this.clickedUpdate = true;
            },
            changePassword(){
                this.password = true;
            }
        }
    }
</script>

<style>
.activeCard{
    border: 2px #F19B14 solid;
}
</style>