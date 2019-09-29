import BaseComponent from '../utils/baseComponent'

BaseComponent({
  relations: {
    '../radio-group/index': {
      type: 'parent'
    },
    '../checkbox-group/index': {
      type: 'parent'
    }
  },
  properties: {
    type: {
      type: String,
      value: 'radio'
    },
    position: {
      type: String,
      value: 'left'
    },
    value: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    content: {
      type: String,
      value: ''
    },
    isLine: {
      type: Boolean,
      value: false
    }
  },
  data: {
    index: ''
  },
  computed: {
    check: ['checked', (checked) => checked]
  },
  methods: {
    setLine(isLine) {
      if (this.data.isLine === isLine) return
      this.setData({
        isLine
      })
    },
    changeHandle() {
      const {
        check,
        index,
        disabled,
        value,
        type
      } = this.data

      if (disabled) return

      const node = this.getRelationNodes(`../${type}-group/index`)[0]

      if (!node) {
        this.setData({
          check: !check
        })
        this.triggerEvent('change', {
          checked: !check
        })
        return
      }

      node.setActiveTabbar([index, !check])
    },
    changeCurrent(check, index) {
      this.setData({
        check,
        index
      })
    }
  }
})