import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import { Card, Col, Row, Button, Upload, Image, Form, 
  ConfigProvider,
  Radio,
  Typography,
  Input,
  Select,
  DatePicker,
  Divider,
  Table,
  Tabs,} from 'antd';
import MyLayout from '../../component/global/lawyerlayout';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const { Option } = Select;

const { TabPane } = Tabs;

export default function Profile() {
  const [componentSize, setComponentSize] = useState('small');
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

  const [editableStr, setEditableStr] = useState('This is an editable text.');

  return (
   <>


  <div>
      <ConfigProvider componentSize={componentSize}>

        <div className="example">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Basic Information" key="1">

            <Row>
              <Col span={20} >
              <Form.Item 
                  label="Profile Image"
                  name="Profile Image" >
                <img
                width={200}
                style={{marginLeft:"100px"}}
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                />
              </Form.Item>
            </Col>
          </Row>

           <Row>
                <Col span={20} >
                  <Form.Item 
                      label="First Name"
                      name="firstname">
                      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item 
                        label="Middle Name"
                        name="middlename"
                        >
                     <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
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
                     <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
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
                  <Form.Item label="Gender">
                    <Select>
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                        <Select.Option value="Prefer not to say">Prefer not to say</Select.Option>
                    </Select>
                  </Form.Item>
                  </Col>

                </Row>

                <Form.Item
                    wrapperCol={{
                    offset: 10,
                    span: 6,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Update succesfully!',
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
                         <Link href="/lawyer/profile">
                        <a>Save Changes</a>
                        </Link>
                    </Button>
                    </Form.Item>

            </TabPane>





            <TabPane tab="Experience and Practice" key="2">
 
            <div className="example">
            
            <Card title="Experience">
            <Table
              columns={[
                { title: 'Description', dataIndex: 'description' },
                { title: 'Organization', dataIndex: 'organization' },
              ]}
              dataSource={[
                {
                  key: '1',
                  description: 'In 2015, acting for the wife and successfully obtained an equal share in the business and the assets held by the companies.',
                  organization:'High net worth individual',
                },
                {
                  key: '2',
                  description: 'In 2015, acting for the wife and successfully obtained an equal share in the business and the assets held by the companies.',
                  organization:'High net worth individual',
                },
                {
                  key: '3',
                  description: 'In 2015, acting for the wife and successfully obtained an equal share in the business and the assets held by the companies.',
                  organization:'High net worth individual',
                },
              ]}
             />
            </Card>
            </div>

            <div style ={{marginTop:"20px"}}>
            <Card title="Activities and Affiliations">
            <Table
              columns={[
                { title: 'Description', dataIndex: 'description' },
              ]}
              dataSource={[
                {
                  key: '1',
                  description: 'Seminar on Matrimonial and Probate Matters, October 29, 2013'
                },
                {
                  key: '2',
                  description: 'Seminar on Matrimonial and Probate Matters, October 29, 2013',
                },
                {
                  key: '3',
                  description: 'Seminar on Matrimonial and Probate Matters, October 29, 2013',
                },
              ]}
             />
            </Card>
            </div>
            </TabPane>
{/*             
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane> */}
          </Tabs>

        </div>
{/* 
        <div className="example">
          <Input.Search allowClear />
        </div>
        <div className="example">
          <Input.TextArea allowClear />
        </div>
        <div className="example">
          <Select defaultValue="demo" options={[{ value: 'demo' }]} />
        </div>
        <div className="example">
          <DatePicker />
        </div>
        <div className="example">
          <DatePicker.RangePicker />
        </div>
        <div className="example">
          <Button>Button</Button>
        </div> */}


      </ConfigProvider>
    </div>

   </>
  )
}


Profile.getLayout = (profile) => (
  <MyLayout number="3">
    {profile}
  </MyLayout>
)