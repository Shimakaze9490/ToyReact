import { createElement, MyComponent, render } from './toy-react';

render(<MyComponent id='tiger' class='myDiv' >
</MyComponent>, document.body);

// console.log(node);

// node 是createElement映射处理后的内容。
// class MyComponent extends Component {
//   render() {
//     return <div>my component</div>
//   }
// }

// createElement打包映射的函数方法。


// 父组件
// class Component {

// }

// // 自组件
// class MyComponent extends Component{

// }

// createElement：三个参数，代表 标签名；属性对象； 子节点（剩余参数）
// tagName, 
// function createElement(tagName, y, z) {
//   console.log(Array.from(arguments)); // 转换成真数组
// }


// console.log(node);

// render(node, document.body)

// document.body.appendChild(node.root);

// react默认小写标签名为原生标签； 大写为自定义组件class / host api 函数
// document.body.appendChild(
//   <div id='tiger' class='myDiv' >
//     <span>name</span>
//     <span>age</span>
//   </div>
// )
// document.body.appendChild(
//   <div id='tiger' class='myDiv' >
//     <span>name</span>
//     <span>age</span>
//   </div>
// )
// window.a = <div id='tiger' class='myDiv' >
//     <span>name</span>
//     <span>age</span>
// </div>