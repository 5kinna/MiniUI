import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../sticky/index': {
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
    isFixed: false,
    top: 0,
    height: 0
  },
  methods: {
    onScroll(scrollTop) {
      const {
        top,
        height,
        isFixed
      } = this.data
      const fixed = scrollTop >= top && scrollTop < top + height
      if (isFixed === fixed) return
      this.setData({
        isFixed: fixed
      })
      this.triggerEvent('change')
    }
  },
  ready() {
    const query = wx.createSelectorQuery().in(this)
    query.select('.__sticky-item').boundingClientRect(({
      height,
      top
    }) => {
      this.setData({
        height,
        top
      })
    }).exec()
  }
})