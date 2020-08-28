import React, { useState } from 'react';
// @ts-ignore
import Watermark from '@pansy/react-watermark';

export default () => {
  const [text, setText] = useState<string | string[]>('测试水印');

  const handleClick = () => {
    setText('更新后的水印')
  }

  return (
    <Watermark
      style={{ width: '100%', height: 500 }}
      text={text}
    >
      <div>
        <button onClick={handleClick}>点击更新水印</button>
      </div>
    </Watermark>
  )
}
