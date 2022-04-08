import { Spin, Space, Alert } from "antd";
import "./Spinner.scss";
interface SpinnerProps {
  message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ message = "Loading ... " }) => {
  return (
    <div className="container-center">
      <Space size="large">
        <Spin size="large" tip={message} />
      </Space>
    </div>
  );
};

export default Spinner;
