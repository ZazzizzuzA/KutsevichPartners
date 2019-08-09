<template>
    <div class="block">
        <div class="block__content">
            <router-link class="block__content_post" v-for="(post, index) in even(posts[language.numOfLang])" :key="post.id" v-if="post.type == $route.params.category" :style="{ backgroundImage: 'url(.' + post.image[0] + ')' }" :to="{ name: 'project', params: { id: index } }">
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
import language from "../settings/language";
import posts from "./projects/posts";

export default {
  data() {
    return {
      language,
      posts,
    };
  },
  methods: {
    even: function(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return a.typeId - b.typeId;
      });
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss">

</style>


