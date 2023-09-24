<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'font-awesome/css/font-awesome.css';
const data = {
    "brain": "Мозг",
    "bud": "Почки",
    "colon": "Прямая кишка",
    "gallbladder": "Желчный пузырь",
    "heart": "Сердце",
    "liver": "Печень",
    "lung": "Легкие",
    "stomach": "Желудок",
    "health": "Halyk Health",
    "1":"Заключение врача"
};
</script>

<template>
  <div class="nav sticky">
          <a @click="goBack" v-if="$route.params.id">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </a>
          <div v-else></div>

        <div>{{ data[$route.params.id] ? data[$route.params.id] : data["health"]  }}</div>
        <div>

        </div>
    </div>
    <div class="content">
    <RouterView />
  </div>
  <SwipeBottomNavigation :options="options" v-model="selected" swiperColor="#00BD7E" backgroundColor="#fff"
    iconColor="#00BD7E">
    <template #icon="{ props }" #title="props">
      <i :class="props.icon"></i>
    </template>
    <template #title="{ props }" #icon="props">
      <RouterLink to="/">
        <b>{{ props.title }}</b>
      </RouterLink>
    </template>
  </SwipeBottomNavigation>

</template>

<script>
  import { SwipeBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { SwipeBottomNavigation },
    data: () => ({
        selected: 0,
      options: [
        { id: 0, icon: 'fa fa-heart-pulse', title: 'Home', path: {name: "home",}},
        { id: 1, icon: 'fa fa-address-card ', title: 'Component', path: {name: "component",}},
      ]
      }),
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
  };
</script>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.content{
    padding: 0 2rem 2rem 2rem;
}
.sticky + .content {
  padding-top: 60px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 1px 10px 2px rgba(34, 60, 80, 0.2);

}

.nav a {
    color: #000;
    text-decoration: none;
    font-size: 20px;

}
</style>
