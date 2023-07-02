<template>
    <div >
        <TopBar></TopBar>
        <v-divider></v-divider>
        <!-- <div style="padding:0% 7%;">
            <div >
                <div class="flexCenter">
                    <img style="width: 25%;margin:auto;padding: 2%;" src="../assets/sellit.png"/>
                </div>
            </div>
            <div style="width: 40%;margin:auto;padding: 2% 0% 0% 0%;">
                <template >
                    <v-file-input
                        placeholder="Select file to sell it"
                        outlined
                        dense
                        prepend-inner-icon="mdi-upload"
                        prepend-icon=""
                        color="#F19B14"
                        background-color="#FFFFFF"
                        height="20"
                    ></v-file-input>
                </template>
            </div>
            <div style="text-align:left;">
                <span style="font-size:2.3rem;font-weight:600;">Sell It</span>
            </div>
            <div class="stepper">
                <div>
                    <v-stepper v-model="move" style="box-shadow:none;" alt-labels>
                    <v-stepper-header style="box-shadow:none;">
                        <v-stepper-step :complete="move > 1" step="1">
                            <small>Information</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="move > 2" step="2">
                            <small>Category</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="move > 3" step="3">
                            <small>Upload</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="4" :complete="(move > 4)">
                            <small>Personal Information</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="5" :complete="(move > 5)">
                            <small>Verification</small>
                        </v-stepper-step>
                    </v-stepper-header>
                    </v-stepper>
                </div>
            </div>
            <div>
                <div v-if="(move == 1)" style="text-align:left;">
                    <span style="font-size:1rem;color:#000000; font-weight:600;">Welcome to PawnTrust and thank you for choosing us for your pawn needs!</span>
                    <br>
                    <br>
                    <span style="font-size:1rem;color:#000000;  font-weight:600;">As you have chosen to sell your item, we have made this process as effortless and quicker than ever thought possible. In fact, our revolutionary process is the first of its kind in the pawn industry.</span>
                    <br>
                    <br>
                    <span style="font-size:1rem;color:#000000;  font-weight:600;">Simply take a photo of the item you wish to sell and it will be sent to the Pawntrust market place with over 7825 verified pawnshops to give you an <span style="font-size: 1.5rem;">OFFER</span> on it.</span>
                    <br>
                    <br>
                    <span style="font-size:1rem;color:#000000;  font-weight:600;">The highest <span style="font-size: 1.5rem;">OFFER</span> will win the item. All <span style="font-size: 1.5rem;">OFFERS</span> will be live with a 5 minute window for the transaction. All transactions will be private between the pawnshops and the consumers.</span>
                    <br>
                    <br>
                    <span style="font-size:1rem;color:#000000;  font-weight:600;">We appreciate your business.</span>
                    <br>
                    <br>
                </div>
                <div v-else-if="(move == 2)" class="outerMenuContent">
                    <div class="menuContent">
                        <v-btn block outline class="btnclass" :color="(category == 'Watches') ? 'orange' : ''" @click = "clickedCategory('Watches')">Watches</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'Jewellery') ? 'orange' : ''" @click = "clickedCategory('Jewellery')">Jewellery</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'Gold') ? 'orange' : ''" @click = "clickedCategory('Gold')">Gold</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'White Gold') ? 'orange' : ''" @click = "clickedCategory('White Gold')">White Gold</v-btn>
                        <v-btn block outline class="btnclass" :color="(category == 'Diamonds') ? 'orange' : ''" @click = "clickedCategory('Diamonds')">Diamonds</v-btn>
                    </div>
                </div>
                <div v-else-if="(move == 3)" class="uploadStyle">
                    <div class="uploadPage">
                        <div class="cardUpload">
                            <v-card min-height="30px" class="btnclass" style="background-color:#F19B14;color:#FFF;display: flex; flex-direction: row; justify-content: center;align-items: center;box-shadow: none;width: auto;">&nbsp; &nbsp;File upload&nbsp;<v-icon small color="#FFF">mdi-upload</v-icon> &nbsp;&nbsp;</v-card>
                            <div style="display:flex; alignItems:center;height: 80%; border:2px grey solid;border-radius: 10px;">
                                <v-file-input
                                    multiple
                                    v-model="choosenFile1"
                                    placeholder="Click to upload from device"
                                    solo
                                    flat
                                    dense
                                ></v-file-input>
                            </div>
                        </div>
                        <div class="cardUpload">
                            <v-card min-height="30px" class="btnclass" style="background-color:#F19B14;color:#FFF;display: flex; flex-direction: row; justify-content: center;align-items: center;box-shadow: none;width: auto;"> &nbsp;&nbsp;Camera&nbsp;<v-icon small color="#FFF">mdi-camera</v-icon> &nbsp;&nbsp;</v-card>
                            <div style="display:flex; alignItems:center;height: 80%; border:2px grey solid;border-radius: 10px;">
                                <v-file-input
                                    multiple
                                    solo
                                    flat
                                    dense
                                    v-model="choosenFile2"
                                    placeholder="Click here to open Camera"
                                    capture="user"
                                    accept="image/*"
                                >hi</v-file-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="(move == 4)">
                    <div class="LoginMain">
                        <div class="heightStyle">
                            <v-card style = "padding:6% 0%;box-shadow: none;">
                                <span class="flexStart content">Username</span>
                                <v-text-field flat solo outlined placeholder="Enter Username"></v-text-field>
                                <span class="flexStart content">Password</span>
                                <v-text-field flat solo outlined placeholder="Enter Password"></v-text-field>
                                <span class="flexStart content">Mobile Number</span>
                                <v-text-field flat solo outlined placeholder="Enter Mobile Number"></v-text-field>
                                <span class="flexStart content">Email</span>
                                <v-text-field flat solo outlined placeholder="Enter Email"></v-text-field>
                            </v-card>
                        </div>
                    </div>
                </div>
                <div v-else-if="(move == 5)" class="LoginMain">
                    <div class="heightStyleOTP">
                        <v-card style = "padding:6% 0%;box-shadow: none;">
                            <span class="flexStart content">OTP</span>
                            <v-text-field flat solo outlined placeholder="Enter Username"></v-text-field>
                            <v-otp-input
                                length="4"
                            ></v-otp-input>
                        </v-card>
                    </div>
                </div>
            </div>
            <div>
                <div class="buttonsAlign">
                    <v-btn
                        v-if="(move>1)" 
                        class="btnclass" 
                        style="background-color:#F19B14;color:#FFF;"
                        @click = "decrementStep()">
                            <v-icon small>mdi-arrow-left</v-icon>
                            &nbsp;Back
                    </v-btn>
                    <v-btn 
                        :disabled = "((move == 2 && category == '' || (move==3 ? true : false)) && ((move == 2 ? true : false) || (move == 3 && choosenFile1 == null && choosenFile2 == null)))"
                        @click="incrementStep()"
                        class="btnclass" 
                        style="background-color:#F19B14;color:#FFF;">
                        {{(move != 5) ? 'Next' : "Verify"}}&nbsp;
                        <v-icon small>mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
            </div>
            <div>
                <img 
                style="width:100%;"
                src="../assets/set-one-hundred-dollar-bills-close-up-2048x1367.jpg"
                />
            </div>

        </div> -->
        <!-- <div style="display: flex;justify-content:space-between;align-items: center;">
            <div style="text-align:left;padding: 0% 7%;">
                <span style="font-size:2.3rem;font-weight:600;">Sell It</span>
            </div>
            <div style="padding: 0% 7%;">
                <v-btn @click="ButItAction()"
                style="box-shadow: none;text-transform: capitalize;color: #FFF;background-color: #F19B14;padding: 0% 7%;">
                            Buy It
                        </v-btn>
            </div>
        </div> -->
        <div class="mainDiv">
            <div v-if="!categoryChecked" style="height:60vh; width:100%;display: flex;justify-content: center;align-items: center;background-color: #F2F3F5;">
                <div 
                v-for="(type , index) in types" :key = "index"
                style="display: flex;flex-direction: row;">
                    <div class="flip-card" @click="clickedCategory(type.name)">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <v-card style="display: flex;flex-direction: column;justify-content: center;align-items: center ;height: 40vh;"
                                width="180px"
                                >
                                    <v-avatar
                                    size="60"
                                    >
                                        <img :src ="type.image" />
                                    </v-avatar>
                                    <span style="font-weight:600;font-size: large;margin-top: 12px;">
                                        {{ type.name }}
                                    </span>
                                    <span style="font-weight:400;font-size:small;padding: 12px;">
                                        {{ type.tag }}
                                    </span>
                                </v-card>
                            </div>
                            <div class="flip-card-back">
                                <v-card style="display: flex;flex-direction: column;justify-content: center;align-items: center ;height: 40vh;"
                                width="180px"
                                >
                                    <v-avatar
                                    size="60"
                                    color="#F19B14"
                                    >
                                        <v-icon color="#FFF">mdi-plus</v-icon>
                                    </v-avatar>
                                    <span style="font-weight:600;font-size: small;margin-top: 12px;">
                                       Add Product
                                    </span>
                                </v-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else style="width:100%;margin:16px 0px;box-shadow:inset">
                <div v-for="(product,index) in productItems" :key="index" >
                    <v-row cols="12">
                        <v-col cols="4" style="padding: 16px;box-shadow: 15px 0px 10px -15px rgba(0,0,0,.12);height: 85vh;overflow-y: auto;">
                            <div style="display: flex;justify-content: flex-start;">
                                <span style="font-size:x-large;font-weight: 600;color:#000">Item For Sale</span>
                            </div>
                            <v-divider style="margin-bottom: 32px;"></v-divider>
                            <div style="display: flex;justify-content: flex-start;padding:4px;">
                                <v-avatar
                                color="#F2F3F5"
                                >
                                    <img src="../assets/growth-dollar-way-out-global-crisis-sale-shares-stock-exchange-2048x1367.jpg" />
                                </v-avatar>
                                <div style="display: flex;flex-direction: column;align-items: flex-start;margin-left: 16px;">
                                    <span style="font-size:medium;font-weight: 600;color:#000">
                                        Ravipati Yeswanth
                                    </span>
                                    <span>Listing for sale</span>
                                </div>
                            </div>
                            <div style="display: flex;justify-content: flex-start;padding:4px;">
                                <span style="font-size:small;">Photos  · {{ product.images.length }} / 10 - You can add up to 10 photos.</span>
                            </div>
                            <div style="width:100%;display: flex;flex-wrap: wrap;">
                                <div v-for="uploadImage, i in product.images" :key="i">
                                    <div style="width:100px; height:100px;display: flex;justify-content: center;align-items: center;margin-right:12px;margin-bottom: 12px;border-radius: 12px;">
                                        <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;position:relative;cursor: pointer;">
                                            <img style="width:100px; height:100px;border-radius: 8px;" :src="uploadImage" />
                                            <v-icon @click="removeImage(index, i)" style="position: absolute;top: 0px;right: 0px;color: black;">mdi-close-circle-outline</v-icon>
                                            <!-- <span>{{uploadImage}}</span> -->
                                        </div>
                                    </div>
                                </div>
                                <div v-if="product.images.length < 10" @click="AddUploadImages(index)" style="width:100px; height:100px;display: flex;justify-content: center;align-items: center;background-color:#F2F3F5;border-radius: 12px;cursor: pointer;">
                                    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        <v-icon
                                        color="#F19B14"
                                        >
                                            mdi-file-plus
                                        </v-icon>
                                        <span>
                                            Add Photo
                                        </span>
                                    </div>
                                    <input
                                        
                                        ref="uploader"
                                        class="d-none"
                                        type="file"
                                        accept="image/*"
                                        @input="onSelectFile(index)"
                                    >
                                </div>
                            </div>
                            <div class="cardContent">
                                <div>
                                    <span>Product Name</span>
                                </div>
                                <div style="width:100%">
                                    <v-text-field
                                    hide-details
                                    solo
                                    label="Enter Model"
                                    flat
                                    outlined
                                    >
                                    </v-text-field>
                                </div>
                            </div>
                            <div class="cardContent">
                                <div>
                                    <span>Description</span>
                                </div>
                                <div style="width:100%">
                                    <v-textarea
                                    hide-details
                                    solo
                                    label="Enter Description briefly about the product"
                                    flat
                                    outlined
                                    >
                                    </v-textarea>
                                </div>
                            </div>
                            <div class="cardContent">
                                <div>
                                    <span>Price</span>
                                </div>
                                <div style="width:100%">
                                    <v-text-field
                                    v-model="price"
                                    hide-details
                                    solo
                                    label="Enter Price"
                                    flat
                                    outlined
                                    >
                                    </v-text-field>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="8">
                            <div style="display: flex;justify-content: center;">
                                <v-card style="padding:16px;width: 80%;">
                                    <span
                                    style="display:flex;justify-content: flex-start;"
                                    >
                                        Preview
                                    </span>
                                    <div style="height:70vh; background-color: #F2F3F5;border-radius: 8px;" :class=" (product.images.length == 0) ? 'centerAlign' : ''">
                                        <div v-if="product.images.length > 0">
                                            <v-carousel
                                            height="600"
                                            hide-delimiters
                                            hide-delimiter-background
                                            >
                                                <v-carousel-item
                                                v-for="(slide, i) in product.images"
                                                :key="i"
                                                >
                                                    <img style="width:100%; height:70vh;" :src="slide" />
                                                </v-carousel-item>
                                            </v-carousel>
                                        </div>
                                        <div v-else >
                                            <span style="font-size: 2rem;font-weight: 600;color: gray;">
                                                No product images uploaded
                                            </span>
                                        </div>
                                    </div>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider v-if="dividerFlag" style="margin: 32px 0px;"></v-divider>
                </div>
                <v-row cols="12">
                    <v-col cols="4" style="display: flex;justify-content: space-around;align-items: center;">
                        <v-btn
                            @click="AddMoreProduct()"
                            style="width:40%;background-color:#F19B14;color:#FFF;text-transform: capitalize;">
                            <v-icon small>mdi-plus</v-icon>
                            &nbsp;Add One More
                        </v-btn>
                        <v-btn
                        @click="clickContinue()"
                        style="width:40%;background-color:#F19B14;color:#FFF; text-transform: capitalize;font-size: 1rem;">
                            Continue
                        </v-btn>
                    </v-col>
                    <v-col  cols="8">
                        
                    </v-col>
                </v-row>
            </div>
            <!-- <v-card v-for="(product, index) in productItems" :key="product" style="border:1px #F19B14 solid;" class="mainCardStyle">
                <div class="cardContent">
                    <div>
                        <span>Select Category</span>
                    </div>
                    <div>
                        <v-select
                            v-model="product.category"
                            hide-details
                            color="#F19B14"
                            outlined
                            :items="['Watches' , 'Jewellary', 'Gold', 'White Gold', 'Diamonds']"
                            placeholder="Select Category"
                        ></v-select>
                    </div>
                </div>
                <div class="cardContent" style="width:100%;">
                    <div>
                        <span>Upload Image</span>
                    </div>
                    <div>
                        <div>
                            <v-btn
                                color="primary"
                                class="text-none"
                                round
                                depressed
                                :loading="isSelecting"
                                @click="onButtonClick(index)"
                            >
                                <v-icon left>
                                    mdi-upload
                                </v-icon>
                                Upload Images
                            </v-btn>
                            <input
                                ref="uploader"
                                class="d-none"
                                type="file"
                                accept="image/*"
                                @change="onFileChanged"
                            >
                        </div>
                    </div>
                    <div class="previewImages">
                        <div style="display:flex; flex-direction: column;" v-for="(image,i) in product.images" :key="image">
                            <img style="width:200px; height:200px; padding: 3% 3% 3% 0%;" :src="image.imageURL"/>
                            <div>
                                <span>{{ image.name }}</span>
                                <div style="display: flex;justify-content: center;align-items: center;"
                                    >
                                        <span color="white" style="white-space: nowrap;display: inline-block;width: 175px; overflow: hidden;text-overflow: ellipsis;">{{ image.name }}
                                        </span>
                                    <v-icon color="red" dark style="cursor:pointer"
                                    @click="removeImage(index, i)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardContent">
                    <div>
                        <span>Product Name</span>
                    </div>
                    <div style="width:100%">
                        <v-text-field
                        v-model="product.productName"
                        hide-details
                        solo
                        label="Enter Model"
                        flat
                        outlined
                        >
                        </v-text-field>
                    </div>
                </div>
                <div class="cardContent">
                    <div>
                        <span>Description</span>
                    </div>
                    <div style="width:100%">
                        <v-textarea
                        v-model="product.description"
                        hide-details
                        solo
                        label="Enter Description briefly about the product"
                        flat
                        outlined
                        >
                        </v-textarea>
                    </div>
                </div>
                <div class="cardContent">
                    <div>
                        <span>Price</span>
                    </div>
                    <div style="width:100%">
                        <v-text-field
                        v-model="product.model"
                        hide-details
                        solo
                        label="Enter Price"
                        flat
                        outlined
                        >
                        </v-text-field>
                    </div>
                </div>
                <div class="cardContent">
                    <div>
                        <span>Bought Years Before</span>
                    </div>
                    <div style="width:100%">
                        <v-text-field
                        v-model="product.age"
                        hide-details
                        solo
                        label="Enter Age"
                        flat
                        outlined
                        >
                        </v-text-field>
                    </div>
                </div>
            </v-card> -->
            <!-- <div v-if="categoryChecked" class="AddMoreButton">
                <div >
                    <v-btn
                    @click="AddMoreProduct()"
                    style="background-color:#F19B14;color:#FFF;text-transform: capitalize;">
                    <v-icon small>mdi-plus</v-icon>
                    &nbsp;Add One More
                    </v-btn>
                </div>
                <div style="margin-left:2%;">
                    <v-btn
                        @click="Continue()"
                        style="background-color:#F19B14;color:#FFF;text-transform: capitalize;">
                        &nbsp;Continue
                        <v-icon small>mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
            </div> -->
        </div>
        <v-dialog
            v-model="dialog"
            width="500"
            persistent
            
            >
            <v-card height="200" style="display: flex;justify-content: center;align-items: center;text-align: left;padding: 0px 32px;">Thanks for selling your products in <span style="color:#F19B14"><b>&nbsp; Pawn Trust</b></span></v-card>
            <v-btn @click="routeToSellIt()" color="#F19B14" dense solo flat><span style="color: #FFF;text-transform: capitalize;">Sell More Products</span></v-btn>
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
                dialog: false,
                dividerFlag : false,
                category : '',
                productName : '',
                choosenFile1 : null,
                choosenFile2 : null,
                uploadImages : [],
                selectedFile: [],
                isSelecting: false,
                images : [],
                fileInput : '',
                imageURL : '',
                imageData : '',
                description : '',
                model : '',
                age : '',
                price: 0,
                categoryChecked : false,
                productIndex : '',
                productItems : [{
                    category : '',
                    productName : '',
                    images : [],
                    description : '',
                    model : '',
                    age : '',
                    formDataImages : []
                }],
                types : [
                    {
                        image : "https://assets.pawnamerica.com/ProductImages//7756ddc7-3ef1-43ad-b66b-eeb853ef9918.jpg",
                        name : "Watches",
                        tag : "Sell all your watches here"
                    },
                    {
                        image : "https://images.meesho.com/images/products/41388472/y3kvg_512.jpg",
                        name : "Jewellary",
                        tag : "Sell all your jewellary here"
                    },
                    {
                        image : "https://png.pngtree.com/png-clipart/20190520/original/pngtree-gold-coin-png-image_3779125.jpg",
                        name : "Gold",
                        tag : "Sell all your gold here"
                    },
                    {
                        image : "https://rukminim1.flixcart.com/image/612/612/kxrvi4w0/precious-ring/m/6/k/si-lruk313-white-gold-12-lords-jewels-original-imaga5ncpvynfx7r.jpeg?q=70",
                        name : "White Gold",
                        tag : "Sell all your white gold here"
                    },
                    {
                        image : "https://www.clayfieldjewellery.com.au/wp-content/uploads/2018/10/large-clear-diamond.png",
                        name : "Diamonds",
                        tag : "Sell all your diamonds here"
                    },
                    {
                        image : "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name : "Used Products",
                        tag : "Sell your used products here"
                    },
                    {
                        image : "https://images.meesho.com/images/products/41388472/y3kvg_512.jpg",
                        name : "Others",
                        tag : "Sell your other products here"
                    },
                ]
             }
            },
        mounted(){
            let token = this.$cookies.get('token');
            if (!token) {
                this.$router.push({
                    name : 'Login'
                })
            }
        },
        methods:{
            incrementStep(){
                this.move = this.move+1;
            },
            decrementStep(){
                this.move = this.move-1;
            },
            routeToSellIt(){
                this.dialog = false;
                this.categoryChecked = false;
                this.$router.go();
            },
            clickedCategory(value){
                this.category = value;
                this.categoryChecked = true;
            },
            clickContinue(){
                console.log('this.productItems', this.productItems)
                // this.dialog = true;
                for (let index = 0; index < this.productItems.length; index++) {
                    const product = this.productItems[index];
                    let payload = {
                        "request" : JSON.stringify({
                            "name" : "itemName",
                            "category" : "Watch",
                            "price" : 10,
                            "description" : "It's a 100 year old antique watch",
                        }),
                        "file" : product.formDataImages
                    }
                    console.log('payload', payload)
                    axios.post('https://api.pawntrust.com/api/v1/sellIt',payload, {headers : { 'Authorization' : `Bearer ${this.token}`, 'Content-Type': 'multipart/form-data'}})
                    .then(response => {
                        console.log('response', response)
                    })
                    .catch(error => {
                        console.log('error', error)
                    })
                }
            },
            onButtonClick(index) {
                this.productIndex = index;
                this.isSelecting = true
                window.addEventListener('focus', () => {
                    this.isSelecting = false
                }, { once: true })
                console.log("Testing....", this.$refs);
                this.$refs.uploader[index].click();
                // this.$refs.uploader.click();
                },
                ButItAction(){
                    this.$router.push({
                        name:"BuyIt"
                    })
                },
            onFileChanged(e) {
                this.imageURL = URL.createObjectURL(e.target.files[0]);
                console.log('this.imageURL', this.imageURL)
                this.images.push({ imageURL : this.imageURL,name : e.target.files[0].name });
                console.log("Images" , e.target.files[0]);
                console.log("check" , new FileReader().readAsDataURL(e.target.files[0]))
                this.selectedFile.push(e.target.files[0]);
                console.log('productIndex', this.productIndex)
                this.productItems[this.productIndex].images = this.images;
            // do something
            },
            AddUploadImages(index){
                console.log('uploaded%%%%%%%%%%%%%%%%%')
                this.productIndex = index;
                // this.uploadImages.push("1");
                this.$refs.uploader[index].click();
            },
            onSelectFile (index) {
                const input = this.$refs.uploader[index]
                const files = input.files
                console.log('files', files)
                if (files && files[0]) {
                    let formData = new FormData(); // Create a FormData object
                    console.log('checking ....', typeof files[0])
                    formData.append('image',files[0]);
                    // let formData = new FormData();
                    // console.log('formData', formData);
                    // formData.append('key1', 'value1');
                    // formData.append('key2', 'value2');
                    // formData.append('key3', 'value1');
                    // formData.append('key4', 'value2');
                    console.log('formData', formData);
                    // List key/value pairs
                    console.log('chichi', this.productItems[0])
                    this.productItems[this.productIndex].formDataImages.push(formData);
                    for(let [name, value] of formData) {
                    console.log(`${name} , ${value}`); // key1 = value1, then key2 = value2
                    }
                    const reader = new FileReader
                    reader.onload = e => {
                        console.log("e", e.target.result)
                        this.productItems[this.productIndex].images.push(e.target.result);
                    this.imageData = e.target.result
                    }
                    console.log("imageData", this.imageData)
                    reader.readAsDataURL(files[0])
                    this.$emit('input', files[0])
                }
            },
            AddMoreProduct(){
                // let newProduct = {
                //     category : this.category,
                //     productName : this.productName,
                //     images : this.images,
                //     description : this.description,
                //     model : this.model,
                //     age : this.age
                // }
                this.dividerFlag=true;
                let newProduct = {
                    category : '',
                    productName : '',
                    images : [],
                    description : '',
                    model : '',
                    age : '',
                    formDataImages : []
                }
                this.category = '';
                this.productName = '';
                this.images = [];

                this.productItems.push(newProduct)

                console.log("productItems" , this.productItems);
            },
            removeImage(productIndex , imageIndex){
                this.productItems[productIndex].images.splice(imageIndex , 1);
            },
            Continue(){
                this.$router.push({
                    name : 'SellItPreview',
                    params : {
                        'productItems' : this.productItems
                    }
                })
            }
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {
    .stepper{
        width:100%;
        /* border: 3px blue solid; */
        margin: 0;
        /* display: flex;
        justify-content: center;
        align-items: center; */
    }
    .mainDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .mainCardStyle{
        width:90%;
        margin: 2% 0%;
        padding: 2% 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .AddMoreButton{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width:70%;
        padding: 2% 0%;
    }
    .previewImages{
        display: flex;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
    }
    .cardContent{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2% 0%;
    }
    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    width:45%;
    margin: 2% 0%;
    }
    .buttonsAlign{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .menuContent{
        flex-wrap: wrap;
        display: flex; 
        flex-direction: row;
        width:100%;
    }
    .uploadStyle{
        width:100%;
        display: flex;
        flex-direction: column;
    }
    .uploadPage{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cardUpload{
        width:90%;
        padding: 4%;
    }
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
        width:100%;
        margin-top:5%;
    }

    .heightStyleOTP{
        width:80%;
    }
}

@media screen and (min-width:901px) {
    .stepper{
        width:80%;
        margin: auto;
    }
    .mainDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .previewImages{
        display: flex;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
    }
    .centerAlign{
        display: flex;justify-content: center;align-items: center;
    }
    .mainCardStyle{
        width:70%;
        margin: 2% 0%;
        padding: 2% 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: flex-start; */
    }

    .AddMoreButton{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width:70%;
        padding: 0% 0% 2% 0%;
    }

    .cardContent{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2% 0%;
    }

    .btnclass{
    text-transform: capitalize;
    box-shadow: none;
    width:25%;
    margin: 2% 0%;
    }
    .buttonsAlign{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .outerMenuContent{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .menuContent{
        width: 50%;
        flex-wrap: wrap;
        display: flex; 
        flex-direction: row;
        justify-content: center;
    }
    .uploadPage{
        width: 75%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 35vh;
    }
    .uploadStyle{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .cardUpload{
        width:33%;
    }

    .LoginMain{
        /* height: 60vh; */
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
    .heightStyle{
        width:50%;
        /* margin-top:5%; */
    }

    .heightStyleOTP{
        width:25%;
    }
}
.bannerBackground{
    background:url('../assets/bannerImage.jpeg');
    width:100%;
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;
}
.flexCenter{
    display: flex;
    justify-content: center;
    align-items: center;
}

.flexStart{
    display: flex;
    justify-content: flex-start;
}

.content{
    font-weight:600;
}


</style>

<style>
.flip-card {
  background-color: transparent;
  width: 180px;
  height: 40vh;
  perspective: 1000px;
  margin: 0% 16px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}
.remove-icon {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}
</style>
<style>
::-webkit-scrollbar {display:none;}
</style>