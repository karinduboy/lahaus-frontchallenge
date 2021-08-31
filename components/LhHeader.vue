<template>
  <nav
    class="
      sticky
      p-6
      bg-white
      flex flex-row
      border-b border-gray-200
      align-middle
      place-items-center
      sm:h-auto
      sm:font-lg
    "
  >
    <MobileMenu class="inline-block md:hidden" />
    <LaHausLogo class="flex-none mr-2" />
    <LhName class="flex-none" />
    <ul class="hidden sm:flex-grow sm:flex sm:flex-row-reverse gap-10 mx-10">
      <li class="hover:text-lh-primary hover:bg-lh-green-gray">Antioquia</li>
      <li class="hover:text-lh-primary hover:bg-lh-green-gray">Cundinamarca</li>
    </ul>
    <Nuxt-Link
      to="/resources"
      class="
        hidden
        sm:inline-block
        sm:flex-none
        sm:mx-2
        hover:text-lh-primary
        hover:bg-lh-green-gray
      "
      >Recursos</Nuxt-Link
    >
    <UserProfile class="hidden sm:inline-block sm:flex-none sm:mx-2" />
  </nav>
</template>
<script>
export default {
  name: 'LhHeader',
}
</script>