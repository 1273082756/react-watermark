<h1 align="center">@pansy/react-watermark</h1>

<h4 align="center">水印组件<h4>

> 该组件将在 [react-components](https://github.com/pansyjs/react-components) 维护

## ✨ 特性

* 🚀 支持一个页面添加多处不同水印
* 🌈 安全防御 - 防止他人删除水印dom或修改样式属性
* 🐠 支持自定义水印样式

## 🏗 安装

```sh
// npm 安装
npm install --save @pansy/react-watermark

// yarn 安装
yarn add @pansy/react-watermark
```

## 🔨 使用

```
import React from 'react';
import Watermark from '@pansy/react-watermark';

export default () => {
  return (
    <Watermark style={{ width: 500, height: '100%' }} text="测试水印">
      <div>
        <button>
          123
        </button>
      </div>
    </Watermark>
  )
}
```

## 🌟 社区互助

| Github Issue                                      | 钉钉群                                                                                     | 微信群                                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [issues](https://github.com/pansyjs/react-watermark/issues) | <img src="https://github.com/alitajs/alita/blob/master/public/dingding.png" width="100" /> | <img src="https://github.com/alitajs/alita/blob/master/public/wechat.png" width="100" /> |
