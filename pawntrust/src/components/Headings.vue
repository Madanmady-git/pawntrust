<template>
    <div class="text-center" style="padding: 12px 0% 0% 0%;">
        <v-menu
        transition="scroll-y-transition"
        open-on-click
        bottom
        offset-y
        >
        <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }" >
                <v-btn
                text
                v-bind="attrs"
                v-on="on"
                @click="clicked = !clicked"
                style="text-transform: capitalize;font-size: 17px;font-weight: 600;letter-spacing: 0rem;"
                :style="{ 'background-color': hover ? '#F19B14' : '#FFFFFF' , }"
                >
                {{headingName}}
                </v-btn>
            </v-hover>
        </template>

        <v-list>
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    props:['headingName'],
    data: () => ({
      items: [
        { title: 'Pawn Shops' },
        { title: 'Pawn Companies' },
        { title: 'Microlending' },
        { title: 'Non-Fungible Tokens' },
      ],
    }),
}
</script>

<style>
</style>