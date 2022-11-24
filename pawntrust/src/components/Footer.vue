<template>
    <div class="footerMain">
        <!-- <div v-if="$mq == 'desktop'" class="flexrow" style="width:100%; justify-content: space-evenly;">
            <span class="footerName">HOME</span>
            <span class="footerName">ABOUT US</span>
            <span class="footerName">FEATURES</span>
            <span class="footerName">SEARCH</span>
            <span class="footerName">PAWN IT</span>
            <span class="footerName">SELL IT</span>
            <span class="footerName">BLOG</span>
            <span class="footerName">INVESTOR RELATIONS</span>
            <span class="footerName">CONTACT US</span>
        </div>
        <div v-if="$mq == 'desktop'">
            <v-divider class="dividerClass"></v-divider>
        </div> -->
        <div class="footerSubMain">
            <div class="flexStart footerDivision">
                <div >
                    <img src="https://pawntrust.com/wp-content/uploads/2022/10/footer-logo.png" />
                </div>
                <div>
                    <span class="footerName1">© 2022 Pawn Trust. All Rights Reserved</span>
                </div>
            </div>
            <div class="footerDivision">
                <div class="addressFooter">
                    <span class="footerName" >OFFICE LOCATION</span>
                </div>
                <div style="display: flex;flex-direction: row;">
                    <v-icon color="#F19B14">mdi-map-marker</v-icon>
                    <span class="flexStart footerName1">PawnTrust, Inc 730 Peachtree Street NE Suite 570 Atlanta, Georgia 30308</span>
                </div>
            </div>
            <div class="footerDivision">
                <div>
                    <span class="footerName">CONTACT US</span>
                </div>
                <div class="footerName">
                    <v-icon color="#F19B14">mdi-phone</v-icon>
                    <span class="footerName">(888)-243-2680</span>
                </div>
                <div class="footerName">
                    <v-icon color="#F19B14">mdi-email</v-icon>
                    <span class="footerName">info@pawntrust.com</span>
                </div>
                <div>

                </div>
            </div>
            <div class="footerDivision">
                <div style="width:50%; display:flex;flex-direction:column;align-items: center;">
                    <div style="display: flex;flex-direction: row;justify-content:space-between;">
                        <v-icon class="socialMedia">mdi-facebook</v-icon>
                        <v-icon class="socialMedia">mdi-google</v-icon>
                    </div>
                    <div style="display: flex;flex-direction: row;justify-content:space-between;">
                        <v-icon class="socialMedia">mdi-twitter</v-icon>
                        <v-icon class="socialMedia">mdi-youtube</v-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
@media screen and (max-width:500px) {
    .desktop{
        display: none;
    }

    .footerMain{
        background-color:#0E2334; 
        padding: 3%;
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .footerSubMain{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:80%;
    }
    .footerDivision{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:5% 2%;
    }

    .addressFooter{
    }

    .contactusFooter{
        /* align-items: left; */
    }

    .footerName1{
        color: #FFFFFF;
    }
}

@media screen and (min-width:501px) {
    .mobile{
        display: none;
    }

    .footerMain{
        background-color:#0E2334; 
        padding: 3%;
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .footerSubMain{
        width:80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .footerDivision{
        width:20% ;
        display: flex;
        flex-direction: column;
    }
    .addressFooter{
        display:flex; 
        justify-content:flex-start;
    }
    .footerName1{
        color: #FFFFFF;
        text-align: left;
    }
    .contactusFooter{
        align-items: left;
    }
}
.flexrow{
    display: flex;
    flex-direction: row;
}
.flexCenter{
    display: flex;
    justify-content: center;
    /* align-items: center; */
}
.footerName{
    color: #FFFFFF;
    font-size:1rem;
    font-weight: 600;
    padding: 1% 0%;
}
.dividerClass{
    color:#FFFFFF;
    border-bottom: 5px solid red;
}

.flexStart{
    justify-content: flex-start !important;
}
.footerName1{
    color: #FFFFFF;
    text-align: left;
}

.socialMedia{
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    padding: 8%;
    color:#FFFFFF;
}
</style>