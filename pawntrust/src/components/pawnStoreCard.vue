<template>
    <div class="mainContent">
        <v-card class="cardStyle">
            <div class="pawnStoreContent">
                <div class="flexCol">
                    <span style="font-size:larger; font-weight:550;color:#0E2334;padding: 2px;">{{pawnstore.name}}<a :href="pawnstore.website" target="_blank" style="text-decoration: none;color:rgb(14, 35, 52);">{{pawnstore.name}}
                        <v-icon medium>mdi-arrow-top-right</v-icon></a></span>
                    <span style="padding: 2px;cursor: pointer;"><v-icon color="#F19B14">mdi-map-marker-outline</v-icon>{{pawnstore.address}}</span>
                    
                    <span v-if="pawnstore.phone!=''" style="padding: 2px;cursor: pointer;">
                        <v-icon color="#F19B14" >
                            mdi-phone
                        </v-icon>
                        <a style="text-decoration: none; color: #0E2334;" :href="'tel:'+pawnstore.phone.substring(2)">
                            <b>{{pawnstore.phone.substring(0,3) == '+1 ' ?  pawnstore.phone.substring(3) : pawnstore.phone}}</b>
                        </a>
                    </span>
                    <!-- <div class="workingClass" v-if="((Object.keys(pawnstore.workingHours).length > 0) && openCard)">
                        <span v-if="pawnstore.workingHours"><b>Working Hours :</b></span>
                        <span>Sunday: {{pawnstore.workingHours.Sunday}}</span>
                        <span>Monday: {{pawnstore.workingHours.Monday}}</span>
                        <span>Tuesday: {{pawnstore.workingHours.Tuesday}}</span>
                        <span>Wednesday: {{pawnstore.workingHours.Wednesday}}</span>
                        <span>Thursday: {{pawnstore.workingHours.Thursday}}</span>
                        <span>Friday: {{pawnstore.workingHours.Friday}}</span>
                        <span>Saturday: {{pawnstore.workingHours.Saturday}}</span>
                    </div> -->
                </div>
            </div>
            <div class="Ratings" v-if="openCard" style="padding: 2px;">
                <span><b>Rating:</b></span>
                <v-rating
                    readonly
                    size="16"
                    v-model=pawnstore.rating
                    icon-label="custom icon label text {4} of {1}"
                ></v-rating>&nbsp;{{pawnstore.rating}} / 5 &nbsp;
                <span v-if="(pawnstore.reviewCount == 1)">({{pawnstore.reviewCount}} review)</span>
                <span v-else-if="(pawnstore.reviewCount == 0)">(No reviews)</span>
                <span v-else>({{pawnstore.reviewCount}} reviews)</span>
            </div>
            <div class="buttonsStyle">
                <v-btn class="vBtnClass" rounded small style="background-color:#F19B14;color:#FFFFFF" @click="cardAction()">
                    {{(!openCard) ? 'Show more' : 'Show less'}}
                    <v-icon color="#FFFFFF">mdi-store</v-icon>
                </v-btn>
                <!-- <v-btn v-if="openCard" class="vBtnClass" rounded small style="background-color:#00407d;color:#FFFFFF">
                    Get Directions
                    <v-icon color="#FFFFFF">mdi-directions</v-icon>
                </v-btn> -->
            </div>
        </v-card>
    </div>
</template>
<script>
export default{
    props : ['pawnstore'],
    data (){
       return {
        openCard : false
       }
    },
    methods:{
        cardAction(){
            this.openCard = !this.openCard;
        },
    }
}
</script>
<style scoped>

@media screen and (max-width:950px) {
    .pawnStoreContent{
        display: flex;
    flex-direction: column;
    }
    .mainContent{
        width:90%;
        margin: 4%;
    }
    .buttonsStyle{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
    margin: auto;
    padding: 3% 0% 1% 0%;
}
}

@media screen and (min-width:951px) {
    .pawnStoreContent{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    }
    .mainContent{
        width:80%;
        margin: 4%;
    }
    .buttonsStyle{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:70%;
    margin: auto;
    padding: 3% 0% 1% 0%;
}
}

.workingClass{
    display: flex;
    flex-direction: column;
}
.flexCol{
    display: flex;
    flex-direction: column;
    text-align: left;
}
.cardStyle{
    padding:2%;
    box-shadow: unset;
    background-color:#f1f1f2;
}
.Ratings{
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
}
.flexRow{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.vBtnClass{
    box-shadow: none !important;
    text-transform: capitalize;
}
</style>

<style>
.v-rating .v-icon {
    padding: 0rem;
}
</style>