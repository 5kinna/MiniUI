import {
  checkIPhoneX,
  safeAreaInset
} from '../utils/checkIphonex'
import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../tabbar-item/index': {
      type: 'child'
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
      type: [String, Number],
      value: '',
      observer: 'updated'
    }
  },
  data: {
    activeKey: 0,
  },
  computed: {
    style: ['height,position', (height, position) => {
      let style = `height:${height}rpx`
      if (checkIPhoneX()) style += `;padding-${position}:${safeAreaInset[position]}rpx;`
      return style
    }]
  },
  ready() {
    this.changeCurrent()
  },
  methods: {
    updated(activeKey = this.data.activeKey) {
      if (this.data.activeKey === activeKey) return
      this.changeCurrent(activeKey)
      this.setData({
        activeKey
      })
    },
    changeCurrent(activeKey = this.data.activeKey) {
      const elements = this.getRelationNodes('../tabbar-item/index')
      if (elements.length > 0) {
        elements.forEach((ele, index) => {
          const value = ele.data.value || index
          ele.changeCurrent(value === activeKey, value)
        })
      }
    },
    emitEvent(key) {
      this.triggerEvent('change', {
        key
      })
    },
    setActiveTabbar(activeKey) {
      if (this.data.activeKey === activeKey) return
      this.updated(activeKey)
      this.emitEvent(activeKey)
    }
  }
})