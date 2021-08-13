
import MyLayout from '../../component/global/layout'
import { Tabs,List,Avatar,Button,Progress,Layout, Menu,Breadcrumb,Typography,Descriptions} from 'antd';
import React, { useState, useEffect} from 'react';
import  { Redirect } from 'react-router-dom'
import axios from 'axios';
import Link from 'next/link';
import { ConsoleSqlOutlined, DownloadOutlined,UserOutlined,LeftOutlined} from '@ant-design/icons';
import queryString from 'query-string'; 

// after clicking DB needs to be updated to see the changes on admin.js

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


export default function LawyerDetails() {

    const [selectedLawyer,setLawyer] = useState(0);
    const [disable, setDisable] = React.useState(false);
    const [lawyerList, setLawyerList] = React.useState(LAWYERS);
    const [id, setId] = React.useState(-1);
    
    useEffect(()=>{
            const id = queryString.parse(location.search).id;
            var details = null;
            setId(id);
            for (let lawyer of LAWYERS){
                if (lawyer.id == id){
                    details = lawyer;
                }
            }
            setLawyer(details);
            },[selectedLawyer]);
    console.log('checking selected firm:',selectedLawyer);
  
    var handleVerify = ()=>{
        var result = []
        console.log('checking id:',id);
        

        for(let k =0;k<lawyerList.length;k++){
            console.log('running lawyerlist:',lawyerList[k].id);
            if (lawyerList[k].id == id){
                let temp = lawyerList[k];
                temp.verification = 1;
                result.push(temp)
            }
            else result.push(lawyerList[k])
        }
        setLawyerList(result);
        setDisable(true);
        }

  return (
    <Layout>
      
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <UserOutlined style={{color:'white'}}/>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <div>
        <br></br>
        <Breadcrumb>
            <Breadcrumb.Item>
            <a href="\admin\admin"><LeftOutlined />  Back to Dashboard</a>
            </Breadcrumb.Item>
        </Breadcrumb>

        <br></br>

        <h2>{selectedLawyer.name}</h2>

        <Descriptions title={"About " + selectedLawyer.name} bordered>
            <Descriptions.Item label="Position">{selectedLawyer.position}</Descriptions.Item>
            <Descriptions.Item label="Years of Practice" span={2}>{selectedLawyer.yop}</Descriptions.Item>
            <Descriptions.Item label="Background" span={3}>
                {selectedLawyer.description}
            </Descriptions.Item>
            <Descriptions.Item label="Email" >
                <a href={'mailto:'+selectedLawyer.email}>{selectedLawyer.email}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Contact" span={2}>{selectedLawyer.phone}</Descriptions.Item>
            <Descriptions.Item label="Website" >
                <a href={selectedLawyer.website}>{selectedLawyer.website}</a>
                </Descriptions.Item>
        </Descriptions>
        </div>
        <Button onClick={() => setDisable(true),handleVerify} type="primary" shape="round"  size="large" disabled={disable}>
          {selectedLawyer.verification? "Verified":"Verify"}
        </Button>
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