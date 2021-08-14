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
    const [values, setValues] = useState({ val: []});
    const [disabled, setDisabled] = useState(false);

    function handleChange(event, value) {
      console.log(value)
      let vals = [...values.val];
      vals[event] = value;
      setValues({ val: vals });
      setDisabled(false);
    }

    function createInputs() {
      let input_form_list = [];
      for (let i = 0; i < num; ++i) {
        input_form_list.push(
        <div key={i}>
          <Form.Item
            label={(i == 0 ? "Your " : `Member ${i}'s `) +  "total income in past 12 months"}
            name={i}
            rules={[{ required: true, message: 'Please input your income' }]}
          >
            <InputNumber
            id="1"
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={handleChange.bind(this, i)}
            style={{float:"left", width:"131px"}}
            />
          </Form.Item>
        </div>
        );}
        return input_form_list;
    }

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
      setValues( {val: []} );
      setDisabled(false);
    }

    function onSubmit() {
        setDisabled(true);
        let total_household_income = 0
        for (let i = 0; i < num; ++i) {
          total_household_income = total_household_income + values.val[i];
        }
        let PCHI = total_household_income / (num*12)
        if (PCHI > 950) {
          error("You do not qualify for legal aid, because your per capita monthly household income exceeds the limit.");
        } else {
          setIsValid(true);
        }
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

        {createInputs()}
       
           <Button type="primary" htmlType="submit" disabled={disabled} >
          Confirm
        </Button>

 

    </Form>
 
       
     </>
    )
  }