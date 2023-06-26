<template>
    <div>
        <TopBar></TopBar>
        <div class="main">
            <div class="secondDivClass2">
                <div class="LoginMain">
                    <div class="heightStyle">
                        <v-card style = "padding:6% 0%;box-shadow: none;">
                            <span class="flexStart content">Firts Name<span style="color:red">*</span></span>
                            <v-text-field v-model="firstName" flat solo outlined placeholder="Enter Firts Name"></v-text-field>
                            <span class="flexStart content">Last Name<span style="color:red">*</span></span>
                            <v-text-field v-model="lastName" flat solo outlined placeholder="Enter Last Name"></v-text-field>
                            <span class="flexStart content">Mobile Number</span>
                            <v-text-field v-model="mobileNumber" flat solo outlined placeholder="Enter Mobile Number"></v-text-field>
                            <span class="flexStart content">Email<span style="color:red">*</span></span>
                            <v-text-field v-model="email" flat solo outlined placeholder="Enter Email"></v-text-field>
                        </v-card>
                    </div>
                    <div style="width: 100%;">
                        <v-btn :disabled="!firstName || !lastName || !email" block class="btnclass" @click = "Register()" style="width:100%; background-color:#F19B14;color:#FFF;">Register</v-btn>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog
            v-model="dialog"
            width="500"
            persistent
            
            >
            <v-card height="200" style="display: flex;justify-content: center;align-items: center;text-align: left;padding: 0px 32px;"> Verification mail has been sent to your registered mail , please check</v-card>
            </v-dialog>
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
        components : { TopBar, Footer },
        data() {
            return { 
                move: 1,
                firstName : '',
                lastName : '',
                mobileNumber: '',
                email: '',
                dialog: false
             }
            },
        methods:{
            Register(){
                let payload = {
                    "email" : this.email,
                    "firstName" : this.firstName,
                    "lastName" : this.lastName
                }
                axios.post('https://api.pawntrust.com/api/v1/register', payload)
                .then(response => {
                    console.log('response', response);
                    this.$cookies.set('authorized' , true)
                    this.dialog= true;
                })
                .catch(error => {
                    console.log('error', error)
                })
            }
        }
    }
</script>

<style scoped>

.flexStart{
    display: flex;
    justify-content: flex-start;
}

.content{
    font-weight:600;
}
/* mobile */
@media screen and (max-width:500px){
    .main{
        display: flex;
        flex-direction: column;
        width:100% !important;
    }
    .secondDivClass{
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    box-shadow: none;
    }

    .secondDivClass2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .options{
    display: flex;
    flex-direction: column;
    }

    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    /* width:40%; */
    margin: 2% 0%;
    }

    .LoginMain{
         width:80%;
        /* margin:0px auto; */
        /* height: 100vh; */
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .heightStyle{
        width:100%;
        margin-top:5%;
    }

    .heightStyleOTP{
        width:80%;
    }
    
}

/* desktop */
@media screen and (min-width:501px){
    .main{
        width:100%;
        display: flex;
        flex-direction: row;
        width:100% !important;
        /* height: 60vh; */
    }
    .secondDivClass{
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .secondDivClass2{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 0%;
    }

    .options{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    }

    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    width:40%;
    margin: 2% 0%;
    }

    .LoginMain{
        width: 40%;
        /* height: 60vh; */
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .heightStyle{
        width:100%;
        /* margin-top:5%; */
    }
    .heightStyleOTP{
        width:40%;
    }
}


.flexCol{
    display: flex;
    flex-direction: column;
}
.flexRow{
    display: flex;
    flex-direction: row;
}
.insideNumber{
    background-color:#F19B14; 
    color:#FFF;
}

.stepsClass{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:auto;
}

.fullWidthandHeight{
    width:100% !important;
    height: 60vh;
}

.alignLeftClass{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    text-align: left;
}

</style>
