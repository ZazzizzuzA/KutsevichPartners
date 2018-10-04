<template>
    <nav class="block-nav__full-head">
        <router-link id="logoKutsevich" class="block-nav__full-head_logotype" to="/"><img src="http://www.kutsevych.com/templates/kutsevich_main/images/logo.png" alt="logotype"></router-link>
        <div class="block-nav__full-head_navigation">
            <router-link class="block-nav__full-head_navigation-link" to="/about"><span>О нас</span></router-link>
            <router-link class="block-nav__full-head_navigation-link" to="/projects"><span>Проекты</span></router-link>
            <router-link class="block-nav__full-head_navigation-link" to="/team"><span>Команда</span></router-link>
            <router-link class="block-nav__full-head_navigation-link" to="/contacts"><span>Контакты</span></router-link>
        </div>
    </nav>
</template>


<script>
export default {
    name: "navigation",
    data: function () {
        return {

        }
    }
}
</script>
