<template>
<!-- <YandexMetrika /> -->
<section id="footer" class="web">
    <div class="container">
        <div class="top-content">
            <div class="logo-block">
                <a href="https://k-telecom.org/"><img src="@/assets/WhiteLogo.svg" /></a>
                <a href='tel:88005510632'>8 (343) 389 34 57</a>
            </div>
            <div class="anchors-block">
                <a href="#Opportunities">Возможности</a>
                <a href="#Devices">Устройства</a>
                <a href="#Scenarios">Сценарии</a>
                <a href="#Choosing_a_kit">Выбор комплекта</a>
            </div>
            <div class="links-block">
                <a href="https://ok.ru/group/70000000811708"><Icon icon="mdi:odnoklassniki" /></a>
                <a href="https://vk.com/ktelecom_group"><Icon icon="uil:vk" /></a>
                <a href="https://www.youtube.com/channel/UCbdu-5kRxboKkm6-2DcBIlw"><Icon icon="typcn:social-youtube" /></a>
            </div>
        </div>
        <div class="bottom-content">
            <text>© 2023 ООО «К Телеком»</text>
            <a href="https://k-telecom.org/politika-konfidentsialnosti/">Политика конфиденциальности</a>
        </div>
    </div>
</section>



<section id="footer" class="mobile">
    <div class="content">
        <div class="top-content">
            <div class="logo-blocki"><img src="@/assets/WhiteLogo.svg"></div>
            <a href="tel:88005510632">8 (343) 389 34 57</a>
            <div class="anchors-block">
                <a href="#item_0">Возможности</a>
                <a href="#item_1">Устройства</a>
                <a href="#item_2">Сценарии</a>
                <a href="#item_3">Выбор комплекта</a>
            </div>
            <div class="links-block">
                <a href="https://ok.ru/group/70000000811708"><Icon icon="mdi:odnoklassniki" /></a>
                <a href="https://vk.com/ktelecom_group"><Icon icon="uil:vk" /></a>
                <a href="https://www.youtube.com/channel/UCbdu-5kRxboKkm6-2DcBIlw"><Icon icon="typcn:social-youtube" /></a>
            </div>
        </div>
        <div class="bottom-content">
            <text>© 2023 ООО «К Телеком»</text>
            <a href="https://k-telecom.org/politika-konfidentsialnosti/">Политика конфиденциальности</a>
        </div>
    </div>
</section>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon,
    }
}
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/cera-round-pro');
/*MOBILE*/
@media all and (max-width: 900px) {
#footer{
    width: 100vw;
    background-color: #C51F5F;
    color: white;
    user-select: none; 
    display: flex;
    flex-direction: column;
}
.content{
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
}
.top-content{
    border-bottom: 1px solid white;
    text-align: center;
}
.logo-blocki{
    margin-top: 8.89vw;
    margin-bottom: 3.33vw;
}
.top-content a{
    text-decoration: none;
    color: white;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 5vw;
}
.anchors-block{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 8.89vw;
    margin-bottom: 11.67vw;
    height: 33.33vw;
    width: 100%;
}
.anchors-block a{
    text-decoration: none;
    color: white;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
}
.links-block{
    width: 35%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8.89vw;
}
.links-block a{font-size: 8vw;}
.bottom-content{
    margin-top: 2vh;
    margin-bottom: 2vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.bottom-content text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.33vw;
    margin-bottom: 1.11vw;
}
.bottom-content a {
    text-decoration: none;
    color: white;
    font-size: 3.33vw;
}

}


/*WEB*/
@media all and (min-width: 900px) {
#footer{
    width: 100vw;
    background-color: #C51F5F;
    color: white;
    user-select: none; 
}
.container{
    /* width: 85vw; */
    width: 83.33vw;
    /* height: 100%; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.top-content{
    width: 100%;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* height: 10.14vw; */
    padding: 1.67vw 0px;
}
.logo-block{
    display: flex;
    flex-direction: column;
}
.logo-block img{
    width: 14.38vw;
    height: 2.78vw;
}
.logo-block a{
    text-decoration: none;
    margin-top: 1.11vw;
    color: white;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.53vw;
}
.anchors-block{
    width: 33.54vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.anchors-block a{
    text-decoration: none;
    color: white;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
}
.anchors-block a:hover{color: #F9E9EF;}
.links-block{
    font-size: 1.67vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 7.22vw;
}
.links-block a{
    text-decoration: none;
    color: white;
}
.links-block a:hover{color: #F9E9EF;}
.bottom-content{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* height: 4.72vw; */
    padding: 1.25vw 0px;
}
.bottom-content text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
}
.bottom-content a{
    text-decoration: none;
    color: white;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
}
.bottom-content a:hover{color: #F9E9EF;}
}
</style>