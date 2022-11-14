<template>
    <div class="text-center" style="padding: 12px 0% 0% 0%;">
        <v-menu
        transition="scroll-y-transition"
        open-on-click
        bottom
        offset-y
        open-on-hover
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
                {{headingName}}
                </v-btn>
            </v-hover>
        </template>
        <v-list v-if="items">
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            >
            <v-hover v-slot="{ hover }" >
            <v-list-item-title >
                <v-btn
                text
                style="text-transform: capitalize;font-size: 17px;font-weight: 400;letter-spacing: 0rem;padding: 1% 0%;width:100%;box-shadow: unset;"
                :style="{ 'background-color': hover ? '#F19B14' : '#FFFFFF' , }"
                @click="routeToRightMethod(item.title)"
                >
                    {{ item.title }}
                </v-btn>
                </v-list-item-title>
            </v-hover>
            </v-list-item>
        </v-list>
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
            else if (route=="Search") {
                this.$router.push({
                    name: 'SearchDetails'
                })
            }
            else if (route=="Pawn It") {
                this.$router.push({
                    name: 'Search'
                })
            }
            else if (route=="Sell It") {
                this.$router.push({
                    name: 'Search'
                })
            }
            else {
                console.log("No other possible route");
            }
        }
    }
}
</script>

<style>
</style>