<template>
<div class="cont">
    <div class="select" v-bind:class="{activeSelect: (clicked || text != '')}" >
        <div class="selected" @click="clicked = !clicked" >{{ text }}</div>
        <Icon v-if="!clicked" @click="clicked = !clicked" class="icon" icon="iconamoon:arrow-down-2" />
        <Icon v-if="clicked" @click="clicked = !clicked" class="icon" icon="iconamoon:arrow-down-2"  :rotate="2" />
    </div>
    <div class="select-item" v-if="clicked" >
        <text v-if="what == 'city'" v-for="item in selectItems" :key="item" @click="text = item; clicked = !clicked; $emit('selected', item)">{{ item }}</text>
        <text v-if="what == 'tarif'" v-for="item in tarif" :key="item" @click="text = item; clicked = !clicked; $emit('selected', item)">{{ item }}</text>
    </div>
</div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon,
    },
    props:['text', 'what'],
    data(){
        return{
            clicked: false,
            selectItems:[
                'Екатеринбург',
                'Алапаевск',
                'Александровск',
                'Арамиль',
                'Артемовский',
                'Асбест',
                'Атиг',
                'Аять',
                'Байкалово',
                'Баранчинский',
                'Белоярский',
                'Березники',
                'Билимбай',
                'Битимка',
                'Богданович',
                'Буланаш',
                'Бобровский',
                'Большое Сидельниково', 
                'Большой Исток', 
                'Быньги',
                'Вересовка',
                'Верх Нейвинск',
                'Верхнее Дуброво',
                'Верхние Таволги',
                'Верхний Тагил',
                'Верхняя Салда',
                'Верхняя Сысерть',
                'Верхняя Тура',
                'Верхотурье',
                'Вишневогорск',
                'Волчанск',
                'Горнозаводск',
                'Гремячинск',
                'Губаха',
                'Двуреченск',
                'Доломитовый',
                'Заречный',
                'Ирбит',
                'Исеть',
                'Кадниково',
                'Калиново',
                'Калья',
                'Каменск Уральский',
                'Карабаш',
                'Карпинск',
                'Касли',
                'Качканар',
                'Кашино',
                'Кизел',
                'Кировград',
                'Ключи',
                'Краснотурьинск',
                'Красноуральск',
                'Красноуфимск',
                'Крылосово',
                'Кушва',
                'Кыштым',
                'Лесной',
                'Лобва',
                'Лысьва',
                'Лямино',
                'Медная шахта', 
                'Миасс',
                'Михайловск',
                'Невьянск',
                'Нейво Рудянка',
                'Нижняя Салда', 
                'Нижние Серги', 
                'Нижние Таволги', 
                'Нижняя Тура', 
                'Новая Ляля', 
                'Новоалексеевское',
                'Новоуральск',
                'Новоуральск УЭХК',
                'Новоуткинск',
                'Нязепетровск',
                'Оверята',
                'Октябрьский',
                'Ольховка',
                'Пашия',
                'Первомайский',
                'Первоуральск',
                'Пермь',
                'Платошино',
                'Починок НГО', 
                'Починок РГО', 
                'Прохладный',
                'Растущий',
                'Ребристый',
                'Ревда',
                'Рефтинский',
                'Рудничный',
                'Савино',
                'Светлый',
                'Свободный',
                'Северка',
                'Северный/Углеуральский',
                'Североуральск',
                'Серов',
                'Среднеуральск',
                'Сысерть',
                'Таватуй',
                'Тавда',
                'Тарасково',
                'Третий Северный', 
                'Туринск',
                'Туринская Слобода', 
                'Тюбук',
                'Уральский',
                'Цементный',
                'Черемухово',
                'Чусовой',
                'Шайдурово',
                'Шурала',
                'Яйва',
                'Челябинская область',
            ],
            tarif:[
                'Комплект "Базовый"',
                'Комплект "Про"'
            ]
        }
    }
}
</script>
<style scoped>
/*WEB*/
@media all and (min-width: 900px) {
.cont{
    width: 90%;
    position: relative;
    /* user-select: none; */
}
.select{
    position: relative;
    width: 100%;
    padding: 0.83vw 1.11vw;
    border: 1px solid #8B969D;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 1.11vw;
    border-radius: 16px;
    background-color: white;
}
.select:hover{border: 1px solid #455762;}
.activeSelect{border: 1px solid #C51F5F !important;}
.icon{
    color: #C51F5F;
    position: absolute;
    font-size: 1.2vw;
    transform: translate(-50%, -50%);
    top: 50%;
    right: 0;
}

.select-item{
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 0.56vw;
    margin-top: 0.56vw;
    width: 106%;
    height: 6.94vw;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px 0px rgba(34, 34, 34, 0.24);
    border-radius: 16px;
    overflow: scroll;
}
.select-item text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    line-height: 1.67vw;
    font-size: 1.11vw;
    margin-bottom: 0.83vw;
    color: #455762;
}
}


/*MOBILE*/
@media all and (max-width: 900px) {
.cont{
    width: 90%;
    position: relative;
    user-select: none;
}
.select{
    position: relative;
    width: 100%;
    padding: 3.33vw 4.44vw;
    border: 1px solid #8B969D;
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 3.89vw;
    border-radius: 16px;
    background-color: white;
}
.select:hover{border: 1px solid #455762;}
.activeSelect{border: 1px solid #C51F5F !important;}
.icon{
    color: #C51F5F;
    position: absolute;
    margin-right: .5vw;
    transform: translate(-50%, -50%);
    top: 50%;
    right: 0;
}

.select-item{
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 2.22vw;
    margin-top: 2.22vw;
    width: 105%;
    height: 27.78vw;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px 0px rgba(34, 34, 34, 0.24);
    border-radius: 16px;
    overflow: scroll;
}
.select-item text{
    font-family: 'Cera Round Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 4.44vw;
    color: #455762;
    padding: 2.22vw;
}
}

</style>