/**
 * 验证将应用模块化的可行性
 * 1. 将应用中所有的状态拆分成两种：全局状态、模块内部状态
 * 2. 全局状态不设防，模块内部状态通过Provider初始化，未被Provider初始化的状态不允许在模块内使用
 * 3. Provider作为限界上下文，作为模块分割的标志
 * 4. 模块内可以继续拆分子模块，每个子模块可以有自己的Provider
 * 5. 模块间通信，通过观察者模式（EventEmitter）实现，可以借助ahooks提供的useEventEmitter，在应用顶层借助Context注入到不同的模块
 * 6. 可以通过不同的type来控制不同的逻辑执行，比如A模块依赖B模块，C模块依赖D模块，区分这两组依赖就可以用type
 */

import { useEventEmitter } from 'ahooks';
import ModuleA from './components/ModuleA';
import ModuleB from './components/ModuleB';
import { EventEmitterProvider } from './EventEmitterContext';

export default function App() {
  const $event = useEventEmitter();
  return (
    <EventEmitterProvider value={$event}>
      <ModuleA />
      <ModuleB />
    </EventEmitterProvider>
  );
}
