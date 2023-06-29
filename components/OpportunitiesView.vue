<template>
<!-- <YandexMetrika /> -->
<text id="Opportunities" class="web"></text>
<section id="opportunities" class="web">
    <text id="title">Возможности умного дома</text>
    <div class="opportunities-elements">
        <div class="element">
            <ph-lightning class="icon" />
            <text class="h1">Экономия энергии</text>
            <text class="h2">Система помогает экономить энергию, благодаря автоматическому регулированию температуры, освещения и&nbsp;других функций дома.</text>
        </div>
        <div class="element">
            <ph-plugs class="icon" />
            <text class="h1">Без проводов</text>
            <text class="h2">Установка и&nbsp;настройка умного дома займёт считанные минуты. Для этого не&nbsp;понадобится помощь отдельного специалиста.</text>
        </div>
        <div class="element">
            <ph-shield-check class="icon" />
            <text class="h1">Безопасность</text>
            <text class="h2">Вы&nbsp;получите предупреждения о&nbsp;любых нештатных событиях в&nbsp;реальном времени, даже если вы&nbsp;не&nbsp;находитесь дома.</text>
        </div>
        <div class="element">
            <ph-hand-pointing class="icon" />
            <text class="h1">Управление из приложения</text>
            <text class="h2">Контролируйте умные устройства, используя только один девайс. Это удобно и&nbsp;избавляет от&nbsp;необходимости ходить по&nbsp;всему дому для управления отдельными приборами.</text>
        </div>
        <div class="element">
            <ph-bed class="icon" />
            <text class="h1">Комфорт</text>
            <text class="h2">Задайте определенные условия и&nbsp;предпочтения для создания уютной обстановки вашего дома.</text>
        </div>
        <div class="element">
            <ph-truck class="icon" />
            <text class="h1">Доставка</text>
            <text class="h2">Бесплатно доставим заказ в&nbsp;ближайший к&nbsp;вам офис К&nbsp;Телеком.</text>
        </div>
    </div>
</section>



<section id="opportunities" class="mobile">
    <text id="op">Возможности умного дома</text>
    <div class="opportunities-elements">
        <div class="element">
            <ph-lightning class="icon" style="font-size: 8vw;" />
            <text class="h1">Экономия энергии</text>
            <text class="h2">Система помогает экономить энергию, благодаря автоматическому регулированию температуры, освещения и других функций дома.</text>
        </div>
        <div class="element">
            <ph-plugs class="icon" />
            <text class="h1">Без проводов</text>
            <text class="h2">Установка и настройка умного дома займёт считанные минуты. Для этого не понадобится помощь отдельного специалиста.</text>
        </div>
        <div class="element">
            <ph-shield-check class="icon" />
            <text class="h1">Безопасность</text>
            <text class="h2">Вы получите предупреждения о любых нештатных событиях в реальном времени, даже если вы не находитесь дома.</text>
        </div>
        <div class="element">
            <ph-hand-pointing class="icon" />
            <text class="h1">Управление из приложения</text>
            <text class="h2">Контролируйте умные устройства, используя только один девайс. Это удобно и избавляет от необходимости ходить по всему дому для управления отдельными приборами.</text>
        </div>
        <div class="element">
            <ph-bed class="icon" />
            <text class="h1">Комфорт</text>
            <text class="h2">Задайте определенные условия и предпочтения для создания уютной обстановки вашего дома.</text>
        </div>
        <div class="element">
            <ph-truck class="icon" />
            <text class="h1">Доставка</text>
            <text class="h2">Бесплатно доставим заказ в ближайший к вам офис К Телеком.</text>
        </div>
    </div>
</section>
</template>
<script>
import { Icon } from '@iconify/vue';
import { PhLightning, PhPlugs, PhShieldCheck, PhHandPointing, PhBed, PhTruck } from "@phosphor-icons/vue";
export default{
    components:{
        Icon,
        PhLightning,
        PhPlugs, 
        PhShieldCheck, 
        PhHandPointing, 
        PhBed, 
        PhTruck,
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
/*MOBILE*/
@media all and (max-width: 900px) {
#opportunities{
    width: 90vw;
    margin-left: auto;
    margin-right: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none; 
    margin-top: 5vh;
}
#op{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 7.78vw;
    color: #172D3B;
    text-align: center;
    margin-bottom: 5vh;
}
.opportunities-elements{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.element{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4.5vh;
}
.icon{
    color: #C51F5F;
    font-size: 7.78vw;
    margin-bottom: 3vw;
}
.h1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 5vw;
    color: #172D3B;
    margin-bottom: 2.22vw;
}
.h2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
    line-height: 5.83vw;
    color: #535353;
}
}


/*WEB*/
@media all and (min-width: 900px) {
#opportunities{
    margin-left: auto;
    margin-right: auto;
    /* width: 85vw; */
    width: 83.33vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none; 
}
#title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 2.50vw;
    text-align: center;
    letter-spacing: -0.008em;
    color: #172D3B;
    margin-top: 4.44vw;
    margin-bottom: 4.44vw;
}
.opportunities-elements{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.element{
    width: 30%;
    margin-bottom: 3vw;
    display: flex;
    flex-direction: column;
}
.icon{
    color: #C51F5F;
    font-size: 2vw;
    margin-bottom: 0.97vw;
}
.h1{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.53vw;
    margin-bottom: 0.56vw;
    color: #172D3B;
}
.h2{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.11vw;
    line-height: 1.67vw;
    color: #535353;
}
}
</style>