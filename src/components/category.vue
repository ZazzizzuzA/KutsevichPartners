<template>
    <div class="block-cat">
        <div class="block-cat__item" v-for="(post, index) in posts[language.numOfLang]" :key="post.id" v-if="post.type == $route.params.category" :style="{ backgroundImage: 'url(.' + post.image[3] + ')' }" :to="{ name: 'project', params: { id: index } }">
            <router-link class="block-cat__item_content" :to="{ name: 'project', params: { id: index } }">
                <span>
                    <strong>{{post.title}},</strong> {{post.year}}<br>
                            {{post.country}}
                </span>
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
  mounted() {

  }
}
</script>
<style lang="scss">

</style>


