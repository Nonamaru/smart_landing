<template>
<!-- <YandexMetrika /> -->
<text id="Devices" class="web"></text>
<section id="devices" class="web">
    <text id="title">Наши устройства</text>
    <div class="main">
        <div v-for="item in items" :key="item" :id="item.name" v-bind:class="{pilsing: !item.open, closePulse: item.open}" @click="isPopup(item.id); shadow = true">
            <div v-if="item.open"></div>
            <div v-if="item.open"></div>
            <div class="closePulseHover" v-if="item.open">
                <Icon icon="material-symbols:close" />
            </div>
            <div v-if="!item.open">
                <div v-if="!item.open">
                    <!-- <div v-if="!item.open"></div> -->
                </div>
            </div>
        </div>
        <div class="popup-shadow" @click="closeAll(); shadow = false" v-if="shadow"></div>
    </div>
    <div :id="suka">
        <text class="popup-title">{{title}}</text>
        <img class="popup-img" :src="picture" />
        <text class="popup-desc">{{ description }}</text>
    </div>
    <img id="background-img" src="@/assets/roomdoor.png" />
</section>



<section id="devices" class="mobile">
    <text id="dev">Наши устройства</text>
    <div class="device">
        <swiper 
        :modules="modules"
        :slides-per-view="1"
        :pagination="true"
        >
            <swiper-slide v-for="item in items" :key="item">
                <div class="swiper">
                    <div class="element">
                        <text class="h1">{{ item.title }}</text>
                        <div class="img"><img :src="item.picture" /></div>
                        <text class="h2">{{ item.description }}</text>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</section>
