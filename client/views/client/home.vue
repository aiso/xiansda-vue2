<template>
  <c-page>
    <c-pane>
      <div class="flex-row border-bottom list-cell" v-if="station">
        <div>
          <c-avatar :src="station.img" size=40></c-avatar>
        </div>
        <div class="flex-auto plr20">
          <h3 class="text-ls">{{station.name}}</h3>
          <h5 class="c-text-light">服务站</h5>
        </div>
      </div>
      <div v-if="items">
        <c-cell class="padding-tb" v-for="item in items" @click="showItem(item.agent)">
          <c-xsd-item :item='item'>
            <div slot="detail" class="mt5">
              <c-xsd-profile :uid="item.user"></c-xsd-profile>
            </div>
            <div slot="right" class="text-center">
              <c-item-agent :item="item" :agent="item.agent"></c-item-agent>
            </div>
          </c-xsd-item> 
        </c-cell>
      </div>

    </c-pane>
  </c-page>
</template>

<script>
import { CPage, CPane, CAvatar, CCell } from '../../components/base'
import { CXsdItem, CXsdProfile } from '../../components/xsd'
import { CItemAgent } from '../../components/service'

export default {
  data(){
    return{
      items:[],
      station:null,
    }
  },
  created(){
    this.xsd.api.getCache('client/items').then(data=>{
      this.initData(data)
    })	  
    /*
	  if(!!this.profile.station){
	    this.xsd.api.getCache('client/items').then(data=>{
	      this.initData(data)
	    })	      
	  }
	   else
		    transition.redirect('/client/station')
		*/
  },
  methods: {
    initData(data){
      this.items = data.items
      this.station = data.station
    }
  },
  components: {
  	CPage,
  	CPane,
  	CAvatar,
  	CCell,
  	CXsdItem,
  	CXsdProfile,
  	CItemAgent
  }
}
</script>
