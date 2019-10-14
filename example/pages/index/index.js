Page({
  data: {
    scrollTop: 0
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})