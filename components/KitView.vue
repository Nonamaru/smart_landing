<template>
<!-- <YandexMetrika /> -->
<text id="Choosing_a_kit" class="web"></text>
<section id="kit" class="web">
    <div class="title"><text>Выбери комплект, который подходит тебе</text></div>
    <div class="container">
        <div class="content">
            <div class="swipe">
                <div class="texta">
                    <text class="passiveContent" @click="content = 'base'; itemClass = 'x'; feedbackForm.tarif = 'Комплект Базовый'" v-bind:class="{ activeContent: (content == 'base') }" >Базовый</text>
                    <text class="passiveContent" @click="content = 'pro'; itemClass = 'x'; feedbackForm.tarif = 'Комплект Про'" v-bind:class="{ activeContent: (content == 'pro') }" >Про</text>
                </div>
                <div class="border-swipe">
                    <Transition name="base-active">
                        <div v-if="content == 'base'" class="active-swipe-left"></div>
                    </Transition>
                    <Transition name="pro-active">
                        <div v-if="content == 'pro'" class="active-swipe-right"></div>
                    </Transition>
                    <div class="passive-swipe"></div>
                </div>
            </div>
            <div class="text-title">Состав комплекта</div>
            <div class="text" v-if="content == 'base'">
                <div><text @mouseover="selectedItem(0)" @mouseleave="selectedItem(0)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Абонентский маршрутизатор</text></div>
                <div><text @mouseover="selectedItem(1)" @mouseleave="selectedItem(1)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик протечки</text></div>
                <div><text @mouseover="selectedItem(2)" @mouseleave="selectedItem(2)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Умная розетка Wi-Fi</text></div>
                <div><text class="disable-text"><Icon class="text-icon" icon="material-symbols:close" />Камера видеонаблюдения</text></div>
                <div><text @mouseover="selectedItem(4)" @mouseleave="selectedItem(4)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик открытия</text></div>
                <div><text class="disable-text"><Icon class="text-icon" icon="material-symbols:close" />PoE-инжектор</text></div>
                <div><text @mouseover="selectedItem(6)" @mouseleave="selectedItem(6)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик движения</text></div>
                <div><text class="disable-text"><Icon class="text-icon" icon="material-symbols:close" />Распределительная коробка</text></div>
            </div>
            <div class="price" v-if="content == 'base'">9 990₽</div>

            <div class="text" v-if="content == 'pro'">
                <div><text @mouseover="selectedItem(0)" @mouseleave="selectedItem(0)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Абонентский маршрутизатор</text></div>
                <div><text @mouseover="selectedItem(1)" @mouseleave="selectedItem(1)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик протечки</text></div>
                <div><text @mouseover="selectedItem(2)" @mouseleave="selectedItem(2)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Умная розетка Wi-Fi</text></div>
                <div><text @mouseover="selectedItem(3)" @mouseleave="selectedItem(3)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Камера видеонаблюдения</text></div>
                <div><text @mouseover="selectedItem(4)" @mouseleave="selectedItem(4)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик открытия</text></div>
                <div><text @mouseover="selectedItem(5)" @mouseleave="selectedItem(5)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />PoE-инжектор</text></div>
                <div><text @mouseover="selectedItem(6)" @mouseleave="selectedItem(6)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик движения</text></div>
                <div><text @mouseover="selectedItem(7)" @mouseleave="selectedItem(7)" class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Распределительная коробка</text></div>
            </div>
            <div class="price" v-if="content == 'pro'">14 990₽</div>

            <div v-if="itemClass != 'x'" :id="itemClass">
                <div class="popup-title">{{ items[itemId].title }}</div>
                <img :src="items[itemId].picture" class="popup-picture">
                <div class="popup-content">{{ items[itemId].description }}</div>
            </div>

            <div class="submit" @click="isFeedbackPopup = !isFeedbackPopup"><text>Оформить заказ</text></div>
        </div>
        <div class="picture">
            <div class="sukaebalrot">
                <img v-if="content == 'base'" src="@/assets/KitPictures/kitBase.png" />
                <img v-if="content == 'pro'" src="@/assets/KitPictures/kitPro.png"  />
            </div>
        </div>
    </div>
    <div class="feedback-popup" v-if="isFeedbackPopup && !sendingDone">
        <div class="feedback-title"><text>Заявка на подключение</text><Icon class="icon" @click="isFeedbackPopup = !isFeedbackPopup;errorName=false;errorPhone=false;errorCheck=false" icon="material-symbols:close" /></div>
        <div class="top-content">
            <div class="top-content-inputs">
                <text class="popup-text">Выбор тарифа</text>
                <SelectComponent :text='feedbackForm.tarif' what="tarif" @selected="(item) => changeContent(item)" />
                <text class="popup-text">Имя</text>
                <input v-bind:class="{errorInput: errorName}" v-model="feedbackForm.name" placeholder="Как к вам обращаться?" type="text" minlength="2"  />
                <text class="popup-text">Телефон</text>
                <input v-bind:class="{errorInput: errorPhone}" v-model="feedbackForm.telephone" placeholder="+7 (999) 999 99-99" type="text" @input="phoneMask()" />
                <text class="popup-text">Город</text>
                <SelectComponent :text="feedbackForm.city" what="city" @selected="(item) => feedbackForm.city = item" />
                <Icon v-if="errorName" class="errorInputN" icon="carbon:warning-filled" />
                <Icon v-if="errorPhone" class="errorInputP" icon="carbon:warning-filled" />
                <div v-if="errorName" class="errorPopN">Нужно заполнить поле</div>
                <div v-if="errorPhone" class="errorPopP">Нужно заполнить поле</div>
            </div>
            <div class="top-content-pictures">
                <img v-if="content == 'base'" src="@/assets/KitPictures/kitBase.png" />
                <img v-if="content == 'pro'" src="@/assets/KitPictures/kitPro.png"  />
            </div>
        </div>
        <div class="middle-content">
            <text class="popup-text">Комментарий</text>
            <textarea v-model="feedbackForm.comment" name="text" placeholder="Комментарий"></textarea>
            <div class="politic"><input type="checkbox" id="politicChec" v-model="feedbackForm.checked" style="display:none" /><label v-bind:class="{checkforgot: errorCheck}" for="politicChec"><Icon v-if="feedbackForm.checked" icon="material-symbols:check" /></label> Я даю согласие на обработку&nbsp;<a href="https://k-telecom.org/politika-konfidentsialnosti/">персональных данных</a></div>
            <input class="button" type="submit" value="Оставить заявку" @click="sendForm(feedbackForm.tarif, feedbackForm.telephone, feedbackForm.name, feedbackForm.city, feedbackForm.comment, feedbackForm.checked)" />
        </div>
    </div>
    <div class="done-feedback-popup" v-if="isFeedbackPopup && sendingDone">
        <Icon class="done-icon" icon="mdi:check-decagram" />
        <text class="done-title">Заявка отправлена</text>
        <text class="done-desc">Мы свяжемся с вами в ближайшее время!</text>
        <div class="done-button" @click="isFeedbackPopup = !isFeedbackPopup; errorName=false; errorPhone=false; errorCheck=false; sendingDone=false; $router.push('/')">Вернуться на сайт</div>
    </div>
    <div @click="isFeedbackPopup = !isFeedbackPopup; errorName=false; errorPhone=false; errorCheck=false; $router.push('/')" class="feedback-popup-shadow" v-if="isFeedbackPopup"></div>
