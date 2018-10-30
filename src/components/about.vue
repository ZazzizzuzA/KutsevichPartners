<template>
    <div class="block-about">
        <div class="block-about__slider">
            <div class="owl-carousel owl-theme block-about__slider_canvas">
                <div class="slide" style="background: url(./assets/images/sliders/Image001_2.jpg) no-repeat; background-size: cover; background-position: 50% 50%">
      
                          
                       <!-- <p class="slide__title ta-r">
                           <span>Good buildings come from good people, and all problems are solved by good design.</span><br> <strong>Stephen Gardiner</strong>
                        </p> -->

                </div>
                <div class="slide" style="background: url(./assets/images/sliders/Image002_2.jpg) no-repeat; background-size: cover; background-position: 50% 50%">
      
<!--                           
                       <p class="slide__title">
                           <strong>We shape our buildings; thereafter they shape us. </strong><br> <span>Winston Churchill</span>
                        </p> -->

                </div>
               <div class="slide" style="background: url(./assets/images/sliders/Image003_2.jpg) no-repeat; background-size: cover; background-position: 50% 50%">
      
<!--                           
                       <p class="slide__title text-item_bottom">
                           <strong>Architecture is basically the design of interiors, the art of organizing interior space.</strong><br><span> Philip Johnson</span>
                        </p> -->

                </div>
               <div class="slide" style="background: url(./assets/images/sliders/Image004_2.jpg) no-repeat; background-size: cover; background-position: 50% 50%">
      
<!--                           
                       <p class="slide__title text-item_bottom ta-r">
                           <span>The difference between good and bad architecture is the time you spend on it. </span><br> <strong>David Chipperfield</strong>
                        </p> -->

                </div>
               <div class="slide" style="background: url(./assets/images/sliders/Image005_2.jpg) no-repeat; background-size: cover; background-position: 50% 50%">
      
                          
                       <!-- <p class="slide__title text-item_middle ta-c">
                           <strong>I believe that the way people live can be directed a little by architecture.</strong><br><span> Tadao Ando</span> 
                        </p> -->

                </div>
            </div>
        </div>
        <div class="block-about__info">
            
            <div class="block-about__info_content">
                <h1>{{title[language.numOfLang]}}</h1>
                <p>
                    {{aboutUs[language.numOfLang].firstRow}}

                </p>
                <p>
                   {{aboutUs[language.numOfLang].secondRow}}
                
                    <br>
                    <br>
                    {{aboutUs[language.numOfLang].middleRow}}
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
            ],
            aboutUs: [
                {
                    firstRow: "Архитектурная студия «КУЦЕВИЧ + ПАРТНЕРЫ» предлагает услуги в области архитектурного проектирования, дизайна интерьера и ландшафтного дизайна. Наш коллектив обладает большим опытом в области проектирования жилых и общественных зданий. Нами были разработаны проекты частных жилых домов, жилых домов средней этажности, высотных жилых домов, офисных комплексов, гостиничных комплексов, торгово-развлекательных комплексов и др. Нами были спроектированы интерьеры ресторанов, кафе баров, квартир и офисов. ",
                    
                    secondRow: "Сотрудники нашей компании прошли стажировку не только в украинских, но и в зарубежных архитектурных компаниях и готовы применить передовые знания в области архитектурного проектирования в проектах любой сложности. Обращаясь в архитектурная студию «КУЦЕВИЧ + ПАРТНЕРЫ», вы будете уверенны, что в результате сотрудничества с нами вы получите уникальный, индивидуальный архитектурный проект. ",
                    
                    middleRow: "Команда наших партнеров инженеров выполняет инженерные разделы проекта, такие, как: отопление/вентиляция, водопровод/канализация, электроснабжение/электроосвещение и т. д. Результатом нашего сотрудничества с заказчиком является официальный комплексный проект готовый к строительству."
                },
                {
                    firstRow: "",

                    secondRow: "",

                    middleRow: ""
                }
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



