let isIPhone = false
let deviceWidth
let deviceDPR
const BASE_DEVICE_WIDTH = 750
const checkDeviceWidth = () => {
  const info = wx.getSystemInfoSync()
  isIPhone = info.platform === 'ios'
  const newDeviceWidth = info.screenWidth || 375
  const newDeviceDPR = info.pixelRatio || 2

  if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
    deviceWidth = newDeviceWidth
    deviceDPR = newDeviceDPR
  }
}
checkDeviceWidth()

const eps = 1e-4
const transformByDPR = number => {
  if (number === 0) {
    return 0
  }
  number = (number / BASE_DEVICE_WIDTH) * deviceWidth
  number = Math.floor(number + eps)
  if (number === 0) {
    if (deviceDPR === 1 || !isIPhone) {
      return 1
    }
    return 0.5
  }
  return number
}

const rpxRE = /([+-]?\d+(?:\.\d+)?)rpx/gi

const transformRpx = (style, inline) => {
  if (typeof style === 'number') {
    style += 'rpx'
  }
  const re = rpxRE
  return style.replace(re, (match, num) => {
    return transformByDPR(Number(num)) + (inline ? 'px' : '')
  })
}

export default transformRpx