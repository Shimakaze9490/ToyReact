// 基础组件
export class Component {
  constructor(content) {
    // 初始化变量
    // {} 空对象不够空
    this.porps = Object.create(null);
    this.children = [];
    this._root = null; // 私有变量
  }
  // 保存属性
  setAttribute(name, value) { 
    this.porps[name] = value;
  }

  // 保存子节点
  appendChild(component) {
    this.children.push(component.root); // *** 注意这里添加的是root实体
  }
  // 添加文本
  appendTextChild(text) {
    this.appendChild(document.createTextNode(text))
  }

  // 调一下render渲染出root
  // getter
  get root() {
    if (!this._root) {
      this._root = this.render().root; // render出来的也是component，则会递归调用 ***
    }
    return this._root;
  }
}

// // 自定义组件
export class MyComponent extends Component {
  render() {
    return <div>MyComponent dddd</div>
  }
}

// 真实渲染过程
// 实dom,挂载到父组件上。
export function render(component, parentElement) {
  parentElement.appendChild(component.root);
}

import { ElementWrapper, TextWrapper } from './warpper.js';

// createElement渲染函数。三个参数： tagName， attributes， 子节点（剩余参数）
// 递归函数
export function createElement(type, attributes, ...children) {
  let e;
  // console.log(type);
  /* type: string | function */
  if (typeof type === 'string') {
    e = new ElementWrapper(type);// 普通dom标签,中间封装一层
  } else {
    console.log(type);
    e = new type;
  }

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      const val = attributes[key];
      e.setAttribute(key, val);
    }
  }

  // 递归展开自节点
  let insertChildren = (children) => {
    for(let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }
      if (typeof child === 'object' && (child instanceof Array)) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    }
  }
  insertChildren(children);

  return e;
}