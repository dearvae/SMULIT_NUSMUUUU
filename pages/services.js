import MyLayout from "../component/global/layout";
import Search from "./lawyers/search";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import AuthApi from "./api/AuthApi";

export default function Services(props) {
  const { TabPane } = Tabs;

  const [language, setLang] = useState("en");

  const Demo = () => (
    <Tabs defaultActiveKey="1" centered size="Large">
      <TabPane tab={language == "en" ? "Divorce" : "离婚"} key="1">
        <Search serviceType={DivorceInfo}></Search>
      </TabPane>
      <TabPane tab={language == "en" ? "Will(Probate)" : "遗嘱"} key="2">
        <Search serviceType={willInfo}></Search>
      </TabPane>
      <TabPane tab={language == "en" ? "Employment" : "就业"} key="3">
        <Search serviceType={EmploymentInfo}></Search>
      </TabPane>
      <TabPane tab={language == "en" ? "Criminal" : "刑事"} key="4">
        <Search serviceType={CrimialInfo}></Search>
      </TabPane>
      <TabPane
        tab={language == "en" ? "Dispute & Resolution" : "争议解决"}
        key="5"
      >
        <Search serviceType={DisputeInfo}></Search>
      </TabPane>
      <TabPane tab={language == "en" ? "Real Estate" : "房产"} key="7">
        <Search serviceType={RealEstateInfo}></Search>
      </TabPane>
      <TabPane tab={language == "en" ? "Loan" : "贷款"} key="8">
        <Search serviceType={LoannInfo}></Search>
      </TabPane>
      <TabPane tab={language == "en" ? "Immigration" : "移民"} key="9">
        <Search serviceType={ImmigrationInfo}></Search>
      </TabPane>
      <TabPane tab={language == "en" ? "Others" : "其他"} key="9">
        <Search serviceType={OthersInfo}></Search>
      </TabPane>
    </Tabs>
  );
  return (
    <div>
      <h1 style={{ fontSize: 30 }}>
        {language == "en" ? "Our Lawyers" : "我们的律师"}
      </h1>
      <Demo />
    </div>
  );
}
const DivorceInfo = [
  {
    lawyerName: "Suchitra Ragupathy",
    des: "Suchitra Ragupathy is a partner in our Litigation and Dispute Resolution practice and Arbitration practice. Suchitra is an active trial lawyer of 24 years standing with extensive experience in the courts. Since 1993, she has made numerous appearances before the High Court and the Court of Appeal as lead. She has successfully represented many clients in contentious court proceedings.\n Her area of practice is matrimonial law and contentious trust and probate matters. She has handled high-profile divorces and custody cases, some of which are high-publicity-risk matters, including cases involving foreign marriages and division of matrimonial assets which run into the tens of millions. Suchitra's experience in divorce and family law also includes litigating and negotiating complex matters such as high-net-worth divorce, child custody, and cross-border issues.",
    link: "https://dentons.rodyk.com/en/suchitra-ragupathy",
    yearofpra: 24,
    hp: "+65 6885 3653",
    lang: "English",
    pos: "Partner",
    price: 2000,
  },
  {
    lawyerName: "Gloria James-Civetta",
    des: "Gloria James is a Singapore born lawyer of Sri Lankan heritage, bilingual in English and Mandarin with 24 years of legal experience in the field of Family Law. She is an advocate & solicitor, barrister, mediator and collaborative practice lawyer.",
    yearofpra: 24,
    link: "https://www.singaporedivorcelawyer.com.sg/gloria-james-civetta/",
    hp: "+65 6337 0469",
    lang: " Mandarin,English",
    pos: "Head Lawyer",
    price: 3200,
  },
  {
    lawyerName: "Johanna Yeow",
    yearofpra: 5,
    link: "https://www.singaporedivorcelawyer.com.sg/johanna-yeow/",
    hp: "+65 6337 0469",
    lang: "Mandarin,English",
    pos: "Senior Lawyer",
    price: 1000,
    des: "Johanna graduated from the Singapore Management University (“SMU”) in 2016 and was admitted as an Advocate and Solicitor of the Supreme Court of Singapore in 2017. In SMU, Johanna was awarded the Yong Pung How Bursary (Law) for good academic results, active CCA and community involvement.",
  },
  {
    lawyerName: "HU Huimin",
    yearofpra: 10,
    link: "https://www.cnplaw.com/singapore-lawyers/hu-huimin",
    hp: "+65 6349 8710",
    lang: "Mandarin,English",
    pos: "Partner",
    price: 1500,
    des: "Huimin also has a specialised focus in private client and family-related matters. This includes advising on pre-nuptial and post-nuptial agreements, high net-worth financial settlements arising out of divorce and relationship breakdown, interim financial applications, complex discovery applications and disputes involving children. She has considerable experience in high value divorces involving non-disclosure of assets, cross-jurisdiction assets and multi-million dollars assets. She has also acted for clients in both contentious and non-contentious probate matters, deputyship applications, divorce proceedings, ancillary matters, custody and maintenance issues.\n Huimin is a keen advocate. She has appeared before the Family Justice Courts and the High Court in highly contentious cases and complex litigation. She also has also facilitated the resolution of many cases through private settlements and mediation.",
  },
];
const willInfo = [
  {
    lawyerName: "Suchitra Ragupathy",
    des: "Suchitra Ragupathy is a partner in our Litigation and Dispute Resolution practice and Arbitration practice. Suchitra is an active trial lawyer of 24 years standing with extensive experience in the courts. Since 1993, she has made numerous appearances before the High Court and the Court of Appeal as lead. She has successfully represented many clients in contentious court proceedings.\n Her area of practice is matrimonial law and contentious trust and probate matters. She has handled high-profile divorces and custody cases, some of which are high-publicity-risk matters, including cases involving foreign marriages and division of matrimonial assets which run into the tens of millions. Suchitra's experience in divorce and family law also includes litigating and negotiating complex matters such as high-net-worth divorce, child custody, and cross-border issues.",
    link: "https://dentons.rodyk.com/en/suchitra-ragupathy",
    yearofpra: 24,
    hp: "+65 6885 3653",
    lang: "English",
    pos: "Partner",
    price: 2000,
  },
  {
    lawyerName: "Johanna Yeow",
    yearofpra: 5,
    link: "https://www.singaporedivorcelawyer.com.sg/johanna-yeow/",
    hp: "+65 6337 0469",
    lang: "Mandarin,English",
    pos: "Senior Lawyer",
    price: 1000,
    des: "Johanna graduated from the Singapore Management University (“SMU”) in 2016 and was admitted as an Advocate and Solicitor of the Supreme Court of Singapore in 2017. In SMU, Johanna was awarded the Yong Pung How Bursary (Law) for good academic results, active CCA and community involvement.",
  },
];
const EmploymentInfo = [
  {
    lawyerName: "Melissa Thng",
    yearofpra: 15,
    link: "https://dentons.rodyk.com/en/melissa-thng",
    hp: "+65 6885 3769",
    lang: "Mandarin,English",
    pos: "Partner",
    price: 2690,
    des: "Melissa’s practice covers a broad range of commercial litigation and arbitration. Her clients include individuals from all walks of life, as well as local and international/multinational companies from a diverse range of industry sectors including energy, shipping, aviation and construction. Melissa has also had experience in family and trust disputes, employment matters and insolvency. She regularly appears at all levels of the Singapore Courts, and has conducted arbitrations under the auspices of the Singapore International Arbitration Centre (SIAC), the International Chamber of Commerce (ICC), SIA (Singapore Institute of Architects) as well as ad-hoc arbitrations under the UNCITRAL or other rules.\n Although her primary practice is adversarial, Melissa recognises the commercial benefit of amicable alternative dispute resolution and encourages her clients to explore this option where possible. In this regard, she has had extensive experience conducting direct settlement negotiations as well as institutional or ad-hoc mediation on behalf of her clients, and advising them on the conclusion of practical and enforceable settlement agreements which serve and protect their interests. ",
  },
  {
    lawyerName: "Sean Sim",
    yearofpra: 4,
    link: "https://dentons.rodyk.com/en/sean-sim",
    hp: "+65 6885 3753",
    lang: "Mandarin,English",
    pos: "Senior Associate",
    price: 1400,
    des: "Sean is a Senior Associate in Dentons Rodyk's Litigation and Dispute Resolution practice. In a short span of a few years, Sean has acted for individuals, institutions and several subsidiaries of listed companies at all levels of the Singapore Court. He has also acted for clients at several SIAC-administered arbitrations. He has experience in handling complex commercial disputes as well as industry specific disputes such as disputes in the field of construction, employment and insurance.\n ",
  },
];
const CrimialInfo = [];
const DisputeInfo = [];
const ResolutionInfo = [];
const RealEstateInfo = [];
const LoannInfo = [];
const ImmigrationInfo = [];
const OthersInfo = [];

Services.getLayout = (services) => <MyLayout number="4">{services}</MyLayout>;
