<template>
<!-- <YandexMetrika /> -->
<section id="start" class="web">
    <div class="header" v-bind:class="{ headerScroll: ifScroll }">
        <div class="insert-header">
            <a href="https://k-telecom.org/"><img class="logo" src="@/assets/Logo.png" alt="k-telecom.org" /></a>
            <div class="anchors">
                <!-- <a href="#Opportunities">Возможности</a> -->
                <!-- <a href="#Devices">Устройства</a> -->
                <!-- <a href="#Scenarios">Сценарии</a> -->
                <!-- <a href="#Choosing_a_kit">Выбор комплекта</a> -->
                <a @click="this.$emit('scroll', 'opportunities')" >Возможности</a>
                <a @click="this.$emit('scroll', 'devices')" >Устройства</a>
                <a @click="this.$emit('scroll', 'slider')" >Сценарии</a>
                <a @click="this.$emit('scroll', 'kit')" >Выбор комплекта</a>
            </div>
            <a class="number" href="tel:88005510632">8 (343) 389 34 57</a>
        </div>
        <div class="back-header" v-bind:class="{ backHeader: ifScroll }"></div>
    </div>
    <div class="content">
        <text class="text1">Дом, который <br /><span>заботится <img src="@/assets/Vector.png" class="line" /></span>о вас</text>
        <text class="text2">Умные устройства работают вместе, упрощают домашние<br />дела и делают дом ярче и интереснее</text>
        <div class="href-button" @click="this.$emit('scroll', 'kit')">Подключить</div>
    </div>
    <div class="footer-gradient"></div>
    <img class="background-img" src="@/assets/startpage.png" />
</section>



<section id="start" class="mobile">
    <div class="header" v-if="ifMobileScroll">
        <div class="logo"><img src="@/assets/Logo.png" alt="k-telecom.org" /></div>
        <div class="pre-header-burger-icon">
            <Transition name="icons">
                <Icon v-if="!mobileMenu" class="menu-icon" icon="ion:menu" @click="mobileMenu = !mobileMenu" />
            </Transition>
            <Transition name="icons">
                <Icon v-if="mobileMenu" class="menu-icon" icon="ic:round-close" @click="mobileMenu = !mobileMenu" />
            </Transition>
        </div>
    </div>
    <Transition name="menu">
        <div v-if="mobileMenu" class="menu">
            <div class="anchors">
                <a @click="mobileMenu = !mobileMenu; this.$emit('scroll', 'opportunities')">Возможности</a>
                <a @click="mobileMenu = !mobileMenu; this.$emit('scroll', 'devices')">Устройства</a>
                <a @click="mobileMenu = !mobileMenu; this.$emit('scroll', 'slider')">Сценарии</a>
                <a @click="mobileMenu = !mobileMenu; this.$emit('scroll', 'kit')">Выбор комплекта</a>
            </div>
            <dvi class="menu-footer">
                <a href="tel:88005510632">8 (343) 389 34 57</a>
                <div class="social-links">
                    <a href="https://ok.ru/group/70000000811708"><Icon icon="mdi:odnoklassniki" /></a>
                    <a href="https://vk.com/ktelecom_group"><Icon icon="uil:vk" /></a>
                    <a href="https://www.youtube.com/channel/UCbdu-5kRxboKkm6-2DcBIlw"><Icon icon="typcn:social-youtube" /></a>
                </div>
            </dvi>
        </div>
    </Transition>
    <div class="content">
        <text class="text1">Дом, который <span>заботится <img src="@/assets/Vector.png" class="line" /></span> о вас</text>
        <text class="text2">Умные устройства работают вместе, упрощают домашние дела и делают дом ярче и интереснее</text>
        <div class="href-button" @click="this.$emit('scroll', 'kit')">Подключить</div>
    </div>
    <div class="footer-gradient"></div>
    <img class="background-img" src="@/assets/startpage.png" />
