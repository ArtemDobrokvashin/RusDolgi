<template lang="ru">
  <div class="requestblock">
    <form id="requestblock" @submit="checkForm" action="/" method="post" novalidate="true">
      <h1 class="requestblock__title">Бесплатная проверка долгов</h1>
      <p v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>
      <div class="wrapper">
          <label class="requestblock__label__title" for="region">Регион
          <select class="requestblock__block select" id="region" v-model="region" name="region">
            <option disabled value="Выберите один из вариантов">Выберите один из вариантов</option>
            <option>Алтайский край</option>
            <option>Московская область</option>
            <option>Воронежская область</option>
          </select>  </label>
          <label class="requestblock__label__title" for="name">ФИО
          <input class="requestblock__block input__name" placeholder="Например Сергей Сергеевич Сергеев" id="name"
            v-model="name" type="text" name="name">             </label>
          <label class="requestblock__label__title" for="date">Дата рождения
          <input class="requestblock__block input__date" id="date" type="date" v-model="date"></label>
        
        </div>
        <div class="requestblock__label__info">
          <img class="requestblock__label__info__img" src="../assets/gerb.png" alt="" />
          <p class="requestblock__label__info__text">
            Вся информация предоставляется из базы данных Федеральной службы судебных
            приставов
          </p>
        </div>
 
      <div class="wrapper__check">
      <div><input class="checkbox__check" type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label></div>
      <p class="checkbox__text">Нажимая на кнопку, вы соглашаетесь с правилами пользования сайта и правилами обработки
        персональных данных</p>
      <div>
        <p>
          <input class="btn__check__button" type="submit" value="Проверить задолженность">
        </p>
      </div>
      </div>

    </form>
  </div>
</template>
<script>
    export default {


        el: '#requestblock',
        data() {
            return {
                errors: [],
                name: null,
                date: null,
                region: null
            };
        },
        methods: {
            checkForm: function(e) {
                if (this.name && this.date) {
                    return true;
                }

                this.errors = [];

                if (!this.name) {
                    this.errors.push('Требуется указать имя.');
                }

                if (!this.date) {
                    this.errors.push('Требуется указать возраст.');
                }


                e.preventDefault();
            }
        }
    };
</script>
<style>
    .requestblock {
        background: #fff;
        max-width: 1170px;
        margin: 0 auto;
        padding-bottom: 41px;
    }
    
    .requestblock__title {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
        text-align: left;
        padding: 60px 0 0 50px;
    }
    
    .requestblock__label__title {
        font-family: Source Sans Pro;
        font-size: 15px;
        line-height: 19px;
        text-align: left;
        margin-bottom: 6px;
        display: block;
        margin-left: 20px;
        margin-top: 16px;
    }
    
    .requestblock__block {
        border: 1px solid #A0A4A7;
        box-sizing: border-box;
        border-radius: 2px;
        height: 48px;
        display: block;
        margin-top: 5px;
    }
    
    .wrapper {
        display: flex;
        max-width: 935px;
        float: left;
        margin-left: 30px;
    }
    
    .wrapper__check {
        display: inline-flex;
        /*grid-template-columns: 60px 387px 370px;
        align-items: center;*/
        align-items: center;
    }
    
    .select {
        width: 260px;
    }
    
    .requestblock__label__info {
        border-left: 1px solid #E6E6E6;
        max-width: 235px;
        float: right;
    }
    
    .requestblock__label__info__text {
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #A0A4A7;
    }
    
    .checkbox__text {
        font-size: 12px;
        line-height: 15px;
        text-align: left;
        color: #A0A4A7;
        max-width: 387px;
    }
    
    .input__name {
        width: 350px;
    }
    
    .input__date {
        width: 180px;
    }
    
    .btn__check__button {
        width: 360px;
        height: 48px;
        background: #03A06C;
        border-radius: 2px;
        border-color: #03A06C;
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 17px;
        color: #FFFFFF;
        border: 1px solid;
        margin-left: 46;
    }
    
    input[type="checkbox"i]:active {
        background: #03A06C;
        border-radius: 2px;
        width: 21px;
        height: 21px;
    }
    
    input[type="checkbox"] {
        background: #03A06C;
        border-radius: 2px;
        width: 21px;
        height: 21px;
    }
</style>