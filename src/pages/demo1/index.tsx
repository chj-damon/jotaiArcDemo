import { useMount } from 'ahooks';
import { Form, Input, Button } from 'antd';
import { atom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import useFormHooks, { formAtom } from '../useFormHooks';

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'zhangsan',
        age: 43,
      });
    }, 2000);
  });
}

/**
 * 初始化表单内容
 */
const formInitAtom = atom(null, async (get) => {
  const result = await fetchData();
  get(formAtom)?.setFieldsValue(result);
});

/**
 * 提交表单数据
 */
const formSubmitAtom = atom(null, async (get, set, values) => {
  // await something
  console.log(values);
  get(formAtom)?.setFieldsValue({
    name: 'test',
    age: 23,
  });
});

/**
 * 1. form保存在atom里面，解决在不同组件中使用同一个hook时form实例不能共享的问题。
 * 2. 逻辑保存在atom里面，atom作为比hooks更小的逻辑承载单元，使用更灵活，还没有多个组件用同一个hook时状态无法共享的问题
 */
export default function App() {
  const { form } = useFormHooks();
  const init = useUpdateAtom(formInitAtom);
  const handleSubmit = useUpdateAtom(formSubmitAtom);

  // 组件挂载后执行
  useMount(init);

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item name="name" label="姓名">
        <Input />
      </Form.Item>
      <Form.Item name="age" label="年龄">
        <Input />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
}
