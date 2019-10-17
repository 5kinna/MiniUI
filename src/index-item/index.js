import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../index/index': {
      type: 'parent'
    }
  },
  properties: {
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    top: 0,
    height: 0,
    index: -1,

  },
  methods: {
    updated(index) {
      wx
        .createSelectorQuery()
        .in(this)
        .select('.__index-item')
        .boundingClientRect((rect) => {
          if (!rect) return

          this.setData({
            top: rect.top,
            height: rect.height,
            index,
          })
        })
        .exec()
    },
  }
})