</template>
<script>
import { Icon } from '@iconify/vue';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default{
    components: {
		Icon,
        Swiper,
        SwiperSlide,
	},
    data(){
        return {
            suka: 'x',
            shadow: false,
            title: '',
            picture: '',
            description: '',
            modules: [Navigation, Pagination],
            items:[
                {
                    id: 1,
                    open: false,
                    name: 'one',
                    popupName: 'pOne',
                    title: 'Маршрутизатор',
                    picture: '/_nuxt/assets/Devices/router.png',
                    description: 'Совместный роутер и хаб — это устройство, которое объединяет функции обычного роутера и умного хаба. Он позволяет не только распространять Wi-Fi сигнал по всему дому, но и управлять устройствами в вашей сети.'
                },
                {
                    id: 2,
                    open: false,
                    name: 'two',
                    popupName: 'pTwo',
                    title: 'Камера видеонаблюдения',
                    picture: '/_nuxt/assets/Devices/camera.png',
                    description: 'Это устройство, предназначенное для записи видео с возможностью удаленного доступа к нему через интернет. Она может быть использована для обеспечения безопасности дома, квартиры, офиса, магазина и других мест.'
                },
                {
                    id: 3,
                    open: false,
                    name: 'three',
                    popupName: 'pThree',
                    title: 'Датчик движения',
                    picture: '/_nuxt/assets/Devices/move.png',
                    description: 'Устройство распознает и фиксирует перемещения людей в охраняемой зоне. Объемная зона обнаружения и настраиваемая защита от домашних животных'
                },
                {
                    id: 4,
                    open: false,
                    name: 'four',
                    popupName: 'pFour',
                    title: 'Умная розетка',
                    picture: '/_nuxt/assets/Devices/smartfork.png',
                    description: 'Умная Wi-Fi розетка позволяет контролировать включение и выключение электрических приборов с помощью приложения на смартфоне.'
                },
                {
                    id: 5,
                    open: false,
                    name: 'five',
                    popupName: 'pFive',
                    title: 'Датчик открытия',
                    picture: '/_nuxt/assets/Devices/open.png',
                    description: 'Позволяет контролировать доступ к помещению и обеспечивает безопасность вашего дома. Датчик может быть установлен на любой поверхности и работает совместно с приложением на смартфоне.'
                },
                {
                    id: 6,
                    open: false,
                    name: 'six',
                    popupName: 'pSix',
                    title: 'Датчик протечки',
                    picture: '/_nuxt/assets/Devices/techka.png',
                    description: 'Беспроводной датчик обнаружит первые признаки затопления. Сенсоры размещаются в местах возможного скопления воды, например, под раковиной и под стиральной машиной.'
                },
                {
                    id: 7,
                    open: false,
                    name: 'seven',
                    popupName: 'pSeven',
                    title: 'Датчик температуры и влажности',
                    picture: '/_nuxt/assets/Devices/temperature.png',
                    description: 'Установите желаемое значение влажности воздуха в помещении, чтобы поддерживать комфортный микроклимат.'
                },
            ]
        }
    },
    methods:{
        isPopup(id){
            let num = id - 1;
            switch(id){
                case 1:
                    if (this.suka == 'pOne'){
                        this.suka = 'x';
                        this.title = '';
                        this.picture = '';
                        this.description = '';

                        this.items[num].open = false;
                    } else {
                        this.suka = 'pOne';
                        this.title = this.items[num].title;
                        this.picture = this.items[num].picture;
                        this.description = this.items[num].description;
                        
                        this.items[0].open = true;
                        this.items[1].open = false;
                        this.items[2].open = false;
                        this.items[3].open = false;
                        this.items[4].open = false;
                        this.items[5].open = false;
                        this.items[6].open = false;
                    }
                    break;
                case 2:
                    if (this.suka == 'pTwo'){
                        this.suka = 'x';
                        this.title = '';
                        this.picture = '';
                        this.description = '';

                        this.items[num].open = false;
                    } else {
                        this.suka = 'pTwo';
                        this.title = this.items[num].title;
                        this.picture = this.items[num].picture;
                        this.description = this.items[num].description;

                        this.items[0].open = false;
                        this.items[1].open = true;
                        this.items[2].open = false;
                        this.items[3].open = false;
                        this.items[4].open = false;
                        this.items[5].open = false;
                        this.items[6].open = false;
                    }
                    break;
                case 3:
                    if (this.suka == 'pThree'){
                        this.suka = 'x';
                        this.title = '';
                        this.picture = '';
                        this.description = '';

                        this.items[num].open = false;
                    } else {
                        this.suka = 'pThree';
                        this.title = this.items[num].title;
                        this.picture = this.items[num].picture;
                        this.description = this.items[num].description;

                        this.items[0].open = false;
                        this.items[1].open = false;
                        this.items[2].open = true;
                        this.items[3].open = false;
                        this.items[4].open = false;
                        this.items[5].open = false;
                        this.items[6].open = false;
                    }
                    break;
                case 4:
                    if (this.suka == 'pFour'){
                        this.suka = 'x';
                        this.title = '';
                        this.picture = '';
                        this.description = '';

                        this.items[num].open = false;
                    } else {
                        this.suka = 'pFour';
                        this.title = this.items[num].title;
                        this.picture = this.items[num].picture;
                        this.description = this.items[num].description;

                        this.items[0].open = false;
                        this.items[1].open = false;
                        this.items[2].open = false;
                        this.items[3].open = true;
                        this.items[4].open = false;
                        this.items[5].open = false;
                        this.items[6].open = false;
                    }
                    break;
                case 5:
                    if (this.suka == 'pFive'){
                        this.suka = 'x';
                        this.title = '';
                        this.picture = '';
                        this.description = '';

                        this.items[num].open = false;
                    } else {
                        this.suka = 'pFive';
                        this.title = this.items[num].title;
                        this.picture = this.items[num].picture;
                        this.description = this.items[num].description;

                        this.items[0].open = false;
                        this.items[1].open = false;
                        this.items[2].open = false;
                        this.items[3].open = false;
                        this.items[4].open = true;
                        this.items[5].open = false;
                        this.items[6].open = false;
                    }
                    break;
                case 6:
                    if (this.suka == 'pSix'){
                        this.suka = 'x';
                        this.title = '';
                        this.picture = '';
                        this.description = '';

                        this.items[num].open = false;
                    } else {
                        this.suka = 'pSix';
                        this.title = this.items[num].title;
                        this.picture = this.items[num].picture;
                        this.description = this.items[num].description;

                        this.items[0].open = false;
                        this.items[1].open = false;
                        this.items[2].open = false;
                        this.items[3].open = false;
                        this.items[4].open = false;
                        this.items[5].open = true;
                        this.items[6].open = false;
                    }
                    break;
                case 7:
                    if (this.suka == 'pSeven'){
                        this.suka = 'x';
                        this.title = '';
                        this.picture = '';
                        this.description = '';

                        this.items[num].open = false;
                    } else {
                        this.suka = 'pSeven';
                        this.title = this.items[num].title;
                        this.picture = this.items[num].picture;
                        this.description = this.items[num].description;

                        this.items[0].open = false;
                        this.items[1].open = false;
                        this.items[2].open = false;
                        this.items[3].open = false;
                        this.items[4].open = false;
                        this.items[5].open = false;
                        this.items[6].open = true;
                    }
                    break;
            }
        },
        closeAll(){
            this.suka = 'x';
            this.items[0].open = false;
            this.items[1].open = false;
            this.items[2].open = false;
            this.items[3].open = false;
            this.items[4].open = false;
            this.items[5].open = false;
            this.items[6].open = false;
        }
    },
}
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/cera-round-pro');
/*MOBILE*/
@media all and (max-width: 900px) {
#devices{
    /* width: 90vw; */
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    user-select: none;
    margin-top: 5vh;
}
#dev{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 7.78vw;
    color: #172D3B;
    text-align: center;
    margin-bottom: 5vh;
}
.device{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
.swiper{
    width: 99%;
    height: 130vw;
    justify-content: center;
}
/* .element{
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    overflow: scroll;
    position: relative;
    z-index: 2;
} */
.element{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4.44vw 6.67vw;
    position: relative;
    width: 78.33vw;
    height: 106.11vw;
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 15px -3px, rgba(0, 0, 0, 0.05) 0px 1px 6px -2px;
    border-radius: 16px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1vh;
}
/* .h1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 6vw;
    color: #172D3B;
    margin-bottom: 2vw;
} */
.h1{
    width: 65vw;
    height: 6.11vw;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 5vw;
    text-align: center;
    color: #172D3B;
}
/* .img{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
} */
.img{
    width: 65vw;
    height: 35.56vw;
}
.img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
/* .h2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 4vw;
    color: #535353;
    margin-top: 2vw;
    line-height: 7vw;
} */
.h2{
    width: 65vw;
    height: 46.67vw;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
    line-height: 5.83vw;
    text-align: center;
    color: #535353;
}

}


