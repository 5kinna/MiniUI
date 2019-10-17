import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../index-item/index': {
      type: 'child'
    }
  },
  properties: {
    height: {
      type: String,
      value: '100vh'
    }
  },
  computed: {
    indexStyle: ['height', height => {
      const h = ['%', 'px', 'rpx', 'vh', 'vw'].some(item => height.includes(item)) ? height : `${height}rpx`
      return `height:${h};`
    }]
  },
  data: {
    datas: [],
    scrollTop: 0,
    currentName: '',
    currentIndex: 0,
    isTouched: false
  },
  ready() {
    this.updated()
    this.updateSide()
  },
  methods: {
    updated() {
      const elements = this.getRelationNodes('../index-item/index')
      if (elements.length) {
        const datas = elements.map((ele, index) => {
          ele.updated(index)
          return ele.data
        })
        this.setData({
          datas
        })
      }
    },
    updateSide() {
      wx
        .createSelectorQuery()
        .in(this)
        .selectAll('.__index-side-item')
        .boundingClientRect(rects => {
          this.sides = rects.map(item => {
            return { ...item,
              ...item.dataset
            }
          })
        })
        .exec()
    },
    setCurrentData(y) {
      const current = this.sides.filter(item => item.top <= y && item.bottom >= y)[0]
      if (!current) return
      const {
        currentName,
        currentIndex,
        datas
      } = this.data
      const index = current.index
      if (currentName !== current.title && currentIndex !== index) {
        wx.vibrateShort()
        this.setData({
          currentName: current.title,
          currentIndex: index,
          scrollTop: datas[index].top
        })
      }
    },
    sideStartHandle(e) {
      this.setData({
        isTouched: true
      })
      this.setCurrentData(e.touches[0].clientY)
    },
    sideMoveHandle(e) {
      this.setCurrentData(e.touches[0].clientY)
    },
    sideEndHandle() {
      setTimeout(() => {
        this.setData({
          isTouched: false
        })
      }, 300)
    },
  }
})