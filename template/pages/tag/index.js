const app = getApp()

Page({
  data: {
    isShow: true
  },
  removeTag() {
    this.setData({
      isShow: false
    })
  }
})