<template>
  <div id="app">
    <div id="nav">
      <img class="nav__logo__img" src="./assets/logo.png" alt="" />
      <p class="nav__logo__text">РусДолги</p>
      <p class="nav__text">
        Онлайн-сервис проверки задолженности по судебным приставам
      </p>
      <router-link to="/">Узнать задолженность</router-link>
      <router-link to="/banchek">Проверить запрет на выезд</router-link>
      <router-link to="/contacts">Контакты</router-link>
    </div>
    <router-view />
    <footer class="footer">
      <div class="footer__block">
        <div class="">
          <div class="footer__block__brand">
            <img class="footer__logo__img" src="./assets/logo.png" alt="" />
            <p class="footer__logo__brand">РусДолги</p>
            <p class="footer__logo__text">
              Онлайн-сервис проверки задолженности по судебным приставам
            </p>
          </div>
        </div>
        <div class="footer__info">
          <h4 class="footer__title">
            Сервис проверки судебных задолженностей rosdolgi.ru 2020
          </h4>
          <p class="footer__text">
            Информация по задолженности от судебных приставов формируются
            автоматически на основе запроса по данным пользователя в официальную
            базу ФССП. Проверка долгов граждан осуществляется бесплатно.
            Интернет-портал позволяет узнать задолженности в режиме онлайн.
            Копирование любой информации о долгах запрещено. Цитирование с сайта
            разрешается при наличии активной ссылки.
          </p>
        </div>
        <div class="footer__nav">
          <img src="./assets/mail.png" alt="" />
          <a class="footer__email" href="mailto:info@rudolgi.com"
            >info@rudolgi.com
          </a>
          <div class="footer__nav__link">
            <router-link to="/">Узнать задолженность</router-link><br />
            <router-link to="/banchek">Проверить запрет на выезд</router-link
            ><br />
            <router-link to="/contacts">Контакты</router-link>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__comtainer">
          <p class="footer__bottom__copyright">dolgi.net.© 2016-2020</p>
          <img src="./assets/lock.png" alt="" />
          <img src="./assets/http.png" alt="" />
          <img src="./assets/mir.png" alt="" />
          <img src="./assets/master.png" alt="" />
          <img src="./assets/visa.png" alt="" />
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Source Sans Pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2429;
}

#nav {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: -o-flex;
  display: flex;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  max-height: 48px;
  padding-top: 28px;

  a {
    font-family: Source Sans Pro;
    font-style: normal;
    color: #03a06c;
    margin-left: auto;

    &.router-link-exact-active {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 19px;
    }
  }

  .nav__logo__img {
    width: 47px;
    height: 47px;
  }
  .nav__logo__text {
    margin-left: 20px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #1f2429;
    margin-left: 20px;
  }
  .nav__text {
    width: 194px;
    top: 29px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    color: #a0a4aa;
    margin-left: 37px;
  }
}
.footer {
  background: #e6ebec;
}
.footer__block {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: stretch;
  padding-top: 34px;
}

.footer__logo__brand {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #1f2429;
}

.footer__title {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #1f2429;
  text-align: left;
}

.footer__text {
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  color: #53585c;
  text-align: left;
}
.footer__email {
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  color: #1f2429 !important;
}

.footer__nav {
  display: flex;
  display: -webkit-flex;
  flex-flow: wrap;
  -webkit-flex-flow: wrap;
  -webkit-justify-content: space-between;
  justify-content: flex-end;
  align-items: center;
  -webkit-align-items: center;
}

.footer__nav a {
  font-family: Source Sans Pro;
  font-style: normal;
  color: #03a06c;
  margin-left: 11px;
  margin-bottom: 5px;

  &.router-link-exact-active {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
  }
}
.footer__logo__text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: left;

  color: #a0a4aa;
}

.footer__info {
  max-width: 637px;
}

.footer__block__brand {
  max-width: 187px;
  display: flex;
  display: -webkit-flex;
  flex-flow: wrap;
  -webkit-flex-flow: wrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
}

.footer__bottom {
  font-size: 12px;
  line-height: 12px;
  color: #53585c;
  height: 66px;
  max-width: 1170px;
  margin: 0 auto;
}

.footer__bottom a {
  font-size: 12px;
  line-height: 12px;

  color: #53585c;
}

.footer__comtainer {
  display: flex;
  display: -webkit-flex;
  flex-flow: wrap;
  -webkit-flex-flow: wrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
}

.footer__nav__link {
  text-align: left;
}
</style>
