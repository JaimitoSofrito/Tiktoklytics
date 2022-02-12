import React, { Component } from 'react';  
import { NavLink, Outlet } from 'react-router-dom';
import { Layout,  Menu } from 'antd';
import { Auth } from 'aws-amplify';
import {
  SearchOutlined,
  HomeOutlined,
  PoweroffOutlined 
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;



class Dashboard extends Component {

  constructor(props, context) {
    super(props, context);



    this.state = {
      collapsed: false,

    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  
  render() {
   
    const { collapsed } = this.state;
    async function signOut() {
      try {
          await Auth.signOut();
      } catch (error) {
          console.log('error signing out: ', error);
      }
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo" style={{ padding: 30 }} />
        <Menu theme="dark"  defaultSelectedKeys={'1'} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}  >
          <NavLink to="/" >
            Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<SearchOutlined/>} >
          <NavLink to="/hashtags" >
            Hashtags
          </NavLink>
          </Menu.Item>
          <Menu.Item key="3" onClick={signOut} icon={<PoweroffOutlined />} >
            Sign Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
            <Outlet style={ {display: "flex"}} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    );
  }
};
export default Dashboard;