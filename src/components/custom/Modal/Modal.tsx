import { Modal as ModalContainer } from "antd";
import "./Modal.scss";
interface ModalProps {
  isVisible: boolean;
  setIsVisble: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisble, title, children }) => {
  return (
    <ModalContainer title={title} visible={isVisible} onOk={() => setIsVisble(false)} onCancel={() => setIsVisble(false)}>
      {children}
    </ModalContainer>
  );
};

export default Modal;
