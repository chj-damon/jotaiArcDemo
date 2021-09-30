import { ModuleProvider } from 'jotai-modular';
import { useContext } from 'react';
import { Button } from 'antd';
import { EventEmitterContext } from '../../EventEmitterContext';
import { countAtom, scope } from './atoms.moduleA';
import Counter from '../Counter';

export default function ModuleA() {
  return (
    <ModuleProvider initialValues={[[countAtom, 0]]} scope={scope}>
      <SubTreeA />
      <Counter />
    </ModuleProvider>
  );
}

function SubTreeA() {
  const $emitter = useContext(EventEmitterContext);

  return (
    <Button
      type="primary"
      onClick={() => {
        $emitter?.emit({ type: 'moduleA' }); // 发射moduleA事件
      }}
    >
      回复
    </Button>
  );
}

