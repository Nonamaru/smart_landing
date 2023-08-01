<template>
<div class="web">
    <div class="container">
        <text class="title">Остались вопросы?</text>
        <text class="description">Оставьте свои контактные данные и наши специалисты свяжутся с вами</text>
        <div class="input-block">
            <div class="name">
                <text class="input-name">Как вас зовут?</text>
                <text class="error-text" v-if="errors">Заполните поле</text>
                <input v-model="questions.name" v-bind:class="{errorInput: errors}" type="text" placeholder="Ваше имя" />
            </div>
            <div class="number">
                <text class="input-number">Номер телефона</text>
                <text class="error-text" v-if="errors">Заполните поле</text>
                <input v-model="questions.number" v-bind:class="{errorInput: errors}" type="text" placeholder="Ваш номер телефона" />
            </div>
        </div>
        <div class="personal-information">
            <div class="checkbox" @click="questions.assent = !questions.assent">
                <Icon v-if="questions.assent" class="checkbox-icon" icon="material-symbols:check" />
            </div>
            <text>Я даю согласие на обработку <a href="https://k-telecom.org/politika-konfidentsialnosti/">персональных данных</a></text>
        </div>
        <div class="button" @click="sendQuestions()">
            <text>Получить консультацию</text>
        </div>
    </div>
</div>



<div class="mobile">
    <div class="container">
        <text class="title">Остались вопросы?</text>
        <text class="description">Задайте определенные условия и предпочтения для создания уютной обстановки вашего дома.</text>
        <div class="inputs">
            <div class="name">
                <text class="text-name">Как вас зовут?</text>
                <text class="error-text" v-if="errors">Заполните поле</text>
                <input v-model="questions.name" v-bind:class="{errorInput: errors}" type="text" placeholder="Ваше имя" />
            </div>
            <div class="number">
                <text class="text-number">Номер телефона</text>
                <text class="error-text" v-if="errors">Заполните поле</text>
                <input v-model="questions.number" v-bind:class="{errorInput: errors}" type="text" placeholder="Ваш номер телефона" />
            </div>
        </div>
        <div class="personal-information">
            <div class="checkbox" v-bind:class="{errorInput: errors}" @click="questions.assent = !questions.assent">
                <Icon v-if="questions.assent" class="checkbox-icon" icon="material-symbols:check" />
            </div>
            <text>Я даю согласие на обработку <br /><a href="https://k-telecom.org/politika-konfidentsialnosti/">персональных данных</a></text>
        </div>
        <div class="button" @click="sendQuestions();">
            <text>Получить консультацию</text>
        </div>
    </div>
