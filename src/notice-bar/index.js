import BaseComponent from '../utils/baseComponent'

BaseComponent({
  properties: {
    icon: {
      type: String,
      value: 'notice'
    },
    message: {
      type: String,
      value: ''
    },
    closable: {
      type: Boolean,
      value: false
    },
    loop: {
      type: Boolean,
      value: false,
    },
    speed: {
      type: Number,
      value: 100
    },
    show: {
      type: Boolean,
      value: true
    }
  },
  data: {
    animation: null,
  },
  computed: {
    active: ['show', show => show]
  },
  ready() {
    this.initAnimation()
  },
  methods: {
    hideHandle() {
      this.setData({
        active: false
      })
    },
    initAnimation() {
      const {
        loop,
        speed
      } = this.data
      const query = wx.createSelectorQuery().in(this)
      query.select(`.__noticebar-content`).boundingClientRect()
      query.select(`.__noticebar-message`).boundingClientRect()
      query.exec(([content, message]) => {
        console.log(content.width, message.width)
        this.animation = wx.createAnimation({
          duration: message.width / this.data.speed * 1000,
        })
        this.animation.translateX(-message.width).step()
        this.setData({
          animation: this.animation.export()
        })
      })
    }
  }
})