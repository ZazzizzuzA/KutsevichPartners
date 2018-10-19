<template>
    <div class="post">
        <div class="post__project-foto" :style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[0] + ')'}">
            <span class="post__project-foto_title"><strong>{{project[language.numOfLang].title}}</strong><br> {{project[language.numOfLang].country}}</span>
        </div>
        <div class="post__project-info">
            <div class="post__project-info_article">
                <div class="post__project-info_article-foto" v-bind:style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[1] + ')'}"></div>
                <div class="post__project-info_article-text">
                    <h3>Название абзаца 1</h3>
                    <p>{{project[language.numOfLang].description}}</p>
                </div>
            </div>
            <div class="post__project-info_article">
                <div class="post__project-info_article-foto" v-bind:style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[2] + ')'}"></div>
                <div class="post__project-info_article-text">
                    <h3>Название абзаца 2</h3>
                    <p>{{project[language.numOfLang].description}}</p>
                </div>
            </div>
            <div class="post__project-info_article">
                <div class="post__project-info_article-foto" v-bind:style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[3] + ')'}"></div>
                <div class="post__project-info_article-text">
                    <h3>Название абзаца 3</h3>
                    <p>{{project[language.numOfLang].description}}</p>
                </div>
            </div>
        </div>
        <div class="post__gallery owl-carousel owl-theme">

            <div class="post__gallery_item" v-for="(image, index) in project[language.numOfLang].image" :key="index" v-bind:style="{ backgroundImage: 'url(.' + image + ')'}"  @click="popupOpen({index})">
                <div class="post__gallery_item-popup"></div>
            </div>
        </div>
        <div class="popup-shadow popup-hide" @click="popupClose()"></div>
    </div>
</template>
<script>
import posts from './posts';
import language from "../../settings/language";

    export default {
        data(){
            return {
                posts,
                language,
                project: []
            }
        },
        methods: {
            popupOpen: function(index) {
                let shadow = document.querySelector(".popup-shadow"),
                    popupWrapper = document.createElement("div"),
                    popupItems = [],
                    arrImg = this.project[language.numOfLang].image,
                    firstShowItem = document.createElement("img"),
                    parent = document.getElementsByTagName('body')[0];


                    popupWrapper.classList.add("owl-carousel");
                    popupWrapper.classList.add("popup-center-show");

                    firstShowItem.src = "." + arrImg[index.index];

                    popupWrapper.appendChild(firstShowItem);
                    parent.appendChild(popupWrapper); 
  
                for (let i = 0; i < arrImg.length; i++) {

                        popupItems[i] = document.createElement("img");
                        let image = popupItems[i];
                        image.src = "." + arrImg[i];
                        if (i === +index.index){
                            popupItems[index.index] = firstShowItem;
                        }
                        popupWrapper.appendChild(image);
                }        
                
                // console.log(popupItems, arrImg[index.index]);
               
                shadow.classList.remove("popup-hide");
                shadow.classList.add("popup-show");

                jQuery(document).ready(function(){
                jQuery('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:0,
                    nav: true,
                    dots: false,
                    slideTransition: "linear",
                    autoplay: false,
                    rewind: true,
                    animateOut: "fadeOut",
                    animateIn: "fadeIn",
                    navSpeed: 2000,
                    navClass: ["owl-prev","owl-next"],
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
            },
            popupClose: function() {
                let shadow = document.querySelector(".popup-shadow"),
                    item = document.querySelector(".popup-center-show"),
                    parent = document.getElementsByTagName('body')[0];

                shadow.classList.remove("popup-show");
                parent.removeChild(item);
                shadow.classList.add("popup-hide");
     
            }
        },
        created: function() {

            let projectId = this.$route.params.id;
            for (let arr of this.posts) {
                this.project.push(arr[projectId]);
            }
        },
        mounted: function() {

        // Owl-carousel

        jQuery(document).ready(function(){
            jQuery('.owl-carousel').owlCarousel({
                loop:true,
                margin:2,
                nav:false,
                dots: false,
                slideTransition: "linear",
                autoplay: true,
                autoplayTimeout: 5500,
                autoplaySpeed: 5500,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            });
        });
    }
}
</script>
