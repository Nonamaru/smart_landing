<template>
<!-- <YandexMetrika /> -->
<text id="Scenarios" class="web"></text>
<section id="slider" class="web">
    <div class="title"><text>Сценарии использования умного дома</text></div>
    <div class="sliders">
        <div 
            class="slide" 
            v-for="slide in slides" :key="slide" 
            v-bind:class="{hovered: slide.hovered}" 
            @mouseover="swapSlides(slide.id)"
        >
            <div class="picture"></div><img :src="slide.picture" />
            <transition name="slide-hovered">
                <div v-if="slide.hovered" class="hoveredText">
                    <text class="h1hover">{{ slide.title }}</text>
                    <text class="h2hover">{{ slide.description }}</text>
                </div>
            </transition>
            <transition name="slide-main">
                <div v-if="slide.main" class="mainText">
                    <text class="h1main">{{ slide.title }}</text>
                    <!-- <text class="h2main">{{ slide.description }}</text> -->
                </div>
            </transition>
        </div>
    </div>
</section>



<section id="slider" class="mobile">
    <text id="sl">Сценарии умного дома</text>
    <div class="slide" v-for="slide in MobileSlides" :key="slide">
        <img :src="slide.picture" />
        <div class="content">
            <text class="h1">{{ slide.title }}</text>
            <text class="h2">{{ slide.description }}</text>
        </div>
    </div>
