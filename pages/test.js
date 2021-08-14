import MyLayout from '../component/global/layout'
import { Steps, Modal, Button, PageHeader } from 'antd';
import React from 'React'
import IdentityContent from "../component/test/identityContent"
import PropertyContent from "../component/test/propertyContent"
import SavingContent from "../component/test/savingContent"
import OtherContent from "../component/test/otherContent"
import Cover from "../component/test/cover"
import { useState } from 'react';
import { useRouter } from 'next/router'

const { Step } = Steps;

export default function Test() {
  const [current, setCurrent] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  function showSuccess() {
    Modal.success({
      title: 'Congratulations! You have passed the Means Test',
      content: "Next, you will be given an appointment for Statement Taking. During the Statement Taking, a Legal Executive will ask you questions about your case. You should provide LAB with the full facts of your case as well as all the relevant documents/evidence. This helps LAB to investigate your case and assess whether legal aid should be granted to you. After your statement is taken, LAB will investigate your case and assess if legal aid should be granted to you. LAB will assess if you have reasonable grounds for bringing or defending a case in Court (“**the Merits Test**”), after we get a thorough understanding of your case. More information on the Merits Test can be found [here](https://lab.mlaw.gov.sg/legal-services/taking-the-merits-test/).",
      okText: 'Back to Home Page',
      width:'800px',
      afterClose: () => { router.push("/") }
    });
}

  const next = () => {
    setCurrent(current + 1);
    //setIsValid(false)
  };

  const contents = [
    <Cover isValid={isValid} setIsValid={setIsValid}/>,
    <IdentityContent isValid={isValid} setIsValid={setIsValid}/>,
    <PropertyContent isValid={isValid} setIsValid={setIsValid}/>,
    <SavingContent isValid={isValid} setIsValid={setIsValid}/>,
    <OtherContent isValid={isValid} setIsValid={setIsValid}/>
  ]

  return (
   <>
     <PageHeader
      className="site-page-header"
      title="Means Test"
      subTitle="Do I qualify for legal aid?"
      />
      <div>
        <Steps current={current} >  
          <Step title="Means Test" />  
          <Step title="Identity" />     
          <Step title="Property" />
          <Step title="Saving" />
          <Step title="Other information" />
        </Steps>
        <div className="steps-content">
       
          {contents[current]}
        </div>

        {current === 0 && isValid && (
          <Button style={{float:"right"}} type="primary" onClick={() => next()}>
            Start Test
          </Button>
        )}

        {current < contents.length - 1 && current != 0 && isValid && (
          <Button style={{float:"right"}} type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === contents.length - 1 && isValid && (
          <Button style={{float:"right"}} type="primary" onClick={showSuccess}>
            Check my eligibility
          </Button>
        )}
      </div>

   </>
  )
}

Test.getLayout = (test) => (
    <MyLayout number="3">
      {test}
    </MyLayout>
  )