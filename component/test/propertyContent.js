import { Typography, Button, Radio, Modal, InputNumber, Tooltip} from 'antd';
const { Title } = Typography;
import { useState } from 'react';
import { useRouter } from 'next/router'
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';

const en = {
    "title1":"You are NOT eligible",
    "cancelText":"Restart",
    "okText":"Back to Home Page",
    "error1":"You do not qualify for legal aid, because you own more than one property.",
    "error2":"You do not qualify for legal aid, because your property is not used by you as your place of residence.",
    "error3":"You do not qualify for legal aid, because your property's annual value is more than $13,000.",
    "title2":"Do you own any property?",
    "Yes":"Yes",
    "No":"No",
    "title3":"Do you own more than 1 property?",
    "title4":"Do you currently reside in this property?",
    "title5":"What is the",
    "title6":"Annual value of your house is the gross amount at which you can reasonably be expected to be let from year to year, when you pay for the expenses of repair, insurance, maintenance or upkeep and all taxes (other than goods and services tax).",
    "title7":"annual value",
    "title8":"of your residential property?"
}

const zh = {
    "title1":"您不符合条件",
    "cancelText":"重新测试",
    "okText":"回到主界面",
    "error1":"您不符合获得法律援助的条件，因为您拥有一个以上的房产。",
    "error2":"您不符合获得法律援助的条件，因为您的房产并没有被用作您的居住地。",
    "error3":"您不符合获得法律援助的条件，因为您房产的的年价值超过13,000美元",
    "title2":"您拥有任何的房产吗？",
    "Yes":"是",
    "No":"否",
    "title3":"你是否拥有1个以上的房产",
    "title4":"您目前是否居住在此房产内？",
    "title5":"您住宅的",
    "title6":"您住宅的年价值是指当你支付了修理、保险、维护或保养的费用和所有的税收（商品和服务税除外）后，可以获得的收入。",
    "title7":"年价值",
    "title8":"是多少？"
}
export default function propertyContent(props) {
    const router = useRouter();
    const {language,isValid, setIsValid} = props;
    const [showQuestion2, setShowQuestion2] = useState(false);
    const [showQuestion3, setShowQuestion3] = useState(false);
    const [showQuestion4, setShowQuestion4] = useState(false);
    const [value, setValue] = useState(0);
    const [canCheck, setCanCheck] = useState(true);
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

    function onChange1(e){
        if(e.target.value=="yes") {
            setShowQuestion2(true);
        } else {
            setIsValid(true);
        }
    };

    function onChange2(e){
        if(e.target.value=="yes") {
            error(text.error1);
        } else {
            setShowQuestion3(true);
        }
    };

    function onChange3(e){
        if(e.target.value=="yes") {
            setShowQuestion4(true);
        } else {
            error(text.error2);
        }
    };

    function onChange4(value){
        setValue(value);
        setIsValid(false);
        setCanCheck(true)
    };

    function onClick() {
        setCanCheck(false)
        if(value > 13000) {
            setIsValid(false);
            error(text.error3);
        } else {
            setIsValid(true);
        }
    }

    return (
     <>
        <Title level={5}>
            {text.title2}
        </Title>

        <Radio.Group
         onChange={onChange1}  buttonStyle="solid">
            <Radio.Button value="yes">{text.Yes}</Radio.Button>
            <Radio.Button value="no">{text.No}</Radio.Button>
        </Radio.Group>
        { showQuestion2 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
        {text.title3}
        </Title>
          <Radio.Group
            onChange={onChange2} buttonStyle="solid">
              <Radio.Button value="yes">{text.Yes}</Radio.Button>
              <Radio.Button value="no">{text.No}</Radio.Button>
          </Radio.Group>
        </div>
        ) : null}

        { showQuestion3 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
        {text.title4}
        </Title>
          <Radio.Group
            onChange={onChange3} buttonStyle="solid">
              <Radio.Button value="yes">{text.Yes}</Radio.Button>
              <Radio.Button value="no">{text.No}</Radio.Button>
          </Radio.Group>
        </div>
        ) : null}

    { showQuestion4 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
            {text.title5} 
            <Tooltip title={text.title6}>
            <b> {text.title7} <InfoCircleOutlined /> </b>
            </Tooltip>
            {text.title8}
        </Title>
        <div style={{paddingRight:"20px", display:"inline"}}>
            <InputNumber 
             formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
             parser={value => value.replace(/\$\s?|(,*)/g, '')}
             onChange={onChange4}
             style={{width:"100px"}} />
        </div>
             <Button disabled={!canCheck} type="primary" shape="circle" onClick={onClick} icon={<SearchOutlined />} />

        </div>
        ) : null}
       
     </>
    )
  }