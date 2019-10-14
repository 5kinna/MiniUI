Page({
  data: {
    baseData: ['选项1', '选项2', '选项3', '选项4', '选项5', '选项6'],
    multyData: [],
    baseValue: '',
    multyValue: ''
  },
  onShow() {
    this.initMultyData()
  },
  initMultyData() {
    const multyData = []
    for (let i = 1; i < 10; i++) {
      const children = []
      for (let j = 1; j < 10; j++) {
        children.push({
          id: `${i}${j}`,
          name: `选项${i}.${j}`
        })
      }
      multyData.push({
        id: i,
        name: `选项${i}`,
        children
      })
    }
    this.setData({
      multyData
    })
  }
})