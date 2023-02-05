<template>
    <div >
        <TopBar></TopBar>
        <div style="text-align:left;padding:0% 7%;">
            <span style="font-size:1.8rem;font-weight:600;">Products Preview</span>
        </div>
        <div class="mainDiv">
            <v-card v-for="product in productItems" :key="product" class="previewCard" style="border: 1px #F19B14 solid;">
                 <div class="previewContent">
                    <span class="eachContentItem">Category : <b>{{ product.category }}</b></span>
                    <span class="eachContentItem">Name : <b>{{ product.productName }}</b></span>
                    <span class="eachContentItem">Description : <b>{{ product.description }}</b></span>
                    <span class="eachContentItem">Images:</span>
                    <div class="previewImages">
                        <div style="display:flex; flex-direction: column;" v-for="(image) in product.images" :key="image">
                                <img style="width:200px; height:200px; padding: 3% 3% 3% 0%;" :src="image.imageURL"/>
                        </div>
                    </div>
                    <span class="eachContentItem">Model : <b>{{ product.model }}</b></span>
                    <span class="eachContentItem">Product Age: <b>{{ product.age }}</b></span>
                 </div>
            </v-card>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components : { TopBar, Footer },
        props : ['productItems']
    }
</script>

<style>
@media screen and (max-width:900px) {
    .previewCard{
    width: 90%;
    padding: 2%;
    margin: 2%;
}
}

@media screen and (min-width:901px) {
    .previewCard{
    width: 70%;
    padding: 2%;
    margin: 2%;
}
}
.mainDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.previewContent{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.eachContentItem{
    padding: 0.5%;
}
.previewImages{
        display: flex;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
    }

</style>
