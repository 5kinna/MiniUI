import BaseComponent from '../utils/baseComponent'
BaseComponent({
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    tip: {
      type: String,
      value: ''
    },
    isLink: {
      type: Boolean,
      value: true
    },
    isLine: {
      type: Boolean,
      value: false
    },
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    },
    onlyTapFooter: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleTap() {
      if (this.data.onlyTapFooter) return
      this.navigateTo()
    },
    navigateTo() {
      const {
        url,
        isLink,
        linkType
      } = this.data
      this.triggerEvent('click')
      if (!isLink || !url) return
      if (!['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].includes(linkType)) {
        console.log('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch')
        return
      }
      wx[linkType].call(wx, {
        url
      })
    },
    setLine(isLine) {
      if (this.data.isLine === isLine) return
      this.setData({
        isLine
      })
    }
  }
})