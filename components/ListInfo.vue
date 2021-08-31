<template>
  <div>
    <h3 class="self-center">{{ name }}</h3>
    <p class="font-base pt-3 pb-6 cursor-pointer">
      {{ qty }} propiedades guardadas
    </p>
  </div>
</template>
<script>
export default {
  name: 'ListInfo',
  props: ['qty', 'name'],
}
</script>