</section>



<section id="kit" class="mobile">
    <text id="kt">Выбери комплект, который подходит тебе</text>
    <div class="pics">
        <img v-if="content == 'base'" src="@/assets/KitPictures/kitBase.png" />
        <img v-if="content == 'pro'" src="@/assets/KitPictures/kitPro.png"  />
    </div>
    <div class="swipe">
        <div class="texta">
            <text class="passiveContent" @click="content = 'base'; itemClass = 'x'" v-bind:class="{ activeContent: (content == 'base') }">Базовый</text>
            <text class="passiveContent" @click="content = 'pro'; itemClass = 'x'" v-bind:class="{ activeContent: (content == 'pro') }">Про</text>
        </div>
        <div class="border-swipe">
            <Transition name="base-active">
                <div v-if="content == 'base'" class="active-swipe-left"></div>
            </Transition>
            <Transition name="pro-active">
                <div v-if="content == 'pro'" class="active-swipe-right"></div>
            </Transition>
            <div class="passive-swipe"></div>
        </div>
        <div class="text-title">Состав комплекта</div>
        <div class="text" v-if="content == 'base'">
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Абонентский маршрутизатор</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик протечки</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Умная розетка Wi-Fi</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик открытия</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик движения</text>
            <text class="disable-text"><Icon class="text-icon" icon="material-symbols:close" />Камера видеонаблюдения</text>
            <text class="disable-text"><Icon class="text-icon" icon="material-symbols:close" />PoE-инжектор</text>
            <text class="disable-text"><Icon class="text-icon" icon="material-symbols:close" />Распределительная коробка</text>
        </div>
        <div class="price" v-if="content == 'base'">9 990₽</div>

        <div class="text" v-if="content == 'pro'">
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Абонентский маршрутизатор</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик протечки</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Умная розетка Wi-Fi</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Камера видеонаблюдения</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик открытия</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />PoE-инжектор</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Датчик движения</text>
            <text class="active-text"><Icon class="text-icon" icon="ic:baseline-check" />Распределительная коробка</text>
        </div>
        <div class="price" v-if="content == 'pro'">14 990₽</div>
        <div class="submit" @click="isFeedbackPopup = !isFeedbackPopup"><text>Оформить заказ</text></div>
    </div>


    <div class="feedback-popup" v-if="isFeedbackPopup && !sendingDone">
        <div class="feedback-title"><text>Заявка на подключение</text><Icon class="icon" @click="isFeedbackPopup = !isFeedbackPopup;errorName=false;errorPhone=false;errorCheck=false" icon="material-symbols:close" /></div>
        <div class="top-content">
            <div class="top-content-pictures">
                <img v-if="content == 'base'" src="@/assets/KitPictures/kitBase.png" />
                <img v-if="content == 'pro'" src="@/assets/KitPictures/kitPro.png"  />
            </div>
            <div class="top-content-inputs">
                <text>Выбор тарифа</text>
                <SelectComponent :text='feedbackForm.tarif' what="tarif" @selected="(item) => changeContent(item)" />
                <!-- <select v-model="feedbackForm.tarif" class="tarif" @change="changeContent(feedbackForm.tarif)">
                    <option value="Комплект Базовый">Комплект "Базовый"</option>
                    <option value="Комплект Про">Комплект "Про"</option>
                </select> -->
                <text>Имя</text>
                <input v-bind:class="{errorInput: errorName}" v-model="feedbackForm.name" placeholder="Как к вам обращаться?" type="text" minlength="2"  />
                <text>Телефон</text>
                <input v-bind:class="{errorInput: errorPhone}" v-model="feedbackForm.telephone" placeholder="+7 (999) 999 99-99" type="text" @input="phoneMask()" />
                <text>Город</text>
                <SelectComponent :text="feedbackForm.city" what="city" @selected="(item) => feedbackForm.city = item" />
                <!-- <select v-model="feedbackForm.city">
                    <option>г. Екатеринбург</option>
                    <option>г. Екатеринбург</option>
                </select> -->
                <Icon v-if="errorName" class="errorInputN" icon="carbon:warning-filled" />
                <Icon v-if="errorPhone" class="errorInputP" icon="carbon:warning-filled" />
                <div v-if="errorName" class="errorPopN">Нужно заполнить поле</div>
                <div v-if="errorPhone" class="errorPopP">Нужно заполнить поле</div>
            </div>
        </div>
        <div class="middle-content">
            <text>Комментарий</text>
            <textarea v-model="feedbackForm.comment" name="text" placeholder="Комментарий"></textarea>
            <div class="politic">
                <input type="checkbox" id="politicChec" v-model="feedbackForm.checked" style="display:none" />
                <label v-bind:class="{checkforgot: errorCheck}" for="politicChec"><Icon v-if="feedbackForm.checked" icon="material-symbols:check" /></label> 
                <div>
                    <text>Я даю согласие на обработку</text>
                    <a href="https://k-telecom.org/politika-konfidentsialnosti/">персональных данных</a>
                </div>
            </div>
            <input class="button" type="submit" value="Оставить заявку" @click="sendForm(feedbackForm.tarif, feedbackForm.telephone, feedbackForm.name, feedbackForm.city, feedbackForm.comment, feedbackForm.checked);" />
        </div>
    </div>
    <div class="done-feedback-popup" v-if="isFeedbackPopup && sendingDone">
        <Icon class="done-close-icon" @click="isFeedbackPopup = !isFeedbackPopup; errorName=false; errorPhone=false; errorCheck=false; sendingDone=false; $router.push('/')" icon="material-symbols:close" />
        <Icon class="done-icon" icon="mdi:check-decagram" />
        <text class="done-title">Заявка отправлена</text>
        <text class="done-desc">Мы свяжемся с вами в ближайшее время!</text>
        <div class="done-button" @click="isFeedbackPopup = !isFeedbackPopup; errorName=false; errorPhone=false; errorCheck=false; sendingDone=false; $router.push('/')">Вернуться на сайт</div>
    </div>
