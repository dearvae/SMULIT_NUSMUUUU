import Link from 'next/link'
import React, { useState } from 'react';
import { Row, Col, Button, Select, Cascader, Form, Input, DatePicker,PageHeader,Steps} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,ApartmentOutlined } from '@ant-design/icons';


const { Step } = Steps;

const { Option } = Select;
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


export default function Register() {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="65">+65</Option>
            <Option value="60">+60</Option>
            <Option value="62">+62</Option>
            <Option value="66">+66</Option>
            <Option value="84">+84</Option>
            <Option value="95">+95</Option>
            <Option value="63">+63</Option>
          </Select>
        </Form.Item>
      );
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
                initialValues={{
                  location: ['singapore', 'centralsingapore', ],
                  prefix: '65',
                }}
                scrollToFirstError
                style={{margin:"auto auto"}}
                >
                
                <Row>
                <Col span={20}  style={{margin:"auto auto", paddingBottom:"20px",textAlign:"center"}}>
                <Steps>
                  <Step status="process" title="Register" icon={<LoadingOutlined />} />
                  <Step status="wait" title="ID Verification" icon={<SolutionOutlined />} />
                  <Step status="wait" title="Done" icon={<SmileOutlined />} />
                </Steps>
                </Col>
                </Row>
                
              <Row>
                <Col span={20} >
                  <Form.Item 
                      label="First Name"
                      name="firstname"
                      rules={[{required: true,
                              message: 'Please input your first name!',},
                          ]} >
                      <Input />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item 
                        label="Middle Name"
                        name="middlename"
                        >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item 
                        label="Last Name"
                        name="lastname"
                        rules={[
                            {required: true,
                                message: 'Please input your last name!',},
                            ]}
                        >
                    <Input />
                    </Form.Item>
                </Col>
              </Row>

                <Row>
                  <Col span={20}>
                    <Form.Item label="Birth Date">
                    <DatePicker />
                    </Form.Item>
                  </Col>

                  <Col span={20}>
                  <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your phone number!',
                        },
                      ]}
                    >
                      <Input
                        addonBefore={prefixSelector}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>

                  </Col>

                  <Col span={20}>
                  <Form.Item label="Gender">
                    <Select>
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                        <Select.Option value="Prefer not to say">Prefer not to say</Select.Option>
                    </Select>
                  </Form.Item>
                  </Col>

                </Row>
                
                <Col span="20">
                <Form.Item 
                    label="Email Address"
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                        >
                <Input />
                </Form.Item>
                </Col>

                <Col span="20">
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>

                <Col span="20">
                <Form.Item
                      label="Confirm Password"
                      name="confirmPassword"
                      rules={[
                      {
                          required: true,
                          message: 'Please input your password again!',
                      },
                      ]}
                  >
                    <Input.Password />
                </Form.Item>
                </Col>

                <Form.Item
                    wrapperCol={{
                    offset: 10,
                    span: 6,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'create succesfully!',
                        },
                        ]}
                >
                    <Button 
                    htmlType="submit" 
                    shape="round"
                    style={{marginTop:"5px", width:"200px", height:"40px",fontSize:"20px", 
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderColor:"#f4801b",backgroundColor:"#f4801b",color:"white"}}
                    >
                         <Link href="/lawyer/registerIdVerification">
                        <a>next</a>
                        </Link>
                    </Button>
                    </Form.Item>
                
                </Form>
            </div>
         
          </div>
     </>
    )
  }