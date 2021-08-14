import { Typography, Form, Radio, Modal } from 'antd';
const { Title } = Typography;
import { useState } from 'react';
import { useRouter } from 'next/router'
const en = {
    "title":"You are NOT eligible",
    "cancelText":"Restart",
    "okText":"Back to Home Page",
    "error1":"You need to be a Singaporean or PR in order to apply for the aid.",
    "error2":"If you are below the age of 21, your parent or guardian must apply for legal aid on your behalf.",
    "IdentityCheck":"Are you a Singapore citizens or permanent residents who are residing in Singapore?",
    "Yes":"Yes",
    "No":"No",
    "ageCheck":"Are you above 21 years old?",
}

const zh = {
    "title":"您不符合条件",
    "cancelText":"重新测试",
    "okText":"回到主界面",
    "error1":"您需要是新加坡人或新加坡永久居民，才能申请法律援助服务。",
    "error2":"如果您不满21岁，请您的父母或监护人来为您申请法律援助服务。",
    "IdentityCheck":"您是居住在新加坡的新加坡公民或新加坡永久居民吗？",
    "Yes":"是",
    "No":"否",
    "ageCheck":"您是否已满21周岁?",
}

export default function IdentityContent(props) {
    const router = useRouter();
    const {language,isValid, setIsValid} = props;
    const [showQuestion2, setShowQuestion2] = useState(false);
    const text = language === 'en' ? en : zh;
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

    function onChange1(e){
        if(e.target.value=="yes") {
            setShowQuestion2(true);
        } else {
            error(text.error1);
        }
    };

    function onChange2(e){
        if(e.target.value=="yes") {
            setIsValid(true);
        } else {
            error(text.error2);
        }
    };

    return (
     <>
        <Title level={5}>
        {text.IdentityCheck}
        </Title>

        <Radio.Group
         onChange={onChange1}  buttonStyle="solid">
            <Radio.Button value="yes">{text.Yes}</Radio.Button>
            <Radio.Button value="no">{text.No}</Radio.Button>
        </Radio.Group>
        { showQuestion2 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
        {text.ageCheck}
        </Title>
          <Radio.Group
            onChange={onChange2} buttonStyle="solid">
              <Radio.Button value="yes">{text.Yes}</Radio.Button>
              <Radio.Button value="no">{text.No}</Radio.Button>
          </Radio.Group>
        </div>
        ) : null}
       
     </>
    )
  }