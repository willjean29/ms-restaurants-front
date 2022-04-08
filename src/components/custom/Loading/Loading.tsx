import { Modal } from "antd";
import { Spinner } from "components/custom";
import "./Loading.scss";
interface LoadingProps {
  isVisible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isVisible }) => {
  return (
    <Modal
      // title="Modal 1000px width"
      centered
      visible={isVisible}
      footer={null}
      modalRender={() => (
        <div className="overlay-loading">
          <Spinner message="Generando Pedido" />
        </div>
      )}
    />
  );
};

export default Loading;
