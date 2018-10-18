<template>
    <div class="block-about">
        <div class="block-about__slider">
            <div class="owl-carousel owl-theme block-about__slider_canvas">
                <div class="slide" style="background: url(./assets/images/projects/2/007.jpg) no-repeat; background-size: cover; background-position: 50% 80%">
                       <p class="slide__title">
                           <span>Проектирование жилых</span><br> <strong>и общественных зданий</strong>
                        </p>
                </div>
                <div class="slide" style="background: url(./assets/images/projects/1/003.jpg) no-repeat; background-size: cover; background-position: 50% 80%">
                </div>
                <div class="slide" style="background: url(./assets/images/projects/2/003.jpg) no-repeat; background-size: cover; background-position: 50% 50%">
                </div>
            </div>
        </div>
        <div class="block-about__info">
            <h1>{{title[language.numOfLang]}}</h1>
            <div class="block-about__info_content">
                
                <p>
                    Архитектурная студия «КУЦЕВИЧ+ПАРТНЕРЫ» выполняет все стадии архитектурного проектирования: предпроектные предложения, эскизный проект, стадия проект, рабочая документация, дизайн-проект и авторский надзор.
                                        
                    <br>
                    <br>Сотрудники нашей компании имеют квалификационные сертификаты на право выполнения работ в области архитектуры, инженерных коммуникаций и несущих конструкций.
                    <br>
                    <br>
                    Команда наших инженеров выполняет все инженерные разделы проекта, такие, как: отопление/вентиляция, водопровод/канализация, электроснабжение/электроосвещение и т. д.
                </p>
                <p>
                    Результатом нашего сотрудничества с заказчиком является официальный комплексный проект. При наличии данного проекта заказчик получает в органах местного самоуправления "Строительный паспорт" (если площадь здания до 300 м2) или "Градостроительные условия и ограничения".
                    <br>
                    <br>
                    Следующим этапом является получение заказчиком в Государственной архитектурно-строительной инспекции (ГАСК) "Декларации о начале выполнения строительных работ". А после завершения процесса строительства объекта заказчик получает в ГАСК окончательный документ - "Декларацию про готовность объекта к эксплуатации".
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
            title: [
                "О нас",
                "About"
            ]
        }
    },
    mounted: function() {

        // Owl-carousel

        jQuery(document).ready(function(){
            jQuery('.owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                dots: false,
                slideTransition: "ease-in-out",
                autoplay: true,
                autoplayTimeout: 6000,
                autoplaySpeed: 8000,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        });
    }
}
</script>



