<template>
  <div class="h-auto items-stretch w-full">
    <div class="w-full h-auto border border-white rounded-lg relative">
      <NewListImg />
      <AddIcon
        class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
    <h3 class="text-center font-extrabold text-lh-sky-blue">
      Crear una nueva lista
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NewList',
}
</script>