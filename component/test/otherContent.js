import { Typography, InputNumber, Button, Form, Modal } from 'antd';
const { Title } = Typography;
import moment from 'moment';
import { useState } from 'react';
import { useRouter } from 'next/router'


const en = {
  "inputIncome":"Please input your income",
  "your":"Your",
  "member":"Member ",
  "s":"'s",
  "income12":" total income in past 12 months",
  "title":"You are NOT eligible","Yes":"Yes",
  "cancelText":"Restart",
  "okText":"Back to Home Page",
  "error1":"You do not qualify for legal aid, because your per capita monthly household income exceeds the limit.",
  "message1":"Please add all your household members' total income in past 12 months.",
  "message2":"A household member is any person residing with you and related by:",
  "message3":"blood, marriage; or adoption.",
  "message4":"Press confirm when you have added all.",
  "label": "How many household members do you have?",
  "message5":"This field is required!",
  "confirm":"Confirm"
}

const zh = {
  "inputIncome":"请输入你的收入情况",
  "your":"你的",
  "member":"住户",
  "s":"的",
  "income12":"过去12个月的总收入",
  "title":"您不符合条件",
  "cancelText":"重新测试",
  "okText":"回到主界面",
  "error1":"您不符合获得法律援助的条件，因为您的家庭人均月收入超过了限额。",
  "message1":"请加上你所有家庭成员在过去12个月的总收入。",
  "message2":"家庭成员是指与你一起居住并有关系的任何人员:",
  "message3":"血缘、婚姻；或收养。",
  "message4":"全部添加完毕后按完成。",
  "label": "您有多少名家庭成员？",
  "message5":"此字段为必填项!",
  "confirm":"确认"
}

export default function OtherContent(props) {
    const router = useRouter();
    const {language, isValid, setIsValid} = props;
    const [num, setNum] = useState(1);
    const [values, setValues] = useState({ val: []});
    const [disabled, setDisabled] = useState(false);
    const text = language === 'en' ? en : zh;

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
            label={(i == 0 ? text.your : `${text.member}${i}${text.s} `) +  text.income12}
            name={i}
            rules={[{ required: true, message: text.inputIncome }]}
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
          title: `${text.title}`,
          content: message,
          cancelText: `${text.cancelText}`,
          onCancel: () => { router.push("/test")},
          okText: `${text.okText}`,
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
          error(text.error1);
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
        <Title level={4}>
          {text.message1}
        </Title>

        <Title level={5}>
          {text.message2}
        <br />
          {text.message3}
        <br />
          {text.message4}
        
        </Title>

        <Form.Item
        label={text.label}
        name="num"
        rules={[{ required: true, message: text.message5 }]}
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
          {text.confirm}
        </Button>

 

    </Form>
 
       
     </>
    )
  }