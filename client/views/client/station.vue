<template>
  <c-page>
    <c-background v-if="!station">
      <c-icon name="material-store_mall_directory" class="icon"></c-icon>
      <h3 class="text-ls">我的服务站</h3>
      <p class="c-text text-ls p20">如今电子商务大行其道，老百姓也从电子商务中获得许多实惠和便利。但是电子商务的售后问题一直是一个难以解决的痛点，我们的服务站就是来解决这个问题。首先您就近选择一家服务站作为您的站点，在这站点上有许多商家会在此服务站发布商品，您完成商品购买后都将统一交付至此站点。当您到站点接收商品时可以当场验货，即使交接完成后后面有质量问题，只要是合理申诉都可以直接到此服务站处理。</p>
      <div class="p20">
        <c-button class="primary">点击设置</c-button>  
      </div>
    </c-background>

    <div v-if="!!station">
      <c-thumbnail :src="station.img" style="width:100%;height:200px"></c-thumbnail>
      <div class="p20">
        <h3 class=" text-ls mb20">{{station.name}}</h3>
        <c-list-item @click="showStationMap=1" class="btn">
          <c-icon class="list-icon" name="material-home"></c-icon>
          <h4 class="list-title">{{station.address}}</h4>
        </c-list-item>
        <c-list-item v-for="contact in station.contacts" class="btn">
          <c-icon class="list-icon" name="material-call"></c-icon>
          <h4 class="list-title font-montserrat">{{contact}}</h4>
        </c-list-item>
      </div>
    </div>

    <c-xsd-toolbar>
      
    </c-xsd-toolbar>
  </c-page>
</template>

<script>
import { CPage, CBackground, CIcon, CButton, CThumbnail, CListItem } from '../../components/base'
import { CXsdToolbar } from '../../components/xsd'
import { StringArray } from '../../utils/string'

export default {
  data(){
    return {
      state:'loading',
      allStations:null,
      profile:this.$store.getters.profile
    }
  },
  created(){
    this.xsd.api.getCache('stations').then( data => {
      this.allStations = data.stations
      this.state = 'normal'
    }) 
  },
  computed: {
    station(){
      const s = (!!this.profile.station && this.allStations)?this.allStations.find(s=>s.id==this.profile.station):null
      if(!!s) s.contacts = (new StringArray(s.contacts)).array()
      return s
    },
    markers(){
      const stations = this.allStations.filter(station=>station.id!=this.profile.station)
      return stations.map(station=>{
        return { 
          label:station.name, 
          geohash:station.geohash, 
          id:station.id, 
          img:station.img, 
          address:station.address
        }
      })
    },
    mapLocation(){
      return {
        title:this.station.name,
        geohash:this.station.geohash,
        avatar:this.station.img, 
        subTitle:this.station.address         
      }
    }
  },
  methods: {
    setupStation(station){
      this.xsd.api.post('client/profile', { station }).then(data=>{
        this.$store.dispatch('SET_PROFILE', data.client)
      })
    }
  },
  components: {
  	CPage,
    CBackground,
    CIcon,
    CButton,
    CThumbnail,
    CListItem,
    CXsdToolbar
  }
}
</script>
