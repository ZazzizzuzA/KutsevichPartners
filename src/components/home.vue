<template>
  <div class="block-home">
    <div class="block-home__slider">
      <div class="owl-carousel owl-theme block-home__slider_canvas">
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image001_1.jpg); background-size: cover;"
        >
          <p class="slide__title ta-r">
            <strong>Good buildings come from good people, and all problems are solved by good design.</strong>
            <br>
            <span>Stephen Gardiner</span>
          </p>
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image002_1.jpg); background-size: cover;"
        >
          <p class="slide__title">
            <strong>We shape our buildings; thereafter they shape us.</strong>
            <br>
            <span>Winston Churchill</span>
          </p>
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image003_1.jpg); background-size: cover;"
        >
          <p class="slide__title text-item_bottom">
            <strong>Architecture is basically the design of interiors, the art of organizing interior space.</strong>
            <br>
            <span>Philip Johnson</span>
          </p>
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image004_1.jpg); background-size: cover;"
        >
          <p class="slide__title text-item_bottom ta-r">
            <strong>The difference between good and bad architecture is the time you spend on it.</strong>
            <br>
            <span>David Chipperfield</span>
          </p>
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image005_1.jpg); background-size: cover;"
        >
          <p class="slide__title ta-r">
            <strong>I believe that the way people live can be directed a little by architecture.</strong>
            <br>
            <span>Tadao Ando</span>
          </p>
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image006_1.jpg); background-size: cover;"
        >
          <p class="slide__title">
            <strong>I don't want to do architecture that's dry and dull.</strong>
            <br>
            <span>Frank Gehry</span>
          </p>
        </div>
      </div>
    </div>
    <div class="block-home__info">
      <div class="block-home__info_content">
        <p>
          {{about[language.numOfLang].firstRow}}
          <br>
          <br>
          {{about[language.numOfLang].secondRow}}
        </p>
        <p>
          {{about[language.numOfLang].thirdRow}}
          <br>
          <br>
          {{about[language.numOfLang].fourthRow}}
        </p>
        <p class="middle-row">
          <br>
          {{about[language.numOfLang].middleRow}}
          <br>
          <br>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import language from "../settings/language";

export default {
  data: function() {
    return {
      language,
      about: [
        {
          firstRow:
            "Архитектурная бюро «КУЦЕВИЧ + ПАРТНЕРЫ» предлагает услуги в области архитектурного проектирования, дизайна интерьера и ландшафтного дизайна.",

          secondRow:
            "Коллектив бюро обладает большим опытом в области проектирования жилых и общественных зданий в Украине и за рубежом. Компанией были разработаны проекты коттеджей, жилых домов средней этажности и высотного жилья, офисных центров, гостиниц, торгово-развлекательных комплексов и др. Нами были спроектированы интерьеры индивидуальных жилых домов, ресторанов, кафе, квартир и офисов.",

          thirdRow:
            "Сотрудники бюро прошли стажировку не только в украинских, но и в зарубежных архитектурных компаниях и применяют передовые знания в области архитектурного проектирования в проектах любой сложности.",

          fourthRow:
            "Многие проекты компании разрабатываются совместно с ведущими зарубежными архитектурными фирмами, что позволяет добиваться высокого качества проектирования.",

          middleRow:
            "Обращаясь в архитектурное бюро «КУЦЕВИЧ + ПАРТНЕРЫ», заказчик будет уверен, что в результате сотрудничества с компанией получит уникальный индивидуальный архитектурный проект. Проекты компании готовы к реализации, выполняются на высоком профессиональном уровне, соответствуют мировым стандартам и украинским строительным нормам. В проектах компании используются передовые инженерные технологии, применяются современные тренды в области архитектуры и дизайна."
        },
        {
          firstRow: "",
          secondRow: ""
        }
      ]
    };
  },
  mounted: function() {
    // Owl-carousel
    jQuery(document).ready(function() {
      if (window.innerWidth < 769) {
        jQuery(".owl-carousel").owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          dots: false,
          slideTransition: "ease-in-out",
          autoplay: true,
          autoplayTimeout: 10000,
          autoplaySpeed: 3000,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        });
      } else if (window.innerWidth >= 769) {
        jQuery(".owl-carousel").owlCarousel({
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          slideTransition: "ease-in-out",
          autoplay: true,
          autoplayTimeout: 10000,
          autoplaySpeed: 3000,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        });
      }
    });
  }
};
</script>



