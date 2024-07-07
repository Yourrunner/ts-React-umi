/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */

import React, { useRef, useState } from 'react';

const App = () => {
  // 在函数式组件中，不需要做任何处理，如果一旦给定state的值，后期会自动校验
  // 当然也可以显示的去指定泛型
  const [name, setName] = useState<string>('app');
  const [list, setList] = useState<(string | number)[]>([1, 'test']);
  // 注意 使用ref的时候一定要给一个初始值null  这样后面才不会报错  当然也需要使用类型断言
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div>{name}</div>
      <button onClick={() => setName('123')}>test</button> <br />
      <br />
      <br />
      {/* 如果这里setState的值不是字符串那么就会触发校验 */}
      <input ref={ref}></input>
      <button
        onClick={() => {
          console.log((ref.current as HTMLInputElement).value);
          setList([...list, (ref.current as HTMLInputElement).value]);
        }}
      >
        click
      </button>
      {/* 这里依旧可以使用可选链运算符  或者类型断言 */}
      {list.map((item, _index) => (
        <div key={_index}>{item}</div>
      ))}
      <Child name="aaa" data={123}></Child>
    </div>
  );
};

interface MyProps {
  name: string;
  data: number;
  title?: string; //定义了如果不传就会有红波浪线  此时我想不传  加个 ？ 即可
}

/* function Child(props:MyProps){
    return(
        <div>
            <div>Child</div>
            <div>{props.name}</div>
            <div>{props.data}</div>
        </div>
    )
} */

// 第二种写法  一般情况就用第二种写法
const Child: React.FC<MyProps> = (props) => {
  return (
    <div>
      <div>Child</div>
      <div>{props.name}</div>
      <div>{props.data}</div>
    </div>
  );
};

export default App;
