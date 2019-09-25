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

      this.triggerEvent('click', {
        index
      })
      parent.setActiveTabbar(index)
    },
    changeCurrent(active, index) {
      this.setData({
        active,
        index
      })
    }
  }
})