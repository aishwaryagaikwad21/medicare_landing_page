<template>
    <div>
        <Footer />
    </div>
</template>
<script>
import Footer from "./Footer";

        
//<script>
require('@/assets/styles/main.css')

export default {
    Name:"Landing Page",
    components:{
        Footer

    },
    data : ()=> ({

    })
}
</script>

<style src="@/assets/styles/mystyles.css" >

.headerhai{
    height: 100%;
}

.topnavbar{
    height: 70px;
}
.title-help{
    font-family: roboto;
    font-weight: 700;
    font-size:50px;
    color:#232D42;
    line-height: 65px;
    letter-spacing: 2px;
}

.title-pg{
    line-height: 30px;
    color: #a3a8b2;
    width: 90%
    
}

.real-image{
    height :600px;
}

</style>