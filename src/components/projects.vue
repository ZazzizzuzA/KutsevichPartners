<template>
    <div class="block">
        <div class="block__content">
            <div class="block__content_post" v-for="post in posts.ru" :key="post.id">
                <img class="background-post" :src="post.image">
                <span>
                    <strong>{{post.title}}</strong><br>
                    {{post.country}}
                </span>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    name: "projects",
    data() {
        return {
            posts: {
                ru: 
                [
                    {
                        title: "Проект 1",
                        image: "../assets/images/projects/project_1.jpg",
                        country: "Украина, Киев",
                        id: 1
                    },
                                    {
                        title: "Проект 2",
                        image: "../assets/images/projects/project_2.jpg",
                        country: "США, Нью-Йорк",
                        id: 2
                    },
                                    {
                        title: "Проект 3",
                        image: "../assets/images/projects/project_3.jpg",
                        country: "Украина, Львов",
                        id: 3
                    }
                ],
                en:
                [
                    {
                        title: "",
                        image: "",
                        country: "",
                        id: 1
                    },
                                    {
                        title: "",
                        image: "",
                        country: "",
                        id: 2
                    },
                                    {
                        title: "",
                        image: "",
                        country: "",
                        id: 3
                    }
                ]
            }
        }
    }
}
</script>
