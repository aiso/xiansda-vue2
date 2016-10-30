<template>
  <div class="c-background">
    <c-icon :name="_icon"></c-icon>
    <h2 class="title">{{_title}}</h2>
    <p class="description">{{description}}</p>
    <slot></slot>
  </div>
</template>


<script>
import CIcon from './c-icon'

export default {
  props: {
    class: {
      type: String,
      default: ''
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
    CIcon
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

  & .description{
    margin-top: 10px;
    color:var(--textLight);
  }
}
</style>