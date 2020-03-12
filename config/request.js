let host = ''
// #ifdef H5
// host = ''
// #endif

//#ifdef APP-PLUS
host = 'http://chaoyang.nxers.com/api'
//#endif
const request = (url, options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}/${url}`,
			method: options.method,
			data: options.data,
			header: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			success(request) {
				if (request.statusCode == 200) {
					resolve(request.data)
				} else {
					resolve(request.statusCode)
				}
			},
			fail(error) {
				reject(error)
			}
		})
	})
}
// url:请求地址
// options:参数,type:object
const get = (url, options = {}) => {
	return request(url, {
		method: 'GET',
		data: options
	})
}

// url:请求地址
// options:参数,type:object
const post = (url, options) => {
	console.log(options)
	return request(url, {
		method: 'POST',
		data: options,
	})
	
}

export {
	host,
	get,
	post
}
