<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'font-awesome/css/font-awesome.css';
</script>

<template>

  <SwipeBottomNavigation :options="options" v-model="selected" replaceRoute=True swiperColor="#00BD7E" backgroundColor="#fff"
    iconColor="#00BD7E">
    <template #title="{ props }">
      <RouterLink to="/">
        <b>{{ props.title }}</b>
      </RouterLink>
    </template>
  </SwipeBottomNavigation>
  <RouterView />
</template>

<script>
  import { SwipeBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { SwipeBottomNavigation },
    data: () => ({
        selected: 0,
      options: [
        { id: 0, icon: 'fa fa-home', title: 'Home', path: {name: "home",}},
        { id: 1, icon: 'fa fa-address-card ', title: 'Component', path: {name: "component",}},
      ]
      }),
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

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
