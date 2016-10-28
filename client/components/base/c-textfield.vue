<template>
  <div class="c-textfield">
    <input class="c-textfield-input" type="text"
      v-model="model.value"
      v-bind="attrs"
      @change="_validate"
      debounce="500">
  </div>
</template>

<script>
import mField from './m-field'

export default {
  mixins: [mField],
}
</script>

<style>

.c-textfield-input{
  @mixin w-input;
}

</style>
