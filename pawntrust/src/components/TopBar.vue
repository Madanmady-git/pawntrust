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
                                v-model="search"
                                solo
                                flat
                                style="border : 1.5px solid orange"
                                hide-details
                                dense
                                @keyup.enter="searchMethod(search)"
                            ></v-text-field>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction : row;justify-content:space-around;width:20%; margin-left:16%;">
                        <v-btn
                        style="text-transform:capitalize; background-color:#F19B14;color:#FFFFFF;"
                        @click="searchMethod"
                        >
                            Sign In
                        </v-btn>
                        <v-btn
                        style="text-transform:capitalize; background-color:#F19B14;color:#FFFFFF;"
                        @click="searchMethod"
                        >
                            Sign Up
                        </v-btn>
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
    </div>
</template>

<script>
import Heading from '../components/Headings.vue';
export default {
        components: { Heading },
        data(){
            return{
                search : ''
            }
        },
        methods: {
            searchMethod(word){
                console.log("Entered in search Area");
                this.$router.push({
                    name:'Search',
                    params : {
                        searchword : word
                    }
                })
            }
        }
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