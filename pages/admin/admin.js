
import MyLayout from '../../component/global/layout'
import { Tabs,List,Avatar,Button,Progress,Layout, Menu,Breadcrumb,Typography} from 'antd';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ConsoleSqlOutlined, DownloadOutlined,UserOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function callback(key) {
  console.log(key);
}

const ADMINNAME = "Sam";
const LAWYERS = [
                  {id: 1, name:"Tan",verification:1,yop:5,phone:"10938463",website:"www.123.com",email:"guangdongjiayi@gmail.com",language:'English',position:"Rank 1",description:"xxxxxxxxxxxxxxxxxxxxx"},
                  {id: 2, name:"Sam",verification:1,yop:5,phone:"10938463",website:"www.123.com",email:"guangdongjiayi@gmail.com",language:'English',position:"Rank 1",description:"xxxxxxxxxxxxxxxxxxxxx"},
                  {id: 3, name:"Ben",verification:0,yop:5,phone:"10938463",website:"www.123.com",email:"guangdongjiayi@gmail.com",language:'English',position:"Rank 1",description:"xxxxxxxxxxxxxxxxxxxxx"},
                  {id: 4, name:"Kan",verification:0,yop:5,phone:"10938463",website:"www.123.com",email:"guangdongjiayi@gmail.com",language:'English',position:"Rank 1",description:"xxxxxxxxxxxxxxxxxxxxx"}
                ];


export default function Admin() {

  const[verified,setVerified] = useState(0);


  useEffect (()=>{
  
      var verified = 0;
      for(let k=0;k<LAWYERS.length;k++){
        if (LAWYERS[k].verification) verified += 1;
      }
      setVerified(verified);
  },[verified]
  )
  

  return (
    <Layout>
      
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <UserOutlined style={{color:'white'}}/>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Statistics" key="1">
        <Title>Welcome Back {ADMINNAME}! </Title>
        <Title level={4}>Here are the statistics for today: </Title>
        <Progress type="circle" strokeColor="Blue" percent={100} format={percent => `${LAWYERS.length} Lawyers`} />
        <Progress type="circle" percent={verified/LAWYERS.length} format={percent => `${verified} Verified`} />
        <Progress type="circle" percent={((LAWYERS.length-verified)/LAWYERS.length)/100} format={percent => `${LAWYERS.length-verified} Pending`}/>
      </TabPane>
      <TabPane tab="All Lawyers" key="2">
            <List
              itemLayout="horizontal"
              dataSource={LAWYERS}
              renderItem={lawyer => (
                <List.Item actions={[<a href={"/admin/lawyerDetails?id="+lawyer.id} key="list-verification"><Button type="primary" shape="round" size="medium"  disabled={lawyer.verification}>{lawyer.verification ? "verified" : "pending"}</Button></a>]}>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{lawyer.name}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
        )}
        />
      </TabPane>
      <TabPane tab="Pending Verification" key="3">

        <List
          itemLayout="horizontal"
          dataSource={LAWYERS}
          renderItem={lawyer => (
            lawyer.verification ? "" :
            <List.Item actions={[<a href={"/admin/lawyerDetails?id="+lawyer.id} key="list-verification"><Button type="primary" shape="round" size="medium"  disabled={lawyer.verification}>{lawyer.verification ? "verified" : "pending"}</Button></a>]}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{lawyer.name}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
          </List.Item>
      )}
      />
      </TabPane>
  </Tabs>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    
  )
}


// Admin.getLayout = (clinic) => (
//     <MyLayout number="2">
//       {clinic}
//     </MyLayout>
//   )