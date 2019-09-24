import computedBehavior from './computedBehavior'

export default (options = {}) => {
  // 设置默认选项
  options.options = {
    multipleSlots: true,
    styleIsolation: 'apply-shared',
    ...(options.options = {})
  }
  // 设置组件接收的默认样式
  options.externalClasses = [
    'mini-clz',
    ...(options.externalClasses = [])
  ]
  // 设置组件默认的behaviors
  options.behaviors = [
    computedBehavior,
    ...(options.behaviors = [])
  ]
  return Component(options)
}