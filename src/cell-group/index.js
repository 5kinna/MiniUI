import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../cell/index': {
      type: 'child'
    }
  },
  properties: {
    title: {
      type: String,
      value: ''
    }
  },
  methods: {
    _getAllCell() {
      const nodes = this.getRelationNodes('../cell/index')
      const lastIndex = nodes.length - 1
      nodes.forEach((item, index) => {
        item.setLine(index < lastIndex)
      })
    }
  },
  ready() {
    this._getAllCell()
  }
})