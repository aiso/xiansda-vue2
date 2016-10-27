<template>
  <div class="page-wrapper">
    <counter></counter>
    <router-link to="login" class="p5">login</router-link>
    <router-link to="demo" class="p5">demo</router-link>
    <p>
      To get started, edit files in <code>./client</code> and save2.
    </p>
  </div>
</template>

<script>
import Counter from '../components/Counter'

export default {
  components: {
    Counter
  }
}
</script>
