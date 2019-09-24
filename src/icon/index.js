import BaseComponent from '../utils/baseComponent'
BaseComponent({
  properties: {
    type: {
      type: String,
      value: '__empty__'
    },
    size: {
      type: [Number, String],
      value: 40
    },
    color: {
      type: String,
      value: '#c7c7cc'
    }
  },
  computed: {
    style: ['size, color', (size, color) => {
      return `font-size: ${size}rpx;color: ${color};`
    }]
  }
})