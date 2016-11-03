<template>
  <c-page>
    <div v-if="trans">
      <div class="p20">
        <c-xsd-item :item='trans.item'>
          <h5 slot="detail" class="c-text-light">{{trans.ctime|timeago}}</h5>
          <div slot="right" class="pl10">
            <c-icon name="material-chevron_right"></c-icon>
          </div>
        </c-xsd-item>
        <div class="divider dashed"></div>
        <c-label-text label="服务单号：">
          <h4 class="font-montserrat">{{trans.id}}</h4>
        </c-label-text>
        <c-label-text label="下单时间：">
          <h4 class="font-montserrat">{{trans.ctime}}</h4>
        </c-label-text>
        <c-label-text label="交易金额：">
          <h4>
          <span class="font-montserrat">{{parseFloat(trans.price)+parseFloat(trans.fee)|currency('')}} x {{trans.quantity}} = </span><c-price :amount="trans.cost" class="ib"></c-price>
          </h4>
        </c-label-text>
      </div>
      <c-action v-for="action in trans.works" :action="action"></c-action>
    </div>
    
    <c-xsd-toolbar>
	  <a class="btn" @click="removeTrans" v-if="clientOpts">
        <c-icon name='material-delete_forever'></c-icon>
      </a>
	  <a class="btn" @click="postMessage">
        <c-icon name='material-textsms'></c-icon>
      </a>
	  <a class="btn" @click="reload">
        <c-icon name='material-refresh'></c-icon>
      </a>
    </c-xsd-toolbar>

  </c-page>
</template>

<script>
import { CPage, CLabelText, CPrice, CIcon } from '../../components/base'
import { CXsdItem, CXsdToolbar } from '../../components/xsd'
import { CAction } from '../../components/action'

export default {
  data(){
    return {
      trans:null,
      agent:null,
      service:this.xsd.service.get(101)
    }
  },
  activated(){
  	this.loadTrans()
  },
  computed: {
  	clientOpts(){
  	  const user = this.$store.getters.user
  	  return (!!user && user.role==this.xsd.static.role.client && this.trans && this.trans.stage==0)
  	}

  },
  methods: {
  	loadTrans(){
	  this.xsd.api.getCache('trans/'+this.$route.params.id+'?with=works').then(data=>{
	  	this.trans = data.trans
	  })
  	},
    postMessage(){
      this.$textbox.open('提点要求：').then(message=>{
	      this.xsd.api.post('trans/'+this.trans.id+'/message', { message }).then(data=>{
	        this.trans.works.push(data.action)
	      })
      })
    },
    reload(){
    	this.xsd.api.dirty('trans/'+this.$route.params.id+'?with=works')
		this.loadTrans()
    },
  },
  components: {
  	CPage,
  	CLabelText,
  	CPrice,
  	CIcon,
  	CAction,
  	CXsdItem,
  	CXsdToolbar
  }
}
</script>
