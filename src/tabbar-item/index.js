import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../tabbar/index': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    key: {
      type: [String, Number],
      value: 0
    },
    label: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    current: false,
    width: "100%",
    index: '0'
  },
  methods: {
    tapHandle() {
      const {
        index,
        disabled
      } = this.properties
      const parent = this.getRelationNodes('../tabbar/index')[0]

      if (disabled || !parent) return

      this.triggerEvent('click', {
        index
      })
      parent.setActiveTabbar(index)
    },
    changeCurrent(current, index, length) {
      const width = 100 / length + '%'
      this.setData({
        width,
        current,
        index
      })
    }
  }
})