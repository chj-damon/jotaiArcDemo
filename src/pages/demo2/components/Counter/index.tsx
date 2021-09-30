import { useScopedAtom, useScopedAtomValue } from "jotai-modular";
import { Button } from 'antd';
import { globalAtom } from "../../atoms.global";
import { countAtom } from "../ModuleA/atoms.moduleA";

export default function Counter() {
  const [count, setCount] = useScopedAtom(countAtom);
  const globalState = useScopedAtomValue(globalAtom);

  return (
    <div>
      <div>global state: {globalState}</div>
      <div>count: {count}</div>
      <Button onClick={() => setCount(c => c + 1)}>增加</Button>
      <Button onClick={() => setCount(c => c - 1)}>减少</Button>
    </div>
  );
}
