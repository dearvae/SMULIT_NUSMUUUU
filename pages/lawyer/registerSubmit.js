import Link from 'next/link'
import React, { useState } from 'react';
import { Row, Col, notification, Button, Form,PageHeader,Steps,Typography, Space} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, SolutionOutlined, LoadingOutlined, InboxOutlined } from '@ant-design/icons';


const { Step } = Steps;
const { Title, Text } = Typography;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};



const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Registered Successfully',
    description:
      'Welcome to volunteer lawyer platform, we hope you enjoy our platform!',
  });
};


export default function RegisterSubmit() {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

      const [autoCompleteResult, setAutoCompleteResult] = useState([]);

      const onWebsiteChange = (value) => {
        if (!value) {
          setAutoCompleteResult([]);
        } else {
          setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
      };

      const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
      }));

    return (
     <>
        <PageHeader className="site-page-header"/>
            <div>
          <h1 style ={{textAlign:'center',margin:'0.2em', fontSize:"30px", marginBottom:"25px"}}> 
          Volunteer Lawyer Registration</h1>

          <div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                style={{margin:"auto auto"}}
                >
                
                <Row>
                <Col span={20}  style={{margin:"auto auto", paddingBottom:"20px",textAlign:"center"}}>
                <Steps>
                  <Step status="finish" title="Register" icon={<UserOutlined />} />
                  <Step status="process" title="ID Verification" icon={<SolutionOutlined />} />
                  <Step status="wait" title="Done" icon={<LoadingOutlined />} />
                </Steps>
                </Col>
                </Row>
            

                <Title type="success" style={{textAlign:"center", marginTop:"50px"}}>Thank you for registering on our platform</Title>
                <div style={{textAlign:"center", marginTop:"60px"}}>
                    <Space direction="vertical">
                    <Text>Your account will take 1-2 working days to be verified. </Text>
                    <Text>Meanwhile, you may start to explore our platform and build up your profile. </Text>
                    </Space>
                </div>
            
                <Row >   
                <Col span={24} style={{textAlign:"center"}}>
                    <Button 
                        htmlType="submit" 
                        shape="round"
                        style={{marginTop:"60px", width:"200px", height:"40px",fontSize:"20px", 
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        borderColor:"#f4801b",backgroundColor:"#f4801b",color:"white"}}
                        onClick={() => openNotificationWithIcon('success')}
                        >
                            <Link href="/lawyer/">
                            <a>Confirm</a>
                            </Link>
                    </Button>
                </Col>
                </Row>
         
                </Form>
            </div>
         
          </div>
     </>
    )
  }