import BaseComponent from '../utils/baseComponent'
const EMPTY = 'empty'
const LOADING = 'loading'
const LOADED = 'loaded'
const ERROR = 'error'

BaseComponent({
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
        },
        height: {
            type: null,
            value: 225,
        },
        empty: {
            type: String,
            value: '暂无图片',
        },
        loading: {
            type: Boolean,
            value: true,
        },
        error: {
            type: String,
            value: '图片异常',
        },
        type: {
            type: String,
            value: 'normal'
        }
    },
    data: {
        status: '',
    },
    computed: {
        style: ['width,height', function (width, height) {
            return `width: ${this.calcLength(width)}; height: ${this.calcLength(height)}`
        }]
    },
    methods: {
        // 更新组件状态
        updateStatus(status) {
            if (this.data.status !== status) {
                this.setData({
                    status,
                })
            }
            this.triggerEvent('change', {
                status
            })
        },
        // 更新资源地址
        updated(src = this.data.src) {
            this.updateStatus(!!src ? LOADING : EMPTY)
        },
        calcLength(value) {
            return `${value * 2}rpx`
        },

        // 资源加载完成时的回调函数
        onLoad(e) {
            this.updateStatus(LOADED)
            this.triggerEvent('load', { ...e.detail,
                status: LOADED
            })
        },
        // 资源加载失败时的回调函数
        onError(e) {
            this.updateStatus(ERROR)
            this.triggerEvent('error', { ...e.detail,
                status: ERROR
            })
        },
        // 点击事件
        onTap(e) {
            this.triggerEvent('click', { ...e.detail,
                status: this.data.status
            })
        },
    },
    attached() {
        this.updated()
    },
})