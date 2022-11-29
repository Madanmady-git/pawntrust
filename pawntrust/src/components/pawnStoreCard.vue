<template>
    <div class="mainContent">
        <v-card class="cardStyle">
            <div class="pawnStoreContent">
                <div class="flexCol">
                    <span style="font-size:larger; font-weight:550;color:#0E2334">{{pawnstore.name}}</span>
                    <span>{{pawnstore.address}}</span>
                    <span>{{pawnstore.phone}}</span>
                    <span v-if="pawnstore.workingHours"><b>Working Hours :</b>{{pawnstore.workingHours}}</span>
                </div>
                <div class="Ratings">
                        <v-rating
                            v-model=pawnstore.rating
                            icon-label="custom icon label text {4} of {1}"
                        ></v-rating>
                    <span><b>Reviews:</b> 434</span>
                </div>
            </div>
            <div class="buttonsStyle">
                <v-btn class="vBtnClass" rounded small style="background-color:#F19B14;color:#FFFFFF">
                    Store Details
                    <v-icon color="#FFFFFF">mdi-store</v-icon>
                </v-btn>
                <v-btn class="vBtnClass" rounded small style="background-color:#00407d;color:#FFFFFF">
                    Get Directions
                    <v-icon color="#FFFFFF">mdi-directions</v-icon>
                </v-btn>
            </div>
        </v-card>
    </div>
</template>
<script>
export default{
    props : ['pawnstore'],
    data (){
       return {
        rating: 4,
       }
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
    flex-direction: column;
    align-items: flex-end;
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