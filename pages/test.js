import MyLayout from '../component/global/layout'
import { Steps, Button, PageHeader } from 'antd';
import React from 'React'
import IdentityContent from "../component/test/identityContent"
import PropertyContent from "../component/test/propertyContent"
import SavingContent from "../component/test/savingContent"
import OtherContent from "../component/test/otherContent"
import Cover from "../component/test/cover"
import { useState } from 'react';

const { Step } = Steps;

export default function Test() {
  const [current, setCurrent] = useState(0);
  const [isValid, setIsValid] = useState(false);

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
          <Button style={{float:"right"}} type="primary" onClick={() => message.success('You have passed the means test')}>
            Done
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