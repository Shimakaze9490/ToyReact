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

// 自定义组件
export class MyComponent extends Component {
  render() {
    return <div>MyComponent</div>
  }
}

// 真实渲染过程
// 实dom,挂载到父组件上。
export function render(component, parentElement) {
  parentElement.appendChild(component.root);
}