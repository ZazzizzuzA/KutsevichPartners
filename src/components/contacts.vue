<template>

    <div class="block-contacts">
        <div class="block-contacts__map"><span>{{places[language.numOfLang].city}}</span></div>
        <div class="block-contacts__adress">
            <span>{{places[language.numOfLang].title[1]}}</span>
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