/*WEB*/
@media all and (min-width: 900px) {
#devices{
    margin-left: auto;
    margin-right: auto;
    /* width: 85vw; */
    width: 83.33vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    user-select: none;
    position: relative;
}
#title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 2.50vw;
    text-align: center;
    color: #172D3B;
    margin-top: 4.44vw;
    margin-bottom: 4.44vw;
}

#background-img{
    width:100%; 
    bottom: 0; 
    object-fit: fill;
    height: 100%;
}
.main{
    position: absolute;
    width: 100%;
    height: 100%;
}
#one{
    height: 2.78vw;
    width: 2.78vw;
    position: absolute;
    border: 1px solid #C51F5F;
    border-radius: 50%;
    margin-top: 32vw;
    margin-left: 6.5vw;
    top: 0;
    left: 0;
    z-index: 5;
}
#two{
    height: 2.78vw;
    width: 2.78vw;
    position: absolute;
    border: 1px solid #C51F5F;
    border-radius: 50%;
    margin-top: 19.65vw;
    margin-left: 13.75vw;
    top: 0;
    left: 0;
    z-index: 5;
}
#three{
    height: 2.78vw;
    width: 2.78vw;
    position: absolute;
    border: 1px solid #C51F5F;
    border-radius: 50%;
    margin-top: 30.65vw;
    margin-left: 20.55vw;
    top: 0;
    left: 0;
    z-index: 5;
}
#four{
    height: 2.78vw;
    width: 2.78vw;
    position: absolute;
    border: 1px solid #C51F5F;
    border-radius: 50%;
    margin-top: 35.5vw;
    margin-left: 20.55vw;
    top: 0;
    left: 0;
    z-index: 5;
}
#five{
    height: 2.78vw;
    width: 2.78vw;
    position: absolute;
    border: 1px solid #C51F5F;
    border-radius: 50%;
    margin-top: 19.1vw;
    margin-left: 37.74vw;
    top: 0;
    left: 0;
    z-index: 5;
}
#six{
    height: 2.78vw;
    width: 2.78vw;
    position: absolute;
    border: 1px solid #C51F5F;
    border-radius: 50%;
    margin-top: 39.9vw;
    margin-left: 44.93vw;
    top: 0;
    left: 0;
    z-index: 5;
}
#seven{
    height: 2.78vw;
    width: 2.78vw;
    position: absolute;
    border: 1px solid #C51F5F;
    border-radius: 50%;
    margin-top: 33.18vw;
    margin-left: 61.1vw;
    top: 0;
    left: 0;
    z-index: 5;
}

