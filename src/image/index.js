const EMPTY = 'empty'
const LOADING = 'loading'
const LOADED = 'loaded'
const ERROR = 'error'

Component({
    properties: {
        src: {
            type: String,
            value: '',
            observer: 'updated',
        },
        mode: {
            type: String,
            value: 'aspectFit',
        },
        lazyLoad: {
            type: Boolean,
            value: false,
        },
        width: {
            type: null,
            value: 300,
            observer: 'updateStyle',
        },
        height: {
            type: null,
            value: 225,
            observer: 'updateStyle',
        },
        empty: {
            type: Boolean,
            value: true,
        },
        loading: {
            type: Boolean,
            value: true,
        },
        error: {
            type: Boolean,
            value: true,
        },
    },
    data: {
        status: '',
    },
    methods: {
        // 更新组件状态
        updateStatus(status) {
          if (this.data.status !== status) {
              this.setData({
                  status,
              })
          }

          this.triggerEvent('change', { status })
        },
        // 更新资源地址
        updated(src = this.data.src) {
            this.updateStatus(!!src ? LOADING : EMPTY)
        },
        calcLength(value){
          return `${value * 2}rpx`
        },
        // 更新组件样式
        updateStyle(opts = {}) {
            const { width, height } = Object.assign({}, this.data, opts)
            const style = `width: ${this.calcLength(width)}; height: ${this.calcLength(height)}`

            this.setData({
                style,
            })
        },
        
        // 资源加载完成时的回调函数
        onLoad(e) {
            this.updateStatus(LOADED)
            this.triggerEvent('load', { ...e.detail, status: LOADED })
        },
        // 资源加载失败时的回调函数
        onError(e) {
            this.updateStatus(ERROR)
            this.triggerEvent('error', { ...e.detail, status: ERROR })
        },
        // 点击事件
        onTap(e) {
            this.triggerEvent('click', { ...e.detail, status: this.data.status })
        },
    },
    attached() {
        this.updateStyle()
        this.updated()
    },
})
