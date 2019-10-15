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
    if (this.data.loop) {
      this.initAnimation()
    }
  },
  methods: {
    hideHandle() {
      this.setData({
        active: false
      })
    },
    initAnimation() {
      const query = wx.createSelectorQuery().in(this)
      query.select(`.__noticebar-main`).boundingClientRect()
      query.select(`.__noticebar-content`).boundingClientRect()
      query.exec(([content, message]) => {
        this.duration = message.width / this.data.speed * 1000

        this.animation = wx.createAnimation({
          duration: this.duration,
        }).translateX(-message.width).step().export()

        this.reAnimation = wx.createAnimation({
          duration: 0,
        }).translateX(content.width).step().export()

        this.resetAnimation()
      })
    },
    resetAnimation() {
      this.timer && clearTimeout(this.timer)
      this.timer = null

      this.setData({
        animation: this.reAnimation
      });
      setTimeout(() => {
        this.setData({
          animation: this.animation
        })
      }, 20)

      this.timer = setTimeout(this.resetAnimation.bind(this), this.duration)
    }
  }
})