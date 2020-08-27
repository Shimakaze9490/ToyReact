import { createElement } from './toy-react';
class MyComponent extends Component {
  render() {
    return <div>my component</div>
  }
}

// react默认小写标签名为原生标签； 大写为自定义组件class / host api 函数
document.body.appendChild(
  <MyComponent id='tiger' class='myDiv' >
    <span>name</span>
    <span>age</span>
  </MyComponent>
)
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