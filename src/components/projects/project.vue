<template>
    <div class="post">
        <div class="post__project-foto" :style="{ backgroundImage: 'url(' + project.image + ')'}">
            <span class="post__project-foto_title">{{project.title}}</span>
        </div>
        <div class="post__project-info"></div>
    </div>
</template>
<script>
import posts from './posts';
import language from "../../settings/language";

    export default {
        data(){
            return {
                posts,
                language,
                project: null
                
            }
        },
        created: function() {

            let projectId = this.$route.params.id;

            this.project = this.posts[this.language.numOfLang][projectId];
            this.project.image = "." + this.project.image;

        }
    }
</script>
