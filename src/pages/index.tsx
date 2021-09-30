import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <p>
        <Link to="/demo1">去示例1</Link>
      </p>
      <p>
        <Link to="/demo2">去示例2</Link>
      </p>
    </div>
  );
}
