<template>
    <div class="block">
        <div class="block__content">
            <div class="block__content_post" v-for="(post, index) in posts[language.numOfLang]" :key="post.id">
                <router-link :to="{ name: 'project', params: { id: index } }" class="block__content_post-background" v-bind:style="{ backgroundImage: 'url(' + post.image + ')'}">
                    <span>
                        <strong>{{post.title}}</strong><br>
                        {{post.country}}
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import posts from './posts';
import language from "../../settings/language";

export default {
    name: "projects",
    data() {
        return {
            posts,
            language
        }
    },

}
</script>
