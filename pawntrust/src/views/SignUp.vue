<template>
    <div>
        <TopBar></TopBar>
        <div class="LoginMain">
            <span style="font-size:1.8rem;font-weight:600;color:#F19B14">Create an Account</span>
            <div class="heightStyle">
                <v-card class = "cardStyle" style="box-shadow:none;">
                    <span class="flexStart content">Username</span>
                    <v-text-field flat solo outlined placeholder="Enter Username"></v-text-field>
                    <span class="flexStart content">Password</span>
                    <v-text-field flat solo outlined placeholder="Enter Password"></v-text-field>
                    <span class="flexStart content">Phone Number</span>
                    <v-text-field flat solo outlined placeholder="Enter Phone Number"></v-text-field>
                    <span class="flexStart content">Email</span>
                    <v-text-field flat solo outlined placeholder="Enter Email"></v-text-field>
                    <v-btn
                    style="background-color:#F19B14;text-transform:capitalize;color:#FFF; width:100%;font-size:1rem;font-weight: 600;margin-bottom:2%;"
                    >
                        Sign Up
                    </v-btn>
                    <span style="color:#F19B14">Already have an account?</span>
                    <span style="color:#F19B14">&nbsp; | &nbsp;</span>
                    <span ><a href="/login" style="color:#F19B14">Sign In</a></span>
                </v-card>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
export default {
        components : { TopBar, Footer },
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
        margin-top:2%;
    }

    .cardStyle{
        padding:6% 2%;
        box-shadow: none;
    }
}

@media screen and (min-width: 950px){
    .LoginMain{
        /* height: 60vh; */
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    .heightStyle{
        width:40%;
        /* margin-top:5%; */
    }

    .cardStyle{
        padding:2%;
        box-shadow: none;
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