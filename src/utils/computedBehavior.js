// 定义computed behavior
const WILD_CARD = '**'

module.exports = Behavior({
  attached() {
    this.initComponent()
  },
  definitionFilter(defFields) {
    // 获取组件中的computed内容
    const {
      computed = {}
    } = defFields
    const computedKeys = Object.keys(computed)
    const observers = computedKeys.reduce((acc, current) => {
      const currentValue = computed[current]
      // 判断currentValue是不是数组，使用数组格式为了直接使用数据监听器observers
      const [attr, fun] = Array.isArray(currentValue) ? currentValue : [WILD_CARD, currentValue]
      // 判断fun是不是函数，如果不是的话，报错
      if (typeof fun !== 'function') {
        throw new Error('computed格式不正确')
      }
      return {
        ...acc,
        [attr]: function (...args) {
          // 执行方法得到最新的值，并修改current值
          const newVal = fun.apply(this, args)
          const oldVal = this.data[current]
          // 如果oldVal和newVal相同的话，则不执行赋值
          if (!Object.is(oldVal, newVal)) {
            this.setData({
              [current]: newVal
            })
          }
        }
      }
    }, {})
    // 将computed处理过的放置到observers中
    defFields.observers = { ...defFields.observers,
      ...observers
    }
    // 删除computed
    delete defFields.computed
    // 添加component初始化方法
    defFields.methods = { ...defFields.methods,
      initComponent: function () {
        const observers = defFields.observers
        const observersKeys = Object.keys(observers)
        // 手动触发observers回调方法
        observersKeys.forEach(item => {
          observers[item].apply(this, item.split(',').map(i => this.data[i.trim()]))
        })
      }
    }
  },
})