<template>
    <div class="text-center" style="padding: 12px 0% 0% 0%;" :class="$mq != 'desktop' ? 'mainClassMobile' : ''">
        <v-menu
        transition="scroll-y-transition"
        open-on-click
        bottom
        offset-y
        open-on-hover
        :min-width="$mq != 'desktop' ? '100%' : ''"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }" >
                <v-btn
                text
                v-bind="attrs"
                v-on="on"
                @click="routeToRightMethod(headingName)"
                style="text-transform: capitalize;font-size: 17px;font-weight: 600;letter-spacing: 0rem;"
                :style="{ 'background-color': hover ? '#F19B14' : '#FFFFFF'}"
                >
                <div v-if="headingName == 'More'" align-items = "right">
                    <v-app-bar-nav-icon color="#000000"></v-app-bar-nav-icon>
                </div>
                <span v-else>{{headingName}}</span>
                </v-btn>
            </v-hover>
        </template>
        <v-card :class="$mq != 'desktop' ? 'menuClass' : ''">
            <v-list v-if="items">
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                <v-hover v-slot="{ hover }" >
                <v-list-item-title >
                   
                    <v-btn
                    hide-details
                    text
                    style="text-transform: capitalize; display: flex;justify-content: flex-start; font-size: 17px;font-weight: 600;letter-spacing: 0rem;padding: 1% 0%;width:100%;box-shadow: unset;"
                    :style="{ 'background-color': hover ? '#F19B14' : '#FFFFFF' , }"
                    @click="routeToRightMethod(item.title)"
                    >
                        {{ item.title }}
                    </v-btn>
                    <v-divider></v-divider>
                </v-list-item-title>
                </v-hover>
                </v-list-item>
            </v-list>
        </v-card>
        </v-menu>
    </div>
</template>

<script>
export default {
    props:['headingName' , 'items'],
    data: () => ({
      
    }),
    methods:{
        routeToRightMethod(route){
            if(route=="Pawn Shops"){
                this.$router.push({
                    name: 'Search'
                })
            }
            else if (route=="Titlepal Companies") {
                window.open("https://titlepal.com/" , "_blank")
            }
            else if (route=="Microlending") {
                this.$router.push({
                    name: 'Search'
                })
            }
            else if (route=="Non-Fungible Tokens") {
                this.$router.push({
                    name: 'Search'
                })
            }
            else if (route=="Contact Us") {
                this.$router.push({
                    name: 'ContactUs'
                })
            }
            else if (route=="Investor Relations") {
                this.$router.push({
                    name: 'InvestorRelations'
                })
            }
            else if (route=="About Us") {
                this.$router.push({
                    name: 'AboutUs'
                })
            }
            else if (route=="Home") {
                this.$router.push({
                    name: 'Home'
                })
            }
            else if (route=="Pawn Scan") {
                this.$router.push({
                    name: 'SearchDetails'
                })
            }
            else if (route=="Pawn It") {
                this.$router.push({
                    name: 'PawnIt'
                })
            }
            else if (route=="Sell It") {
                this.$router.push({
                    name: 'SellIt'
                })
            }
            else {
                console.log("No other possible route");
            }
        }
    }
}
</script>

<style scoped>
.menuClass{
    width:100%;
}

.mainClassMobile{
    display: flex;
    justify-content: flex-end;
}
</style>