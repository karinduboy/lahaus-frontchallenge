<template>
  <section class="container grid">
    <h1>Listas de Favoritos</h1>
    <RsList
      v-for="list in rs_lists"
      :id="list.id"
      :key="list.id"
      :name="list.attributes.name"
      :qty="list.attributes.real_estate_ids.length"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      rs_lists: [],
      rs_items: [],
    }
  },
  async created() {
    try {
      const res = await this.$axios.$get(
        'https://lh-real-estates-challenge-api.herokuapp.com/real-estates'
      )
      this.rs_lists = res.data
      this.rs_items = res.included
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
</script>