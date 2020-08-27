class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  setAttribute() {

  }
  appendChild() {
    
  }
}

export class Component {
  constructor(content) {
    // 初始化
    // {} 空对象不够空
    this.porps = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute(name, value) {
    this.porps[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    if (!this._root) {
      this._root = this.render().root; // 这里递归子节点
    }
    return this._root;
  }
}

export function render(component, parentElement) {
  parentElement.appendChild(component.root);
}

export function createElement(type, attributes, ...children) {
  let e;
  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type; // 
  }
  // let e = document.createElement(type);
  // 对象循环
  for (let p in attributes) e.setAttribute(p, attributes[p]);
  // 数组循环
  for(let child of children) {
    if (typeof child === 'string') child = new TextWrapper(child);
    // else if (child.nodeType === 3) {
    //   e.appendChild(createElement(child));
    // }
    e.appendChild(child);
  }
  return e;
}