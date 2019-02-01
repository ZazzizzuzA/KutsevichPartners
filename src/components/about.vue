<template>
  <div class="block-about">
    <div class="block-about__slider">
      <div class="owl-carousel owl-theme block-about__slider_canvas">
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image001_2.jpg);background-repeat: no-repeat; background-size: cover;"
        >
          <!-- <p class="slide__title ta-r">
                           <span>Good buildings come from good people, and all problems are solved by good design.</span><br> <strong>Stephen Gardiner</strong>
          </p>-->
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image002_2.jpg);background-repeat: no-repeat; background-size: cover;"
        >
          <!--                           
                       <p class="slide__title">
                           <strong>We shape our buildings; thereafter they shape us. </strong><br> <span>Winston Churchill</span>
          </p>-->
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image003_2.jpg); background-repeat: no-repeat; background-size: cover;"
        >
          <!--                           
                       <p class="slide__title text-item_bottom">
                           <strong>Architecture is basically the design of interiors, the art of organizing interior space.</strong><br><span> Philip Johnson</span>
          </p>-->
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image004_2.jpg); background-repeat: no-repeat; background-size: cover;"
        >
          <!--                           
                       <p class="slide__title text-item_bottom ta-r">
                           <span>The difference between good and bad architecture is the time you spend on it. </span><br> <strong>David Chipperfield</strong>
          </p>-->
        </div>
        <div
          class="slide"
          style="background-image: url(./assets/images/sliders/Image005_2.jpg); background-repeat: no-repeat; background-size: cover;"
        >
          <!-- <p class="slide__title text-item_middle ta-c">
                           <strong>I believe that the way people live can be directed a little by architecture.</strong><br><span> Tadao Ando</span> 
          </p>-->
        </div>
      </div>
    </div>
    <div class="block-about__info">
      <div class="block-about__info_content">
        <h1>{{title[language.numOfLang]}}</h1>
        <p>
          {{aboutUs[language.numOfLang].firstRow}}
          <br>
          <br>
          {{aboutUs[language.numOfLang].secondRow}}
        </p>
        <p>
          {{aboutUs[language.numOfLang].thirdRow}}
          <br>
          <br>
          {{aboutUs[language.numOfLang].fourthRow}}
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
      title: ["О нас", "About"],
      aboutUs: [
        {
          firstRow:
            "Архитектурное бюро «КУЦЕВИЧ + ПАРТНЕРЫ»  выполняет все стадии архитектурного проектирования: Предпроектные предложения; Эскизный проект; Дизайн-проект; Стадия «Проект»; Рабочий проект; Рабочая документация и Авторский надзор.",

          secondRow:
            "Сотрудники бюро имеют квалификационные сертификаты на право выполнения работ в сфере архитектуры, а наши партнеры-инженеры обладают квалификационными сертификатами на право выполнения работ в области инженерных коммуникаций и несущих конструкций.",

          thirdRow:
            "Команда партнеров-инженеров выполняет инженерные разделы проекта, такие, как: отопление/вентиляция, водопровод/канализация, электроснабжение/электроосвещение и т. д.",

          fourthRow:
            "Результатом нашего сотрудничества с заказчиком является официальный комплексный проект готовый к строительству."
        },
        {
          firstRow: "",

          secondRow: "",

          fourthRow: ""
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
          autoplayTimeout: 6000,
          autoplaySpeed: 8000,
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
      } else {
        jQuery(".owl-carousel").owlCarousel({
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          slideTransition: "ease-in-out",
          autoplay: true,
          autoplayTimeout: 6000,
          autoplaySpeed: 8000,
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



