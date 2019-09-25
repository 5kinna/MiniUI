import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../collapse/index': {
      type: 'child'
    }
  },
  properties: {
    active: {
      type: [String, Number],
      value: ''
    },
    // 是否是手风琴模式
    accordion: {
      type: Boolean,
      value: false
    }
  },
  data: {
    childNodes: null
  },
  methods: {
    _getAllCollapse() {
      const collapses = this.getRelationNodes('../collapse/index')
      collapses.forEach((i, index) => {
        i.properties.name = i.properties.name || index
      })
      this.setData({
        childNodes: collapses
      })
    },
    resetActive(activeName) {
      const {
        childNodes,
        accordion
      } = this.data
      if (!accordion) return
      childNodes.map(item => {
        console.log('----', item)
      })
    }
  },
  ready: function () {
    this._getAllCollapse()
  }
})