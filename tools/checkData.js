const checkData = {

}

const toString = Object.prototype.toString

;['Array', 'Object', 'String', 'Number', 'Boolean', 'Null'].forEach(item => {
	checkData[`is${item}`] = function (value) {
		return toString.call(value) === `[object ${item}]`
	}
})

module.exports = checkData
