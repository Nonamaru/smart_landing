<template>
<div id="desktop">
    <YandexMetrika />
    <StartView />
    <OpportunitiesView />
    <DevicesView />
    <SliderView />
    <KitView />
    <QuestionsView />
    <FooterView />
</div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon,
    }
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