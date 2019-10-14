import BaseComponent from '../utils/baseComponent'

BaseComponent({
  properties: {
    mode: {
      type: String,
      value: 'default'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: null,
      value: ''
    },
    // 采用树的结构
    data: {
      type: Array,
      value: []
    },
    cols: {
      type: Number,
      value: 1
    },
    loading: {
      type: Boolean,
      value: false
    },
    start: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
    },
    format: {
      type: String,
      value: 'YYYY-MM-DD'
    },
    useSlot: {
      type: Boolean,
      value: false
    }
  },
  data: {
    show: false
  },
  computed: {
    list: ['data', data => {
      data.map(item => {

      })
    }]
  },
  methods: {
    showPicker() {
      this.setShow(true)
      this.triggerEvent('show')
    },
    cancelPicker() {
      this.setShow()
      this.triggerEvent('cancel')
    },
    setShow(value = false) {
      const {
        show,
        disabled
      } = this.data
      if (disabled) return
      this.setData({
        show: value
      })
    },
    confirmPicker(e) {
      this.setShow()
      this.triggerEvent('confirm')
    },
    changeHandle(e) {
      console.log('changeHandle', e.detail.value)
    }
  }
})