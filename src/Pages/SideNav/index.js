import { useState } from "react";
import { Layout, Menu, Input } from "antd";
import {
  AppstoreTwoTone,
  HomeTwoTone,
  ProfileTwoTone,
  SettingTwoTone,
  FolderAddTwoTone,
  RightOutlined,
  GlobalOutlined,
  BellFilled,
  UserOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../images/logo.png";
import FirstDashboard from '../Dashboard/index';
import NewDashboard from '../Home/index';
import { Route, Link } from "react-router-dom";

import "./sideNav.css";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function SideNav() {
  const [openSideNav, setOpenSideNav] = useState(false);

  const onCollapse = () => {
    setOpenSideNav(!openSideNav);
  };

  return (
    <Layout
      style={{ minHeight: "100vh" }}
      className={
        openSideNav ? "sideNavClose-container" : "sideNavOpen-container"
      }
    >
      <Sider collapsed={openSideNav}>
        <div className={openSideNav ? "logo-containerClose" : "logo-container"}>
          <div className="logo-title-container">
            <img src={logo} alt="logo" className="sideNav-logo" />
            {!openSideNav && <div>Careline</div>}
          </div>
          <div className="openSideNav-arrow" onClick={onCollapse}>
            <RightOutlined />
          </div>
        </div>
        <Menu theme="light" defaultSelectedKeys={["2"]} mode="inline">
          <Menu.Item
            key="1"
            icon={<HomeTwoTone className="menuHomeIcon-style" />}
            className="sider-menu"
          >
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<AppstoreTwoTone className="menuIcon-style" />}
            className="sider-menu-dash"
          >
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <hr className="horizon-style"></hr>
          <Menu.Item
            key="3"
            icon={<FolderAddTwoTone className="menuHomeIcon-style" />}
            className="sider-menu"
          >
            Create New Complaint
          </Menu.Item>
          <SubMenu
            key="4"
            icon={<ProfileTwoTone className="menuHomeIcon-style" />}
            title="Complaint List"
            className="sider-menu"
          >
            <div className="complaintList">
              <Menu.Item key="5">
                <ul>
                  <li>List of New Complaint</li>
                </ul>
              </Menu.Item>
              <Menu.Item key="6">
                <ul>
                  <li>List of Submitted Complaint</li>
                </ul>
              </Menu.Item>
            </div>
          </SubMenu>
          <div className="setting-style">
            <Menu.Item
              key="7"
              icon={<SettingTwoTone className="menuHomeIcon-style" />}
              className="sider-menu"
            >
              {!openSideNav && 'Settings'}
            </Menu.Item>
          </div>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background">
            <div className="header-container">
              <div>
                <GlobalOutlined />
                <BellFilled />
                <Input
                  placeholder="Search"
                  className="header-input"
                  prefix={<SearchOutlined />}
                />
              </div>
              <div>
                <span>Lorem ipsum dolor</span>
                <UserOutlined />
                <DownOutlined />
              </div>
            </div>
            <span className="content-title">
              <AppstoreTwoTone />
              Dashboard
            </span>
            <Route exact path='/dashboard' component={FirstDashboard}/>
            <Route exact path='/home' component={NewDashboard}/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default SideNav;
