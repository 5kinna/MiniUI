import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../sticky-item/index': {
      type: 'child'
    }
  },
  properties: {
    scrollTop: {
      type: Number,
      value: 0,
      observer: 'onScroll'
    }
  },
  methods: {
    onScroll(scrollTop = this.data.scrollTop) {
      const nodes = this.getRelationNodes('../sticky-item/index')
      if (!nodes.length) return
      nodes.forEach(ele => ele.onScroll(scrollTop))
    }
  }
})