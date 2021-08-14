import { Typography, Form, Radio, Modal } from 'antd';
const { Title } = Typography;

const en = {
    "title":"Means Test for Legal Aid Bureau's Legal Aid",
    "description":"This Means Test assesses an applicant's financial circumstances to determine if the applicant have limited means. Only applicants that pass the Means Test may be eligible for Legal Aid Bureau's Legal Aid."
}

const zh = {
    "title":"法律援助局的家庭经济状况调查",
    "description":"本家庭经济状况调查会评估申请人的财务状况，以确定申请人的经济能力是否受限。 只有通过本经济状况调查的申请人才有资格获得法律援助局的法律援助。"
}
export default function Cover(props) {
    const {language, isValid, setIsValid} = props;
    setIsValid(true);
    const text = language === 'en' ? en : zh;
    return (
     <>
        <Title level={1}>
        {text.title}
        </Title>

        <div style={{paddingLeft:"80px", paddingRight:"80px"}}>
        <Title level={5}>
        
        {text.description}
        </Title>
        </div>
     </>
    )
  }