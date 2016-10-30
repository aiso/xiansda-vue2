<template>
  <div id="app" class="container">
	<c-toast class="toast" :toasts="$store.getters.toasts"></c-toast>

    <xsd-header></xsd-header>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="router-view"></router-view>  
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { CToast } from './base'
import XsdHeader from './Header'

export default {
  components: {
  	CToast,
    XsdHeader
  }
}
</script>


<style src="../assets/app"></style>
