Page({
  data: {
    scrollTop: 0
  },
  onPageScroll({
    scrollTop
  }) {
    this.setData({
      scrollTop
    })
  }
})