import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../collapse-item/index': {
      type: 'child'
    }
  },
  properties: {
    active: {
      type: [String, Number],
      value: '',
      observer: 'updated'
    },
    // 是否是手风琴模式
    accordion: {
      type: Boolean,
      value: false
    }
  },
  data: {
    activeKey: ''
  },
  methods: {
    changeCurrent(activeKey) {
      const {
        accordion
      } = this.data
      const collapses = this.getRelationNodes('../collapse-item/index')
      if (!collapses.length || !accordion) return
      collapses.forEach((ele, index) => {
        ele.changeCurrent(index === activeKey, ele.data.name || index)
      })
      this.emitEvent(activeKey)
    },
    emitEvent(key) {
      this.triggerEvent('change', {
        key
      })
    },
    updated(activeKey = this.data.activeKey) {
      if (this.data.activeKey === activeKey) return
      this.changeCurrent(activeKey)
      this.setData({
        activeKey
      })
    }
  }
})