import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../swiper/index': {
      type: 'child'
    }
  },
  methods: {
    onCloseSwipe(activeKey = this.data.activeKey) {
      const elements = this.getRelationNodes('../swiper/index')
      if (elements.length > 0) {
        elements.forEach(ele => {
          ele.onClose()
        })
      }
    },
  }
})