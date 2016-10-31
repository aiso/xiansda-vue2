<template>
  <textarea @input="handleChange" style="resize: none;" placeholder="说点什么...">{{ value }}</textarea>
</template>

<script>
import autosize from '../../utils/autosize'

export default {
  props: ['handle-change', 'value'],
  mounted(){
    autosize(this.$el)
  }
}
</script>

