// 处理普通dom标签
export class ElementWrapper {
  // 创建节点root
  constructor(type) {
    this.root = document.createElement(type); // dom实体
  }

  // 设置属性
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  // 添加子节点 ElementWrapper 类型， root才是实体
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

// 处理文本节点
export class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}