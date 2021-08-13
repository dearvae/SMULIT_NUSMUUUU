import MyLayout from "../component/global/layout";
import Search from "./lawyers/search";
import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";

export default function Services() {
  const { TabPane } = Tabs;

  const Demo = () => (
    <Tabs defaultActiveKey="1" centered size="Large">
      <TabPane tab="Divorce" key="1">
        <Search serviceType={DivorceInfo}></Search>
      </TabPane>
      <TabPane tab="Will(Probate)" key="2">
        <Search serviceType={willInfo}></Search>
      </TabPane>
      <TabPane tab="Employment" key="3">
        <Search serviceType={EmploymentInfo}></Search>
      </TabPane>
      <TabPane tab="Crimial" key="4">
        <Search serviceType={CrimialInfo}></Search>
      </TabPane>
      <TabPane tab="Dispute" key="5">
        <Search serviceType={DisputeInfo}></Search>
      </TabPane>
      <TabPane tab="Resolution" key="6">
        <Search serviceType={ResolutionInfo}></Search>
      </TabPane>
      <TabPane tab="Real Estate" key="7">
        <Search serviceType={RealEstateInfo}></Search>
      </TabPane>
      <TabPane tab="Loan" key="8">
        <Search serviceType={LoannInfo}></Search>
      </TabPane>
      <TabPane tab="Immigration" key="9">
        <Search serviceType={ImmigrationInfo}></Search>
      </TabPane>
      <TabPane tab="Others" key="9">
        <Search serviceType={OthersInfo}></Search>
      </TabPane>
    </Tabs>
  );
  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Our Lawyers</h1>
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
  },
  {
    lawyerName: "Gloria James-Civetta",
    des: "Gloria James is a Singapore born lawyer of Sri Lankan heritage, bilingual in English and Mandarin with 24 years of legal experience in the field of Family Law. She is an advocate & solicitor, barrister, mediator and collaborative practice lawyer.",
    yearofpra: 24,
    link: "https://www.singaporedivorcelawyer.com.sg/gloria-james-civetta/",
    hp: "+65 6337 0469",
    lang: " Mandarin,English",
    pos: "Head Lawyer",
  },
  {
    lawyerName: "Johanna Yeow",
    yearofpra: 5,
    link: "https://www.singaporedivorcelawyer.com.sg/johanna-yeow/",
    hp: "+65 6337 0469",
    lang: "Mandarin,English",
    pos: "Senior Lawyer",
    des: "Johanna graduated from the Singapore Management University (“SMU”) in 2016 and was admitted as an Advocate and Solicitor of the Supreme Court of Singapore in 2017. In SMU, Johanna was awarded the Yong Pung How Bursary (Law) for good academic results, active CCA and community involvement.",
  },
  {
    lawyerName: "HU Huimin",
    yearofpra: 10,
    link: "https://www.cnplaw.com/singapore-lawyers/hu-huimin",
    hp: "+65 6349 8710",
    lang: "Mandarin,English",
    pos: "Partner",
    des: "Huimin also has a specialised focus in private client and family-related matters. This includes advising on pre-nuptial and post-nuptial agreements, high net-worth financial settlements arising out of divorce and relationship breakdown, interim financial applications, complex discovery applications and disputes involving children. She has considerable experience in high value divorces involving non-disclosure of assets, cross-jurisdiction assets and multi-million dollars assets. She has also acted for clients in both contentious and non-contentious probate matters, deputyship applications, divorce proceedings, ancillary matters, custody and maintenance issues.\n Huimin is a keen advocate. She has appeared before the Family Justice Courts and the High Court in highly contentious cases and complex litigation. She also has also facilitated the resolution of many cases through private settlements and mediation.",
  },
];
const willInfo = [];
const EmploymentInfo = [];
const CrimialInfo = [];
const DisputeInfo = [];
const ResolutionInfo = [];
const RealEstateInfo = [];
const LoannInfo = [];
const ImmigrationInfo = [];
const OthersInfo = [];
Services.getLayout = (services) => <MyLayout number="4">{services}</MyLayout>;
