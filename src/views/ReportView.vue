<script setup>
</script>
<template>
    <div >
        <DoctorComponent
            v-bind:image="items.doctor"
            v-bind:name="items.doctor"
            v-bind:speciality="items.octor"
            v-bind:education="items.doctor"
        />
        <div v-for="item in items['1']">
            <FileView
                v-bind:title="item.title"
                v-bind:text="item.text"
                v-bind:date="item.date"
                v-bind:img_urls="item.img_urls"
            />
        </div>
        <div style="height: fit-content;" class="low-btn">
            <a href="/search-doctor">
                <p class="low-p">
                    Записаться на прием
                </p>
            </a>
        </div>
    </div>
</template>

<style>

.low-p{
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    word-wrap: break-word;
    margin: 0 !important;
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
}</style>
<script>
import FileView from './FileView.vue';
import DoctorComponent from './DoctorComponent.vue';

export default {
    components: {
        FileView,
        DoctorComponent
    },
    data() {
        return {
            items: {"1": [
                {
                    "title": "Комментарий врача",
                    "text": "Заключение: Результаты ЭКГ свидетельствуют о нормальной электрической активности и функции сердца. Дополнительные обследования могут потребоваться только при наличии клинических симптомов или рисках для сердечных заболеваний.",
                    "date": "27 апр.",
                },
                {
                    "title": "Вложенные файлы",
                    "img_urls": [
                        "https://img.freepik.com/premium-photo/cardiogram-on-a-sheet-of-paper-close-up-texture-of-pulsed-waves_120739-1237.jpg",
                        "https://img.freepik.com/premium-photo/cardiogram-on-a-sheet-of-paper-close-up-texture-of-pulsed-waves_120739-1237.jpg",
                        "https://img.freepik.com/premium-photo/cardiogram-on-a-sheet-of-paper-close-up-texture-of-pulsed-waves_120739-1237.jpg"

                    ]
                }
                
            ],
            doctor: "Жанболат"
        }
    }
}
}
    </script>