#x{ display: none; }
.popup-shadow{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 4;
}
.popup-title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.53vw;
    text-align: center;
    color: #172D3B;
}
.popup-img{
    /* width: 50%; */
    width: 16.25vw;
    height: 8.89vw;
    margin-top: 1.11vw;
    margin-bottom: 1.11vw;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
}
.popup-desc{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
    line-height: 1.39vw;
    text-align: center;
    color: #535353;
}
#pOne{
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    position: absolute;
    margin-top: 25%;
    margin-left: 12%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    z-index: 5;
}
#pTwo{
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    position: absolute;
    margin-top: 10%;
    margin-left: 21%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    z-index: 5;
}
#pThree{
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    position: absolute;
    margin-top: 24%;
    margin-left: 29%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    z-index: 5;
}
#pFour{
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    position: absolute;
    margin-top: 32%;
    margin-left: 29%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    z-index: 5;
}
#pFive{
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    position: absolute;
    margin-top: 11%;
    margin-left: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    z-index: 5;
}
#pSix{
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    position: absolute;
    margin-top: 34%;
    margin-left: 25%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    z-index: 5;
}
#pSeven{
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    position: absolute;
    margin-top: 28%;
    margin-left: 45%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    z-index: 5;
}

/*STATIC PULSE*/
.pilsing {
    z-index: 0;
    cursor: pointer;
}
.pilsing div:nth-child(1) {animation: pulse 4s infinite;}
.pilsing div:nth-child(2) {animation: pulse 2s infinite;}
.pilsing div:hover{
    animation: stop 1s;
    opacity: .5;
    transform:scale(1.25);
}
@keyframes stop {
    from {
        transform: scale(1.1);
        opacity: .3;
    }
    to {
        transform: scale(1.25);
        opacity: .5;
    }
}
.pilsing div {
    border-radius: 50%;
    position: relative;
    width: 100%;
    height: 100%;
    margin-left: -1.5%;
    margin-top: -2%;
    top: 0;
    left: 0;
    border: 1px solid #C51F5F;
}
@keyframes pulse{
    0%{
        transform:scale(1.1);
        opacity: .3;
    }
    25%{
        opacity:.5;
    }
    50%{
        opacity: .5;
        transform:scale(1.25);
    }
    75%{
        opacity:.5;
    }
    100%{
        transform:scale(1.1);
        opacity: .3;
    }
}

/*HOVER PULSE*/
.closePulse {
    margin: 100px;
    display: flex;
    height: 2.5vw;
    width: 2.5vw;
    border-radius: 50%;
    background: #c51f5fc0;
    border: none !important;
    cursor: pointer;
}
.closePulse:hover{
    background: #C51F5F;
}
.closePulse div{
    position: absolute;
    /* top:50%;
    left:50%;
    transform:translate(-50%, -50%);  */
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.closePulse div:nth-child(1){
    box-shadow: 0 0 0 10px #C51F5F;
    opacity: .3;
    /* animation: pulsing 4s infinite; */
}
.closePulse div:nth-child(2){
    box-shadow: 0 0 0 5px #c51f5f;
    opacity: .5;
    /* animation: pulsing 2s infinite; */
}
.closePulseHover{
    font-size: 1.5vw;
    color: white;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
}

}

</style>