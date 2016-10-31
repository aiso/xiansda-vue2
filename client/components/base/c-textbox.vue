<template>
  <c-modal :show="show" @maskClicked="close">
    <div class="c-textbox">
      <c-autosize-textarea 
        :handle-change="handleChange" 
        :value="textMessage">
      </c-autosize-textarea>
      <div class="flex-row">
        <c-icon-button icon="material-clear" @click.native="close"></c-icon-button>
        <h4>{{title}}</h4>
        <div class="flex-auto"></div>
        <c-button label="提交" class="fit small primary" :disabled="_disabled" :submit="_submit"></c-button>
      </div>
    </div>
  </c-modal>

</template>

<script>
import Promise from 'nd-promise'
import CModal from './c-modal'
import CIconButton from './c-icon-button'
import CButton from './c-button'
import CAutosizeTextarea from './c-autosize-textarea'

export default {
  data(){
    return {
      show:false,
      title:'',
      textMessage:null,
      deferred:null
    }
  },
  methods: {
    handleChange (e) {
      this.textMessage = e.target.value
    },
    open(title){
      this.title = title
      this.show=true

      return new Promise((resolve, reject) => {
        this.deferred = { resolve, reject }
      })
    },
    close(){
      this.show=false
      this.deferred.reject()
    },
    _submit(){
      this.show=false
      this.deferred.resolve(this.textMessage)
    }    
  },
  computed: {
    _disabled(){
      return !this.textMessage || this.textMessage.length<=4
    },
  },
  components: {
    CModal,
    CIconButton,
    CButton,
    CAutosizeTextarea
  }
}
</script>

<style>
.c-textbox{
  background: white;
  width:100%;
  padding:20px 10px 10px;

  & textarea{
    background: var(--bgLight);
    width:100%;
    border:0;
    padding:10px;
    font-size:14px;
  }

  & .c-button{
    display: inline-block;
  }
}
</style>
