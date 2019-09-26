import BaseComponent from '../utils/baseComponent'

BaseComponent({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    message: {
      type: String,
      value: ''
    },
    showCancelButton: {
      type: Boolean,
      value: true
    },
    showConfirmButton: {
      type: Boolean,
      value: true
    },
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    confirmButtonText: {
      type: String,
      value: '确定'
    },
    closeOnClickModal: {
      type: Boolean,
      value: true
    }
  },
  computed: {
    isShow: ['show', (show) => show]
  },
  methods: {
    clickModel() {
      if (this.data.closeOnClickModal) this.resetShow()
      this.emitEvent()
    },
    resetShow(isShow = false) {
      this.setData({
        isShow
      })
    },
    emitEvent() {
      this.triggerEvent('close')
    },
    cancel() {
      const {
        isShow
      } = this.data
      if (isShow) this.resetShow()
      this.emitEvent()
    },
    confirm() {
      const {
        isShow
      } = this.data
      if (isShow) this.resetShow()
      this.triggerEvent('confirm')
    }
  }
})