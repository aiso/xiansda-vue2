<template>
  <div id="app" class="container">
    <xsd-header></xsd-header>
    <transition name="fade" mode="out-in">
      <router-view class="router-view" keep-alive-stop></router-view>
    </transition>
  </div>
</template>

<script>
import XsdHeader from './Header'

export default {
  components: {
    XsdHeader
  }
}
</script>


<style src="../assets/app"></style>