</section>
</template>
<script>
export default{
    data(){
        return{
            slides:[
                {
                    id: 1,
                    idName: 's1',
                    hovered: true,
                    main: false,
                    title: 'Утренняя рутина',
                    description: 'Умная Wi-Fi розетка включает кофемашину для приготовления кофе. Датчик открытия двери автоматически выключает все устройства и закрывает дверь, когда кто-то выходит из дома.',
                    picture: '/_nuxt/assets/SliderPictures/s1.png'
                },
                {
                    id: 2,
                    idName: 's2',
                    hovered: false,
                    main: true,
                    title: 'Контроль температуры и влажности',
                    description: 'Датчик влажности и температуры следит за погодой на улице и контролирует температуру и влажность внутри дома. Если температура становится слишком высокой или низкой, система автоматически регулирует работу кондиционера или обогревателя.',
                    picture: '/_nuxt/assets/SliderPictures/s2.png'
                },
                {
                    id: 3,
                    idName: 's3',
                    hovered: false,
                    main: true,
                    title: 'Безопасность',
                    description: 'Датчик движения и камера ОВН следят за домом в течение всего дня и ночи. Если датчик движения срабатывает, система отправляет уведомление на телефон владельца дома, а камера ОВН записывает видео события.',
                    picture: '/_nuxt/assets/SliderPictures/s3.png'
                },
                {
                    id: 4,
                    idName: 's4',
                    hovered: false,
                    main: true,
                    title: 'Управление устройствами',
                    description: 'Абонентский маршрутизатор и умная Wi-Fi розетка позволяют управлять устройствами в доме из любой точки мира. Владелец дома может включить или выключить свет, телевизор или другие устройства, используя приложение на своем смартфоне.',
                    picture: '/_nuxt/assets/SliderPictures/s4.png'
                },
            ],
            MobileSlides:[
                {
                    id: 1,
                    idName: 's1',
                    hovered: true,
                    main: false,
                    title: 'Утренняя рутина',
                    description: 'Умная Wi-Fi розетка включает кофемашину для приготовления кофе. Датчик открытия двери автоматически выключает все устройства и закрывает дверь, когда кто-то выходит из дома.',
                    picture: '/_nuxt/assets/SliderPictures/s1.png'
                },
                {
                    id: 2,
                    idName: 's2',
                    hovered: false,
                    main: true,
                    title: 'Контроль температуры и влажности',
                    description: 'Датчик влажности и температуры следит за погодой на улице и контролирует температуру и влажность внутри дома. ',
                    picture: '/_nuxt/assets/SliderPictures/s2.png'
                },
                {
                    id: 3,
                    idName: 's3',
                    hovered: false,
                    main: true,
                    title: 'Безопасность',
                    description: 'Датчик движения и камера ОВН следят за домом в течение всего дня и ночи. Если датчик движения срабатывает, система отправляет уведомление на телефон владельца дома, а камера ОВН записывает видео события.',
                    picture: '/_nuxt/assets/SliderPictures/s3.png'
                },
                {
                    id: 4,
                    idName: 's4',
                    hovered: false,
                    main: true,
                    title: 'Управление устройствами',
                    description: 'Абонентский маршрутизатор и умная Wi-Fi розетка позволяют управлять устройствами в доме из любой точки мира. Владелец дома может включить или выключить свет, телевизор или другие устройства, используя приложение на своем смартфоне.',
                    picture: '/_nuxt/assets/SliderPictures/s4.png'
                },
            ],
        }
    },
    methods:{
        swapSlides(id){
            switch(id){
                case 1:
                    this.slides[0].hovered = true;
                    this.slides[1].hovered = false;
                    this.slides[2].hovered = false;
                    this.slides[3].hovered = false;

                    this.slides[0].main = false;
                    this.slides[1].main = true;
                    this.slides[2].main = true;
                    this.slides[3].main = true;
                    break;
                case 2:
                    this.slides[1].hovered = true;
                    this.slides[0].hovered = false;
                    this.slides[2].hovered = false;
                    this.slides[3].hovered = false;

                    this.slides[1].main = false;
                    this.slides[0].main = true;
                    this.slides[2].main = true;
                    this.slides[3].main = true;
                    break;
                case 3:
                    this.slides[2].hovered = true;
                    this.slides[1].hovered = false;
                    this.slides[0].hovered = false;
                    this.slides[3].hovered = false;

                    this.slides[2].main = false;
                    this.slides[1].main = true;
                    this.slides[0].main = true;
                    this.slides[3].main = true;
                    break;
                case 4:
                    this.slides[3].hovered = true;
                    this.slides[1].hovered = false;
                    this.slides[2].hovered = false;
                    this.slides[0].hovered = false;

                    this.slides[3].main = false;
                    this.slides[1].main = true;
                    this.slides[2].main = true;
                    this.slides[0].main = true;
                    break;
            }
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/cera-round-pro');
/*MOBILE*/
@media all and (max-width: 900px) {
#slider{
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    user-select: none;
    margin-top: 5vh;
}
#sl{
    font-size: 7.78vw;
    margin-bottom: 4vh;
    margin-top: 5vh;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    color: #172D3B;
    text-align: center;
}
.slide{
    width: 100%;
    height: 111.11vw;
    position: relative;
    margin-bottom: 4.44vw;
}
.slide img{
    position: absolute;
    width:100%;
    height: 100%;
    top: 0;
    object-fit: cover;
    border-radius: 24px;
    z-index: 2;
}
.content {
    position: absolute;
    z-index: 3;
    color: #F9FAFF;
    text-align: center;
    bottom: 0;
    background: linear-gradient(180deg, rgba(23, 45, 59, 0.3) 0%, rgba(23, 45, 59, 0.5) 100%);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 24px 24px;
    padding: 4.44vw;
}
.h1{
    font-family: 'Cera Round Pro';
    font-size: 5vw;
    margin-bottom: 1.5vh;
}
.h2{
    font-family: 'Cera Round Pro';
    font-size: 3.89vw;
    line-height: 5.83vw;
}
}


/*WEB*/
@media all and (min-width: 900px) {
#slider{
    margin-left: auto;
    margin-right: auto;
    /* width: 85vw; */
    width: 83.33vw;
    /* user-select: none;  */
}
.title{
    text-align: center;
    color: #172D3B;
    flex: none;
    margin-top: 4.44vw;
    margin-bottom: 4.44vw;
}
.title text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 2.50vw;
    margin-bottom: 3vw;
}
.sliders{
    width: 100%;
    height: 38.89vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.slide{
    position: relative;
    /* width: 15%; */
    width: 12.50vw;
    border-radius: 24px;
}
.picture{
    background: linear-gradient(180deg, rgba(23, 45, 59, 0) 0%, rgba(23, 45, 59, 0.5) 100%) !important;
    width: 100%;
    height: 100%;
    z-index: 3;
    border-radius: 0px 0px 24px 24px;
    position: absolute;
}
.slide img{
    position: absolute;
    width: 100%; 
    height: 100%;
    bottom: 0; 
    object-fit: cover;
    border-radius: 24px;
    z-index: 2;
}
.mainText {
    position: relative;
    width: 8.89vw;
    height: 8.89vw;
    left: 0;
    top: 24.44vw;
    /* background: #C51F5F; */
    background: rgb(77%, 12%, 37%, 0.8);
    /* opacity: 0.8; */
    border-radius: 0px 16px 16px 0px;
    z-index: 4;
}
.h1main{
    position: absolute;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 2.50vw;
    line-height: 2.92vw;
    display: flex;
    align-items: center;
    color: #F9FAFF !important;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    /* margin-left: 1.53vw; */
    margin-top: -19.33vw;
    height: 30.35vw;
    top: 0;
    left: 1.53vw;
    right: 1.53vw;
}
/* .h2main{display:none} */
.hoveredText {
    position: absolute;
    z-index: 4;
    bottom: 0;
    background: linear-gradient(180deg, rgba(23, 45, 59, 0.3) 0%, rgba(23, 45, 59, 0.5) 100%);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 24px 24px;
    padding: 1.67vw;
}
.h1hover{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.53vw;
    margin-bottom: 0.56vw;
    color: #F9FAFF;
    flex: none;
    align-self: stretch;
}
.h2hover{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.11vw;
    line-height: 1.67vw;
    color: #F9FAFF;
    flex: none;
    align-self: stretch;
    text-overflow: ellipsis;
    overflow: hidden;
}
.hovered{
    width: 40.83vw;
    animation: slize .8s;
}
@keyframes slize {
    0%{width: 12.50vw;}
    100%{width: 40.83vw;}
}


.slide-hovered-enter-active {animation: stat .9s;}
.slide-main-leave-active {transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
/* .slide-hovered-enter-from{animation: stat .8s;} */
@keyframes stat {
    /* from{height: 0%;}
    to{height: 10.5vw;} */
    0% {opacity: 0;}
    75%{opacity: 0;}
    100% {opacity: 1;}
}
.slide-main-leave-to {opacity: 0;}
}
</style>