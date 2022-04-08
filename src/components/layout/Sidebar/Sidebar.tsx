import {
  HomeOutlined,
  UserOutlined,
  FileExcelOutlined,
  BankOutlined,
  AimOutlined,
  CarryOutOutlined,
  DropboxOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import Logo from "assets/icon.png";
import "./Sidebar.scss";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
interface SidebarProps {
  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapse, setIsCollapse }) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Sider
        className="admin-sider"
        collapsed={isCollapse}
        breakpoint="md"
        onBreakpoint={(broken) => {
          // console.log(broken + "dsfsdfsdfsf");
          if (broken) {
            setIsCollapse(true);
          }
        }}
      >
        <div className="image">
          <img className="image__logo" src={Logo} alt="ALEGRE - Restaurants" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Link to="/">
              <HomeOutlined />
              <span className="nav-text">Pedidos</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/recipe">
            <Link to="/recipe">
              <HomeOutlined />
              <span className="nav-text">Recetas</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/store">
            <Link to="/store">
              <HomeOutlined />
              <span className="nav-text">Almacen</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
