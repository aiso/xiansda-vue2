<template>
  <div class="xsd-header">
  	<a class="header-title plr20">{{title}}</a>
    <div class="filler"></div>
    <router-link :to="nav.path" class="nav" v-for="nav in navigators"><c-icon :name="nav.icon"></c-icon></router-link>
    <div>
      <router-link to="/login" class="nav"><c-icon name="material-person"></c-icon></router-link>
    </div>
  </div>
</template>

<script>
import { CIcon } from '../components/base'

export default {
  data(){
    return {
      title:this.$router.currentRoute.meta.title
    }
  },
  computed: {
    navigators(){
      if(!!this.$store.getters.navigation){
        const routes = this.$store.getters.navigation.routes
        return routes.map(route=>{
          const rinfo = this.$router.options.routes.find(r=>r.path==route)
          return {path:rinfo.path, icon:rinfo.meta.icon}
        })
      }else{
        return []
      }
    },
  },
  watch: {
    $route(){
      this.title = this.$router.currentRoute.meta.title
    }
  },
  components: {
    CIcon,
  }
}
</script>

<style>
.xsd-header{
  position: fixed;
  top:0;
  left:0;
  height: var(--header);
  width:100%;
  display: flex;
  z-index: 11;

  & .filler{
    flex:auto;
  }

  & .header-title{
    line-height: var(--header);
    letter-spacing: 1.5px;
    font-size: 16px;
  }

  & .nav{
    & .c-icon{
      color:#444;
      display: block;
      width: 46px;
      height: var(--header);
      line-height: 48px;
      font-size:24px;
      text-align: center;
      color:var(--textLight);
    }

    &:active{
      & .c-icon{
        background: #ebebeb;
        color:var(--primary);
      }
    }

    &.active{
      & .c-icon{
        color:var(--primary);
      }
    }

    &.router-link-active .c-icon{
      color:var(--primary);
    },

    &.notice.router-link-active{
      display: none
    }
  }
}
</style>