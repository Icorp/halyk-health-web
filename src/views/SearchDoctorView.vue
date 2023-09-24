<template>
    <input v-model="searchQuery" placeholder="Поиск доктора..." />
    <div v-for="doctor in doctors">
        <DoctorComponent
        v-bind:image="doctor.image" 
        v-bind:name="doctor.name" 
        v-bind:speciality="doctor.speciality"
        v-bind:education="doctor.education" />
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
import DoctorComponent from './DoctorComponent.vue';


export default {
    components: {
        DoctorComponent
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        filterDoctors: function (doctors) {
                    return doctors.filter(function (doctor) {
                        let regex = new RegExp('(' + app.searchQuery + ')', 'i');
                        return doctor.name.match(regex);
                    })
                }
    },
    data() {
        return {

            doctors: [
                {
                    "image": "/src/assets/doctor.png",
                    "name": "Жанболат",
                    "speciality": "Терапевт",
                    "education": "Универ 1",
                    "time": "16:05",
                    "date": "24 апреля 2023",
                },
                {
                    "image": "/src/assets/doctor.png",
                    "name": "Казбек",
                    "speciality": "Хирург",
                    "education": "Универ 2",
                    "time": "16:05",
                    "date": "24 апреля 2023",
                },
                {
                    "image": "/src/assets/doctor.png",
                    "name": "Аскар",
                    "speciality": "Стомотолог",
                    "education": "Универ 3",
                    "time": "16:05",
                    "date": "24 апреля 2023",
                },
                {
                    "image": "/src/assets/doctor.png",
                    "name": "Алдияр",
                    "education": "",
                    "speciality": "Окулист",
                    "time": "16:05",
                    "date": "24 апреля 2023",
                },
            ]
        }
    }
}

</script>
