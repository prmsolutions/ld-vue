export default {
  inject: ['ld'],

  computed: {
    flags () {
      return this.ld.flags
    }
  }
}