<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ qty }} propiedades guardadas</p>
  </div>
</template>
<script>
export default {
  name: 'ListInfo',
  props: ['qty', 'name'],
}
</script>