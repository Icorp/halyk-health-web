<template>
    <div>
      <input v-model="searchQuery" placeholder="Поиск доктора..." />
      <div v-for="doctor in filteredDoctors" :key="doctor.name">
        <DoctorComponent
          v-bind:image="doctor.image"
          v-bind:name="doctor.name"
          v-bind:speciality="doctor.speciality"
          v-bind:education="doctor.education"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import DoctorComponent from './DoctorComponent.vue';
  
  export default {
    components: {
      DoctorComponent,
    },
    data() {
      return {
        searchQuery: '',
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
            ],
      };
    },
    computed: {
      filteredDoctors() {
        const query = this.searchQuery.toLowerCase();
        return this.doctors.filter(doctor => {
          return doctor.name.toLowerCase().includes(query);
        });
      },
    },
  };
  </script>