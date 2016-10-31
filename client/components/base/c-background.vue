<template>
  <div class="c-background" v-if="state!='hide'">
    <div v-if="state!='loading'">
      <c-icon :name="_icon"></c-icon>
      <h3 class="title">{{_title}}</h3>
      <p class="description">{{description}}</p>
      <slot></slot>
    </div>
    <div v-if="state=='loading'">
      <c-loading></c-loading>
      <h3 class="c-text-light text-ls mt10">加载数据中...</h3>
    </div>
  </div>
</template>


<script>
import CIcon from './c-icon'
import CLoading from './c-loading'

export default {
  props: {
    state: {
      type: String,
      default: 'hide'
    },
    icon: {
      type: String,
      default: 'material-error_outline'
    },
    title: {
      type: String,
      default: '鲜时达'
    },
    description: {
      type: String,
      default: ''
    },
    statement: {
      type: Object,
      default:null
    }
  },
  computed: {
    _icon(){
      return !!this.statement?this.statement.icon:this.icon
    },
    _title(){
      return !!this.statement?this.statement.title:this.title
    }    
  },
  components: {
    CIcon,
    CLoading
  }
}
</script>

<style>
.c-background {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background: var(--bgLight);
  text-align: center;
  padding:20px;
  letter-spacing: 0.1em;

  & .c-icon{
    font-size:80px;
    line-height: 70px;
  }

  & .title{
    margin-top:10px;
  }

  & .description{
    margin-top: 10px;
    color:var(--textLight);
  }
}
</style>