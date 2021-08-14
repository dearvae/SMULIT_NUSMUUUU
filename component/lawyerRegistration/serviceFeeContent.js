import Link from 'next/link'
import React, { useState } from 'react';
import { Row, Col, notification, Button, Form,PageHeader,Steps,Typography, Space, Modal, List, Card} from 'antd';
import 'antd/dist/antd.css';

const { Title, Text } = Typography;
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

          <div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                style={{margin:"auto auto"}}
                >

                <div style={{textAlign:"center"}}>
                    <Space direction="vertical">
                    <Text strong>Thank you for registering on our platform</Text>
                    <Text>Your account will take 1-2 working days to be verified. 
                      Meanwhile, you may add your service and build up your profile. </Text>
                    </Space>
                </div>

                <div style={{margin:'1em'}}>
                    <h1 style ={{textAlign:'center',margin:'1em'}}>Select Your Service</h1>
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
         
                </Form>
            </div>

     </>
    )
  }