import { useMount } from 'ahooks';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { atom, useAtom } from 'jotai';

export const formAtom = atom<FormInstance | undefined>(undefined);

/**
 * 将form保存在atom里面，以便在其他derived atom里面可以直接用form的相关API
 * 它应该放在组件的最上面，避免form在保存成功之前就被使用
 */
export default function useFormHooks() {
  const [form] = Form.useForm();
  const [, setForm] = useAtom(formAtom);

  useMount(() => {
    setForm(form);
  });

  return { form };
}
