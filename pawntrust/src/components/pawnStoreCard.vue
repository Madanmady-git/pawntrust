<template>
    <div style="width:80%;margin: 4%;">
        <v-card class="cardStyle">
            <div class="flexCol">
                <span style="font-size:larger; font-weight:550;color:#0E2334">{{pawnstore.name}}</span>
                <span>{{pawnstore.address}}</span>
                <span>{{pawnstore.mobileNumber}}</span>
            </div>
            <div class="buttonsStyle">
                <v-btn class="vBtnClass" rounded style="background-color:#F19B14;color:#FFFFFF">
                    Store Details
                    <v-icon color="#FFFFFF">mdi-store</v-icon>
                </v-btn>
                <v-btn class="vBtnClass" rounded style="background-color:#00407d;color:#FFFFFF">
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

       }
    }
}
</script>
<style scoped>
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

.buttonsStyle{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:70%;
    margin: auto;
    padding: 3% 0% 1% 0%;
}
.vBtnClass{
    box-shadow: none !important;
    text-transform: capitalize;
}
</style>