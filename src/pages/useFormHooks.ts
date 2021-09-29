import { useMount } from 'ahooks';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { atom, useAtom } from 'jotai';

export const formAtom = atom<FormInstance | undefined>(undefined);

export default function useFormHooks() {
  const [form] = Form.useForm();
  const [, setForm] = useAtom(formAtom);

  useMount(() => {
    setForm(form);
  });

  return { form };
}
