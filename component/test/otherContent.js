import { Typography, InputNumber, Button, Form, Modal } from 'antd';
const { Title } = Typography;
import moment from 'moment';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { PlusOutlined } from '@ant-design/icons';

export default function OtherContent(props) {
    const router = useRouter();
    const {isValid, setIsValid} = props;
    const [num, setNum] = useState(1);

    function error(message) {
        Modal.confirm({
          title: 'You are NOT eligible',
          content: message,
          cancelText: 'Restart',
          onCancel: () => { router.push("/test")},
          okText: 'Back to Home Page',
          afterClose: () => { router.push("/") }
        });
    }

    function onNumChange(value) {
      setNum(value);
    }

    function onSubmit() {
        // let total_savings = bank + cpf + other;
        // if(age < 60 && total_savings > 10000) {
        //     error("You do not qualify for legal aid, because your savings is more than $10000.");
        // } else if(age >= 60 && total_savings > 40000) {
        //     error("You do not qualify for legal aid, because your savings is more than $40000.");
        // } else {
        //     setIsValid(true);
        //     setDisabled(true);
        // }
    }

    let input_form_list = [];
        for (let i = 2; i < num; ++i) {
          input_form_list.push(
              <>
                <Form.Item
                key={`member_${i}`}
                label={`Household member ${i}`}
                name="num"
                rules={[{ required: true, message: 'This field is required!' }]}
                >
                  <InputNumber
                  id="1"
                  min={1}
                  max={10}
                  onChange={onNumChange}
                  style={{float:"left", width:"131px"}}
                  />
                </Form.Item>
              </>
            )
    }

    return (
     <>
    <Form
      name="basic"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      onFinish={onSubmit}
    >
        <Title level={2}>
            Please add all your household members' total income in past 12 months including yours.
        </Title>

        <Title level={5}>
        A household member is any person residing with you and related by:
        <br />
        blood marriage; or adoption.
        <br />
        Press finish when you have added all.
        </Title>

        <Form.Item
        label="How many household members do you have?"
        name="num"
        rules={[{ required: true, message: 'This field is required!' }]}
      >
        <InputNumber
        id="1"
        min={1}
        max={10}
        onChange={onNumChange}
        style={{float:"left", width:"131px"}}
        />
      </Form.Item>

        {/* <div>
        <Button type="primary" icon={<PlusOutlined />}>Add</Button>
        </div> */}

        number of people, generate 5 input
       
      {/* <Form.Item
        label="Your total income in past 12 months"
        name="income"
        rules={[{ required: true, message: 'Please input your income' }]}
      >
        <InputNumber
        id="1"
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}

        style={{float:"left", width:"131px"}}
        />
      </Form.Item> */}

 
  

    </Form>
 
       
     </>
    )
  }