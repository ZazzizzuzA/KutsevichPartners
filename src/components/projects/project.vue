<template>
  <div class="post">
    <div
      class="post__project-foto"
      :style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[0] + ')'}"
    >
      <span class="post__project-foto_title">
        <strong>{{project[language.numOfLang].title}}</strong>
        <br>
        {{project[language.numOfLang].country}}
      </span>
    </div>
    <div class="post__project-info">
      <div class="post__project-info_article">
        <div
          class="post__project-info_article-foto"
          v-bind:style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[1] + ')'}"
        ></div>
        <div class="post__project-info_article-text">
          <!-- <h3>Название абзаца 1</h3> -->
          <p>{{project[language.numOfLang].description[0]}}</p>
        </div>
      </div>
      <div class="post__project-info_article">
        <div
          class="post__project-info_article-foto ml"
          v-bind:style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[2] + ')'}"
        ></div>
        <div class="post__project-info_article-text">
          <!-- <h3>Название абзаца 2</h3> -->
          <p>{{project[language.numOfLang].description[1]}}</p>
        </div>
      </div>
      <div class="post__project-info_article">
        <div
          class="post__project-info_article-foto"
          v-bind:style="{ backgroundImage: 'url(.' + project[language.numOfLang].image[3] + ')'}"
        ></div>
        <div class="post__project-info_article-text">
          <!-- <h3>Название абзаца 3</h3> -->
          <p>{{project[language.numOfLang].description[2]}}</p>
        </div>
      </div>
    </div>
    <div class="post__gallery owl-carousel owl-theme" v-if="!isEdge">
      <div
        class="post__gallery_item"
        v-for="(image, index) in project[language.numOfLang].image"
        :key="index"
        v-bind:style="{ backgroundImage: 'url(.' + image + ')'}"
        v-bind:data-index="index"
      >
        <div class="post__gallery_item-popup"></div>
      </div>
    </div>
    <div class="popup-shadow popup-hide" @click="popupClose()"></div>
  </div>
</template>
<script>
import posts from "./posts";
import language from "../../settings/language";

export default {
  data() {
    return {
      posts,
      language,
      project: [],
      allSlides: [],
      isEdge: false
    };
  },
  methods: {
    popupClose: function() {
      let shadow = document.querySelector(".popup-shadow"),
        item = document.querySelector(".popup-center-show"),
        body = document.querySelector("body"),
        parent = document.getElementsByTagName("body")[0];

      shadow.classList.remove("popup-show");
      body.classList.remove("hidden-overflow");
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
    if (navigator.userAgent.indexOf("Edge") !== -1) {
      this.isEdge = true;
    } else {
      setTimeout(() => {
        this.allSlides = Array.from(
          document.getElementsByClassName("post__gallery_item")
        );
        let arr = this.allSlides,
          projectImg = this.project[language.numOfLang].image;
        arr.forEach(item => {
          item.addEventListener("click", function() {
            let shadow = document.querySelector(".popup-shadow"),
              popupWrapper = document.createElement("div"),
              popupItems = [],
              dataInd = item.getAttribute("data-index"),
              firstShowItem = document.createElement("img"),
              body = document.querySelector("body"),
              parent = document.getElementsByTagName("body")[0];

            popupWrapper.classList.add("owl-carousel");
            popupWrapper.classList.add("popup-center-show");
            body.classList.add("hidden-overflow");

            firstShowItem.src = "." + projectImg[dataInd];
            popupItems[dataInd] = firstShowItem;
            parent.appendChild(popupWrapper);
            for (let i = 0; i < projectImg.length; i++) {
              popupItems[i] = document.createElement("img");
              let image = popupItems[i];
              image.src = "." + projectImg[i];
              if (i === 0) {
                popupWrapper.appendChild(popupItems[dataInd]);
              } else if (i === +dataInd) {
                popupWrapper.appendChild(popupItems[0]);
              } else {
                popupWrapper.appendChild(image);
              }
            }

            shadow.classList.remove("popup-hide");
            shadow.classList.add("popup-show");

            jQuery(document).ready(function() {
              if (window.innerWidth < 769) {
                jQuery(".owl-carousel").owlCarousel({
                  loop: true,
                  margin: 0,
                  nav: false,
                  dots: false,
                  slideTransition: "linear",
                  autoplay: false,
                  rewind: true,
                  animateOut: "fadeOut",
                  animateIn: "fadeIn",
                  navSpeed: 2000,
                  navClass: ["owl-prev", "owl-next"],
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
                  slideTransition: "linear",
                  autoplay: false,
                  rewind: true,
                  animateOut: "fadeOut",
                  animateIn: "fadeIn",
                  navSpeed: 2000,
                  navClass: ["owl-prev", "owl-next"],
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
          });
        });
      }, 300);
          // Owl-carousel

    jQuery(document).ready(function() {
      jQuery(".owl-carousel").owlCarousel({
        loop: true,
        margin: 2,
        nav: false,
        dots: false,
        slideTransition: "linear",
        autoplay: true,
        autoplayTimeout: 5500,
        autoplaySpeed: 5500,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
      });
    });
    };


  }
};
</script>