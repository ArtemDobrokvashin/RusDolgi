<template>
  <div class="home">
    <div class="home__block">
    <div class="home__content">
      <h1 class="home__content__title">
        Узнать задолженность у судебных приставов онлайн
      </h1>
      <p class="home__content__text">
        Проверка долгов по фамилии у приставов по базе ФССП. Укажите фамилию,
        имя и отчество и нажмите проверить долги. <br />В режиме онлайн будет
        проведена проверка задолженностей по фамилии. Проверьте долги, чтобы
        узнать о своих задолженностях.
      </p>
    </div>
    
    <requestblock />
    </div>
    <div>
    <div class="wrapper__upp">
      <div class="wrapper_upp proof">
        <img class="wrapper__upp__img" src="../assets/cash.png" alt="" />    
        <div class="wrapper__upp__blocl">   
        <h4 class="wrapper__upp__title">Подтверждение оплаты</h4>
        <p class="wrapper__upp__text">
          Информация о переводе денежных средств фиксируется в личном кабинете и
          отправляется на почту
        </p>
        </div>
      </div>
      <div class="wrapper_upp commission">
        <img class="wrapper__upp__img" src="../assets/procent.png" alt="" />
        <div class="wrapper__upp__blocl">
        <h4 class="wrapper__upp__title">Минимальная комиссия</h4>
        <p class="wrapper__upp__text">Комиссия при оплате банковской карты всего 2,2%</p>
      </div>
      </div>
      <div class="wrapper_upp protection">
        <img class="wrapper__upp__img" src="../assets/aproof.png" alt="" />
        <div class="wrapper__upp__blocl">
        <h4 class="wrapper__upp__title">Защита информации pci dss</h4>
        <p class="wrapper__upp__text">
          Стандарт защиты информации, разработанный международными платёжными
          системами Visa и MasterCard
        </p>
        </div>
      </div>
    </div>
    </div>
    <div class="info">
      <div class="info__wrapper">
        <div>
      <h2 class="info__title">Судебные приставы по задолженности не выпускают за границу</h2>
      <p class="info__text">По новому законодательству, вас могут не выпустить за рубеж страны, если у вас висят долги по судебным делам. Рекомендуется, регулярно узнавать свою задолженность, чтобы не попасть в сложную ситуацию. Приставы арестовывают банковские счета и накладывают ограничения на выезд за пределы родины. Обратите внимание, что по решению суда, у вас может возникнуть долг перед судебными приставами, если:<br></p>
    <ul class="info__list">
      <li>Вовремя не оплатили штраф ГИБДД</li>
      <li>Не платили кредит, ипотеку и т.д.</li>
      <li>Исковое заявление (физ/юр лица) против вас</li>
      <li>Неуплата налогов</li>
      <li>Невыполнение иных долговых обязательств</li>
    </ul>
      <h2 class="info__title__second">Какие возникают ограничения у должников?</h2>
      <p class="info__text__second">Главное это запрет на любые путешествия вне страны на 3 года. Наложение ареста на все банковские счета и карты. Должник будет обязан погасит задолженность в указанный срок, в ином положении, судебные приставы начнут процедуру конфискации имущества. Для того, чтобы граждане могли самостоятельно узнавать свои задолженности по судебным приставам и в положенный срок их погашать, был создан сайт по проверке долгов онлайн.</p>
    </div>
    <div class="info__img">
      <img  src="../assets/map.png" alt="">
    </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="sass">
.home__block
  background: #E5E5E5
  padding-bottom: 71px

.info
  max-width: 1170px
  margin: 0 auto
  margin-top: 67px
  margin-bottom: 100px

.home__content
  max-width: 1170px
  margin: 0 auto

.home__content__title
  font-weight: bold
  font-size: 38px
  line-height: 42px
  text-align: left
  padding-top: 80px

.home__content__text
  text-align: left
  font-size: 17px
  line-height: 24px
  margin-top: 20px
  margin-top: -6px
  margin-bottom: 38px

.wrapper__upp
  padding-top: 57px
  display: grid
  grid-template-columns: 37% 33% 30%
  background: #fff
  max-width: 1170px
  margin: 0 auto

.wrapper__upp__title
  font-family: Source Sans Pro
  font-weight: 600
  font-size: 19px
  line-height: 17px
  color: #1F2429

.wrapper__upp__text
  font-size: 13px
  line-height: 20px
  color: #53585C
  margin-top: -9px

.proof
  display: grid
  grid-template-columns: 22% 67%
  text-align: left

.commission
  display: grid
  grid-template-columns: 25% 57%
  text-align: left

.protection
  display: grid
  grid-template-columns: 26% 73%
  text-align: left

.wrapper__upp__img
  margin-top: 4px

.wrapper__upp__blocl
  margin-top: -21px

.info__title
  font-weight: 600
  font-size: 25px
  line-height: 17px
  text-align: left
  font-style: normal

.info__text
  font-size: 15px
  line-height: 22px
  color: #53585C
  padding-top: 9px

.info__list
  /*text-align: left*/
  font-size: 15px
  line-height: 26px
  color: #1F2429
  list-style-image: url('../assets/checkmark.png')
  padding-top: 25px
  padding-left: 21px

.info__list li
  padding-left: 5px

.info__wrapper
  display: grid
  grid-template-columns: 65% 35%
  text-align: left
  
.info__title__second
  font-weight: 600
  font-size: 25px
  line-height: 17px
  padding-top: 28px

.info__text__second
  padding-top: 10px
  font-family: Source Sans Pro
  font-style: normal
  font-weight: normal
  font-size: 15px
  line-height: 22px
  
.info__img 
  text-align: end
  padding-top: 55px
</style>
