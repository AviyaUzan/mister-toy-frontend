
<template>
  <section>
    <app-header></app-header>
    <RouterView />
  </section>
</template>

    <script>
    import appHeader from './components/app-header.vue'
    export default {
    name: 'app',
    created() {
      this.$store.dispatch({ type: 'loadToys' })
    },
    methods: {
    clicked() {
     
    },
    },
    components: {
    appHeader,
  },
}
    // import { RouterLink, RouterView } from 'vue-router'
    </script>
