<template>
       <div class="block-about">
        <div class="block-about__slider">
            <div class="owl-carousel owl-theme block-about__slider_canvas">
                <div class="slide" style="background: url(./assets/images/projects/2/006.jpg) no-repeat; background-size: cover; background-position: 50% 80%">
                       <p class="slide__title">
                           <span>Креативный подход</span><br> <strong>со знанием дела</strong>
                        </p>
                </div>
                <div class="slide" style="background: url(./assets/images/projects/1/004.jpg) no-repeat; background-size: cover; background-position: 50% 80%">
                </div>
                <div class="slide" style="background: url(./assets/images/projects/5/002.jpg) no-repeat; background-size: cover; background-position: 50% 50%">
                </div>
            </div>
        </div>
        <div class="block-about__team">
            <div class="block-about__team_content" v-for="(person, index) in persons[language.numOfLang]" :key="index">
                <div class="block-about__team_content-foto" v-bind:style="{ backgroundImage: 'url(' + person.image + ')'}"></div>
                <div class="block-about__team_content-desc">
                    <span class="name">{{person.name}}</span>
                    <strong class="name">{{person.soname}}</strong><br>
                    <span class="position">{{person.position}}</span>
                    <h5>{{person.titleToDesc}}</h5>
                    <p v-for="(desc, i) in persons[language.numOfLang][index].description" :key="i">{{desc}}<br><br></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import language from "../../settings/language";
import persons from "./persons";

export default {
    data() {
        return {
            language,
            persons
        }
    },
    mounted: function() {
        console.log(persons[language.numOfLang].description)
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
