import { Typography, Form, Radio, Modal } from 'antd';
const { Title } = Typography;

export default function Cover(props) {
    const {isValid, setIsValid} = props;
    setIsValid(true);
    return (
     <>
        <Title level={1}>
            Means Test for Legal Aid Bureau's Legal Aid
        </Title>

        <div style={{paddingLeft:"80px", paddingRight:"80px"}}>
        <Title level={5}>
        
        This Means Test assesses an applicant's financial circumstances to determine if the applicant have limited means. Only applicants that pass the Means Test may be eligible for Legal Aid Bureau's Legal Aid.
  
        </Title>
        </div>
     </>
    )
  }