</div>
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
            questions:{
                name: '',
                number: '',
                assent: true,
            },
            errors: false,
        }
    },
    methods:{
        sendQuestions(){
            if (this.questions.assent && this.questions.name != '' && this.questions.number.length >= 11){
                axios.post("https://smart.k-telecom.org/send/send1.php", this.questions).then(() => {
                    // this.result = response.data;
                    this.questions.name = '';
                    this.questions.number = '';
                    // this.questions.assent = false;
                    this.errors = false;
                    this.sendYandexMetrikaEvent('submit_form');
                });
            } else {
                this.errors = true;
            }
            console.log('send is send')
        },
        sendYandexMetrikaEvent(eventName) {
            ym(94075822, 'reachGoal', `${eventName}`); 
            console.log('metrika is metriks');
            return true;
        },
    }
}
</script>
<style scoped>
/*WEB*/
@media all and (min-width: 900px){
.web{
    /* width: 83.33vw; */
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 4.44vw;
    padding-top: 4.44vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F6F8;
    /* background-color: black; */
}
.container{
    display: flex;
    flex-direction: column;
    width: 45.56vw;
}
.title{
    font-family: 'Cera Round Pro';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    color: #172D3B;
}
.description{
    font-family: 'Cera Round Pro';
    font-size: 1.11vw;
    font-style: normal;
    font-weight: 400;
    color: #535353;
    margin-top: 0.56vw;
    margin-bottom: 1.11vw;
}


.input-block{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.name{
    width: 22.22vw;
    display: flex;
    flex-direction: column;
}
.input-name{
    color: #172D3B;
    font-family: 'Cera Round Pro';
    font-size: 0.97vw;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0.21vw;
}
.number{
    width: 22.22vw;
    display: flex;
    flex-direction: column;
}
.input-number{
    color: #172D3B;
    font-family: 'Cera Round Pro';
    font-size: 0.97vw;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0.21vw;
}
input{
    padding: 0.83vw 1.11vw;
    border: 1px solid #8B969D;
    background: #FFF;
    border-radius: 0.83vw; 
    font-family: 'Cera Round Pro';
    font-size: 1.11vw;
    font-style: normal;
    font-weight: 400; 
}
input:focus{
    border: 1px solid #C51F5F;
    outline: none;
}


.personal-information{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 1.11vw;
    margin-bottom: 1.11vw;
}
.checkbox{
    border: 2px solid #172D3B;
    width: 1.11vw;
    height: 1.11vw;
    margin-right: 0.83vw;
    border-radius: 0.28vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.checkbox-icon{font-size: 1.25vw;}
.personal-information text{
    font-family: 'Cera Round Pro';
    font-size: 1.11vw;
    font-style: normal;
    font-weight: 400; 
}
.personal-information text a{
    color: #0099C8;
    cursor: pointer;
    text-decoration: none;
}


.button{
    width: 13.61vw;
    height: 1.67vw;
    display: flex;
    padding: 1.11vw 2.78vw;
    justify-content: center;
    align-items: center;
    border-radius: 1.11vw;
    background-color: #C51F5F;
    box-shadow: 0px 0px 0.56vw 0px rgba(0, 0, 0, 0.12), 0px 0px 1.11vw 0px rgba(197, 31, 95, 0.16);
}
.button:hover{
    background-color: #AC1652;
    cursor: pointer;
}
.button:active{background-color: #880E3F;}
.button text{
    font-family: 'Cera Round Pro';
    font-size: 1.11vw;
    font-style: normal;
    font-weight: 500; 
    color: white;
}

.error-text{color: #DD473B;}
.errorInput{border: 1px solid #DD473B;}
}



/*MOBILE*/
@media all and (max-width: 900px){
.mobile{
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    user-select: none;
    margin-top: 5vh;
    /* margin-bottom: 18.61vw; */
    background-color: #F2F6F8;
    padding-top: 8.89vw; 
    padding-bottom: 17.78vw;
}
.container{
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
}


.title{
    color: #172D3B;
    text-align: center;
    font-family: 'Cera Round Pro';
    font-size: 7.78vw;
    font-style: normal;
    font-weight: 500; 
}
.description{
    color: #535353;
    text-align: center;
    font-family: 'Cera Round Pro';
    font-size: 3.89vw;
    font-style: normal;
    font-weight: 400;
    margin-top: 2.22vw;
    margin-bottom: 4.44vw;
}


.inputs{
    display: flex;
    flex-direction: column;
}
.name{
    display: flex;
    flex-direction: column;
}
.text-name{
    color: #172D3B;
    font-family: 'Cera Round Pro';
    font-size: 3.89vw;
    font-style: normal;
    font-weight: 400; 
    margin-bottom: 0.83vw;
}
.number{
    display: flex;
    flex-direction: column;
    margin-top: 4.44vw;
    margin-bottom: 4.44vw;
}
.text-number{
    color: #172D3B;
    font-family: 'Cera Round Pro';
    font-size: 3.89vw;
    font-style: normal;
    font-weight: 400; 
    margin-bottom: 0.83vw;
}
input{
    display: flex;
    padding: 0px 4.44vw; 
    border-radius: 3.33vw;
    border: 1px solid #8B969D;
    background: #FFF;

    font-family: 'Cera Round Pro';
    font-size: 4.44vw;
    font-style: normal;
    font-weight: 400; 

    /* height: 14.44vw; */
    height: 13.33vw;
}
input:focus{
    border: 1px solid #C51F5F;
    outline: none;
}


.personal-information{
    display: flex;
    flex-direction: row;
}
.checkbox{
    border: 2px solid #172D3B;
    width: 4vw;
    height: 4vw;
    margin-right: 1.39vw;
    border-radius: 1.67vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.checkbox-icon{font-size: 4vw;}
.personal-information text{
    color: #172D3B;
    font-family: 'Cera Round Pro';
    font-size: 3.89vw;
    font-style: normal;
    font-weight: 400; 
    align-items: center;
}
.personal-information text a{
    color: #0099C8;
    font-family: 'Cera Round Pro';
    font-size: 3.89vw;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
}

.button{
    text-align: center;
    padding: 4.44vw 40px; 
    border-radius: 4.44vw;
    background: #C51F5F;
    box-shadow: 0px 0px 2.22vw 0px rgba(0, 0, 0, 0.12), 0px 0px 4.44vw 0px rgba(197, 31, 95, 0.16); 
    color: white;
    font-family: 'Cera Round Pro';
    font-size: 4.44vw;
    font-style: normal;
    font-weight: 500; 
    margin-top: 4.44vw;
}
.button:active{background-color: #880E3F;}


.error-text{color: #DD473B;}
.errorInput{border: 1px solid #DD473B;}
}
</style>