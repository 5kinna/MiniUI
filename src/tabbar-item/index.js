import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../tabbar/index': {
      type: 'parent'
    }
  },
  properties: {
    label: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: [String, Number],
      value: ''
    }
  },
  data: {
    active: false,
    index: 0
  },
  methods: {
    tapHandle() {
      const {
        index,
        disabled
      } = this.data
      const parent = this.getRelationNodes('../tabbar/index')[0]

      if (disabled || !parent) return

      parent.setActiveTabbar(index)

      this.triggerEvent('click', {
        index
      })
    },
    changeCurrent(active, index) {
      this.setData({
        active,
        index
      })
    }
  }
})