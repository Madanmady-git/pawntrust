<template>
    <div style="background-color:#0E2334"  class="flexCenter">
        <div class="flexCenter" style="width:80%; flex-direction: column;">
            <div class="flexrow" style="width:100%; justify-content: space-evenly;">
                <span class="footerName">HOME</span>
                <span class="footerName">ABOUT US</span>
                <span class="footerName">FEATURES</span>
                <span class="footerName">SEARCH</span>
                <span class="footerName">PAWN IT</span>
                <span class="footerName">SELL IT</span>
                <span class="footerName">BLOG</span>
                <span class="footerName">INVESTOR RELATIONS</span>
                <span class="footerName">CONTACT US</span>
            </div>
            <div>
                <v-divider class="dividerClass"></v-divider>
            </div>
            <div style="width:100%;" class="flexrow">
                <div style="width:25%" class="flexStart">
                    <div>
                        <img src="https://pawntrust.com/wp-content/uploads/2022/10/footer-logo.png" />
                    </div>
                    <div>
                        <span>© 2022 Pawn Trust. All Rights Reserved</span>
                    </div>
                </div>
                <div style="width:25%" class="flexStart">
                    <div>
                        <v-icon>mdi-map-marker</v-icon>
                    </div>
                    <div>
                        <span class="footerName">OFFICE LOCATION</span>
                    </div>
                    <div>
                        <span>© 2022 Pawn Trust. All Rights Reserved</span>
                    </div>
                </div>
                <div style="width:25%" class="flexStart">
                    <div>
                        <span>© 2022 Pawn Trust. All Rights Reserved</span>
                    </div>
                </div>
                <div style="width:25%" class="flexStart">
                    <div>
                        <img src="https://pawntrust.com/wp-content/uploads/2022/10/footer-logo.png" />
                    </div>
                    <div>
                        <span>© 2022 Pawn Trust. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.flexrow{
    display: flex;
    flex-direction: row;
}
.flexCenter{
    display: flex;
    justify-content: center;
    align-items: center;
}
.footerName{
    color: #FFFFFF;
    font-size:1rem;
    font-weight: 600;
}
.dividerClass{
    color:#FFFFFF;
    border-bottom: 5px solid red;
}

.flexStart{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
</style>