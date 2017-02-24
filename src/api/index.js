const _gankio = 'http://gank.io/api'
export default {
	getDaily(year, month, day) {
		if (!year || !month || !day) {
			let current = new Date();
			if (current.getDay() === 6) {
				current.setDate(current.getDate() - 1)
			}
			if (current.getDay() === 7) {
				current.setDate(current.getDate() - 2)
			}
			year = current.getFullYear()
			month = current.getMonth() + 1
			if (current.getHours() >= 12) {
				day = current.getDate()
			} else {
				day = current.getDate() - 1
			}

		}
		return `${_gankio}/day/${year}/${month}/${day}`
	},

	getGank(type, pageCount = 10, pageNumber = 1) {
		return `${_gankio}/data/${type}/${pageCount}/${pageNumber}`
	},

	getGirls(pageCount = 10, pageNumber = 1) {
		const type = '福利'
		return `${_gankio}/data/${type}/${pageCount}/${pageNumber}`
	}
}