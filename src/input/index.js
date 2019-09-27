import BaseComponent from '../utils/baseComponent'
BaseComponent({
  properties: {
    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请输入'
    },
    placeStyle: {
      type: String,
      value: ''
    },
    placeClass: {
      type: String,
      value: 'placeClass'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: -1
    },
    cursorSpacing: {
      type: Number,
      value: 0
    },
    focus: {
      type: Boolean,
      value: false
    },
    cursor: {
      type: Number,
      value: 0
    },
    selectionStart: {
      type: Number,
      value: -1
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    clear: {
      type: Boolean,
      value: false
    }
  },
  computed: {
    val: ['value', (value) => value]
  },
  methods: {
    onInput(e) {
      const {
        value
      } = e.detail
      const {
        val
      } = this.data
      if (Object.is(value, val)) return
      this.setData({
        val: value
      })
      this.triggerEvent('input', value)
    },
    onClear() {
      this.setData({
        val: ''
      })
      this.triggerEvent('clear')
    }
  }
})