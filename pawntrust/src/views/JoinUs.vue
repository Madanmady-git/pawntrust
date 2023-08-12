<template>
    <div>
        <TopBar></TopBar>
        <div>
            <v-textfield>
                <div class="JoinUsMain">
                    <!-- <span style="font-size:1.8rem;font-weight:600;color:#F19B14">Join us</span> -->
                    <span>Thank You for your interest in the PawnTrust Marketplace. You are on your way to having your inventory displayed for the world to see! 
<br>Please fill out the information below</span>
                    <div class="container">
                        <v-card class = "cardStyle" style = "box-shadow: none;">
                            <span class="flexStart content">Business name</span>
                            <v-text-field v-model="name" flat solo outlined placeholder="Enter Business name"></v-text-field>
                            <span class="flexStart content">Email</span>
                            <v-text-field :rules="validateEmail" v-model="emailId" flat solo outlined placeholder="Enter Email"></v-text-field>
                            <v-btn
                            style="background-color:#F19B14;text-transform:capitalize;color:#FFF; width:100%;font-size:1rem;font-weight: 600;margin-bottom:40px"
                            @click="Submit()"
                            :disabled="(!emailId || !name || emailId == null || name == null || !isValidateEmail(emailId))"
                            :loading="loader"
                            >
                                Submit
                            </v-btn>
                        </v-card>
                    </div>
                </div>
            </v-textfield>
        </div>
        <div>
            <v-dialog
                v-model="dialog"
                max-width="500"
                persistent
                >
                <v-card height="200" style="display: flex;justify-content: center;align-items: center;text-align: left;padding: 0px 32px;"><span>Thank you for registering with Pawntrust Marketplace. Will be sending your pawnshop hyperlink soon to set up your profile. Thank you</span></v-card>
                <v-btn @click="visit()" color="#F19B14" dense solo flat><span style="color: #FFF;text-transform: capitalize;">Visit our site</span></v-btn>
            </v-dialog>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import TopBar from '../components/TopBarDummy.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
    export default {
        components : { TopBar, Footer},
        data: () => ({
            name: '',
            emailId: '',
            dialog: false,
            loader: false,
            validateEmail: [ 
                    v => !!v || 'Email is required',
                    v => (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(v)) || 'Enter valid Email'
                ],
        }),
        methods: {
            isValidateEmail(v){
                return (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(v));
            },
            visit(){
                window.open('https://pawntrust.com/');
            },
            Submit(){
                this.loader = true;
                let params = {
                    "name" : this.name,
                    "email" : this.emailId
                }
                axios.post('https://api.pawntrust.com/api/v1/interest', params)
                .then(response => {
                    console.log('response', response);
                    this.loader = false;
                    this.dialog = true;
                })
                .catch(error => {
                    console.log('error', error);
                    this.loader = false;
                    // this.dialog = true;
                })
            }
        },
    }
</script>
<style>
@media screen and (max-width:767px) {
    .JoinUsMain{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
    }
    .container{
        width: 85%;
    }
}

@media screen and (min-width:768px) {
    .JoinUsMain{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 74px;
    }
    .container{
        width: 40%;
    }
}
.flexStart{
    display: flex;
    justify-content: flex-start;
}
.content{
    font-weight:600;
}
</style>