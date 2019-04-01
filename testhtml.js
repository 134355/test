const htmlparser2 = require('htmlparser2')

const parser = new htmlparser2.Parser({
  onopentag: (name, attr) => {
    console.log(name)
    console.log(attr = {})
  }
}, { decodeEntities: true })

const html = `
<view class="min-class min-avatar min-avatar-{{ shape }} min-avatar-{{ size }} {{ src ? 'min-avatar-image' : '' }}">
  <image class="min-avatar-img" src="{{ src }}" wx:if="{{ src !== '' }}"></image>
  <view wx:else>
    <slot></slot>
  </view>
</view>
`

parser.write(html)
parser.end()
