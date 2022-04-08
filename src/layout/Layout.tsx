import React from "react";
import { GithubOutlined, FacebookOutlined, InstagramOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { useState } from "react";
import { Sidebar, Header as MenuTop } from "components/layout";
import { Routes, Route } from "react-router-dom";
import routes from "routes";
import "./Layout.scss";

const { Header, Content, Footer } = Layout;
interface LayoutAppProps {}

const LayoutApp: React.FC<LayoutAppProps> = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <Layout>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          {React.createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => {
              setIsCollapse(!isCollapse);
            },
          })}
        </Header>
        <Content className="layout-admin__content">{<LoadRouters />}</Content>
        {/* <Header className="layout-admin__header">
          <MenuTop isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        </Header> */}
        <Footer className="layout-admin__footer">
          <strong>
            Copyright &copy; 2022 <b style={{ color: "#1890ff" }}>Jean Osco</b>
          </strong>
          <div>
            <Button type="link" href=" https://github.com/willjean29" target="_blank">
              <GithubOutlined />
            </Button>
            <Button type="link" href=" https://www.facebook.com" target="_blank">
              <FacebookOutlined />
            </Button>
            <Button type="link" href="https://www.instagram.com" target="_blank">
              <InstagramOutlined />
            </Button>
          </div>
          <div>
            <b style={{ color: "#1890ff" }}>Version</b> 1.0.0
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

function LoadRouters() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

export default LayoutApp;
