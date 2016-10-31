<template>
  <div class='page-wrapper'>
    <c-background :state="bgState" title="还没有产品？">
  		<div class="p20">
  			<c-button class="primary" @click="newItem=1">添加产品</c-button>	
  		</div>
    </c-background>
    <c-pane>
      <c-cell v-for='item in items'>
        <xsd-item :item='item' @click="onShowItem(item.id)"></xsd-item>
      </c-cell>
    </c-pane>
  </div>
</template>

<script>
import {CPane, CCell, CBackground, CButton, CLoading} from '../../components/base'
import xx from '../../components/xsd'
import { xsdItem } from '../../components/xsd'
export default {
  data(){
  	return {
      bgState:'show',
  	  items: null
  	}
  },
  created(){
    if(this.$store.getters.items == null){
      this.bgState = 'loading'
      this.xsd.sync.load('items').then(()=>{
        this.items = this.$store.getters.items
        this.bgState = 'hide'
      })
    }else{
      this.items = this.$store.getters.items
    }
  },
  components: {
  	CPane,
    CCell,
  	CBackground,
  	CButton,
    CLoading,
    xsdItem
  }
}
</script>