<template>
  <div class='page-wrapper'>
    <c-background :state="bgState" title="还没有产品？">
  		<div class="p20">
  			<c-button class="primary" @click="newItem=1">添加产品</c-button>	
  		</div>
    </c-background>
    <div class="p10 bg-white">
      <c-cell v-for='item in items'>
        <router-link :to="{ name: 'supplier/item', params: { id: item.id }}">
          <c-xsd-item :item='item'></c-xsd-item>
        </router-link>
      </c-cell>
    </div>
    <c-xsd-toolbar>
      <router-link class="btn" to="/supplier/item/new">
        <c-icon name='material-add'></c-icon>
      </router-link>
    </c-xsd-toolbar>
  </div>
</template>

<script>
import {CPane, CCell, CIcon, CBackground, CButton, CLoading} from '../../components/base'
import { CXsdItem, CXsdToolbar } from '../../components/xsd'
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
    CIcon,
  	CBackground,
  	CButton,
    CLoading,
    CXsdItem,
    CXsdToolbar
  }
}
</script>