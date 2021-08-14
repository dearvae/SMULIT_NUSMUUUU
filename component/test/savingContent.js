import { DatePicker, InputNumber, Button, Form, Modal } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { InfoCircleOutlined } from '@ant-design/icons';
const en = {
  "title1":"You are NOT eligible",
  "cancelText":"Restart",
  "okText":"Back to Home Page",
  "error1":"You do not qualify for legal aid, because your savings is more than $10000.",
  "error2":"You do not qualify for legal aid, because your savings is more than $40000.",
  "Yes":"Yes",
  "No":"No",
  "label1":"Enter your birth date",
  "label2":'Please input your birth date!',
  "label3":"Enter your bank accounts savings (personal or joint)",
  "label4":"Please input your savings!",
  "label5":"Enter your overall value of shares in your Central Depository (CDP) account",
  "label6":"This field is required",
  "label7":"Enter your other financial/investment products with a cash value",
  "label8":"Other financial/investment products include things such as fixed deposit accounts at financial institutions, and shares, bonds and exchange traded funds aside from those in your CDP account.",
  "label9":"This field is required",
  "confirm":"Confirm",
}

const zh = {
  "title1":"您不符合条件",
  "cancelText":"重新测试",
  "okText":"回到主界面",
  "error1":"您不符合获得法律援助的条件，因为您的储蓄超过了10000新币。",
  "error2":"您不符合获得法律援助的条件，因为您的储蓄超过了40000新币。",
  "Yes":"是",
  "No":"否",
  "label1":"输入您的出生日期",
  "label2":"请输入您的出生日期！",
  "label3":"请输入您的银行存款（包含个人或联合账户）",
  "label4":"请输入您的银行存款！",
  "label5":"请输入您在中央托管（CDP）账户中的股票总价值",
  "label6":"此字段为必填项!",
  "label7":"请输入您的其它具有现金价值的金融/投资产品",
  "label8":"其它金融/投资产品包括金融机构的定期存款账户，以及除您的 CDP 账户之外的股票、债券和交易所交易基金。",
  "label9":"此字段为必填项!",
  "confirm":"确认",
}

export default function SavingContent(props) {
    const router = useRouter();
    const {language,isValid, setIsValid} = props;
    const [showQuestion2, setShowQuestion2] = useState(false);
    const [bank, setBank] = useState(0);
    const [cpf, setCPF] = useState(0);
    const [other, setOther] = useState(0);
    const [age, setAage] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const text = language === 'en' ? en : zh;

    function error(message) {
        Modal.confirm({
          title: `${text.title1}`,
          content: message,
          cancelText: `${text.cancelText}`,
          onCancel: () => { router.push("/test")},
          okText: `${text.okText}`,
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
            error(text.error1);
        } else if(age >= 60 && total_savings > 40000) {
            error(text.error2);
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
        label={text.label1}
        name="birthdate"
        rules={[{ required: true, message:text.label2}]}
      >
        <DatePicker onChange={onDateChange} style={{float:"left"}} />
      </Form.Item>

      <Form.Item
        label={text.label3}
        name="savings"
        rules={[{ required: true, message: text.label4}]}
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
        label={text.label5}
        name="cpf"
        rules={[{ required: true, message:text.label6 }]}
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
        label={text.label7}
        name="other"
        tooltip={{ title: text.label8, icon: <InfoCircleOutlined /> }}
        rules={[{ required: true, message: text.label9}]}
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
          {text.confirm}
        </Button>

    </Form>
 
       
     </>
    )
  }