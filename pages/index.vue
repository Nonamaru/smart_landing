<template>
<div>
    <Head>
        <Title>Smart K Telecom</Title>
        <Meta name="yandex-verification" content="5f59ea596b6c277b"/>
    </Head>
</div>
<div id="desktop">
    
    <!-- <YandexMetrika /> -->
    
    <div ref="start"></div>
    <StartView @scroll="(i) => scroll(i)" />
    <div ref="opportunities"></div>
    <OpportunitiesView />
    <div ref="devices"></div>
    <DevicesView />
    <div ref="slider"></div>
    <SliderView />
    <div ref="kit"></div>
    <KitView />
    <QuestionsView />
    <FooterView @footerScroll="(i) => scroll(i)" />
</div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon,
    },
    methods:{
        scroll(page){
            this.$refs[`${page}`].scrollIntoView({ behavior: "smooth" });
        }
    },
    mounted(){
        this.$refs['start'].scrollIntoView({behavior: 'smooth'});
    }
    // mounted() {
    //     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    //     m[i].l=1*new Date();
    //     for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    //     k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    //     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    //     ym(94075822, "init", {
    //          clickmap:true,
    //          trackLinks:true,
    //          accurateTrackBounce:true,
    //          webvisor:true,
    //          defer: true,
    //     });
    // }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
@import url('https://fonts.cdnfonts.com/css/cera-round-pro');
@media all and (max-width: 900px) {
*{
    font-family: 'Cera Round Pro';
}
.swiper-pagination-bullet-active {
  background-color: #C51F5F;
}
.web{display:none !important;}
}
@media all and (min-width: 900px) {
*{
    font-family: 'Cera Round Pro';
}
.mobile{display:none !important;}
}
</style>