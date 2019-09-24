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
    style: '',
    activeKey: '',
    keys: []
  },
  ready() {
    const activeKey = this.data.current
    this.updated(activeKey)
    this.getStyle()
  },
  methods: {
    getStyle() {
      let style = `height:${this.data.height}rpx`
      if (checkIPhoneX()) style += `;padding-bottom:${safeAreaInset['bottom']}rpx;`
      this.setData({
        style
      })
    },
    updated(activeKey = this.data.activeKey) {
      if (this.data.activeKey !== activeKey) {
        this.setData({
          activeKey
        })
      }

      this.changeCurrent(activeKey)
    },
    changeCurrent(activeKey) {
      const elements = this.getRelationNodes('../tabbar-item/index')
      if (elements.length > 0) {
        elements.forEach((element, index) => {
          const key = element.data.key || String(index)
          const current = key === activeKey

          element.changeCurrent(current, key, elements.length)
        })
      }

      if (this.data.keys.length !== elements.length) {
        this.setData({
          keys: elements.map((element) => element.data)
        })
      }
    },
    emitEvent(key) {
      this.triggerEvent('change', {
        key,
        keys: this.data.keys,
      })
    },
    setActiveTabbar(activeKey) {
      this.updated(activeKey)

      this.emitEvent(activeKey)
    }
  }
})