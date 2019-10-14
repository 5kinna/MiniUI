import BaseComponent from '../utils/baseComponent'
BaseComponent({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'spin'
    },
    mask: {
      type: String,
      value: 'none'
    },
    model: {
      type: Boolean,
      value: true
    },
    fullscreen: {
      type: Boolean,
      value: true
    }
  },
})