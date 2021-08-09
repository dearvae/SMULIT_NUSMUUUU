import 'antd/dist/antd.css';
import Link from 'next/link'
import React, { useState } from 'react';
import { Image, Layout, Menu, Tooltip, Avatar } from 'antd';
import {
  HomeOutlined, 
  MedicineBoxOutlined, 
  ReconciliationOutlined, 
  SearchOutlined,
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
          
          {/* <Image src="" width={90}></Image> */}
          {/* <Avatar src="/easyHealthLogo.png" width={200}></Avatar> */}
        </div>
        <Menu theme="dark" defaultSelectedKeys={[number]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          
          <Menu.Item key="2" icon={<MedicineBoxOutlined />}>
            <Link href="/clinics">
              <a>Clinics</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ReconciliationOutlined />}>
            <Link href="/test">
              <a>Take a test</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SearchOutlined />}>
            <Link href="/services">
              <a>Find a lawyer</a>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="5" icon={<CompassOutlined />}>
            <Link href="/aboutus">
              <a>About Us</a>
            </Link>
          </Menu.Item> */}
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