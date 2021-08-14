import Link from 'next/link'
import React, { useState } from 'react';
import { Button, message,PageHeader,Steps} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,ApartmentOutlined } from '@ant-design/icons';
import RegisterContent from "../../component/lawyerRegistration/registerContent";
import LawyerVerificationContent from "../../component/lawyerRegistration/laywerVerificationContent";
import ServiceFeeContent from "../../component/lawyerRegistration/serviceFeeContent";
import { useRouter } from 'next/router'

const { Step } = Steps;

export default function Register() {

  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [law_name, setLawName] = useState('');
  const [address, setAddress] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [region, setRegion] = useState('');
  const [practices, setPractices] = useState('');

  const steps = [
    <RegisterContent 
      isValid={isValid} 
      setFirstName={setFirstName}
      setMiddleName = {setMiddleName}
      setLastName = {setLastName}
      setBirthday = {setBirthday}
      setPhoneNumber = {setPhoneNumber}
      setGender = {setGender}
      setEmail = {setEmail}
      setPassword = {setPassword}
      setConfirmPassword = {setConfirmPassword}
      setIsValid={setIsValid}/>,

    <LawyerVerificationContent 
      isValid={isValid} 
      setLawName = {setLawName}
      setAddress = {setAddress}
      setPostalCode = {setPostalCode}
      setRegion = {setRegion}
      setPractices = {setPractices}
      setIsValid={setIsValid}/>,

    <ServiceFeeContent 
      isValid={isValid} 
      setIsValid={setIsValid}/>
  ];


  const next = () => {
    setCurrent(current + 1);
    console.log(first_name, middle_name, last_name)
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