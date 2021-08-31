<template>
  <div class="items-stretch min-w-full h-auto">
    <ImgsCard :qty="qty" />
    <ListInfo :qty="qty" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'RsList',
  props: ['name', 'id', 'qty'],
}
</script>