<template>
    <div>
        <TopBar></TopBar>
        <div>
            <v-textfield>
                <div class="JoinUsMain">
                    <span style="font-size:1.8rem;font-weight:600;color:#F19B14">Join us</span>
                    <div class="container">
                        <v-card class = "cardStyle" style = "box-shadow: none;">
                            <span class="flexStart content">Business name</span>
                            <v-text-field v-model="name" flat solo outlined placeholder="Enter Business name"></v-text-field>
                            <span class="flexStart content">Email</span>
                            <v-text-field :rules="validateEmail" v-model="emailId" flat solo outlined placeholder="Enter Email"></v-text-field>
                            <v-btn
                            style="background-color:#F19B14;text-transform:capitalize;color:#FFF; width:100%;font-size:1rem;font-weight: 600;margin-bottom:40px"
                            @click="Login()"
                            :disabled="(!emailId || !name || emailId == null || name == null || !isValidateEmail(emailId))"
                            :loading="loginLoader"
                            >
                                Submit
                            </v-btn>
                        </v-card>
                    </div>
                </div>
            </v-textfield>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer},
        data: () => ({
            name: '',
            emailId: '',
            validateEmail: [ 
                    v => !!v || 'Email is required',
                    v => (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(v)) || 'Enter valid Email'
                    ],
        }),
        methods: {
            isValidateEmail(v){
                return (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(v));
            }
        }
    }
</script>
<style>
@media screen and (max-width:767px) {
    .JoinUsMain{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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