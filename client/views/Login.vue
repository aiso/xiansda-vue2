<template>
  <div class="page-wrapper">
    <c-pane>
      <c-form-cell>
        <c-icon name="material-person"></c-icon>
        <c-textfield :model="username">
          <p class="right-hint c-red text-bold" v-if="validations.usernameRequred">必填项</p>
          <p class="right-hint c-red text-bold" v-if="!validations.usernameRequred&&validations.usernameMinlength">最小4位</p>
        </c-textfield>
      </c-form-cell>
      <c-form-cell>
        <c-icon name="material-vpn_key"></c-icon>
        <c-textfield :model="password">
          <p class="right-hint c-red text-bold" v-if="validations.passwordRequired">必填项</p>
          <p class="right-hint c-red text-bold" v-if="!validations.passwordRequired&&validations.passwordMinlength">最小4位</p>
        </c-textfield>
      </c-form-cell>
    </c-pane>
    <c-pane>
      <c-button class="primary" :submit="loginSubmit" label="登 录" :disabled="!formValid"></c-button>
    </c-pane>
  </div>
</template>

<script>
import { CPane, CFormCell, CIcon, CTextfield, CButton } from '../components/base'

export default {
  data(){
    return{
      validations: {
        usernameValid:false,
        usernameRequred:false,
        usernameMinlength:false,

        passwordValid:false,
        passwordRequired:false,
        passwordMinlength:false,
      },
      username:{
        name:'username',
        value:null,
        attrs: {
          placeholder: '用户号'
        },
        validators: {
          required: true,
          minlength: 4
        },
        validation: result=>{
          this.validations.usernameValid = result.valid
          this.validations.usernameRequred = result.required
          this.validations.usernameMinlength = result.minlength
        }
      },
      password:{
        name:'password',
        value:null,
        attrs: {
          placeholder: '密码'
        },
        validators: {
          required: true,
          minlength: 6
        },
        validation: result=>{
          this.validations.passwordValid = result.valid
          this.validations.passwordRequired = result.required
          this.validations.passwordMinlength = result.minlength
        }
      }      
    }
  },
  computed: {
    formValid(){
      return this.validations.usernameValid && this.validations.passwordValid
    }
  },
  methods: {
    loginSubmit(){
      this.xsd.user.login({ uid:this.username.value, pwd:this.password.value }).then(()=>{
        this.$router.replace(this.$store.getters.navigation.home)
      })
      /*
      .then(()=>{
        return this.xsd.sync.load('transes')
      })
      .then(()=>{
        this.$route.router.go(this.navMainRoutes.home)
      })*/
    }
  },
  components: {
    CPane,
    CFormCell,
  	CIcon,
    CTextfield,
    CButton,
  }
}
</script>