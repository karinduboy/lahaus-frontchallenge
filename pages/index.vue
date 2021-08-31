<template>
  <section>
    <Nuxt-Link
      to="/rslists"
      class="
        flex flex-col
        center
        justify-center
        align-middle
        items-center
        mx-0
        mt-40
        h-full
      "
    >
      <LaHausLogo class="w-1/4 h-auto mx-0 self-center" />
      <h2 class="mx-0 p-6 text-center">LaHause Challenge</h2>
      <p class="text-lh-green-gray text-center">By Karin Duboy</p>
    </Nuxt-Link>
  </section>
</template>

<script>
export default {
  layout(context) {
    return 'app'
  },
  head() {
    return {
      title: 'LaHause | Listas de Inmuebles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Los mejores inmuebles agrupados por listas',
        },
      ],
      htmlAttrs: {
        lang: 'es',
      },
    }
  },
}
</script>