<template>
  <div class="page-wrapper">
    <c-list-item>
      <c-icon class="list-icon" name="material-person"></c-icon>
      <div class="list-title">
        this is a test
      </div>
    </c-list-item>
    <c-list-item class="highlighted">
      <c-icon class="list-icon" name="material-person"></c-icon>
      <div class="list-title">
        主持人 中宣部副部长蒋建国：
      </div>
    </c-list-item>
  </div>
</template>

<script>
import router from '../../router'
import { CListItem, CIcon } from '../../components/base'

export default {
  created(){
    console.log(router)
    console.log(this.$router)
    this.xsd.api.get('test').then(data=>{
      console.log(data)
    })
  },
  components: {
    CListItem,
    CIcon
  }
}
</script>
