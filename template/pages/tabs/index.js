Page({
  data: {
    baseData: ['菜单1', '菜单2', '菜单3', '菜单4']
  },
  changeHandle(e) {
    console.log('change>>', e.detail.index)
  }
})