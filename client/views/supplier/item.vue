<template>
  <div class='page-wrapper'>
    <c-background :state="bgState"></c-background>
    <div v-if="item">
      <div class="flex-row p10 border-bottom">
        <c-icon name="material-local_offer" class="block"></c-icon>
        <div class="flex-auto plr10">
          <c-price :amount="item.price" ></c-price>
        </div>
        <div>
          <h5 class="c-text-light">售价</h5>
        </div>
      </div>
      <v-xsd-item :item="item" v-if="!!item"></v-xsd-item>
      <c-xsd-toolbar>
        <a class="btn" @click="removeItem">
          <c-icon name='material-delete_forever'></c-icon>
        </a>
        <router-link class="btn" :to="{ name: 'supplier/item/edit', params: { id: item.id }}">
          <c-icon name='material-edit'></c-icon>
        </router-link>
      </c-xsd-toolbar>
    </div>
  </div>
</template>


<script>
import {CIcon, CPrice, CBackground} from '../../components/base'
import {VXsdItem, CXsdToolbar} from '../../components/xsd'

export default {
  data(){
    return {
      bgState:'loading',
      item:null
    }
  },
  activated(){
    this.xsd.item.get(this.$route.params.id).then(item=>{
      this.item = item
      this.bgState='hide'
    })
  },
  methods: {
    removeItem(){
      this.$confirm.open('你确定要删除此产品？').then(() => {
        this.xsd.api.delete('item/'+this.$route.params.id).then(() => {
          this.$store.dispatch('removeItem', {id: this.$route.params.id})
          this.xsd.nav.back()
        })
      })
    },
  },
  components: {
  	CIcon,
    CPrice,
    CBackground,
    VXsdItem,
    CXsdToolbar
  }
}
</script>