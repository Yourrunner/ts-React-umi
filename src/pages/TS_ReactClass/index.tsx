/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable react/button-has-type */
import React from 'react';

interface MyState {
  name: string;
  list: (string | number)[];
}

// 这里第一个泛型 any是约定属性的 也就是约定父组件传递过来的Props值的
// 第二个 泛型Mystate是约定状态的 也就是约定该组件中的状态类型的

// 类组件中最特殊的一点就是使用ref的时候，一定要标注其标签类型
export default class App extends React.Component<any, MyState> {
  ref = React.createRef<HTMLInputElement>();
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'me',
      list: [1, 'test'],
    };
  }

  render(): React.ReactNode {
    return (
      <>
        <div>
          <input ref={this.ref}></input>
          {/* 这样这个ref才能正确的绑定到DOM元素上  如果是DIV那就是HTMLDivElement */}
          <button
            onClick={() => {
              console.log(this.ref.current?.value);
              console.log((this.ref.current as HTMLInputElement).value);
              // 这里会报错  因为TS认为你这里的this.ref.current可能是空值，也可能是HTMLInputElement类型
              // 解决方法： 可选链运算符  或者类型断言 这两种都可以
            }}
          >
            onClick
          </button>
        </div>

        <Child
          name="hello"
          handlerLog={() => {
            console.log('test');
          }}
        ></Child>
      </>
    );
  }
}

interface MyProps {
  name: string;
  handlerLog: () => void;
}
class Child extends React.Component<MyProps, any> {
  constructor(props: MyProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <div>
          <div>Child</div>
          <div>{this.props.name}</div>
          <button onClick={() => this.props.handlerLog()}>click</button>
        </div>
      </>
    );
  }
}
