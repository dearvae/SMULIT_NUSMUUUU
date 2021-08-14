import Link from 'next/link'
import React, { useState } from 'react';
import { Button, message,PageHeader,Steps} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,ApartmentOutlined } from '@ant-design/icons';
import RegisterContent from "../../component/lawyerRegistration/registerContent"
import LawyerVerificationContent from "../../component/lawyerRegistration/laywerVerificationContent"
import ServiceFeeContent from "../../component/lawyerRegistration/serviceFeeContent"

const { Step } = Steps;

export default function Register() {

  const [current, setCurrent] = useState(0);
  const [isValid, setIsValid] = useState(false);
  
  const steps = [
    <RegisterContent isValid={isValid} setIsValid={setIsValid}/>,
    <LawyerVerificationContent isValid={isValid} setIsValid={setIsValid}/>,
    <ServiceFeeContent isValid={isValid} setIsValid={setIsValid}/>
  ];


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


    return (
     <>
       <PageHeader className="site-page-header"/>
          <h1 style ={{textAlign:'center', fontSize:"26px"}}> 
          Volunteer Lawyer Registration</h1>

     <div style={{margin:"1.5em"}}>
      <Steps current={current}>
        <Step title="Register" />
        <Step title="ID Verification" />
        <Step title="Done" />
      </Steps>

      <div className="steps-content">{steps[current]}</div>

      <div className="steps-action" style={{marginTop:"10px", textAlign:"center"}}>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
  
      </div>

      </div>
     </>
    )
  }