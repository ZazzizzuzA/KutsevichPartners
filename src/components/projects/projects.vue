<template>
    <div class="block">
        <div class="block__content">
            <router-link class="block__content_post" v-for="(post, index) in even(posts[language.numOfLang])" :key="post.id" v-bind:style="{ backgroundImage: 'url(' + post.image[0] + ')'}" :to="{ name: 'project', params: { id: index } }">
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
    methods: {
        even: function(arr) {
        // Set slice() to avoid to generate an infinite loop!
        return arr.slice().sort(function(a, b) {
            return a.id - b.id;
        });
        }
    }

}
</script>
