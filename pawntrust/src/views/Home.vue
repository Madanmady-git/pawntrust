<template>
    <div>
        <div style="display:flex; flex-direction : row;justify-content:center; width: 100%;padding: 8px;">
            <div style="width: 30%;display: flex;justify-content: center;align-items:center;">
                <img 
                    src="https://pawntrust.com/wp-content/uploads/2022/10/header-logo.png"
                />
            </div>
            <div style="width: 70%;">
                <div style="display:flex; flex-direction : row;justify-content:center;padding:14px">
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%">
                        <v-avatar
                        color="#F19B14"
                        size="36"
                        >
                        <v-icon
                            small
                            color="#FFFFFF"
                            >
                            mdi-email
                        </v-icon>
                        </v-avatar>
                        <div class="emailandPhone">
                            <span>info@pawntrust.com</span>
                        </div>
                    </div>
                    <v-divider vertical style="margin:0% 2%"></v-divider>
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%">
                        <v-avatar
                        color="#F19B14"
                        size="36"
                        >
                            <v-icon
                                small
                                color="#FFFFFF"
                                >
                                mdi-phone
                            </v-icon>
                        </v-avatar>
                        <div style="font-size:16px; font-weight:900" class="emailandPhone">
                            <span>(888)-243-2680</span>
                        </div>
                    </div>
                    <v-divider vertical style="margin:0% 2%"></v-divider>
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%">
                        <v-avatar
                        color="#F19B14"
                        size="36"
                        >
                            <v-icon
                                small
                                color="#FFFFFF"
                                >
                                mdi-magnify
                            </v-icon>
                        </v-avatar>
                        <div style="margin-left:10%">
                            <v-text-field
                                label="Search"
                                solo
                                flat
                                style="border : 1.5px solid orange"
                                hide-details
                                dense
                            ></v-text-field>
                        </div>
                    </div>  
                </div>
                <v-divider></v-divider>
                <div class="commonHeaderClass">
                        <Heading :heading-name="'Home'"/>
                        <Heading :heading-name="'About us'"/>
                        <Heading :heading-name="'Features'"/>
                        <Heading :heading-name="'Search'"/>
                        <Heading :heading-name="'Pawn It'"/>
                        <Heading :heading-name="'Sell It'"/>
                        <Heading :heading-name="'Investor Relations'"/>
                        <Heading :heading-name="'Contact us'"/>
                </div>
            </div>
        </div>
        <div>
            <span style="font-size:2rem;font-weight:600; color:#000000">Industry</span>
            <span style="font-size:2rem;font-weight:500; color:#F19B14">&nbsp; Services</span>
            <v-divider style="border-top:3.5px solid orange; width:4%; margin:auto; margin-top:10px;"></v-divider>
        </div>
        <div >
            <v-row cols="8" style="display:flex; flex-direction:row; justify-content:center;">
                <v-col cols="2">
                    <div style="display:flex; flex-direction:column;">
                        <img
                        style="width:100%; height:auto;padding:10% 4%;"
                        src = "../assets/pawnshops.png"/>
                        <span style="font-size:1.1rem;font-weight:550; color:#0E2334">Pawn Shops</span>
                        <v-divider style="border-top:3.5px solid orange; width:15%; margin:auto; margin-top:10px;margin-bottom: 20px;"></v-divider>
                        <p style="text-align:left;">{{pawnshopsparagraph}}</p>
                        </div>
                </v-col>
                <v-col cols="2">
                    <div>
                        <img
                        style="width:100%; height:auto;padding:10% 4%;"
                        src = "../assets/Titlepawncompanies.png"/>
                        <span style="font-size:1.1rem;font-weight:550; color:#0E2334">Title Pawn Companies</span>
                        <v-divider style="border-top:3.5px solid orange; width:15%; margin:auto; margin-top:10px;margin-bottom: 20px;"></v-divider>
                        <p style="text-align:left;">{{pawncompaniesparagraph}}</p>
                    </div>
                </v-col>
                <v-col cols="2">
                    <div>
                        <img
                        style="width:100%; height:auto;padding:10% 4%;"
                        src = "../assets/microlending.png"/>
                        <span style="font-size:1.1rem;font-weight:550; color:#0E2334">Microlending</span>
                        <v-divider style="border-top:3.5px solid orange; width:15%; margin:auto; margin-top:10px;margin-bottom: 20px;"></v-divider>
                        <p style="text-align:left;">{{microlendingparagraph}}</p>
                    </div>
                </v-col>
                <v-col cols="2">
                    <div>
                        <img 
                        style="width:100%; height:auto;padding:10% 4%;"
                        src = "../assets/nonfungible.png"/>
                        <span style="font-size:1.1rem;font-weight:550; color:#0E2334">Non-Fungible Tokens</span>
                        <v-divider style="border-top:3.5px solid orange; width:15%; margin:auto; margin-top:10px;margin-bottom: 20px;"></v-divider>
                        <p style="text-align:left;">{{nonfungibleparagraph}}</p>
                    </div>
                </v-col>
            </v-row>
        </div>
        <div style="display:flex; flex-direction:row;">
            <img src ="https://pawntrust.com/wp-content/uploads/2022/10/about-1-img.png"/>
            <div style="background-color: #F19B14;width:100%;display: flex;justify-content: center;flex-direction: column;">
                <span style="font-size:2rem; font-weight:600;color:#FFFFFF;display: flex; justify-content: flex-start;padding: 0px 4%;">About Us</span>
                <v-divider style="border-top:3.5px solid #FFFFFF; width:8%;margin-top:1%;display: flex; justify-content: flex-start;margin: 0px 4%;"></v-divider>
                <p style="color:#FFFFFF; text-align:left;padding: 2% 4%;">
                    {{aboutusparagraph}}
                </p>
                <v-btn 
                style="margin: 0px 4%;"
                    rounded
                    color="#0E2334;"
                    dark
                    width="20%"
                    height="8%"
                    left
                >
                LEARN MORE
                <v-icon
                    right
                    dark
                >
                mdi-chevron-right-circle
                </v-icon>
                </v-btn>
            </div>
        </div>
        <div>
            <div style="display:flex;flex-direction: row; justify-content:center;align-items:center;">
                <div style="width:50%;">
                    <span style="font-size:2rem;font-weight:600; color:#000000">Investor</span>
                    <span style="font-size:2rem;font-weight:500; color:#F19B14">&nbsp; Relations</span>
                    <v-divider style="border-top:3.5px solid orange; width:10%;margin:auto; 0px 4%; margin-top:10px; margin-bottom:10px;"></v-divider>
                    <v-btn
                        style="margin: 0px 4%;"
                            rounded
                            color="#0E2334;"
                            dark
                            left
                        >
                        LEARN MORE
                        <v-icon
                            right
                            dark
                        >
                        mdi-chevron-right-circle
                        </v-icon>
                    </v-btn>
                </div>
            
                <div style="width:50%; height:100%;padding:8% 0%">
                    <v-avatar
                    size="80%"
                    >
                        <img src="https://pawntrust.com/wp-content/uploads/2022/10/investor-img.png"
                    />
                    </v-avatar>
                </div>
            </div>
        </div>
        <div style="background-color:#F19B14; margin-top:4%;">
            <span style="font-size:2rem;font-weight:600; color:#FFFFFF;">Contact Us</span>
            <v-divider style="border-top:3.5px solid #FFFFFF; width:8%;margin-top:1%;margin:auto;margin-bottom: 2%;"></v-divider>
            <div style="display:flex; flex-direction:column;align-items: center;">
                <div style="display:flex; flex-direction:row;justify-content: space-around;width:80%">
                    <div style="width:45%">
                        <v-text-field
                        label="First Name"
                        solo 
                        flat
                        append-icon="mdi-account"
                        >
                        </v-text-field>
                    </div>
                    <div style="width:45%">
                        <v-text-field
                        label="Last Name"
                        solo 
                        flat
                        append-icon="mdi-account"
                        >
                        </v-text-field>
                    </div>
                </div>
                <div style="display:flex; flex-direction:row;justify-content: space-around;width:80%">
                    <div style="width:45%">
                        <v-text-field
                        label="Email Address"
                        solo 
                        flat
                        append-icon="mdi-email"
                        >
                        </v-text-field>
                    </div>
                    <div style="width:45%">
                        <v-text-field
                        label="Phone Number"
                        solo 
                        flat
                        append-icon="mdi-phone"
                        >
                        </v-text-field>
                    </div>
                </div>
                <div style="width:76%">
                    <v-textarea
                    solo
                    label="Message"
                    flat
                    >
                    </v-textarea>
                </div>
                <div style="display:flex;flex-direction:column; align-items:flex-start;width:76%">
                    <div>
                        <span style="font-weight:600;font-size: 1.2rem;color: #000000;">Captcha</span>
                        <span style="color:red;font-weight:600;font-size: 1.2rem;">*</span>
                    </div>
                    <div style="display:flex; flex-direction:row;">
                        <div style="display:flex;justify-content:center;align-items:center; ">
                            <span > 3 + 4 = </span>
                        </div>
                        <v-text-field
                        solo
                        flat
                        hide-details
                        size="1%"
                        >
                        </v-text-field>
                    </div>
                </div>
            </div>
            <div>
                <v-btn 
                style="margin: 0px 4%;"
                    rounded
                    color="#0E2334;"
                    dark
                    left
                >
                Submit Now
                <v-icon
                    right
                    dark
                >
                mdi-chevron-right-circle
                </v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from '../components/Headings.vue';
    
    export default {
        components: { Heading },
        data: () => ({
            pawnshopsparagraph : "We will bring the pawn shop online, providing worldwide access through our app. This gives the customer the ability to do business online, rather than the traditional method of walking into a brick-and-mortar shop, where there is substandard service and embarrassment from face-to-face contact. The app will further collaborate worldwide inventory giving the individual Pawn Shop exponential exposure.Moreover, this app allows a consumer to take a picture of their item and get a quote instantaneously. They will have the option to choose whether to “sell” or “pawn” the item. Once that choice is made, a shipping label will be generated for the item to arrive in our distribution center in Atlanta, Georgia. Once the product is received, it is checked and verified for authenticity. Once verified it is sent to audit where “Pawn” or Buy” contracts are initiated and the consumer e-sign the appropriate document directly on the app. Payment will then be issued immediately through the blockchain (cryptocurrency), Paypal, debit card, or ACH.With respect to PawnTrust’s Global Inventory, we will utilize the latest software that automatically prices items being sold through artificial intelligence.",
            pawncompaniesparagraph : "Our app “TitlePawn” allows anyone with a free, clear auto title the ability to get cash in minutes. Once an application is received, the applicant is verified through the app. These algorithms range from customer verification, and the ability to pay as well as vehicle inspection. After verifying this information and upon approval, money is immediately deposited via the blockchain (cryptocurrency), Paypal, debit card, or ACH.",
            microlendingparagraph : "PawnTrust will lend capital to small businesses. These loans will be based on the consumer’s monthly revenues. PawnTrust will purchase revenue streams at a discounted rate that allows its consumers immediate capital to grow their business. Our virtual underwriting method can approve our clients and fund the same day.",
            nonfungibleparagraph : "With the NFT on the blockchain, we can put any product from any pawn shop nationwide as a Non-fungible token. This way you get millions of views to buy immediately through crypto. This will turn PawnTrust into a pawn shop market place for people to buy and sell…world wide.",
            aboutusparagraph: "PawnTrust is a data intelligence platform in the pawn and microlending vertical.  Our mission is to provide a trusted platform in the business of lending monies to the masses using a list of verified pawn brokers and lenders across the United States, providing capital to individuals to help meet short-term financial needs while combining technology and data to transform the industry. PawnTrust, through its verified pawn brokers, will create a worldwide marketplace for all pawn inventory that can be bought and sold through an app accessible across the country."
        }),
  }
</script>

<style scoped>
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
    font-weight: 500;
}

.avatarClass {
    display:flex;flex-direction: row; justify-content:center;
}
</style>

