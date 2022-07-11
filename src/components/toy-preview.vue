<template>
  <li class="toy-preview">
    <custom-card>
      <template #header>
        <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
        <p><span class="fw-bold">Created at:</span> {{ toy.createdAt }}</p>
        <p><span class="fw-bold">Price:</span> {{ $filters.currencyUSD(toy.price) }}</p>
      </template>

      <template #footer>
        <div class="btn-group">
          <button @click="goToEdit" class="btn btn-primary">edit</button>
          <button @click="goToDetail" class="btn btn-info">details</button>
          <button @click="removeToy(toy.id)" class="btn btn-danger">delete</button>
        </div>
      </template>
    </custom-card>
  </li>
</template>

<script>
import customCard from './custom-card.vue'

export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  components: {
    customCard,
  },
  methods: {
    // goToDetail() {
    //   this.$router.push(`/car/${this.car.id}`)
    // },
    // goToEdit() {
    //   this.$router.push(`/car/edit/${this.car.id}`)
    // },
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
