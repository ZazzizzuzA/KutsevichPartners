<template>
    <div class="post">
        <div class="post__project-foto" :style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[0] + ')'}">
            <span class="post__project-foto_title">{{project[language.numOfLang].title}}</span>
        </div>
        <div class="post__project-info">
            <div class="post__project-info_article">
                <div class="post__project-info_article-foto" v-bind:style="{ backgroundImage: 'url(' + project[language.numOfLang].image[1] + ')'}"></div>
                <div class="post__project-info_article-text">
                    <h3>Название абзаца 1</h3>
                    <p>{{project[language.numOfLang].description}}</p>
                </div>
            </div>
            <div class="post__project-info_article">
                <div class="post__project-info_article-foto" v-bind:style="{ backgroundImage: 'url(' + project[language.numOfLang].image[2] + ')'}"></div>
                <div class="post__project-info_article-text">
                    <h3>Название абзаца 2</h3>
                    <p>{{project[language.numOfLang].description}}</p>
                </div>
            </div>
            <div class="post__project-info_article">
                <div class="post__project-info_article-foto" v-bind:style="{ backgroundImage: 'url(' + project[language.numOfLang].image[3] + ')'}"></div>
                <div class="post__project-info_article-text">
                    <h3>Название абзаца 3</h3>
                    <p>{{project[language.numOfLang].description}}</p>
                </div>
            </div>
        </div>
        <div class="post__gallery owl-carousel owl-theme">

            <div class="post__gallery_item" v-for="(image, index) in project[language.numOfLang].image" :key="index" v-bind:style="{ backgroundImage: 'url(' + image + ')'}" @click="popupOpen()">
                <div class="post__gallery_item-popup" ></div>
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
            popupOpen: function() {
                let shadow = document.querySelector(".popup-shadow"),
                    popupItem = document.createElement("div"),
                    arrImg = this.project[language.numOfLang].image,
                    parent = document.getElementsByTagName('body')[0];

                    popupItem.classList.add("popup-center-show");
                    popupItem.style.backgroundImage = "url(" + arrImg[(this.project[language.numOfLang].id)] + ")";

                    parent.appendChild(popupItem);

                shadow.classList.remove("popup-hide");
                shadow.classList.add("popup-show");


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
                autoplayTimeout: 6000,
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
