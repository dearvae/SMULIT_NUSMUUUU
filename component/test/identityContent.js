import { Typography, Form, Radio, Modal } from 'antd';
const { Title } = Typography;
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function IdentityContent(props) {
    const router = useRouter();
    const {isValid, setIsValid} = props;
    const [showQuestion2, setShowQuestion2] = useState(false);

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
            error("You need to be a Singaporean or PR in order to apply for the aid");
        }
    };

    function onChange2(e){
        if(e.target.value=="yes") {
            setIsValid(true);
        } else {
            error("If you are below the age of 21, your parent or guardian must apply for legal aid on your behalf.");
        }
    };

    return (
     <>
        <Title level={5}>
            Are you a Singapore citizens or permanent residents who are residing in Singapore?
        </Title>

        <Radio.Group
         onChange={onChange1}  buttonStyle="solid">
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
        </Radio.Group>
        { showQuestion2 ? (
        <div style={{paddingTop:"20px"}}>
        <Title level={5}>
        Are you above 21 years old?
        </Title>
          <Radio.Group
            onChange={onChange2} buttonStyle="solid">
              <Radio.Button value="yes">Yes</Radio.Button>
              <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </div>
        ) : null}
       
     </>
    )
  }