<template>
  <h1>Acá irán los recursos que tiene cada usuario</h1>
</template>

<script>
export default {
  layout(context) {
    return 'app'
  },
  head() {
    return {
      title: 'LaHause | Recursos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Los mejores recursos para encontrar tu próxima propiedad inmobiliaria',
        },
      ],
      htmlAttrs: {
        lang: 'es',
      },
    }
  },
}
</script>