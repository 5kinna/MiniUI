import {
  checkIPhoneX,
  safeAreaInset
} from '../utils/checkIphonex'
import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../tabbar-item/index': {
      type: 'child',
      linked(target) {
        this.updated()
      },
    }
  },
  properties: {
    position: {
      type: String,
      value: 'bottom'
    },
    // 单位rpx
    height: {
      type: [String, Number],
      value: '98'
    },
    current: {
      type: String,
      value: '',
      observer: 'updated'
    }
  },
  data: {
    activeKey: '',
    keys: []
  },
  computed: {
    style: ['height,position', (height, position) => {
      let style = `height:${height}rpx`
      if (checkIPhoneX()) style += `;padding-${position}:${safeAreaInset[position]}rpx;`
      return style
    }]
  },
  ready() {
    this.updated(this.data.current || 0)
  },
  methods: {
    updated(activeKey = this.data.activeKey) {
      if (this.data.activeKey === activeKey) return
      this.changeCurrent(activeKey)
      this.setData({
        activeKey
      })
    },
    changeCurrent(activeKey) {
      const elements = this.getRelationNodes('../tabbar-item/index')
      if (elements.length > 0) {
        elements.forEach((ele, index) => ele.changeCurrent(index === activeKey, index))
      }
    },
    emitEvent(key) {
      this.triggerEvent('change', {
        key
      })
    },
    setActiveTabbar(activeKey) {
      this.updated(activeKey)
      this.emitEvent(activeKey)
    }
  }
})