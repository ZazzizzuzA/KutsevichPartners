<template>

    <div class="block-contacts">
        <div class="block-contacts__map">
            <!-- <span>{{places[language.numOfLang].city}}</span> -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.480396953522!2d30.498726515729416!3d50.39488407946773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8ced3ecabe5%3A0x117b3e95178fa44!2z0LLRg9C70LjRhtGPINCS0LDRgdC40LvRjNC60ZbQstGB0YzQutCwLCAxMywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1539624710171" frameborder="0" allowfullscreen></iframe>

        </div>
        <div class="block-contacts__adress">
            <span>{{places[language.numOfLang].title[1]}}</span><br>
            <span>{{places[language.numOfLang].title[0]}} <strong>{{places[language.numOfLang].adress}}</strong></span><br>
            <span>Email: <strong>{{places[language.numOfLang].email}}</strong></span><br>
            <span>{{places[language.numOfLang].phone[0]}} <strong>{{places[language.numOfLang].phone[1]}}, {{places[language.numOfLang].phone[1]}}</strong></span>
        </div>

    </div>
    
</template>
<script>
import language from "../settings/language";

export default {
    data() {
        return {
            language,
            places: [
                {
                    title: [
                        "Адрес:",
                        "Наши контакты:"
                    ],
                    city: "КИЕВ, УКРАИНА",
                    adress: "ул. Васильковская, 13, офис 32",
                    phone: [
                        "Телефоны:",
                        "+38-097-180-2429",
                        "+38-067-409-2365"
                    ],
                    email: "bkutsevych@yahoo.com"
                },
                {
                    title: [
                        "Adress:",
                        "Our contacts:"
                    ],
                    city: "KYIV, UKRAINE",
                    adress: "st. Vasilkovskaya, 13, office 32",
                    phone: [
                        "Call:",
                        "+38-097-180-2429",
                        "+38-067-409-2365"
                    ],
                    email: "bkutsevych@yahoo.com"
                }
            ]
        }
    }
}
</script>

