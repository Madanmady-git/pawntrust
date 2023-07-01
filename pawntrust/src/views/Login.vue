<template>
    <div>
        <TopBar></TopBar>
        <div class="LoginMain">
            <span style="font-size:1.8rem;font-weight:600;color:#F19B14">Login to your Account</span>
            <div class="heightStyle">
                <v-card class = "cardStyle" style = "box-shadow: none;">
                    <span class="flexStart content">Email</span>
                    <v-text-field v-model="emailId" flat solo outlined placeholder="Enter Email"></v-text-field>
                    <span class="flexStart content">Password</span>
                    <v-text-field 
                    :type="show1 ? 'text' : 'password'" 
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    v-model="password" flat solo outlined placeholder="Enter Password"></v-text-field>
                    <v-btn
                    style="background-color:#F19B14;text-transform:capitalize;color:#FFF; width:100%;font-size:1rem;font-weight: 600;margin-bottom:2%;"
                    @click="Login()"
                    :disabled="(emailId == null || password == null)"
                    :loading="loginLoader"
                    >
                        Login
                    </v-btn>
                    <span ><a href="/searchDetails" style="color:#F19B14">Forgot Password</a></span>
                    <span style="color:#F19B14">&nbsp; | &nbsp;</span>
                    <span ><a href="/signup" style="color:#F19B14">Sign Up</a></span>
                    <div style="display:flex; justify-content:center; margin-top: 10px;" id="buttonDiv"></div>
                </v-card>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script>
import axios from 'axios';
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components : { TopBar, Footer },
    data: () => ({
            token : 'Hello',
            emailId : '',
            password : '',
            loginLoader: false,
            show1: false
        }),
    mounted(){
        console.log("In mounted now")
        console.log('check' , this.token)
            
          google.accounts.id.initialize({
            client_id: "322547822846-168ib8tuqi7kriovdn7dbhl50t966ipp.apps.googleusercontent.com",
            callback: data => this.handleCredentialResponse(data)
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "filled_blue", size: "large"}  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
    },
    methods:{
        handleCredentialResponse(response) {
            console.log("Encoded JWT ID token: " + response.credential);
            this.token = response.credential
            console.log("token" , this.token)
            this.$router.push({
                name:'Home',
            })
        },
        Login(){
            this.loginLoader = true;
            let headers = {
                "userName" : this.emailId,
                "password" : this.password
            }
            axios.post('https://api.pawntrust.com/api/v1/login',{}, {headers: headers})
            .then(response => {
                this.loginLoader = false;
                console.log('response', response);
                let token = response.data.access_token;
                this.$cookies.set('token' , token, response.data.expires_in);
                this.$emit('setAuthorized');
                this.$router.push({
                    name: 'Home'
                })
            })
            .catch(error => {
                this.loginLoader = false;
                console.log('error', error)
            })
        }
    }
}
</script>

<style scoped>

@media screen and (max-width: 950px){
    .LoginMain{
        /* width:80%;
        margin:0px auto; */
        /* height: 100vh; */
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .heightStyle{
        width:80%;
        margin-top:5%;
    }
    .cardStyle{
        padding:6% 2%;
    }
}

@media screen and (min-width: 950px){
    .LoginMain{
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .heightStyle{
        width:40%;
        /* margin-top:5%; */
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


.flexStart{
    display: flex;
    justify-content: flex-start;
}

.content{
    font-weight:600;
}
</style>