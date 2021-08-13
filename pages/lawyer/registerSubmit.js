import Link from 'next/link'
import React, { useState } from 'react';
import { Row, Col, notification, Button, Form,PageHeader,Steps,Typography, Space, Modal, List, Card} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, SolutionOutlined, LoadingOutlined } from '@ant-design/icons';

const data = [
  {
      title: 'Divorce',
      image:'/divorce.png',
      label: 'Divorce', 
      value: 'Divorce' 
  },
  {
      title: 'Will',
      image:'/will.png',
      label: 'Will', 
      value: 'Will' 
  },
  {
      title: 'Employment',
      image:'/employment.png',
      label: 'Employment', 
      value: 'Employment' 
  },
  {
      title: 'Criminal',
      image:'/criminal.png',
      label: 'Criminal', 
      value: 'Criminal'
  },
  {
      title: 'Dispute Resolution',
      image:'/dispute.png',
      label: 'Dispute Resolution', 
      value: 'Dispute Resolution'
  },
  {
      title: 'Real Estate',
      image:'/real-estate-agency.png',
      label: 'Real Estate', 
      value: 'Real Estate'
  },
  {
    title: 'Loan',
    image:'/loan.png',
    label: 'Loan', 
    value: 'Loan'
  },
  {
    title: 'Immigration',
    image:'/immigration.png',
    label: 'Immigration', 
    value: 'Immigration'
  },
  {
      title: 'Others',
      image:'/others.png',
      label: 'Others', 
      value: 'Others'
  },
];

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

      const [isModalVisible, setIsModalVisible] = useState(false);

      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

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
                    <Text>Meanwhile, you may add your service and build up your profile. </Text>
                    </Space>
                </div>

                <div style={{margin:'1em'}}>
                    <h1 style ={{textAlign:'center',margin:'2em'}}>Select Your Service</h1>
                    <List
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item style={{textAlign:'center'}}>
                            <Card title={item.title} >
                                <img src={item.image} style={{width:'100px'}}></img>                   
                            </Card>

                            <Button type="primary" onClick={showModal} style={{marginTop:"10px"}}>
                                Add Service Fee
                              </Button>
                              <Modal title="Add Service Fee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                Service Fee (SGD): <input></input>
              
                              </Modal>

                        </List.Item>
                        )}
                    />
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