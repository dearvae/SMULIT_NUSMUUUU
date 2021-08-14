import Link from 'next/link'
import React, { useState } from 'react';
import { Row, Col, notification, Button, Select, Cascader, Form, Input, DatePicker,PageHeader,Steps,Upload, message } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,ApartmentOutlined,InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


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
];


export default function RegisterIDVerification() {

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
            

                <Col span="20">
                <Form.Item 
                    label="Law Firm "
                    name="lawfirm"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Law Firm!',
                      },
                    ]}
                        >
                <Input />
                </Form.Item>
                </Col>

                <Col span="20">
                <Form.Item 
                    label="Address"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the address!',
                      },
                    ]}
                        >
                <Input />
                </Form.Item>
                </Col>

                <Col span="20">
                <Form.Item 
                    label="Postal Code "
                    name="postalcode"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your postal code!',
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
                      label="Location "
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
                    label="Years of Practice"
                    name="position"
                    rules={[
                      { 
                        message: 'Please input your Position!',
                      },
                    ]}
                        >
                <Input />
                </Form.Item>
                </Col>

                <Row>
                <Col span="20">
                <Form.Item 
                    label="Practicing Certificate"
                    name="practicingcertificate"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Position!',
                      },
                    ]}>
                    <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                    </p>
                    </Dragger>
                </Form.Item>
                </Col>
                </Row>
                </Form>
            </div>

     </>
    )
  }