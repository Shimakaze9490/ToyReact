function createElement(tagName, attributes, ...children) {
  // console.log(tagName);
  const e = document.createElement(tagName);

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      const val = attributes[key];
      e.setAttribute(key, val);
    }
  }

  for (const child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    } else if (typeof child === 'object') {
      console.log(child);
    }

    e.appendChild(child); // 构成树状结构 + 递归
  }
  return e;
}

// 映射成[递归]的createElement函数调用
// 由上往下递归，由下往上返回。
const profile = (
  <div id='dddd' class='itemClass styleBg' style='border: solid 1px red; width: 300px; height: 200px;'>dddd
    <span style='color: deepskyblue;'>eeer</span>
    <a><p>zzz</p></a>
  </div>
);

// console.log(profile);
document.body.appendChild(profile);


/* 
  doumnet.createElement 创建dom节点
  document.createTextNode(val); 创建文本节点
  dom.setAttribute(key, val); 设置属性
  dom.appendChild(); 追加子节点
  
*/