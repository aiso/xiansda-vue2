export default {
  props: {
    model: Object
  },
  data(){
    const attrs = Object.assign({ }, this.model.attrs)

    return {
      attrs
    }   
  },
  methods: {
    _validate () {
      if (!this.model.validate || !this.$validation) {
        return
      }
      this.$validate()
    }
  }
}
