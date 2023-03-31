<template>
    <div >
        <TopBar></TopBar>
        <div>
            <div>
                <div style="background-color: rgb(250 224 182);padding:8px">
                    <span style="    font-size: 1.4rem;font-weight: bold;">Item Details</span>
                </div>
                <div style="display: flex;flex-direction: row;justify-content:space-around;align-items: flex-start;padding: 32px 0px;">
                    <div style="display: flex;flex-direction: column;align-items: flex-start;width:40%;">
                        <span class="flexStart content">Select Product Category <span style="color:red">*</span></span>
                        <v-select v-model="category" :items = "Categories" flat solo outlined placeholder="Select Category" style="width:100%;"></v-select>
                        <span class="flexStart content">Item / Product<span style="color:red">*</span></span>
                        <v-text-field v-model="productName"  flat solo outlined placeholder="Enter Item/Product" style="width:100%;"></v-text-field>
                        <span class="flexStart content">Amount Expectation<span style="color:red">*</span></span>
                        <v-text-field v-model="amountExpected" flat solo outlined placeholder="Enter First Name" style="width:100%;"></v-text-field>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: flex-start;width:40%;">
                        <span class="flexStart content">Select Our Stores<span style="color:red">*</span></span>
                        <v-select v-model="store" :items="stores" flat solo outlined placeholder="Select Store" style="width:100%;"></v-select>
                        <span class="flexStart content">Select Product Condition<span style="color:red">*</span></span>
                        <v-select v-model="condition" :items="conditions" flat solo outlined placeholder="Select Condition" style="width:100%;"></v-select>
                        <span class="flexStart content">Description<span style="color:red">*</span></span>
                        <v-textarea v-model="description" flat solo outlined placeholder="Describe product" style="width:100%;"></v-textarea>
                    </div>
                </div>
                <div style="display: flex;justify-content: center;align-items: center;margin-bottom: 6%;">
                    <div style="width:20%">
                        <v-btn block color="#F19B14" 
                        :disabled="!FilledItemDetailsCheck()"
                        @click="openImage()">
                            <span style="color:#FFF">Next</span>
                        </v-btn>
                    </div>
                </div>
                <div v-if="openImageUpload">
                    <div style="background-color: rgb(250 224 182);padding:8px">
                        <span style="font-size: 1.4rem;font-weight: bold;">Upload Images</span>
                    </div>
                    <span style="display: flex;justify-content: flex-start;padding:1% 5% 2% 5%;">Please upload minimum 1 image and maximum 10 images for best estimate of your items</span>
                    <div style="display: flex;justify-content: center;">
                        <v-card style="padding:16px;width: 80%;">
                            <span
                            style="display:flex;justify-content: flex-start;"
                            >
                                Preview
                            </span>
                            <div style="height:70vh; background-color: #F2F3F5;border-radius: 8px;" :class=" (productImages.length == 0) ? 'centerAlign' : ''">
                                <div v-if="productImages.length > 0">
                                    <v-carousel
                                    height="600"
                                    hide-delimiters
                                    hide-delimiter-background
                                    v-model="liveImage"
                                    >
                                        <v-carousel-item
                                        v-for="(slide, i) in productImages"
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
                    
                    <div style="width:100%;display: flex;flex-wrap: wrap;padding:1% 5%;">
                        <div v-for="(uploadImage,index) in productImages" :key="index">
                            <div style="width:150px; height:150px;display: flex;justify-content: center;align-items: center;margin-right:12px;margin-bottom: 12px;border-radius: 12px;">
                                <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;cursor: pointer;" @click="clickOnImage(index)">
                                    <img style="width:150px; height:150px;" :src="uploadImage" />
                                    <!-- <span>{{uploadImage}}</span> -->
                                </div>
                            </div>
                        </div>
                        <div v-if="productImages.length < 10" @click="AddUploadImages()" style="width:150px; height:150px;display: flex;justify-content: center;align-items: center;background-color:#F2F3F5;border-radius: 12px;">
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
                    <div style="display: flex;justify-content: center;align-items: center;margin-bottom: 6%;">
                        <div style="width:20%">
                            <v-btn block color="#F19B14" 
                            :disabled="clickedUpdate"
                            @click="save()">
                                <span style="color:#FFF">Request for a Quote</span>
                            </v-btn>
                        </div>
                    </div>
                </div>
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
        data() {
            return {
                category : '',
                productName : '',
                amountExpected : '',
                store : '',
                condition: '',
                description : '',
                productImages : [],
                uploadImages : [],
                productIndex : '',
                productItems : [],
                imageData : '',
                liveImage : 0,
                openImageUpload : false,
                Categories : [
                    'Watches', 'Jewellary', 'Gold', 'White Gold', 'Diamonds', 'Others'
                ],
                stores:[
                    'Store 1', 'Store 2', 'Store 3', 'Store 4', 'Store 5'
                ],
                conditions : [
                    'Very Good: Like new condition with no visible wear , may not have all the accessories or original packaging',
                    "Good: Good condition with minor signs of normal use, fully functional",
                    "Fair: Moderate signs of use, visible scratches or light densts but still fully functional",
                    "Poor: Heavy wear or visible damage, but still functional",
                    "For Parts: Dose not work but has value in parts"
                ]
             }
            },
        methods:{
            FilledItemDetailsCheck(){
                if ((!this.category || this.category == '') || (!this.productName || this.productName == '') || (!this.amountExpected || this.amountExpected == '')
                   && (!this.store || this.store == '') || (!this.condition || this.condition == '') || (!this.description || this.description == '')) {
                    return false
                }
                else {
                    return true
                }
            },
            openImage(){
                this.openImageUpload = true;
            },
            AddUploadImages(){
                this.$refs.uploader.click();
            },
            clickOnImage(index){
                this.liveImage = index;
            },
            onSelectFile () {
                const input = this.$refs.uploader
                const files = input.files
                console.log('files', files)
                if (files && files[0]) {
                    const reader = new FileReader
                    reader.onload = e => {
                        console.log("e", e.target.result)
                        this.productImages.push(e.target.result);
                    this.imageData = e.target.result
                    }
                    console.log("imageData", this.imageData)
                    reader.readAsDataURL(files[0])
                    this.$emit('input', files[0])
                }
            },
        }
    }

</script>

<style scoped>

@media screen and (max-width:900px) {

}

@media screen and (min-width:901px) {
}

.centerAlign{
        display: flex;justify-content: center;align-items: center;
    }

</style>