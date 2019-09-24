import BaseComponent from '../utils/baseComponent'
BaseComponent({
  properties: {
    color: {
      type: String,
      value: '',
      observer: 'updateStyle'
    },
    size: {
      type: String,
      value: 'mini'
    },
    closable: {
      type: Boolean,
      value: false
    }
  },
  data: {
    tagStyle: ''
  },
  methods: {
    onClick() {
      this.triggerEvent('click')
    },
    updateStyle(color) {
      const tagStyle = `background: rgba(${color},.15); color: rgba(${color},1);`

      this.setData({
        tagStyle,
      })
    },
  }
})