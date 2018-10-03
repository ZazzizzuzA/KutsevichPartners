<template>
            <nav class="block-nav__nav">

                <router-link class="block-nav__nav_link" to="/about"><span>О нас</span></router-link>
                <router-link class="block-nav__nav_link" to="/projects"><span>Проекты</span></router-link>
                <router-link class="block-nav__nav_link" to="/team"><span>Команда</span></router-link>
                <router-link class="block-nav__nav_link" to="/contacts"><span>Контакты</span></router-link>

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
