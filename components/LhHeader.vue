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
<<<<<<< HEAD
=======
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
>>>>>>> 6b90439150f6ac1d1b2d556e0a048faee3aa8a48
    <Nuxt-Link
      to="/resources"
      class="
        hidden
        sm:inline-block
        sm:flex-none
        sm:mx-2
<<<<<<< HEAD
        hover:text-lh-primary
        hover:bg-lh-green-gray
      "
      >Recursos</Nuxt-Link
    >
    <UserProfile class="hidden sm:inline-block sm:flex-none sm:mx-2" />
=======
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
>>>>>>> 6b90439150f6ac1d1b2d556e0a048faee3aa8a48
  </nav>
</template>
<script>
export default {
  name: 'LhHeader',
}
</script>