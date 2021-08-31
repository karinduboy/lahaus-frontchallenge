<template>
  <section class="container w-full mx-auto flex flex-col justify-center">
    <h1 class="p-12 md:text-3xl mx-auto">Listas de Favoritos</h1>
    <div
      class="
        mx-auto
        grid grid-flow-row
        sm:grid-cols-3
        auto-cols-fr
        justify-center
        content-center
        gap-8
      "
    >
      <RsList
        v-for="list in rs_lists"
        :id="list.id"
        :key="list.id"
        :name="list.attributes.name"
        :qty="list.attributes.real_estate_ids.length"
      />
      <NewList />
    </div>
  </section>
</template>

<script>
export default {
  layout: 'app',
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