<template>
    <div class="block">
        <div class="block__content">
            <router-link class="block__content_post" v-for="post in even(posts[language.numOfLang])" :key="post.id" v-bind:style="{ backgroundImage: `url(${post.image[0]})`}" :to="{ name: 'project', params: { id: post.pathnameId, post } }">
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
    },
    created: function() {
            this.posts[this.language.numOfLang].forEach( post => {
                const arrTemp = post.image.map( (path, i) => {
                    if (path.match('.jpg') !== null) {
                        return path;
                    }
                    const lengthName = (i + 1).toString().length;
                    switch(lengthName) {
                        case 1: return path = `${path}00${i + 1}.jpg`;
                        case 2: return path = `${path}0${i + 1}.jpg`;
                    }
                })
                post.image = arrTemp;
            })           
    },
}
</script>
