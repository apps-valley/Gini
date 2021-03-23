<template>
  <div class="services-card">
    <div class="services-card-wrapper">
      <div>
        <b-img :src="cardData.imgUrl" />
        <h4>{{ cardData.title }}</h4>
        <p class="mt-3">
          {{ cardData.description }}
        </p>
      </div>
      <a v-smooth-scroll="{duration: 2000, updateHistory: false}" :href="cardData.id">Learn more
        <!-- <span class="arrow-icon"></span> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard',
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">

</style>
