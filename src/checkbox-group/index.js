import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../select/index': {
      type: 'child'
    }
  },
  properties: {
    current: {
      type: Array,
      value: '',
      observer: 'updated'
    },
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    activeKey: [],
  },
  methods: {
    initChildLine() {
      const nodes = this.getRelationNodes('../select/index')
      const lastIndex = nodes.length - 1
      nodes.forEach((item, index) => {
        item.setLine(index < lastIndex)
      })
    },
    updated(activeKey = this.data.activeKey) {
      if (Object.is(activeKey, this.data.activeKey)) return
      this.changeCurrent(activeKey)
      this.setData({
        activeKey
      })
    },
    changeCurrent(activeKey = this.data.activeKey) {
      const elements = this.getRelationNodes('../select/index')
      if (elements.length > 0) {
        elements.forEach((ele, index) => {
          const value = ele.data.value || index
          ele.changeCurrent(activeKey.includes(value), value)
        })
      }
    },
    emitEvent(activeKey) {
      this.triggerEvent('change', {
        value: activeKey
      })
    },
    setActiveTabbar([index, checked]) {
      const activeKey = [...this.data.activeKey]
      if (checked) activeKey.push(index)
      else {
        const i = activeKey.indexOf(index)
        i >= 0 && activeKey.splice(i, 1)
      }
      this.updated(activeKey)
      this.emitEvent(activeKey)
    }
  },
  ready() {
    this.initChildLine()
    this.changeCurrent()
  }
})