<template>
    <div class="block-about">
        <div class="block-about__slider">
            <div class="owl-carousel owl-theme block-about__slider_canvas">
                <div class="slide">
                    <img src="http://web3.ficos.com/hitoffice/wp-content/uploads/sites/5/2014/01/Fotolia_13811963_L.jpg" alt="">
                    <h1>КУЦЕВИЧ <br> +<br> ПАРТНЕРЫ</h1>
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
            <h1>О нас</h1>
            <p>
                Архитектурная студия «КУЦЕВИЧ+ПАРТНЕРЫ» предлагает услуги в области архитектурного проектирования, дизайна среды, дизайна интерьера и ландшафта.

                Наш коллектив обладает большим опытом в области проектирования жилых и общественных зданий. Нами были разработаны проекты частных жилых домов, жилых домов средней этажности, высотных жилых домов, офисных комплексов, гостиничных комплексов, торгово-развлекательных комплексов и др. Нами были спроектированы интерьеры ресторанов, кафе, баров, биллиардных клубов, квартир и офисов.

                Сотрудники нашей компании прошли стажировку не только в украинских, но и в зарубежных архитектурных компаниях и готовы применить передовые знания в области архитектурного проектирования в проектах любой сложности.

                Обращаясь к нам, вы будете уверены, что в результате нашего сотрудничества вы получите уникальный, индивидуальный проект, выполненный на высоком профессиональном уровне, соответствующий украинским строительным нормам, c применением новейших технологий и с учетом последних тенденций в области архитектуры и дизайна.
            </p>
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

        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                dots: false,
                slideTransition: "ease-in-out",
                autoplay: true,
                autoplayTimeout: 3000,
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



