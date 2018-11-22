<template>

    <nav class="block-nav__full-head">
        <router-link id="logoKutsevich" class="block-nav__full-head_logotype" to="/"><img src="../../assets/images/logo.png" alt="logotype"></router-link>
        <div class="block-nav__full-head_navigation" v-if="smallScreen === false">
            <router-link class="block-nav__full-head_navigation-link" v-bind:class="{ active: isActive }" to="/about"><span>{{titles[language.numOfLang].about}}</span></router-link>
            <router-link class="block-nav__full-head_navigation-link"  to="/projects" v-bind:class="{ active: isActive }"><span v-on:mouseover='mouseOver()' >{{titles[language.numOfLang].projects}}</span></router-link>
            <router-link class="block-nav__full-head_navigation-link" to="/team" v-bind:class="{ active: isActive }"><span>{{titles[language.numOfLang].team}}</span></router-link>
            <router-link class="block-nav__full-head_navigation-link" to="/contacts" v-bind:class="{ active: isActive }"><span>{{titles[language.numOfLang].contacts}}</span></router-link>
        </div>
        
        <div id="smallMenu" class="block-nav__small-head_navigation" v-if="smallScreen === true">
            <div id="nav-icon" class="nav-icon__menu_close" @click="openMenu()">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <transition name="menu">
                <div class="block__menu menu_close">
                    <div>
                        <router-link class="block-nav__small-head_navigation-link" v-bind:class="{ active: isActive }" to="/about"><span @click="openMenu()">{{titles[language.numOfLang].about}}</span></router-link>

                        <router-link class="block-nav__small-head_navigation-link"  to="/projects" v-bind:class="{ active: isActive }" ><span @click="openMenu()">{{titles[language.numOfLang].projects}}</span></router-link>

                        <router-link class="block-nav__small-head_navigation-link" to="/team" v-bind:class="{ active: isActive }" ><span @click="openMenu()">{{titles[language.numOfLang].team}}</span></router-link>

                        <router-link class="block-nav__small-head_navigation-link" to="/contacts" v-bind:class="{ active: isActive }" ><span @click="openMenu()">{{titles[language.numOfLang].contacts}}</span></router-link>

                    </div>
                </div>
            </transition>
        </div>
       
        <div class="block-nav__full-head_share" id="iconsShare">
            <a href="https://share.yandex.net/go.xml?service=facebook&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="facebook" target="_blank" title="Facebook">
                <img src="../../assets/images/icons/facebook.png" alt="fb">
            </a>
            <a href="https://share.yandex.net/go.xml?service=vkontakte&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="vk" target="_blank" title="ВКонтакте">
                <img src="../../assets/images/icons/vk.png" alt="vk">
            </a>
            <a href="https://share.yandex.net/go.xml?service=twitter&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="twitter" target="_blank" title="Twitter">
                <img src="../../assets/images/icons/twitter.png" alt="twitter">
            </a>
            <a href="https://share.yandex.net/go.xml?service=odnoklassniki&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="odnoklassniki" target="_blank" title="Одноклассники">
                <img src="../../assets/images/icons/odnoklassniki-logo.png" alt="odnoklassniki">
            </a>
            <a href="https://share.yandex.net/go.xml?service=facebook&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="google-plus" target="_blank" title="G+">
                <img src="../../assets/images/icons/google-plus.png" alt="G+">
            </a>
            <div href="" class="language-change" @click="changeLanguage()">{{ language.english ? "EN" : "РУ"}}</div>
        </div>
        <div class="block-nav__full-head_categories" v-bind:class="{showCategories: !showCat}" id="categories" v-on:mouseleave='mouseLeave()'>
            <router-link class="block-nav__full-head_navigation-link" :to="{ name: 'category', params: { category: 'interior' } }"><span @click="closeOnlyMenu()">{{titles[language.numOfLang].interior}}</span></router-link>
            <div class="border-line"></div>
            <router-link class="block-nav__full-head_navigation-link" :to="{ name: 'category', params: { category: 'exterior' } }" ><span @click="closeOnlyMenu()">{{titles[language.numOfLang].exterior}}</span></router-link>
        </div>
    </nav>
</template>


<script>
import language from "../settings/language";

export default {
    name: "navigation",
    data: function () {
        return {
            isActive: true,
            showCat: true, 
            smallScreen: false,
            language,
            titles: [
                {
                    about: "О нас",
                    projects: "Проекты",
                    team: "Команда",
                    contacts: "Контакты",
                    interior: "Интерьер",
                    exterior: "Экстерьер"


                },
                {
                    about: "About",
                    projects: "Projects",
                    team: "Our team",
                    contacts: "Contacts",
                    interior: "Interior",
                    exterior: "Exterior"
                }
            ]
        }
    },
    methods: {
        mouseOver: function() {
            this.showCat = false;
            let catOut = document.getElementById("categories");
  
                setTimeout( () => {
                    if (catOut.classList.contains("showCategories")) {
                        this.showCat = true;                            
                    }
                }, 5000 )
        
        },
        mouseLeave: function() {
            let catIn = document.getElementById("categories");

                setTimeout( () => {
                    this.showCat = true;
                }, 300)
        },
        changeLanguage() {
            this.language.english = !this.language.english;
            this.language.english ? this.language.numOfLang = 1 : this.language.numOfLang = 0;
        },
        openMenu() {

            let menu = document.getElementsByClassName('block__menu')[0],
                icon = document.getElementById('nav-icon'),
                childMenu = (menu.childNodes)[0];
            icon.classList.toggle('open');
            
            menu.classList.toggle('menu_opening');
            menu.classList.toggle('menu_opened');
            childMenu.classList.toggle('op-1');

            if (menu.classList.contains('menu_opened') || menu.classList.contains('menu_opening')) {
                menu.classList.remove('menu_closing');
            } else {
                menu.classList.add('menu_closing');

            }
            menu.classList.toggle('menu_close');

        },
        closeOnlyMenu() {

            let menu = document.getElementsByClassName('block__menu')[0],
                icon = document.getElementById('nav-icon'),
                childMenu = (menu.childNodes)[0];

            icon.classList.remove('open');
            menu.classList.remove('menu_opening');
            menu.classList.remove('menu_opened');
            childMenu.classList.remove('op-1');

            if (menu.classList.contains('menu_opened') || menu.classList.contains('menu_opening')) {
                menu.classList.remove('menu_closing');
            } else {
                menu.classList.add('menu_closing');

            }
            menu.classList.add('menu_close');

        }
    },
    mounted: function() {
        let screenWidth = window.innerWidth;
        if ( screenWidth < 761) {
            this.smallScreen = true;
        }
    }
}
</script>
<style lang="scss">
    .router-link-active{
        font-weight: 900;
    }
</style>
