import camelCase from 'lodash.camelcase'
import { ldClient } from './initLDClient'

export default (_flags) => ({
  data () {
    return {
      flags: {}
    }
  },

  provide () {
    return {
      ld: this.$data
    }
  },

  mounted () {
    this.flags = _flags

    ldClient.on('change', changes => {
      const flattened = {}
      for (const key in changes) {
        flattened[camelCase(key)] = changes[key].current
      }
      this.flags = { ...this.flags, ...flattened }
    })
  }
})
