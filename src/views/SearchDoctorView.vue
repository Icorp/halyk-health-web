<template>
    <div v-for="doctor in doctors">
        <DoctorComponent
            v-bind:image="doctor.image"
            v-bind:name="doctor.name"
            v-bind:speciality="doctor.speciality"
            v-bind:education="doctor.education"
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
import DoctorComponent from './DoctorComponent.vue';


export default {
    components: {
        DoctorComponent
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
                    "image": "/src/assets/doctor.png",
                    "name": "PDF",
                    "speciality": "27 апр. 2023",
                    "education": "Пройдено",
                },
                {
                    "image": "/src/assets/doctor.png",
                    "name": "PDF",
                    "speciality": "27 апр. 2023",
                    "education": "Пройдено",
                },
                {
                    "image": "/src/assets/doctor.png",
                    "name": "PDF",
                    "speciality": "27 апр. 2023",
                    "education": "Пройдено",
                },
            ]
        }
    }
}

function filteredList() {
  return doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(input.value.toLowerCase())
  );
}

</script>
