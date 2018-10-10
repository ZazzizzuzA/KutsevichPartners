<template>

    <div class="block-contacts">
        <div class="block-contacts__city">{{places[language.numOfLang].city}}</div>
        <div class="block-contacts__adress">
            <span>{{places[language.numOfLang].title}} <strong>{{places[language.numOfLang].adress}}</strong></span><br>
            <span>Email: <strong>{{places[language.numOfLang].email}}</strong></span>
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
                    title: "Адрес:",
                    city: "КИЕВ, УКРАИНА",
                    adress: "ул. Васильковская, 13, офис 32",
                    email: "bkutsevych@yahoo.com"
                },
                {
                    title: "Adress:",
                    city: "KYIV, UKRAINE",
                    adress: "st. Vasilkovskaya, 13, office 32",
                    email: "bkutsevych@yahoo.com"
                }
            ]
        }
    }
}
</script>

