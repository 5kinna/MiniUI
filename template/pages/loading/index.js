Page({
  data: {
    showAll: false
  },
  showHandle(e) {
    const {
      show
    } = e.currentTarget.dataset
    this.setData({
      [show]: true
    }, () => {
      setTimeout(() => {
        this.setData({
          [show]: false
        })
      }, 2000)
    })
  }
})