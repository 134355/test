const postcss = require('postcss')
const fs = require('fs')
const path = require('path')

const simulationData = {
  background: 'cyan',
  color: '#ffffff',
  radius: '12',
  size: [
    {
      key: 'xs',
      value: '50'
    },
    {
      key: 'sm',
      value: '60'
    },
    {
      key: 'md',
      value: '70'
    },
    {
      key: 'lg',
      value: '80'
    },
    {
      key: 'lgg',
      value: '100'
    }
  ]
}

const css = `
.min-avatar {
  display: inline-block;
  text-align: center;
  background: ${simulationData.background};
  color: ${simulationData.color};
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}
.min-avatar-image {
  background: transparent;
}
.min-avatar-img {
  width: 100%;
  height: 100%;
}
.min-avatar-circle {
  border-radius: 50%;  
}
.min-avatar-square {
  border-radius: ${simulationData.radius}rpx;
}
`
function css1 (item) {
  return `
.min-avatar-${item.key} {
  width: ${item.value}rpx;
  height: ${item.value}rpx;
  line-height: ${item.value}rpx;
  font-size: ${item.value / 10 * 7}rpx;
}`
}
const ast = postcss.parse(css)

simulationData.size.forEach(item => {
  ast.append(postcss.parse(css1(item)))
})

fs.writeFile(path.join(__dirname, './components/avatar/index.wxss'), ast.toResult().css, (err) => {

})

console.log(ast.toResult().css)
