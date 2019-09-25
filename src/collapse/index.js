import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../collapse-group/index': {
      type: 'parent'
    }
  },
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    name: {
      type: [String, Number],
      value: ''
    },
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    parentNode: null
  },
  computed: {
    isShow: ['show', (show) => show]
  },
  methods: {
    _initParentNode() {
      const nodes = this.getRelationNodes('../collapse-group/index')
      if (!nodes.length) return null
      return nodes[0]
    },
    changeHandle() {
      const {
        isShow,
        parentNode,
        name
      } = this.data
      if (!isShow && parentNode) parentNode.resetActive(name)
      this.setData({
        isShow
      })
    }
  },
  ready() {
    const parent = this._initParentNode()
    this.setData({
      parentNode: parent
    })
  }
})