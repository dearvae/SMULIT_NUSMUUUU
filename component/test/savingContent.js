import { DatePicker, InputNumber, Button, Form, Modal } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { InfoCircleOutlined } from '@ant-design/icons';

export default function SavingContent(props) {
    const router = useRouter();
    const {isValid, setIsValid} = props;
    const [showQuestion2, setShowQuestion2] = useState(false);
    const [bank, setBank] = useState(0);
    const [cpf, setCPF] = useState(0);
    const [other, setOther] = useState(0);
    const [age, setAage] = useState(0);
    const [disabled, setDisabled] = useState(false);

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

    function reset() {
        setDisabled(false);
    }

    function onDateChange(date, dateString) {
        console.log(date, dateString);
        var years = moment().diff(date, 'years',false);
        console.log(years)
        setAage(years);
        reset();
    }

    function onBankChange(value) {
        console.log(value)
        setBank(value);
        reset();
    }

    function onCPFChange(value) {
        console.log(value)
        setCPF(value);
        reset();
    }

    function onOtherChange(value) {
        console.log(value)
        setOther(value);
        reset();
    }

    function onSubmit() {
        let total_savings = bank + cpf + other;
        if(age < 60 && total_savings > 10000) {
            error("You do not qualify for legal aid, because your savings is more than $10000.");
        } else if(age >= 60 && total_savings > 40000) {
            error("You do not qualify for legal aid, because your savings is more than $40000.");
        } else {
            setIsValid(true);
            setDisabled(true);
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
      <Form.Item
        label="Enter your birth date"
        name="birthdate"
        rules={[{ required: true, message: 'Please input your birth date!' }]}
      >
        <DatePicker onChange={onDateChange} style={{float:"left"}} />
      </Form.Item>

      <Form.Item
        label="Enter your bank accounts savings (personal or joint)"
        name="savings"
        rules={[{ required: true, message: 'Please input your savings!' }]}
      >
        <InputNumber
        id="1"
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onBankChange}
        style={{float:"left", width:"131px"}}
        />
      </Form.Item>

      <Form.Item
        label="Enter your overall value of shares in your Central Depository (CDP) account"
        name="cpf"
        rules={[{ required: true, message: 'This field is required' }]}
      >
        <InputNumber
        id="2"
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onCPFChange}
        style={{float:"left", width:"131px"}}
        />
      </Form.Item>

      <Form.Item
        label="Enter your other financial/investment products with a cash value"
        name="other"
        tooltip={{ title: 'Other financial/investment products include things such as fixed deposit accounts at financial institutions, and shares, bonds and exchange traded funds aside from those in your CDP account.', icon: <InfoCircleOutlined /> }}
        rules={[{ required: true, message: 'This field is required' }]}
      > 
        <InputNumber
        id="3"
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onOtherChange}
        style={{float:"left", width:"131px"}}
        />
      </Form.Item>
 
        <Button type="primary" htmlType="submit" disabled={disabled} >
          Confirm
        </Button>

    </Form>
 
       
     </>
    )
  }