<template>
<section class="app-container container">
  <button @click="goToEdit" class="btn btn-secondary">Add a new toy</button>
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
</section>
</template>

<script>
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  data() {
    return {
    }
  },
  computed: {
    toys(){
      return this.$store.getters.toys
    },
  },
  created() {

  },
  methods: {
      removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
    },
    goToEdit() {
      this.$router.push(`/toy/edit`)
    },
  },
  components: {
    toyList
  },
}
</script>
