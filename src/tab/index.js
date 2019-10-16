import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../tabs/index': {
      type: 'parent',
    },
  },
  properties: {
    label: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    active: {
      type: Boolean,
      value: false
    }
  },
  computed: {
    current: ['active', active => active]
  },
  data: {
    index: -1,
    width: '100%'
  },
  methods: {
    changeCurrent(current, index, width = '25%') {
      this.setData({
        current,
        index,
        width
      })
    },
    tabChangeHandle() {
      const node = this.getRelationNodes('../tabs/index')[0]
      const {
        current,
        index
      } = this.data
      if (current) return
      if (node) node.changeCurrent(index)
      else this.setData({
        current: true
      })
      this.triggerEvent('click', {
        index
      })
    }
  }
})