function Winter(tagName, attributes, ...children) {
  const e = document.createElement(tagName); // 实体dom节点。

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      const val = attributes[key];
      e.setAttribute(key, val);
    }
  }

  /* 子节点两种情况： string 文本类型； object dom节点类型。 */
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
  doumnet.createElement(tagName) 创建dom节点
  document.createTextNode(context); 创建文本节点
  dom.setAttribute(key, val); 设置属性
  dom.appendChild(child); 追加子节点
  
*/