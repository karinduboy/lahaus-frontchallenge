<template>
  <div>
    <ImgCard />
    <ListInfo />
  </div>
</template>

<script>
import ListInfo from './ListInfo.vue'
import ImgsCard from './ImgsCard.vue'
export default {
  name: 'RsList',
  components: [ImgsCard, ListInfo],
  props: ['name', 'id', 'qty'],
}
</script>
ListInfo