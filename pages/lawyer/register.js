
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react';
import { Row, Col, notification, Button, Select, Image, List, Cascader, Form, Input, DatePicker,PageHeader} from 'antd';
import 'antd/dist/antd.css';
import Avatar from 'antd/lib/avatar/avatar';

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

const locations = [
  {
    value: 'singapore',
    label: 'Singapore',
    children: [
      {
        value: 'centralregion',
        label: 'Central Region',
      },
      {
        value: 'eastRegion',
        label: 'East Region',
      },
      {
        value: 'northRegion',
        label: 'North Region',
      }, 
      {
        value: 'northeastRegion',
        label: 'North-East Region',
      },
      {
        value: 'westRegion',
        label: 'West Region',
      },
    ],
  },
  {
    value: 'malaysia',
    label: 'Malaysia',
    children: [
      {
        value: 'westMalaysia ',
        label: 'West Malaysia ',
        children: [
          {
            value: 'kualaLumpur',
            label: 'Kuala Lumpur',
          },
          {
            value: 'putrajaya',
            label: 'putrajaya',
          },
          {
            value: 'johor',
            label: 'Johor',
          },
          {
            value: 'kedah',
            label: 'Kedah',
          },
          {
            value: 'kelanta',
            label: 'kelantan',
          },
          {
            value: 'melaka',
            label: 'Melaka',
          },
          {
            value: 'negeriSembilan',
            label: 'Negeri Sembilan',
          },
        ],
      },
      {
        value: 'eastMalaysia ',
        label: 'East Malaysia ',
        children: [
          {
            value: 'labuan',
            label: 'Labuan',
          },
          {
            value: 'sabah',
            label: 'Sabah',
          },
          {
            value: 'sarawak',
            label: 'Sarawak',
          },
        ],
      },
    ],
  },
  {
    value: 'indonesia',
    label: 'Indonesia',
  },
  {
    value: 'thailand',
    label: 'Thailand',
  },
  {
    value: 'vietnam',
    label: 'Vietnam',
  },
  {
    value: 'myanmar',
    label: 'Myanmar',
  },
  {
    value: 'philippines',
    label: 'Philippines',
  },
];


const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Registered Successfully',
    description:
      'Welcome to easyHealth, we hope you enjoy our platform!',
  });
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
          <h1 style ={{textAlign:'center',margin:'0.2em', fontSize:"30px", marginBottom:"25px"}}> Volunteer Lawyer Registration</h1>

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
                    label="Law Firm Name"
                    name="lawfirmname"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Law Firm Name!',
                      },
                    ]}
                        >
                <Input />
                </Form.Item>
                </Col>

                <Row>
                  <Col span="20" style={{textAlign:"left", marginLight:"100px"}}>
                      <Form.Item
                      name="location"
                      label="Law Clinic Location "
                      rules={[
                        {
                          type: 'array',
                          required: true,
                          message: 'Please select your clinic location!',
                        },
                      ]}
                    >
                      <Cascader options={locations} />
                    </Form.Item>

                  </Col>
                </Row>

                <Col span="20">
                <Form.Item 
                    label="Position"
                    name="position"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Position!',
                      },
                    ]}
                        >
                <Input />
                </Form.Item>
                </Col>
                
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
                    borderColor:"#7dc98f",backgroundColor:"#7dc98f",color:"white"}}
                    onClick={() => openNotificationWithIcon('success')}
                    >
                         <Link href="/doctor/login">
                        <a>Submit</a>
                        </Link>
                    </Button>
                    </Form.Item>
                
                </Form>
            </div>
         
          </div>
     </>
    )
  }