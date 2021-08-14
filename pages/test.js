import MyLayout from '../component/global/layout'
import { Steps, Modal, Radio, Button, PageHeader } from 'antd';
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
  "successMsg2" : 'Next, you may wish to visit LAB’s website for more information relating to the second stage - the Merits Test. More information on the Merits Test can be found here (https://lab.mlaw.gov.sg/legal-services/taking-the-merits-test/).',
  "successMsg3" : "What you can expect?",
  "successMsg4" : "Basically, LAB will give you an appointment for Statement Taking. During that, you will be asked questions about your case. You should provide LAB with the full facts of your case as well as all the relevant documents/evidence. This helps LAB to investigate your case and assess whether legal aid should be granted to you. ",
  "successMsg5" : "After your statement is taken, LAB will assess if legal aid should be granted to you, especially whether you have reasonable grounds for bringing or defending a case in Court.",
  "backText" : "Back to Home Page",
  "meansTest" : "Means Test",
  "qualification":"Do I qualify for legal aid?",
  "startTest":"Start Test",
  "next":"Next",
  "eligibilityCheck":"Check my eligibility",
  "title1":"Start",
  "title2":"Identity",
  "title3":"Property",
  "title4":"Saving",  
  "title5":"Other information"
}

const zh = {
  "successMsg1" : "恭喜！ 根据我们的初步评估，您很可能会通过法律援助局要求的经济资格审查！",
  "successMsg2" : '接下来，您可以访问法律援助局的网站，来获取更多有关第二阶段 - 案情审查的信息 [更多](https://lab.mlaw.gov.sg/legal-services/taking-the-merits-test/).',
  "successMsg3" : "案情审查的基本介绍",
  "successMsg4" : "通常来说，法律援助局会为您预约一个时间。 您将被问及有关您的案件的问题。 您应向法律援助局提供关于您案件的全部事实以及所有相关文件/证据。 这有助于法律援助局调查您的案件并评估是否应向您授予法律援助。",
  "successMsg5" : "在得到相关信息后，法律援助局会考量您是否有合理的理由在法庭上提起诉讼或辩护案件，以此来评估是否应向您提供法律援助。",
  "backText" : "回到主界面",
  "meansTest" : "经济情况调查",
  "qualification":"我是否有资格获得法律援助",
  "startTest":"开始测试",
  "next":"下一步",
  "eligibilityCheck":"查看我的资格",
  "title1":"开始",
  "title2":"个人信息",
  "title3":"房产",
  "title4":"储蓄",  
  "title5":"其他"
}
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
  function onChange(e) {
    console.log('radio1 checked', e.target.value);
      setLanguage(e.target.value);
    };

    const options = [
      { label: '中文', value: 'zh' },
      { label: 'English', value: 'en' },
    ];
  return (
   <>
     <PageHeader
      className="site-page-header"
      title={text.meansTest}
      subTitle={text.qualification}
      extra={<Radio.Group options={options}  optionType="button"
      buttonStyle="solid"
      onChange={onChange} value={language} />}
      />
      <div>
        <Steps current={current} >  
          <Step title={text.title1} />  
          <Step title={text.title2} />  
          <Step title={text.title3} />  
          <Step title={text.title4} />  
          <Step title={text.title5} />  
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