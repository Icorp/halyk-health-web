<script setup>
    import { ref } from 'vue'
    const greeting = ref('Hello World!')
    console.log(greeting);

const data = {
    "brain": "Мозг",
    "bud": "Почки",
    "colon": "Прямая кишка",
    "fat": "Жир",
    "heart": "Сердце",
    "liver": "Печень",
    "lung": "Легкие",
    "stomach": "Желудок"
};
</script>   

<template>
    <div style="height: 100px; border-bottom: 1px solid black; width: 100vw;">
        <a @click="goBack">
            <v-icon></v-icon>       </a>

            <i class="fa fa-arrow-left" aria-hidden="true"></i>

        <div>User {{ data[$route.params.id] }}</div>
        <p>
            a
        </p>
    </div>
    <p class="greeting">cxcx</p>
</template>
  
<style>
.greeting {
    color: red;
    font-weight: bold;
  }
  </style>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>