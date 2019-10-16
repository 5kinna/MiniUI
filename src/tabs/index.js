import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../tab/index': {
      type: 'child'
    }
  },
  properties: {
    scroll: {
      type: Boolean,
      value: false
    },
    current: {
      type: Number,
      value: 0
    }
  },
  computed: {
    activeKey: ['current', current => current]
  },
  data: {
    tabNumber: 0
  },
  ready() {
    this.changeCurrent()
  },
  methods: {
    changeCurrent(activeKey = this.data.activeKey) {
      const elements = this.getRelationNodes('../tab/index')
      const tabNumber = elements.length
      if (tabNumber > 0) {
        elements.forEach((ele, index) => {
          ele.changeCurrent(index === activeKey, index, this.data.scroll ? '25%' : `${1 / tabNumber*100}%`)
        })
      }
      this.triggerEvent('change', {
        index: activeKey
      })
      this.setData({
        activeKey,
        tabNumber
      })
    },
    onSwiperChange(e) {
      const {
        current,
        source
      } = e.detail
      source === 'touch' && this.changeCurrent(current)
    }
  }
})