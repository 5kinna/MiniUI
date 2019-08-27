let systemInfo = null

export const getSystemInfo = (isForce) => {
	if (!systemInfo || isForce) {
		try {
			systemInfo = wx.getSystemInfoSync()
		} catch(e) {}
	}
	return systemInfo
}

export const safeAreaInset = {
	top: 88, 
	left: 0,
	right: 0,
	bottom: 68, 
}

const isIPhoneX = ({ model, platform, screenHeight }) => {
	return /iPhone X/.test(model) //&& platform === 'ios'
}

export const checkIPhoneX = (isForce) => isIPhoneX(getSystemInfo(isForce))
