<script setup>
    const data = {
        "brain": "врача невролога",
        "bud": "врача нефролога",
        "colon": "врача проктолога",
        "gallbladder": "врача гастроэнтеролог-гепатолога",
        "heart": "врача кардиолога",
        "liver": "врача гепатолога",
        "lung": "врача пульмонолога",
        "stomach": "врачагастроэнтеролог",
    };
</script>

<template>
    <div class="main">
        <div>

                <div v-for="item in items[$route.params.id]">
                    <ButtonComponent
                        v-bind:title="item.title"
                        v-bind:btnText="item.btnText"
                        v-bind:dateTime="item.dateTime"
                        v-bind:status="item.status"
                        v-bind:btnColor="item.btnColor"
                        v-bind:btnLink="item.btnLink"
                    />
                </div>

        </div>
        <div>

        <div style="height: fit-content;" class="low-btn">
            <a href="/report/1">
                <p class="low-p">
                    История посещения у {{ data[$route.params.id]}}
                </p>
            </a>
        </div>
    </div>

    </div>


</template>
  
<style>

.main{
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.low-p{
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    word-wrap: break-word;
}
.low-btn {
    width: 100%;

    padding-left: 16px;
    padding-right: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    background: #2AA65C;
    box-shadow: 0px 0px 0px rgba(42, 166, 92, 0.40);
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
}
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
            items: 
                {
                    "heart":[
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
                            "btnLink": "/search-doctor"
                        },
                        {
                            "title": "Прием у кардиолога",
                            "btnText": "Подробнее",
                            "dateTime": "04 мая 2023",
                            "status": "Запись",
                            "btnColor": "#FF9901",
                            "btnLink": ""
                        },
                    ]
                }
            
        }
    }
}
</script>
