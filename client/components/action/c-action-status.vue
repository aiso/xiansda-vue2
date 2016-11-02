<template>
  <div :class="['text-center nowrap', stat]">
    <c-icon :name="cfg.icon"></c-icon>
    <h5>{{cfg.name}}</h5>
  </div>
</template>

<script>
import { CIcon } from '../base'

export default {
  props: {
    action: {
      type: Object
    },
  },
  data(){
    return{
      cfg:this.xsd.action.config(this.action.action),
      stat:this.action.stat?'c-green':'c-orange'
    }
  },
  components:{
  	CIcon,
  }
}

</script>