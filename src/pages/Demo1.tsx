import { useEffect } from '@umijs/renderer-react/node_modules/@types/react';
import { useMount } from 'ahooks';
import { Form, Input, Button } from 'antd';
import { atom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import useFormHooks, { formAtom } from './useFormHooks';

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

const formInitAtom = atom(null, async (get) => {
  console.log(123);
  const result = await fetchData();
  get(formAtom)?.setFieldsValue(result);
});

const formSubmitAtom = atom(null, async (get, set, values) => {
  // await something
  console.log(values);
  get(formAtom)?.setFieldsValue({
    name: 'test',
    age: 23,
  });
});

export default function Demo1() {
  const { form } = useFormHooks();
  const init = useUpdateAtom(formInitAtom);
  const handleSubmit = useUpdateAtom(formSubmitAtom);

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
