import { Typography, Button, Radio, Modal, InputNumber, Tooltip} from 'antd';
const { Title } = Typography;
import { useState } from 'react';
import { useRouter } from 'next/router'
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';

export default function propertyContent(props) {
    const router = useRouter();
    const {isValid, setIsValid} = props;
    const [showQuestion2, setShowQuestion2] = useState(false);
    const [showQuestion3, setShowQuestion3] = useState(false);
    const [showQuestion4, setShowQuestion4] = useState(false);
    const [value, setValue] = useState(0);
    const [canCheck, setCanCheck] = useState(true);

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

    function onChange1(e){
        if(e.target.value=="yes") {
            setShowQuestion2(true);
        } else {
            setIsValid(true);
        }
    };

    function onChange2(e){
        if(e.target.value=="yes") {
            error("You do not qualify for legal aid, because you own more than one property.");
        } else {
            setShowQuestion3(true);
        }
    };

    function onChange3(e){
        if(e.target.value=="yes") {
            setShowQuestion4(true);
        } else {
            error("You do not qualify for legal aid, because your property is not used by you as your place of residence.");
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
            error("You do not qualify for legal aid, because your property's annual value is more than $13,000.");
        } else {
            setIsValid(true);
        }
    }

    return (
     <>
        <Title level={5}>
            Do you own any property?
        </Title>

        <Radio.Group
         onChange={onChange1}  buttonStyle="solid">
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
        </Radio.Group>
        { showQuestion2 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
        Do you own more than 1 property ?
        </Title>
          <Radio.Group
            onChange={onChange2} buttonStyle="solid">
              <Radio.Button value="yes">Yes</Radio.Button>
              <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </div>
        ) : null}

        { showQuestion3 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
        Do you currently reside in this property
        </Title>
          <Radio.Group
            onChange={onChange3} buttonStyle="solid">
              <Radio.Button value="yes">Yes</Radio.Button>
              <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </div>
        ) : null}

    { showQuestion4 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
            What is the 
            <Tooltip title="Annual value of your house is the gross amount at which you can reasonably be expected to be let from year to year, when you pay for the expenses of repair, insurance, maintenance or upkeep and all taxes (other than goods and services tax).">
            <b> annual value <InfoCircleOutlined /> </b>
            </Tooltip>
            of your residential property?
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