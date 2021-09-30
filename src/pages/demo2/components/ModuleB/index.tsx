import { ModuleProvider, useScopedAtom } from 'jotai-modular';
import { useContext, useRef } from 'react';
import { Input, Button } from 'antd';
import { EventEmitterContext } from '../../EventEmitterContext';
import { scope, todoAtom } from './atoms.moduleB';
import Counter from '../Counter';

export default function ModuleB() {
  return (
    <ModuleProvider initialValues={[[todoAtom, []]]} scope={scope}>
      <SubTreeB />
      <TodoList />
      {/* 引入Counter组件，因为Counter组件里面用的是moduleA scope里的atom，在moduleB里面没有初始化，所以这里会直接报错 */}
      {/* <Counter /> */}
    </ModuleProvider>
  );
}

function SubTreeB() {
  const inputRef = useRef<Input>(null);

  const $emitter = useContext(EventEmitterContext);
  $emitter?.useSubscription(({ type }) => {
    // 只监听moduleA发射的事件
    if (type === 'moduleA') {
      inputRef.current?.focus();
    }
  });

  return <Input ref={inputRef} />;
}

function TodoList() {
  const [todos, setTodos] = useScopedAtom(todoAtom);

  return (
    <div>
      <ul>
        {todos.map((item, index) => (<li key={index}>{item.name}</li>))}
      </ul>
      <Button onClick={() => {
        const newTodoList = todos.concat([{ name: `zhangsan${Math.random().toFixed(5)}` }]);
        setTodos(() => newTodoList);
      }}>添加TODO</Button>
    </div>
  );
}
