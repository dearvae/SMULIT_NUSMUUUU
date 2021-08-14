import Link from 'next/link'
import React, { useState } from 'react';
import { Row, Col, Button, Select, Cascader, Form, Input, DatePicker,PageHeader,Steps} from 'antd';
import 'antd/dist/antd.css';

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

export default function Register(Props) {
  const { setFirstName, setMiddleName, setLastName,setBirthday,setPhoneNumber,
    setGender,setEmail,setPassword,setConfirmPassword } = Props

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  const onFirstNameChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setFirstName(value)
  }

  const onMiddleNameChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setMiddleName(value)
  }

  const onLastNameChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setLastName(value)
  }

  const onBirthdayChange = (date, dateString) => {
    console.log(dateString)
    setBirthday( dateString)
  }

  const onPhoneNumberChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setPhoneNumber(value)
  }

  const onGenderChange = (value) => {
    // const { value } = e.target;
    console.log(`${value}`)
    setGender(`${value}`)
  }

  const onEmailChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setEmail(value)
  }

  const onPasswordChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setPassword(value)
  }

  const onConfirmPasswordChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setConfirmPassword(value)
  }

  

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
                      <Input onChange={onFirstNameChange} />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item 
                        label="Middle Name"
                        name="middlename"
                        >
                    <Input onChange={onMiddleNameChange}/>
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
                    <Input onChange={onLastNameChange}/>
                    </Form.Item>
                </Col>
              </Row>

                <Row>
                  <Col span={20}>
                    <Form.Item label="Birth Date">
                    <DatePicker onChange={onBirthdayChange}/>
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
                        onChange={onPhoneNumberChange}
                      />
                    </Form.Item>

                  </Col>

                  <Col span={20}>
                  <Form.Item label="Gender">
                    <Select onChange={onGenderChange}>
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
                <Input onChange={onEmailChange}/>
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
                        <Input.Password onChange={onPasswordChange}/>
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
                    <Input.Password onChange={onConfirmPasswordChange}/>
                </Form.Item>
                </Col>
                </Form>
            </div>
     </>
    )
  }