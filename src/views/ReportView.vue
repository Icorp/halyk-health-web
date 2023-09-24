<script setup>
</script>
<template>
    <div >
        <div v-for="item in items['1']">
            <FileView
                v-bind:title="item.title"
                v-bind:text="item.text"
                v-bind:date="item.date"
                v-bind:img_urls="item.img_urls"
            />
        </div>
    </div>
</template>

<script>
import FileView from './FileView.vue';

export default {
    components: {
        FileView
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
                
            ]
        }
    }
}
}
    </script>