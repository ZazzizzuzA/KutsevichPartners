<template>
    <div class="block">
        <div class="block__content">
            <router-link class="block__content_post" v-for="(post, index) in posts[language.numOfLang]" :key="post.id" v-bind:style="{ backgroundImage: 'url(' + post.image + ')'}" :to="{ name: 'project', params: { id: index } }">
                <div class="block__content_post-background">
                    <span>
                        <strong>{{post.title}},</strong> {{post.year}}<br>
                        {{post.country}}
                    </span>
                </div>
            </router-link>
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
