<template>
    <icon v-if="name" class="c-icon" :name="name"></icon>
</template>


<script>
export default {
  props: {
    name: String
  },
  components: {
    "icon": require("vue-icons")
  }
}
</script>

<style>
.c-icon {
  display: inline-block;
  font-size :20px;

  &.block{
    display: block;
    width: var(--blockSize);
    height: var(--blockSize);
    padding: 0;
    line-height: 54px;
    font-size:24px;
    text-align: center;
  }

  &.small{
    font-size:14px;
  }

  &.big{
    font-size:60px;
  }

  &.huge{
    font-size:80px;
  }
}
</style>