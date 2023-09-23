<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'font-awesome/css/font-awesome.css';
</script>

<template>
  <header>
    <div class="wrapper" v-if="!this.$route.params.id">
      <nav>
        <RouterLink to="/check-list">Check</RouterLink>
      </nav>
    </div>
  </header>
  <SwipeBottomNavigation :options="options" v-model="selected" />
  <RouterView />
</template>

<script>
  import { SwipeBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { SwipeBottomNavigation },
    data: () => ({
    selected: 1,
    options: [
      { id: 1, icon: 'fa fa-balance-scale ', title: 'Home' },
      { id: 2, icon: 'fa fa-bug', title: 'Search' },
      { id: 3, icon: 'fa fa-plus-circle', title: 'Setting' },
    ]
    }),
  };
</script>

<style scoped>
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
