<template>
    <div class="block">
        <div class="block__content">
            <router-link class="block__content_post" 
            v-for="post in ExteriorsPosts" 
            :key="post.id" 
            :style="{ backgroundImage: 'url(.' + post.image[0] + ')' }" 
            :to="{ name: 'project', params: { id: post.pathnameId, post } }">
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
  ExteriorsPosts: [],
  data() {
    return {
      language,
      posts,
      ExteriorsPosts: this.ExteriorsPosts
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
  created: function() {
    this.ExteriorsPosts = this.posts[this.language.numOfLang].filter(el => el.type === 'exterior')
      .sort((a, b) => {
        if (a.typeId < b.typeId) return -1;
        if (a.typeId > b.typeId) return 1;
        return 0
      });
    this.ExteriorsPosts.forEach( post => {
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
<style lang="scss">

</style>