</section>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon,
    },
    data(){
        return{
            scrollStatus: 0,
            mobileMenu: false,
            ifScroll: false,
            ifMobileScroll: true,
            scrollTop: 0,
            scrolled: false
        }
    },
    methods: {
        handleScroll() {
            this.scrollTop = window.scrollY;
            if(!this.mobileMenu){
                if(this.scrollStatus > this.scrollTop + 250){
                    this.ifMobileScroll = true;
                    this.scrollStatus = this.scrollTop;
                } else if (this.scrollStatus < this.scrollTop - 250) {
                    this.ifMobileScroll = false;
                    this.scrollStatus = this.scrollTop;
                }
            }
            
            if(this.scrollTop > 1){
                this.ifScroll = true;
            } else {
                this.ifScroll = false;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        // this.$router.push('/');
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
@import url('https://fonts.cdnfonts.com/css/cera-round-pro');
/*MOBILE*/
@media all and (max-width: 900px) {
#start{
    width: 100vw;
    height: 100vh;
    user-select: none;
}
.header{
    position: fixed;
    width: 90vw;
    height: 3vh;
    padding: 3vh 5vw;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: inset 0px 170px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(40px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 10;
}
.logo{
    width: 34.44vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.logo img{ width: 100%;}
.pre-header-burger-icon{
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 10vw;
}
.menu-icon{
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    position: absolute;
    color: #455762;
}
.icons-enter-active {animation: icon-enter 1s;}
@keyframes icon-enter {
    from{
        /* transform: translateX(100px); */
        opacity: 0;
    }
    to {
        /* transform: translateX(0);  */
        opacity: 1;
    }
}
.icons-leave-active {animation: icon-leave 1s;}
@keyframes icon-leave {
    from{
        /* transform: translateX(0); */
        opacity: 1;
    }
    to {
        /* transform: translateX(100px); */
        opacity: 0;
    }
}
.menu{
    height: 91vh;
    width: 100vw;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: inset 0px 4340px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(40px);
    position: fixed;
    z-index: 10;
    margin-top: 9vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.menu-enter-active {animation: enter 1s;}
@keyframes enter {
    from{
        transform: translateX(100vw);
    }
    to {
        transform: translateX(0); 
    }
}
.menu-leave-active {animation: leave 1s;}
@keyframes leave {
    from{
        transform: translateX(0);
    }
    to {
        transform: translateX(100vw);
    }
}
.anchors{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
    width: 100%;
    height: 33.33vw;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
}
.anchors a{
    text-decoration: none;
    color: #172D3B;
}
.menu-footer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10%;
    width: 100%;
    height: 19.44vw;
}
.menu-footer a{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 5vw;
    color: #C51F5F;
    text-decoration: none;
}
.social-links{
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.social-links a{
    color: #172D3B !important;
    font-size: 8vw;
}

.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 90%;
}
.text1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 10.56vw;
    line-height: 10.56vw;
    margin-bottom: 1vh;
    color: #172D3B;
}
.text1 span{
    position: relative;
    font-family: 'Inter', sans-serif;
    z-index: 2;
    color: #172D3B;
}
.line{
    position: absolute;
    bottom: 3px;
    z-index: -1;
    left: 0;
    width: 100%;
}
.text2{
    font-family: 'Cera Round Pro' !important;
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
    line-height: 5.83vw;
    margin-bottom: 5vh;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    color: #172D3B;
}
.href-button{
    padding: 4.44vw 11.11vw;
    background: #C51F5F;
    box-shadow: 0px 0px 16px rgba(197, 31, 95, 0.16), 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 4.44vw;
    color: white;
}
.footer-gradient{
    position: absolute;
    width: 100vw;
    /* height: 36.11vw; */
    height: 27.78vw;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(180deg, rgba(249, 250, 255, 0) 0%, #F9FAFF 100%);
    z-index: 2;
}
.background-img{
    z-index: 1;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(gray-sofa-white-living-room-interior-with-copy-space-3d-rendering.jpg);
    filter: blur(4px);
    object-fit: cover;
    width: 100%;
    height: 99%;
}
}



/*WEB*/
@media all and (min-width: 900px) {
#start{
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* user-select: none; */
    position: relative;
}
#start .background-img{
    z-index: 1;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(gray-sofa-white-living-room-interior-with-copy-space-3d-rendering.jpg);
    filter: blur(4px);
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.header{
    position: fixed;
    z-index: 100;
    height: 5vw;
    width: 100vw;
    top: 2.51vw;
    left: 50%;
    transform: translate(-50%, -50%); 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.insert-header{
    /* width: 85vw; */
    width: 83.33vw;
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.headerScroll{
    z-index: 20;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: inset 0px 170px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(40px);
}
.back-header{
    width: 100%;
    height: 100%;
    position: absolute;
}
.backHeader{
    box-shadow: 0px 4px 8px 0px rgba(23, 45, 59, 0.12);
}
.header .logo {
    width: 11.53vw;
    height: 2.22vw;
}
.anchors{
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.anchors a{
    font-family: 'Cera Round Pro';
    color: #172D3B;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
    cursor: pointer;
}
.anchors a:hover{
    color: #C51F5F;
}
.header .number{
    font-family: 'Cera Round Pro';
    text-decoration: none;
    color: #C51F5F;
    font-weight: 500;
    font-size: 1.25vw;
    font-style: normal;
}
.header .number:hover{color: #880E3F;}


.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.content .text1{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 6.67vw;
    line-height: 6.67vw;
    color: #172D3B;
    width: 54.51vw;
}
.text1 span{
    position: relative;
    font-family: 'Inter', sans-serif;
    z-index: 2;
}
.line{
    position: absolute;
    bottom: 1vh;
    z-index: -1;
    left: 0;
    width: 100%;
}
.content .text2{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.11vw;
    line-height: 1.67vw;
    margin-top: 1.11vw;
    color: #172D3B;
}
.href-button{
    font-family: 'Cera Round Pro';
    margin-top: 2.22vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 1.11vw 2.78vw;
    font-style: normal;
    font-weight: 500;
    font-size: 1.11vw;
    color: #FFFFFF;
    background: #C51F5F;
    box-shadow: 0px 0px 16px rgba(197, 31, 95, 0.16), 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    width: 9.31vw;
}
.href-button:hover{
    cursor: pointer;
    background-color: #AC1652;
}
.href-button:active{
    background-color: #880E3F;
}


.footer-gradient{
    position: absolute;
    width: 100vw;
    height: 9.03vw;
    bottom: 0px;
    background: linear-gradient(180deg, rgba(249, 250, 255, 0) 0%, #F9FAFF 100%);
}
}
</style>