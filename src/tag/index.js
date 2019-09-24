import BaseComponent from '../utils/baseComponent'
BaseComponent({
  properties: {
    color: {
      type: String,
      value: '72,153,255',
    },
    textColor: {
      type: String,
      value: '',
    },
    closable: {
      type: Boolean,
      value: false
    }
  },
  computed: {
    style: ['color,textColor', (color, textColor) => {
      return `background: rgba(${color},.15); color: rgba(${textColor||color},1);`
    }]
  },
  methods: {
    onClick() {
      this.triggerEvent('click')
    },
    onClose() {
      this.triggerEvent('close')
    }
  }
})