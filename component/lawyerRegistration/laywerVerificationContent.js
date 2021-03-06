import Link from 'next/link'
import React, { useState } from 'react';
import { Row, Col, Select, Cascader, Form, Input,Upload, message } from 'antd';
import 'antd/dist/antd.css';
import { InboxOutlined } from '@ant-design/icons';

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


export default function RegisterIDVerification(Props) {
  const { setLawName, setAddress,setPostalCode, setRegion,setPractices} = Props

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onLawFirmChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setLawName(value)
  }

  const onAddressChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setAddress(value)
  }

  const onPostalCodeChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setPostalCode(value)
  }

  const onRegionChange = (value, selectedOptions) => {
    console.log(value, selectedOptions)
    setRegion(value, selectedOptions)
  }

  const onPracticesChange = (e) => {
    const { value } = e.target;
    console.log(value)
    setPractices(value)
  }
  

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  // const onWebsiteChange = (value) => {
  //       if (!value) {
  //         setAutoCompleteResult([]);
  //       } else {
  //         setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
  //       }
  //     };

  //     const websiteOptions = autoCompleteResult.map((website) => ({
  //       label: website,
  //       value: website,
  //     }));

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
                <Input onChange={onLawFirmChange} />
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
                <Input onChange={onAddressChange}/>
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
                <Input onChange={onPostalCodeChange}/>
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
                      <Cascader options={locations} onChange={onRegionChange} />
                    </Form.Item>

                  </Col>
                </Row>

                <Col span="20">
                <Form.Item 
                    label="Years of Practice"
                    name="yearsofpractice"
                        >
                <Input onChange={onPracticesChange} />
                </Form.Item>
                </Col>

                <Row>
                <Col span="20">
                <Form.Item 
                    label="Practicing Certificate"
                    name="practicingcertificate">

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