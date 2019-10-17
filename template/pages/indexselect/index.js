Page({
  data: {
    list: []
  },
  onLoad() {
    this.initList()
  },
  initList() {
    this.setData({
      list: 'abcdefghijklmnopqrstuvwxyz'.split('').map(item => {
        let num = Math.ceil(Math.random() * 10)
        const content = []
        while (num) {
          content.push(item.repeat(Math.ceil(Math.random() * 5)))
          num--
        }
        return {
          title: item.toUpperCase(),
          content
        }
      })
    })
  }
})