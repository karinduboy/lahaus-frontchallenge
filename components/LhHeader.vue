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
      <li class="p-2 hover:text-lh-primary hover:bg-green-100 hover:rounded-md">
        Antioquia
      </li>
      <li class="p-2 hover:text-lh-primary hover:bg-green-100 hover:rounded-md">
        Cundinamarca
      </li>
    </ul>
    <Nuxt-Link
      to="/"
      class="
        hidden
        sm:inline-block
        sm:flex-none
        sm:mx-2
        cursor-pointer
        p-2
        rounded-lg
        hover:bg-green-100
        hover:text-lh-primary
      "
      >Inicio</Nuxt-Link
    >
    <Nuxt-Link
      to="/resources"
      class="
        hidden
        sm:inline-block
        sm:flex-none
        sm:mx-2
        p-2
        rounded-lg
        hover:bg-green-100
        hover:text-lh-primary
      "
      >Recursos</Nuxt-Link
    >
    <Nuxt-Link
      to="/rslists"
      class="
        hidden
        sm:inline-block
        sm:flex-none
        sm:mx-2
        p-2
        rounded-lg
        hover:bg-green-100
        hover:text-lh-primary
      "
      >Mis Listas</Nuxt-Link
    >
    <UserProfile
      class="
        hidden
        sm:inline-block
        sm:flex-none
        sm:mx-2
        p-2
        rounded-lg
        hover:bg-green-100
        hover:text-lh-primary
      "
    />
  </nav>
</template>
<script>
export default {
  name: 'LhHeader',
}
</script>