</section>
</template>
<script>
import axios from 'axios';
import { Icon } from '@iconify/vue';
export default{
    components: {
		Icon,
	},
    data(){
        return{
            content: 'base',
            itemClass: 'x',
            itemId: 10,
            isFeedbackPopup: false,
            sendingDone: false,
            errorPhone: false,
            errorName: false,
            errorCheck: false,
            feedbackForm: {
                tarif: 'Комплект "Базовый"',
                telephone: '',
                name: '',
                city: 'г. Екатеринбург',
                comment: '',
                checked: true,
            },
            items:[
                {
                    id: 0,
                    title: 'Абонентский маршрутизатор',
                    description: 'Совместный роутер и хаб — это устройство, которое объединяет функции обычного роутера и умного хаба. Он позволяет не только распространять Wi-Fi сигнал по всему дому, но и управлять устройствами в вашей сети.',
                    picture: '/_nuxt/assets/Devices/router.png',
                },
                {
                    id: 1,
                    title: 'Датчик протечки',
                    description: 'Беспроводной датчик обнаружит первые признаки затопления. Сенсоры размещаются в местах возможного скопления воды, например, под раковиной и под стиральной машиной.',
                    picture: '/_nuxt/assets/Devices/techka.png',
                },
                {
                    id: 2,
                    title: 'Умная розетка Wi-Fi',
                    description: 'Умная Wi-Fi розетка позволяет контролировать включение и выключение электрических приборов с помощью приложения на смартфоне.',
                    picture: '/_nuxt/assets/Devices/smartfork.png',
                },
                {
                    id: 3,
                    title: 'Камера видеонаблюдения',
                    description: 'Это устройство, предназначенное для записи видео с возможностью удаленного доступа к нему через интернет. Она может быть использована для обеспечения безопасности дома, квартиры, офиса, магазина и других мест.',
                    picture: '/_nuxt/assets/Devices/camera.png',
                },
                {
                    id: 4,
                    title: 'Датчик открытия',
                    description: 'Позволяет контролировать доступ к помещению и обеспечивает безопасность вашего дома. Датчик может быть установлен на любой поверхности и работает совместно с приложением на смартфоне.',
                    picture: '/_nuxt/assets/Devices/open.png',
                },
                {
                    id: 5,
                    title: 'PoE-Инжектор',
                    description: 'PoE-инжектор является неотъемлемой частью камеры,  поскольку он обеспечивает надежную передачу данных и электропитания для неё.',
                    picture: '/_nuxt/assets/Devices/PoE.png',
                },
                {
                    id: 6,
                    title: 'Датчик движения',
                    description: 'Устройство распознает и фиксирует перемещения людей в охраняемой зоне. Объемная зона обнаружения и настраиваемая защита от домашних животных.',
                    picture: '/_nuxt/assets/Devices/move.png',
                },
                {
                    id: 7,
                    title: 'Распределительная коробка',
                    description: 'Распределительная коробка - это незаменимый инструмент для создания качественных и надежных сетевых систем внутри зданий и сооружений, позволяющий эффективно управлять соединениями кабелей и контактов.',
                    picture: '/_nuxt/assets/Devices/box.png',
                },
            ]
        }
    },
    methods:{
        selectedItem(id){
            switch(id){
                case 0:
                    if(this.itemClass == 'case0'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case0';
                        this.itemId = 0;
                    }
                    break;
                case 1:
                    if(this.itemClass == 'case1'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case1';
                        this.itemId = 1;
                    }
                    break;
                case 2:
                    if(this.itemClass == 'case2'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case2';
                        this.itemId = 2;
                    }
                    break;
                case 3:
                    if(this.itemClass == 'case3'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case3';
                        this.itemId = 3;
                    }
                    break;
                case 4:
                    if(this.itemClass == 'case4'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case4';
                        this.itemId = 4;
                    }
                    break;
                case 5:
                    if(this.itemClass == 'case5'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case5';
                        this.itemId = 5;
                    }
                    break;
                case 6:
                    if(this.itemClass == 'case6'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case6';
                        this.itemId = 6;
                    }
                    break;
                case 7:
                    if(this.itemClass == 'case7'){
                        this.itemClass = 'x';
                        this.itemId = 10;
                    } else {
                        this.itemClass = 'case7';
                        this.itemId = 7;
                    }
                    break;
            }
        },
        sendForm(tarif, phone, name, city, comment, check){
            if (phone == '' || phone.length != 15) {
                this.errorPhone = true;
                if (name == '') {
                    this.errorName = true;
                    if (check == false){
                        this.errorCheck = true;
                    } else {
                        this.errorCheck = false;
                    }
                } else {
                    this.errorName = false;
                    if (check == false){
                        this.errorCheck = true;
                    } else {
                        this.errorCheck = false;
                    }
                }
            } else if (name == ''){
                this.errorName = true;
                if (phone == '' || phone.length != 15){
                    this.errorPhone = true;
                    if (check == false){
                        this.errorCheck = true;
                    } else {
                        this.errorCheck = false;
                    }
                } else {
                    this.errorPhone = false;
                    if (check == false){
                        this.errorCheck = true;
                    } else {
                        this.errorCheck = false;
                    }
                }
            } else if (check == false) {
                this.errorCheck = true;
                if (phone == '' || phone.length != 15) {
                    this.errorPhone = true;
                    if (name = ''){
                        this.errorName = true;
                    } else {
                        this.errorName = false;
                    }
                } else {
                    this.errorPhone = false;
                    if (name = ''){
                        this.errorName = true;
                    } else {
                        this.errorName = false;
                    }
                }
            } else {
                this.errorName = false;
                this.errorPhone = false;
                this.errorCheck = false;
                this.sendingDone = true;
                // this.feedbackForm.telephone = '',
                // this.feedbackForm.name = '',
                // this.feedbackForm.comment = '',
                this.feedbackForm.checked = false,
                console.log(tarif, phone, name, city, comment);
                this.requestSending();
            }
        },
        changeContent(tarif){
            switch(tarif){
                case 'Комплект "Базовый"':
                    this.content = 'base';
                    this.feedbackForm.tarif = tarif; 
                    break;
                case 'Комплект "Про"':
                    this.content = 'pro';
                    this.feedbackForm.tarif = tarif; 
                    break;
            }
        },
        phoneMask() {
            const x = this.feedbackForm.telephone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
            if (!x[2] && x[1] !== '') {
                this.feedbackForm.telephone = x[1] === '8' ? x[1] : '8' + x[1];
            } else {
                this.feedbackForm.telephone = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '');
            }
        },
        async requestSending() {
            const response = await axios.post("https://smart.k-telecom.org/send/send.php", this.feedbackForm);
            this.$router.push('#success')
            this.result = response.data;
            this.feedbackForm.telephone = '';
            this.feedbackForm.name = '';
            this.feedbackForm.comment = '';
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/cera-round-pro');
/*MOBILE*/
@media all and (max-width: 900px) {
#kit{
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    user-select: none;
    margin-top: 5vh;
}
#kt{
    font-size: 7.78vw;
    margin-bottom: 4vh;
    margin-top: 5vh;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    color: #172D3B;
    text-align: center;
}
.pics{
    width: 88.89vw;
    height: 88.89vw;
    /* background-color: #909090; */
    border-radius: 16px;
    margin-bottom: 7.78vw;
}
.pics img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.swipe{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: swipe 1s;
}
.texta{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.passiveContent{
    color: #8B969D;
    padding: 3.33vw; 
    width: 50%;
    text-align: center;
    cursor: pointer;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 5vw;
    animation: passivniy .4s;
}
@keyframes passivniy{
    0% {color: #C51F5F;}
    50% {color: rgb(102, 74, 85);}
    100% {color: #8B969D;}
}
.activeContent{
    color: #C51F5F;
    animation: activniy .4s;
}
@keyframes activniy{
    0% {color: #8a1743;}
    50% {color: #641131;}
    100% {color: #C51F5F;}
}
.border-swipe{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.active-swipe-left{
    width: 50%;
    left: 0;
    position: absolute;
    border-bottom: 4px solid #C51F5F;
    margin-top: 0.1vh;
}
.active-swipe-right{
    width: 50%;
    right: 0;
    position: absolute;
    border-bottom: 4px solid #C51F5F;
    margin-top: 0.1vh;
}
.passive-swipe{
    width: 100%;
    border-bottom: 2px solid #8B969D;
    margin-top: 0.1vh;
}
.base-active-enter-active {animation: base .4s;}
@keyframes base{
    0%{
        transform: translateX(100%);
        border-color: #8a1743;
    }
    100%{
        transform: translateX(0);
        border-color: #C51F5F;
    }
}
/* @keyframes base{
    0%{
        margin-left: 50%;
        border-color: #8a1743;
        width: 50%
    }
    50%{
        margin-left: 0;
        width: 100%;
    }
    100%{
        width: 50%;
        border-color: #C51F5F;
    }
} */
.pro-active-enter-active {animation: pro .4s;}
@keyframes pro{
    0%{
        transform: translateX(-100%);
        border-color: #8a1743;
    }
    100%{
        transform: translateX(0);
        border-color: #C51F5F;
    }
}
/* @keyframes pro{
    0%{
        margin-right: 50%;
        border-color: #8a1743;
        width: 50%
    }
    50%{
        margin-right: 0;
        width: 100%;
    }
    100%{
        width: 50%;
        border-color: #C51F5F;
    }
} */

.text-title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 5vw;
    margin-bottom: 3.33vw;
    margin-top: 4.72vw;
    color: #172D3B;
}
.text{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
    color: #C51F5F;
}
.active-text, .disable-text{
    margin-bottom: 2.22vw;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.text-icon{
    margin-right: 2.50vw;
    font-size: 4.44vw;
}
.disable-text{color: #8B969D;}
.price{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 10vw;
    color: #172D3B;
    margin-top: 4.44vw;
    margin-bottom: 4.44vw;
}

.submit{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4.44vw 11.11vw;
    background: #C51F5F;
    box-shadow: 0px 0px 16px rgba(197, 31, 95, 0.16), 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    /* margin-bottom: 18.61vw; */
}
.submit text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 4.44vw;
    color: #FFFFFF;
}
.submit:active{animation: activeButton 0.4s;}
@keyframes activeButton {
    0%{background-color: #880E3F;}
    50%{background-color: #AC1652;}
    100%{background-color: #880E3F;}
}

.feedback-popup{
    position: fixed;
    z-index: 11;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    background: #FFFFFF;
    padding: 32px 24px;
    overflow: scroll;
}
.feedback-title{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 5vw;
    color: #172D3B;
    margin-top: 5.56vw;
    margin-bottom: 5.56vw;
}
.icon{
    position: absolute;
    right: 7%;
    cursor: pointer;
    font-size: 10vw;
    color: #DD473B;
}
.top-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5.56vw;
}
.top-content-pictures{
    width: 88.89vw;
    height: 71.11vw;
    /* background: #919191; */
    border-radius: 16px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5.56vw;
}
.top-content-pictures img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.top-content-inputs{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}
.top-content-inputs text{
    margin-top: 2.78vw;
    margin-bottom: 0.56vw;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
}
.top-content-inputs input{
    border: 1px solid #8B969D;
    border-radius: 16px;
    padding: 3.33vw 4.44vw;
    font-size: 3.89vw;
    outline: none;
}
.top-content-inputs input:focus{border: 1px solid #C51F5F;}
.errorInput{border: 1px solid #DD473B !important;}
.middle-content{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.middle-content text{
    margin-bottom: 0.56vw;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
}
.middle-content textarea{
    width: 90%;
    height: 30.56vw;
    border: 1px solid #8B969D;
    border-radius: 16px;
    resize: none;
    padding: 3.33vw 4.44vw;
    font-size: 3.89vw;
    outline: none;
}
.middle-content textarea:focus{border: 1px solid #C51F5F;}
.politic{
    display: flex;
    flex-direction: row;
    margin-top: 4.44vw;
    margin-bottom: 4.44vw;
    font-size: 3.89vw;
    width: 100%;
}
.politic div{
    display: flex;
    flex-direction: column;
    margin-left: 1.94vw;
}
.politic label{
    border: 2px solid #172D3B;
    border-radius: 4px;
    width: 4vw;
    height: 4vw;
    margin-right: .5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #172D3B;
}
.politic a{
    text-decoration: none;
    color: #0099C8;
}
.errorInputN{
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 41.5vh;
    margin-left: 42.5vh;
    font-size: 3vh;
    color: #DD473B;
    z-index: 22;
}
.errorInputP{
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 32.6vh;
    margin-left: 42.5vh;
    font-size: 3vh;
    color: #DD473B;
    z-index: 22;
}
.errorPopN{
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 45vh;
    margin-left: 27vh;
    z-index: 22;
    color: #F4F4F4;
    padding: 0.3vh 0.5vh;
    border-radius: 8px;
    background-color: #172D3B;
}
.errorPopP{
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 36.3vh;
    margin-left: 27vh;
    z-index: 22;
    color: #F4F4F4;
    padding: 0.3vh 0.5vh;
    border-radius: 8px;
    background-color: #172D3B;
}
.checkforgot{
    border: 2px solid #DD473B !important; 
    box-shadow: 0 0 .3vw #DD473B !important;
}
.button{
    color: white;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 4.44vw;
    margin-bottom: 5.56vw;
    width: 100%;
    padding: 4.44vw 11.11vw;
    background: #C51F5F;
    box-shadow: 0px 0px 16px rgba(197, 31, 95, 0.16), 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    border: none;
}


.done-feedback-popup{
    position: fixed;
    z-index: 11;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    background: #FFFFFF;
    padding: 2.22vw 5.56vw;
}
.done-close-icon{
    position: absolute;
    top: 0;
    right: 0;
    margin: 10%;
    font-size: 10vw;
    color: #DD473B;
}
.done-icon{
    color: #1CC49B;
    font-size: 30vh;
}
.done-title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 6.67vw;
    color: #172D3B;
    margin-top: 10vw;
    margin-bottom: 2.22vw;
}
.done-desc{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
    color: #455762;
    margin-bottom: 6.67vw;
}
.done-button{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 4.44vw;
    box-shadow: 0px 0px 16px rgba(34, 34, 34, 0.12);
    background: #FFFFFF;
    border: 2px solid #C51F5F;
    border-radius: 16px;
    padding: 4.44vw 11.11vw;
    text-align: center;
    color: #C51F5F;
    width: 65%;
}
.done-button:active{
    color: #D481A1;
    border-color: #D481A1;
}
}


/*WEB*/
@media all and (min-width: 900px) {
#kit{
    margin-left: auto;
    margin-right: auto;
    /* width: 85vw; */
    width: 83.33vw;
    /* user-select: none; */
    margin-bottom: 4.44vw;
}
.title{
    text-align: center;
    color: #172D3B;
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
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.content{
    width: 40.83vw;
    height: 29.24vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.picture{
    width: 40.83vw;
    height: 29.24vw;
    border-radius: 24px;
    background: #919191;
}
.sukaebalrot{
    position: relative;
    width: 100%;
    height: 100%;
}
.sukaebalrot img{
    position: absolute;
    border-radius: 24px;
    object-fit: contain;
    width: 100%;
    height: 100%;
    background-color: white;
}

.swipe{
    width: 17.78vw;
    height: 3.68vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.texta{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Cera Round Pro';
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25vw;
    margin-bottom: 0.83vw;
    width: 100%;
}
.passiveContent{
    color: #8B969D;
    cursor: pointer;
    width: 50%;
    animation: passivniy .4s;
}
@keyframes passivniy{
    0% {
        color: #C51F5F;
        /* box-shadow: 0px 4px 0px #8B969D; */
    }
    50% {
        color: rgb(102, 74, 85);
        /* box-shadow: 0px 3px 0px #8B969D; */
    }
    100% {
        color: #8B969D;
        /* box-shadow: 0px 2px 0px #8B969D; */
    }
}

.activeContent{
    color: #C51F5F;
    cursor: pointer;
    animation: activniy .4s;
}
@keyframes activniy{
    0% {
        color: #8a1743;
        /* box-shadow: 0px 2px 0px #8a1743; */
    }
    50% {
        color: #641131;
        /* box-shadow: 0px 3px 0px #641131; */
    }
    100% {
        color: #C51F5F;
        /* box-shadow: 0px 4px 0px #C51F5F; */
    }
}

.border-swipe{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.active-swipe-left{
    width: 50%;
    left: 0;
    position: absolute;
    border-bottom: 4px solid #C51F5F;
    /* margin-top: 0.4vh; */
}
.active-swipe-right{
    width: 50%;
    right: 0;
    position: absolute;
    border-bottom: 4px solid #C51F5F;
    /* margin-top: 0.4vh; */
}
.passive-swipe{
    width: 100%;
    border-bottom: 2px solid #8B969D;
}
.base-active-enter-active {animation: base .4s;}
/* @keyframes base{
    0%{
        margin-left: 50%;
        border-color: #8a1743;
        width: 50%
    }
    50%{
        margin-left: 0;
        width: 100%;
    }
    100%{
        width: 50%;
        border-color: #C51F5F;
    }
} */
@keyframes base{
    0%{
        transform: translateX(100%);
        border-color: #8a1743;
    }
    100%{
        transform: translateX(0);
        border-color: #C51F5F;
    }
}
.pro-active-enter-active {animation: pro .4s;}
/* @keyframes pro{
    0%{
        margin-right: 50%;
        border-color: #8a1743;
        width: 50%
    }
    50%{
        margin-right: 0;
        width: 100%;
    }
    100%{
        width: 50%;
        border-color: #C51F5F;
    }
} */
@keyframes pro{
    0%{
        transform: translateX(-100%);
        border-color: #8a1743;
    }
    100%{
        transform: translateX(0);
        border-color: #C51F5F;
    }
}
.text-title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.53vw;
    /* margin-bottom: 1.67vw; */
    /* margin-top: 2.85vw; */
    color: #172D3B;
}

.text{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.11vw;
    color: #C51F5F;
}
.text div{
    width: 49%;
    margin-bottom: 0.83vw;
}
.text .text-icon{margin-right: 0.76vw;}
.x{display:none}
#case0{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: 19%;
    margin-top: 5%;
    
}
#case1{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: -1%;
    margin-top: 5%;
}
#case2{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: 19%;
    margin-top: 6%;
}
#case3{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: -1%;
    margin-top: 6%;
}
#case4{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: 19%;
    margin-top: 7%;
}
#case5{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: -1%;
    margin-top: 7%;
}
#case6{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: 19%;
    margin-top: 8%;
}
#case7{
    position: absolute;
    width: 19.58vw;
    padding: 1.11vw 1.67vw;
    filter: drop-shadow(0px 0px 16px rgba(34, 34, 34, 0.12));

    border-radius: 24px;
    box-shadow: 0 0 10px lightgray;
    background-color: white;
    margin-left: -1%;
    margin-top: 8%;
}
.popup-title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.53vw;
    text-align: center;
    color: #172D3B;
}
.popup-picture{
    width: 16.25vw;
    height: 8.89vw;
    margin-top: 1.11vw;
    margin-bottom: 1.11vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
}
.popup-content{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
    line-height: 1.39vw;
    text-align: center;
    color: #535353;
}
.active-text, .disable-text{
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.active-text:hover{
    text-decoration: underline;
    color: #AC1652;
    cursor: pointer;
}
.active-text:active{
    text-decoration: underline;
    color: #880E3F;
}
.disable-text{color: #8B969D;}
.text-icon{margin-right: 0.4vw;}
.price{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 2.50vw;
    color: #172D3B;
}
.submit{
    width: 14.79vw;
    height: 3.89vw;
    /* padding: 1.11vw 2.78vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C51F5F;
    box-shadow: 0px 0px 16px rgba(197, 31, 95, 0.16), 0px 0px 8px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
}
.submit text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.11vw;
    color: #FFFFFF;
}

.submit:hover{
    cursor: pointer;
    background-color: #AC1652;
}
.submit:active{
    background-color: #880E3F;
}

.feedback-popup{
    position: fixed;
    display: flex;
    flex-direction: column;
    /* width: 35vw; */
    z-index: 21;
    /* justify-content: space-between; */
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    background: #FFFFFF;
    padding: 1.67vw;
    border-radius: 24px;
    box-shadow: 0px 0px 16px rgba(34, 34, 34, 0.12);
}
.feedback-title{
    text-align: center;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.94vw;
    color: #172D3B;
    margin-bottom: 1.39vw;
}
.icon{
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 2.08vw;
    margin-top: 2.08vw;
    cursor: pointer;
}
.icon:hover{color: #DD473B;}
.icon:active{color: #912d26;}
.top-content{
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    margin-bottom: 0.56vw;
}
.top-content-inputs{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 1.11vw;
    width: 22.22vw;
}
.popup-text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
    color: #172D3B;
    margin-top: 0.69vw;
    margin-bottom: 0.14vw;
}
.errorInput{border: 1px solid #DD473B !important;}
.errorInputN{
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 21.45vw;
    margin-top: 14.15vw;
    font-size: 1.39vw;
    color: #DD473B;
}
.errorInputP{
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 21.45vw;
    margin-top: 19.85vw;
    font-size: 1.39vw;
    color: #DD473B;
}
.errorPopN{
    position: absolute;
    margin-left: 15.21vw;
    margin-top: 12.55vw;
    padding: 0.28vw 0.83vw;
    font-size: 0.69vw;
    top: 0;
    left: 0;
    border-radius: 8px;
    color: #F4F4F4;
    background-color: #172D3B;
}
.errorPopP{
    position: absolute;
    margin-left: 15.21vw;
    margin-top: 18.25vw;
    padding: 0.28vw 0.83vw;
    font-size: 0.69vw;
    top: 0;
    left: 0;
    border-radius: 8px;
    color: #F4F4F4;
    background-color: #172D3B;
}
.checkforgot{
    border: 2px solid #DD473B !important; 
    box-shadow: 0 0 .3vw #DD473B !important;
}
.top-content-inputs input{
    border: 1px solid #8B969D;
    border-radius: 16px;
    padding: 0.83vw 1.11vw;
    outline: none;
    font-size: 1.11vw;
}
.top-content-inputs input:focus{border: 1px solid #C51F5F;}
/* .tarif{
    border: 1px solid #8B969D;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8vw;
    border-radius: 16px;
    padding: 0.8vw 0.8vw;
    background-color: white;
    margin-top: -0.3vw;
}
select:focus{border: 1px solid #C51F5F;} */
.top-content-pictures{
    /* background: #919191; */
    border-radius: 16px;
}
.top-content-pictures img{
    width: 22.22vw;
    height: 22.22vw;
    object-fit: contain;
}
.middle-content{width: 100%;}
.middle-content textarea{
    width: 95%;
    height: 8.68vw;
    border: 1px solid #8B969D;
    border-radius: 12px;
    resize: none;
    padding: 0.83vw 1.11vw;
    margin-top: 0.28vw;
    outline: none;
    font-size: 1.11vw;
}
.middle-content textarea:focus{border: 1px solid #C51F5F;}
.politic{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.11vw;
    margin-bottom: 1.11vw;
    font-size: 1.11vw;
}
.politic label{
    border: 2px solid #172D3B;
    border-radius: 4px;
    width: 1.25vw;
    height: 1.25vw;
    margin-right: 0.76vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #172D3B;
    font-size: 10vw;
}
.politic a{
    text-decoration: none;
    color: #0099C8;
}
.button{
    background: #C51F5F;
    color: white;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.11vw;
    box-shadow: 0px 0px 16px rgba(197, 31, 95, 0.16), 0px 0px 8px rgba(0, 0, 0, 0.12);
    border: none;
    border-radius: 16px;
    padding: 1.11vw 2.78vw;
    width: 100%;
}
.button:hover{
    cursor: pointer;
    background-color: #AC1652;
}
.button:active{background-color: #880E3F;}

.done-feedback-popup{
    position: fixed;
    z-index: 21;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    background: #FFFFFF;
    padding: 2.22vw;
    border-radius: 16px;
    box-shadow: 0px 0px 16px rgba(34, 34, 34, 0.12);
    /* width: 41.11vw;
    height: 35.69vw; */
}
.done-icon{
    color: #1CC49B;
    font-size: 16.32vw;
}
.done-title{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.94vw;
    color: #172D3B;
    margin-top: 3.33vw;
    margin-bottom: 0.56vw;
}
.done-desc{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.11vw;
    color: #455762;
    margin-bottom: 2.78vw;
}
.done-button{
    padding: 1.11vw 2.78vw;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(34, 34, 34, 0.12);
    border-radius: 16px;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 1.11vw;
    color: #C51F5F;
    border: 2px solid #C51F5F;
    cursor: pointer;
}
.done-button:hover{
    color:#AC1652;
    border-color: #AC1652;
}
.done-button:active{
    color: #880E3F;
    border-color: #880E3F;
}

.feedback-popup-shadow{
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(211, 211, 211, 0.322);
    width: 100vw;
    height: 100vh;
    z-index: 20;
}
}
</style>