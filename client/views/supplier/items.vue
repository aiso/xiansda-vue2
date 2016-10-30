<template>
  <div class='page-wrapper'>
	<c-background v-if="items.length==0" title="还没有产品？">
  		<div class="p20">
  			<c-button class="primary" @click="newItem=1">添加产品</c-button>	
  		</div>
	</c-background>
  </div>
</template>

<script>
import {CPane, CBackground, CButton} from '../../components/base'


export default {
  data(){
  	return {
  	  items: []
  	}
  },
  components: {
  	CPane,
  	CBackground,
  	CButton
  }
}
</script>