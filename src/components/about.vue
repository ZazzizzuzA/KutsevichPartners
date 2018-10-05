<template>
    <div class="block-about">
        <div class="block-about__slider">
            <div class="owl-carousel owl-theme block-about__slider_canvas">
                <div class="slide">
                    <img src="http://web3.ficos.com/hitoffice/wp-content/uploads/sites/5/2014/01/Fotolia_13811963_L.jpg" alt="">
                          
                       <p class="slide__title">
                           <span>Проектирование жилых</span><br> <strong>и общественных зданий</strong>
                        </p>

                </div>
                <div class="slide">
                    <img src="http://www.theatresolutions.net/wp-content/uploads/2017/02/life-as-an-architect-hero-img.jpeg" alt="">
                </div>
                <div class="slide">
                    <img src="https://images.homify.com/images/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1481868947/p/photo/image/1738517/04-2/modern-doma-photos-in-seryy-by-autchawin-architect-co-ltd.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="block-about__info">
            <div class="block-about__info_content">
                <h1>О НАС</h1>
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
export default {
    data: function() {
        return {
            
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
                autoplayTimeout: 8000,
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



