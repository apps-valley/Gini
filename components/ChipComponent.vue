<template>
  <div class="chip-content">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chip-content {
  display: inline;
  border: 1px solid #dde1ea;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 8px 16px;
  span {
    font-size: 1em;
    color: #808b95;
    text-transform: uppercase;
  }
}
</style>
