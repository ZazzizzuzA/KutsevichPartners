<template>
    <footer class="block-footer">
        <div class="block-footer__row">
            <div class="block-footer__row_follow">
                <h4>FOLLOW US</h4>
                    <a href="https://share.yandex.net/go.xml?service=facebook&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="facebook" target="_blank" title="Facebook">
                        <img :src="pathToFBLogo" alt="fb">
                    </a>
                    <!-- <a href="https://share.yandex.net/go.xml?service=vkontakte&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="vk" target="_blank" title="ВКонтакте">
                        <img src="../../assets/images/icons/vk.png" alt="vk">
                    </a> -->
                    <!-- <a href="https://share.yandex.net/go.xml?service=twitter&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="twitter" target="_blank" title="Twitter">
                        <img src="../../assets/images/icons/twitter.png" alt="twitter">
                    </a> -->
                    <!-- <a href="https://share.yandex.net/go.xml?service=odnoklassniki&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="odnoklassniki" target="_blank" title="Одноклассники">
                        <img src="../../assets/images/icons/odnoklassniki-logo.png" alt="odnoklassniki">
                    </a> -->
                    <!-- <a href="https://share.yandex.net/go.xml?service=facebook&url=http%3A%2F%2Fwww.kutsevych.com%2F&title=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%9A%D1%83%D1%86%D0%B5%D0%B2%D0%B8%D1%87%20%2B%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B%20-%20%D0%93%D0%9B%D0%90%D0%92%D0%9D%D0%90%D0%AF" class="google-plus" target="_blank" title="G+">
                        <img src="../../assets/images/icons/google-plus.png" alt="G+">
                    </a> -->
            </div>
            <div class="block-footer__row_adress">
                <span class="title">{{contacts[language.numOfLang].title}}</span><br><span>{{contacts[language.numOfLang].adress}}</span><br>
                <span class="title">Email:</span><br><span><a :href="'mailto:'+contacts[language.numOfLang].email" target="_blank">{{contacts[language.numOfLang].email}}</a></span>
            </div>
        </div>
                <div class="scroll-button-to-top" id="ScrollTop"><img :src="pathToArrow" alt="To-the-top"></div>
    </footer>
</template>
<script>
import language from "../settings/language";
export default {
    name: "downBlock",
    data() {
        const pathToFBLogo = '../../assets/images/icons/facebook.png';
        const pathToArrow = '../../assets/images/icons/arrow-up.png';
        return {
            pathToArrow,
            pathToFBLogo,
            language,
            contacts: [
                {
                    title: "Адрес:",
                    adress: "г.Киев, ул. Васильковская, 13, офис 32",
                    email: "bkutsevych@yahoo.com"
                },
                {
                    title: "Adress:",
                    adress: "Kyiv, st. Vasilkovskaya, 13, office 32",
                    email: "bkutsevych@yahoo.com"
                }
            ],
        }
    },
    mounted() {
        setTimeout( () => {

        }, 2000)
    }

}
</script>
