import BaseComponent from '../utils/baseComponent'

BaseComponent({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },
  computed: {
    isShow: ['show', show => show]
  },
  methods: {
    cancelModel() {
      this.triggerEvent('cancel')
      this.setData({
        isShow: false
      })
    }
  }
})