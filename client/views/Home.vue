<template>
  <div class="page-wrapper">
    <counter></counter>
    <router-link to="login" class="p5">login</router-link>
    <router-link to="demo/lists" class="p5">demo/lists</router-link>
    <router-link to="demo/validator" class="p5">demo/validator</router-link>
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
