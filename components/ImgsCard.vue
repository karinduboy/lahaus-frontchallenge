<template>
<<<<<<< HEAD
  <div class="relative w-full h-52 rounded-lg overflow-hidden">
    <EmptyListImg v-if="qty === 0" class="rounded-lg object-fill" />
=======
  <div class="relative w-full h-52 rounded-xl overflow-hidden">
    <EmptyListImg v-if="qty === 0" class="rounded-xl object-fill" />
>>>>>>> 6b90439150f6ac1d1b2d556e0a048faee3aa8a48
    <div
      v-if="qty >= 1"
      class="
        absolute
        z-30
        h-full
        border-2 border-white
<<<<<<< HEAD
        rounded-lg
=======
        rounded-xl
>>>>>>> 6b90439150f6ac1d1b2d556e0a048faee3aa8a48
        overflow-hidden
      "
      :class="iDiv1Classes"
    >
      <img
        src="~/assets/img/img1.jpeg"
        alt=""
        class="object-cover object-right-top w-full h-full"
      />
    </div>
    <div
      v-if="qty >= 2"
      class="
        absolute
        z-20
        w-1/2
        h-full
        top-0
        border-2 border-white
<<<<<<< HEAD
        rounded-lg
=======
        rounded-xl
>>>>>>> 6b90439150f6ac1d1b2d556e0a048faee3aa8a48
        overflow-hidden
      "
      :class="iDiv2Classes"
    >
      <img
        src="~/assets/img/img2.jpeg"
        alt=""
        class="object-cover object-right-top w-auto h-full"
      />
    </div>
    <div
      v-if="qty >= 3"
      class="
        absolute
        z-10
        w-1/2
        h-full
        top-0
        left-1/2
        border-2 border-white
<<<<<<< HEAD
        rounded-lg
=======
        rounded-xl
>>>>>>> 6b90439150f6ac1d1b2d556e0a048faee3aa8a48
        overflow-hidden
      "
      :class="iDiv3Classes"
    >
      <img
        src="~/assets/img/img3.jpeg"
        alt=""
        class="object-cover object-right-top w-auto h-full"
        :class="img3Classes"
      />
      <span
        v-if="qty > 3"
        class="
          absolute
          top-1/2
          right-1/6
          transform
          -translate-x-400 -translate-y-1/2
          text-white
          font-silka font-medium
          text-lg
<<<<<<< HEAD
=======
          cursor-pointer
          hover:p-1
          hover:bg-green-100
          hover:text-lh-primary
          hover:rounded-md
>>>>>>> 6b90439150f6ac1d1b2d556e0a048faee3aa8a48
        "
        >+{{ qty - 3 }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImgsCard',
  props: ['qty'],
  computed: {
    iDiv1Classes() {
      const c = this.qty === 1 ? 'w-full' : 'w-5/9'
      return c
    },
    iDiv2Classes() {
      const c = this.qty === 2 ? 'right-0' : 'right-1/5'
      return c
    },
    iDiv3Classes() {
      const c = this.qty === 3 ? 'bg-transparent' : 'bg-lh-jungle-green'
      return c
    },
    img3Classes() {
      const c = this.qty > 3 ? 'opacity-20' : 'opacity-100'
      return c
    },
  },
}
</script>
