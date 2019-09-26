Page({
  data: {
    showBasic: false,
    showConfirm: false,
    showDefined: false
  },
  showHandle(e) {
    const {
      show
    } = e.currentTarget.dataset
    this.setData({
      [show]: true
    })
  }
})