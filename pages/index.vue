<template>
  <section class="flex flex-col center justify-center">
    <LaHausLogo class="w-1/4 h-auto" />
    <h2>LaHause Challenge</h2>
    <p class="text-lhgrengray">By Karin Duboy</p>
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