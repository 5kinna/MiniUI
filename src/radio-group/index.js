import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../radio/index': {
      type: 'child'
    }
  },
  properties: {
    current: {
      type: [String, Number],
      value: '',
      observer: 'updated'
    },
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    activeKey: -1,
  },
  methods: {
    initChildLine() {
      const nodes = this.getRelationNodes('../radio/index')
      const lastIndex = nodes.length - 1
      nodes.forEach((item, index) => {
        item.setLine(index < lastIndex)
      })
    },
    updated(activeKey = this.data.activeKey) {
      if (+this.data.activeKey === +activeKey) return
      this.changeCurrent(activeKey)
      this.setData({
        activeKey
      })
    },
    changeCurrent(activeKey = this.data.activeKey) {
      const elements = this.getRelationNodes('../radio/index')
      if (elements.length > 0) {
        elements.forEach((ele, index) => {
          const value = ele.data.value || index
          ele.changeCurrent(value === activeKey, value)
        })
      }
    },
    emitEvent(activeKey) {
      this.triggerEvent('change', {
        value: activeKey
      })
    },
    setActiveTabbar(activeKey) {
      if (+this.data.activeKey === +activeKey) return
      this.updated(activeKey)
      this.emitEvent(activeKey)
    }
  },
  ready() {
    this.initChildLine()
    this.changeCurrent()
  }
})