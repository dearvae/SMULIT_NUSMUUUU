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
import { ZhihuCircleFilled } from '@ant-design/icons';

const { Step } = Steps;

const en = {
  "successMsg1" : "Congratulations! Based on our simplified assessment, you will likely pass the means test required by Legal Aid Bureau (“LAB”)! ",
  "successMsg2" : 'Next, you may wish to visit LAB’s website for more information relating to the second stage - the Merits Test. More information on the Merits Test can be found <a target="_blank" href="https://lab.mlaw.gov.sg/legal-services/taking-the-merits-test/">[here]</a>(https://lab.mlaw.gov.sg/legal-services/taking-the-merits-test/).',
  "successMsg3" : "What you can expect?",
  "successMsg4" : "Basically, LAB will give you an appointment for Statement Taking. During that, you will be asked questions about your case. You should provide LAB with the full facts of your case as well as all the relevant documents/evidence. This helps LAB to investigate your case and assess whether legal aid should be granted to you. ",
  "successMsg5" : "After your statement is taken, LAB will assess if legal aid should be granted to you, especially whether you have reasonable grounds for bringing or defending a case in Court.",
  "backText" : "Back to Home Page",
  "meansTest" : "Means Test",
  "qualification":"Do I qualify for legal aid?",
  "startTest":"Start Test",
  "next":"Next",
  "eligibilityCheck":"Check my eligibility",


}

// const zh = {
//   "successMsg1" : "Congratulations! Based on our simplified assessment, you will likely pass the means test required by Legal Aid Bureau (“LAB”)! ",
//   "successMsg2" : 'Next, you may wish to visit LAB’s website for more information relating to the second stage - the Merits Test. More information on the Merits Test can be found <a target="_blank" href="https://lab.mlaw.gov.sg/legal-services/taking-the-merits-test/">[here]</a>(https://lab.mlaw.gov.sg/legal-services/taking-the-merits-test/).',
//   "successMsg3" : "What you can expect?",
//   "successMsg4" : "Basically, LAB will give you an appointment for Statement Taking. During that, you will be asked questions about your case. You should provide LAB with the full facts of your case as well as all the relevant documents/evidence. This helps LAB to investigate your case and assess whether legal aid should be granted to you. ",
//   "successMsg5" : "After your statement is taken, LAB will assess if legal aid should be granted to you, especially whether you have reasonable grounds for bringing or defending a case in Court.",
//   "backText" : "Back to Home Page",

// }
export default function Test(Props) {
  const {language, setLanguage} = Props;
  const [current, setCurrent] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  const text = language === 'en' ? en : zh;

  function showSuccess() {
    Modal.success({
      title: 'Congratulations! You have passed the Means Test',
      content: <>
      <p> {text.successMsg1} </p>

      <p> {text.successMsg2} </p>

      <p> {text.successMsg3} </p>

      <p> {text.successMsg4} </p>

      <p> {text.successMsg5} </p>
      </>,
      okText: `${text.backText}`,
      width:'800px',
      afterClose: () => { router.push("/") }
    });
}

  const next = () => {
    setCurrent(current + 1);
    //setIsValid(false)
  };

  const contents = [
    <Cover isValid={isValid} language={language} setIsValid={setIsValid}/>,
    <IdentityContent isValid={isValid} language={language} setIsValid={setIsValid}/>,
    <PropertyContent isValid={isValid} language={language}  setIsValid={setIsValid}/>,
    <SavingContent isValid={isValid} language={language} setIsValid={setIsValid}/>,
    <OtherContent isValid={isValid} language={language} setIsValid={setIsValid}/>
  ]

  return (
   <>
     <PageHeader
      className="site-page-header"
      title={text.meansTest}
      subTitle={text.qualification}
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
            {text.startTest}
          </Button>
        )}

        {current < contents.length - 1 && current != 0 && isValid && (
          <Button style={{float:"right"}} type="primary" onClick={() => next()}>
            {text.next}
          </Button>
        )}
        {current === contents.length - 1 && isValid && (
          <Button style={{float:"right"}} type="primary" onClick={showSuccess}>
            {text.eligibilityCheck}
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