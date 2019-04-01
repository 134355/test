const chechData = require('./checkData')
const t = require('@babel/types')

function stringLiteral (value) {
  return t.stringLiteral(value)
}
function numericLiteral (value) {
  return t.numericLiteral(value)
}
function booleanLiteral (value) {
  return t.booleanLiteral(value)
}
function nullLiteral () {
  return t.nullLiteral()
}
function arrayExpression (value) {
  value = value.map(item => {
    return determination(item)
  })
  return t.arrayExpression(value)
}
function objectExpression (value) {
  value = Object.keys(value).map(item => {
    return t.objectProperty(t.identifier(item), determination(value[item]))
  })
  return t.ObjectExpression(value)
}
function determinationValue (value) {
  switch (true) {
    case chechData.isArray(value):
      return arrayExpression(value)
    case chechData.isObject(value):
      return objectExpression(value)
    case chechData.isString(value):
      return stringLiteral(value)
    case chechData.isBoolean(value):
      return booleanLiteral(value)
    case chechData.isNumber(value):
      return numericLiteral(value)
    case chechData.isNull(value):
      return nullLiteral()
    default:
      throw Error('类型错误')
  }
}

module.exports = {
  determinationValue
}
