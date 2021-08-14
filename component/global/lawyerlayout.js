import 'antd/dist/antd.css';
import Link from 'next/link'
import React, { useState } from 'react';
import { Layout, Menu,Image,Avatar} from 'antd';
import {
  HomeOutlined, 
  LogoutOutlined, 
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function MyLayout({ number, children }) {
    const [collapsed, setCollapsed] = useState(false);
    console.log(number)
  return (  
    <>  
  <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div style={{
          height: '40px',
          margin: '16px',
          textAlign: 'center'}}>
          
      
          <Avatar src="/logo.png" width={400}></Avatar>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[number]} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/lawyer/profile">
              <a>Profile</a>
            </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link href="/lawyer/">
              <a>Service</a>
            </Link>
          </Menu.Item>
      

          <Menu.Item key="3" icon={<LogoutOutlined />}>
            <Link href="/lawyer/login">
              <a>Log Out</a>
            </Link>
          </Menu.Item>
          
        </Menu>
      </Sider>
       <Layout className="site-layout">
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <main>{children}</main>
        </div>
      </Layout>
    </Layout>
    </>
  )
}