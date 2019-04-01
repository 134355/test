const fs = require('fs')
const babylon = require('babylon')
const t = require('@babel/types')
const generate = require('@babel/generator').default
const traverse = require('@babel/traverse').default
const { determinationValue } = require('./tools/determination')

const code = `
	Component({
    externalClasses: ['min-class'],
    properties: {
      
    }
  })
`

function createdNode (name, type, value) {
  const obj = {
    type: t.identifier('type'),
    value: t.identifier('value'),
    string: t.identifier('String'),
    number: t.identifier('Number'),
    boolean: t.identifier('Boolean'),
    object: t.identifier('Object'),
    array: t.identifier('Array'),
    null: t.identifier('null')
  }
  let val = determinationValue(value)
  type = t.objectProperty(obj.type, obj[type])
  value = t.objectProperty(obj.value, val)
  const main = t.objectExpression([type, value])
  name = t.identifier(name)
  return t.objectProperty(name, main)
}

const ast = babylon.parse(code)

traverse(ast, {
  ObjectProperty (path) {
    if(path.node.key.name === 'properties') {
      const main = createdNode('dir', 'null', null)
      path.node.value.properties.push(main)
    }
  }
})

console.log(generate(ast).code)

fs.writeFile('./demo.js', generate(ast).code, () => {
  
})
