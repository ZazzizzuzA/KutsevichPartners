<template>
    <div class="block-home">
        <div class="block-home__slider">
            <div class="owl-carousel owl-theme block-home__slider_canvas">
                <div class="slide">
                    <img src="http://wp.widewallpapers.ru/2k/interior/panoramic-window-rooms/1920x1080/panoramic-window-room-1920x1080-011.jpg" alt="">
                          
                       <p class="slide__title">
                           <span>Проектирование жилых</span><br> <strong>и общественных зданий</strong>
                        </p>

                </div>
                <div class="slide">
                    <img src="http://lookw.ru/1/635/1402263679-photoshop-48-cr.jpg" alt="">
                </div>
                <div class="slide">
                    <img src="http://www.fullhdoboi.ru/_ph/8/421890363.jpg?1533705537" alt="">
                </div>
            </div>
        </div>
        <div class="block-home__info">
            <div class="block-home__info_content">
               
                <p>
                    Архитектурная студия <strong>«КУЦЕВИЧ+ПАРТНЕРЫ»</strong> предлагает услуги в области архитектурного проектирования, дизайна среды, дизайна интерьера и ландшафта.
                                        
                    <br>
                    <br>Наш коллектив обладает большим опытом в области проектирования жилых и общественных зданий. Нами были разработаны проекты частных жилых домов, жилых домов средней этажности, высотных жилых домов, офисных комплексов, гостиничных комплексов, торгово-развлекательных комплексов и др. Нами были спроектированы интерьеры ресторанов, кафе, баров, биллиардных клубов, квартир и офисов.

                </p>
                <p>
                    Сотрудники нашей компании прошли стажировку не только в украинских, но и в зарубежных архитектурных компаниях и готовы применить передовые знания в области архитектурного проектирования в проектах любой сложности.
                    <br>
                    <br>
                    Обращаясь к нам, вы будете уверены, что в результате нашего сотрудничества вы получите уникальный, индивидуальный проект, выполненный на высоком профессиональном уровне, соответствующий украинским строительным нормам, c применением новейших технологий и с учетом последних тенденций в области архитектуры и дизайна.
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



