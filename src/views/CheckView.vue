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
    <div style="border-bottom: 1px solid black;">
        <a @click="goBack">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>

         </a>


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