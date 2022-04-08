import { Button, Modal } from "antd";
import { MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "assets/icon.png";
interface HeaderProps {
  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isCollapse, setIsCollapse }) => {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img src={Logo} alt="ALEGRE - Restaurants" className="menu-top__left-logo" />
        <Button type="link" onClick={() => setIsCollapse(!isCollapse)}>
          {isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
    </div>
  );
};

export default Header;
