import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../collapse-group/index': {
      type: 'parent'
    }
  },
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    name: {
      type: [String, Number],
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    index: 0
  },
  computed: {
    active: ['show', (show) => show]
  },
  methods: {
    changeHandle() {
      const {
        active,
        index,
        disabled
      } = this.data

      if (disabled) return

      const nodes = this.getRelationNodes('../collapse-group/index')[0]

      this.setData({
        active: !active
      })

      if (nodes && nodes.data.accordion && !active) nodes.changeCurrent(index)

      this.triggerEvent('click', {
        index
      })
    },
    changeCurrent(active, index) {
      this.setData({
        active,
        index
      })
    }
  }
})