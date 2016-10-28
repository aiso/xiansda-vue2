<template>
  <div class="page-wrapper">
    Login
    <a @click="addAuth"><c-icon name="material-add"></c-icon></a>
    <c-pane>
      <c-button class="primary" :submit="test"></c-button>
    </c-pane>
    <c-pane>
      <c-textfield :model="testInput" @change="mutate"></c-textfield>
    </c-pane>

  </div>
</template>

<script>
import { CPane, CIcon, CLabel, CButton, CTextfield } from '../components/base'

export default {
  data(){
    return{
      testInput:'dd'
    }
  },
  methods: {
    addAuth(){
      this.$store.dispatch('setUser', { a:1, b:2 })
    },
    test(){
      console.log(this.testInput)
    },
    mutate(v){
      this.testInput = v
    }
  },
  components: {
    CPane,
  	CIcon,
    CLabel,
    CButton,
    CTextfield
  }
}
</script>