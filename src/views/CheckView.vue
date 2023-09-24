<script setup>

</script>   

<template>
    <div v-for="item in items">

        <ButtonComponent 
            v-bind:title="item.title"
            v-bind:btnText="item.btnText"
            v-bind:dateTime="item.dateTime"
            v-bind:status="item.status"
            v-bind:btnColor="item.btnColor"
            v-bind:btnLink="item.btnLink"
        />


    </div>
</template>
  
<style>
p {
    margin: 0;
    padding: 0;
}
</style>

<script>

import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';


export default {
    components: {
        ButtonComponent
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    },
    data () {
        return {
            items: [
                {
                    "title": "Кардиограмма",
                    "btnText": "PDF",
                    "dateTime": "27 апр. 2023",
                    "status": "Пройдено",
                    "btnColor": "#2AA65C",
                    "btnLink": "/cardiogram"
                },
                {
                    "title": "Сдать анализы",
                    "btnText": "Вызвать",
                    "dateTime": "30 апр. 2023",
                    "status": "Доступная дата",
                    "btnColor": "#FF0101",
                    "btnLink": "/cardiogram"
                },
                {
                    "title": "Прием у кардиолога",
                    "btnText": "Подробнее",
                    "dateTime": "04 мая 2023",
                    "status": "Запись",
                    "btnColor": "#FF9901",
                    "btnLink": "/record/1"
                },
            ]
        }
    }
}
</script>
