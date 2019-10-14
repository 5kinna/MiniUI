import BaseComponent from '../utils/baseComponent'
import transformRpx from '../utils/transformRpx'
BaseComponent({
  relations: {
    '../swiper-group/index': {
      type: 'parent'
    }
  },
  properties: {
    disabled: {
      type: Boolean,
      value: false
    },
    height: {
      type: Number,
      value: 120
    },
    width: {
      type: Number,
      value: 750
    },
    slideWidth: {
      type: Number,
      value: 172
    }
  },
  data: {
    index: 0,
    xmove: 0
  },
  computed: {
    clz: ['height,width,slideWidth', (height, width, slideWidth) => {
      return {
        area: `height:${height}rpx;width:${width}rpx;`,
        view: `width:${width+slideWidth}rpx;`,
        right: `width:${slideWidth}rpx;line-height:${height}rpx;`
      }
    }]
  },
  ready() {
    this.updateData()
  },
  methods: {
    updateData() {
      const {
        slideWidth
      } = this.data
      this.slideWidth = slideWidth
      this.threshold = transformRpx(slideWidth) / 2
    },
    onClose() {
      if (!+this.data.xmove || this.isMove) return
      this.setData({
        xmove: 0
      })
    },
    handleTouchStart(e) {
      const node = this.getRelationNodes('../swiper-group/index')[0]
      node && node.onCloseSwipe()
      this.startX = e.changedTouches[0].clientX
      this.isMove = true
      this.startTime = Date.now()
    },
    slideMove() {
      const {
        startX,
        endX,
        slideWidth,
        threshold,
        endTime,
        startTime
      } = this
      const speed = (endX - startX) / (endTime - startTime)
      const less = endX + speed * 100 - startX < threshold
      const less2 = startX - endX - speed * 100 < threshold
      if (!less2 || (less && endX - startX > 0)) {
        return -slideWidth
      }
      if (less2 && startX - endX > 0 || !less) {
        return 0
      }
    },
    handleTouchEnd(e) {
      this.endTime = Date.now()
      this.endX = e.changedTouches[0].clientX
      this.isMove = false
      this.setData({
        xmove: this.slideMove()
      })
    }
  }
})