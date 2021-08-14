import MyLayout from "../component/global/layout";
import Search from "./lawyers/search";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import { Switch, Col, Row } from "antd";


export default function Services(props) {
  const { TabPane } = Tabs;

  const [language,setLanguage] = useState(true);

  var handleLanguage = (value) =>{
    setLanguage(value);
    console.log('current language is:',language);
  }

  const Demo = () => (
    <>
      <Tabs defaultActiveKey="1" centered size="Large">
        <TabPane tab={language ? "Divorce" : "离婚"} key="1">
          <Search serviceType={DivorceInfo} lang={language}></Search>
        </TabPane>
        <TabPane tab={language? "Will(Probate)" : "遗嘱"} key="2">
          <Search serviceType={willInfo} lang={language}></Search>
        </TabPane>
        <TabPane tab={language ? "Employment" : "就业"} key="3">
          <Search serviceType={EmploymentInfo} lang={language}></Search>
        </TabPane>
        <TabPane tab={language ? "Criminal" : "刑事"} key="4">
          <Search serviceType={CrimialInfo} lang={language}></Search>
        </TabPane>
        <TabPane
          tab={language ? "Dispute & Resolution" : "争议解决"}
          key="5"
        >
          <Search serviceType={DisputeInfo} lang={language}></Search>
        </TabPane>
        <TabPane tab={language  ? "Real Estate" : "房产"} key="7">
          <Search serviceType={RealEstateInfo} lang={language}></Search>
        </TabPane>
        <TabPane tab={language  ? "Loan" : "贷款"} key="8">
          <Search serviceType={LoannInfo} lang={language}></Search>
        </TabPane>
        <TabPane tab={language  ? "Immigration" : "移民"} key="9">
          <Search serviceType={ImmigrationInfo} lang={language}></Search>
        </TabPane>
        <TabPane tab={language ? "Others" : "其他"} key="9">
          <Search serviceType={OthersInfo} lang={language}></Search>
        </TabPane>
      </Tabs>
    </>
  );
  return (
    <div>
      <Row>
        <Col span={21}>
          <h1 style={{ fontSize: 30 }}>
            {language ? "Our Lawyers" : "我们的律师"}
          </h1>
        </Col>
        <Col>
          <Switch
            checkedChildren="EN"
            unCheckedChildren="CN"
            defaultChecked
            onChange={handleLanguage}
          />
        </Col>
      </Row>
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
const CrimialInfo = [
  {
    lawyerName: "Hua Yi CHu",
    yearofpra: 15,
    link: "https://dentons.rodyk.com/en/huayi-chu",
    hp: "+65 6885 3705",
    lang: "Mandarin,English",
    pos: "Partner",
    price: 4000,
    des:"Hua Yi deals with a wide scope of cases including corporate and personal insolvency, company disputes, employment law, equity and trust, credit and security, insurance, torts, construction, debt recovery and criminal defence work. He appears frequently as counsel in the Singapore courts.\n Being a firm believer of giving back to society, Hua Yi has also represented accused persons in criminal cases on a pro bono basis under the auspices of the Criminal Legal Aid Scheme.\nHua Yi is a member of Law Society’s Inquiry Panel. He has also acted for the Law Society in disciplinary proceedings."
  },
  {
    lawyerName: "Gloria James Civetta",
    yearofpra: 24,
    link: "https://www.singaporedivorcelawyer.com.sg/gloria-james-civetta/",
    hp: "+65 6337 0469",
    lang: "Mandarin,English",
    pos: "Head Lawyer",
    price: 5000,
    des:"Gloria James is a Singapore born lawyer of Sri Lankan heritage, bilingual in English and Mandarin with 24 years of legal experience in the field of Family Law. She is an advocate & solicitor, barrister, mediator and collaborative practice lawyer.\n She is a skilled litigator and negotiator who has handled many complex financial and custody cases, successfully representing local & international clients and Singapore`s expatriate community.\n Her constant training as a Mediator and Collaborative Family Law Practitioner has helped her provide additional services to her clients, enabling them to consider the alternative route to litigation in taking their case forward. Her strong working relationship with other Collaborative practitioners has led successful settlement for cases under the collaborative and mediation route."
  },
];
const DisputeInfo = [
  {
    lawyerName: "Hua Yi CHu",
    yearofpra: 15,
    link: "https://dentons.rodyk.com/en/huayi-chu",
    hp: "+65 6885 3705",
    lang: "Mandarin,English",
    pos: "Partner",
    price: 4000,
    des:"Hua Yi deals with a wide scope of cases including corporate and personal insolvency, company disputes, employment law, equity and trust, credit and security, insurance, torts, construction, debt recovery and criminal defence work. He appears frequently as counsel in the Singapore courts.\n Being a firm believer of giving back to society, Hua Yi has also represented accused persons in criminal cases on a pro bono basis under the auspices of the Criminal Legal Aid Scheme.\nHua Yi is a member of Law Society’s Inquiry Panel. He has also acted for the Law Society in disciplinary proceedings."
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
const RealEstateInfo = [
  {
    lawyerName: "CHAN Wai Mun",
    yearofpra: 10 ,
    link: "https://www.cnplaw.com/singapore-lawyers/chan-wai-mun",
    hp: "+65 6349 8738",
    lang: "Mandarin,English",
    pos: "Partner",
    price: 3600,
    des:"Wai Mun has adopted a broad-based approach in developing his technical skills. Although he started out as a litigation lawyer, he quickly widened his job scope to take on real estate work. For him, it’s a critical grounding to enhance not only legal skills but also develops a better appreciation of the commercial and private clients issues in legal practice.\n After more than 10 years of experience in litigation and commercial work, his current focus is now centred on real estate work with related commercial and advisory work as well as a broad family practice involving matrimonial and family disputes, family office, trusts, wills and probate.\n "
  },
  {
    lawyerName: "Yi Rong Ang",
    yearofpra: 11,
    link: "https://dentons.rodyk.com/en/yirong-ang",
    hp: "+65 6885 7939",
    lang: "Mandarin,English",
    pos: "Partner",
    price:3900,
    des:"Yi Rong’s areas of practice include real estate acquisitions and divestments, project development, collective sales and en bloc purchase of strata titled developments. She has advised real estate developers in all aspects of project development work, including the acquisition of development sites and the sale of residential, commercial and mixed-use developments. In the course of her practice, Yi Rong has also been involved in many collective sale projects and has experience acting for both the vendors and purchasers in such transactions, including projects such as Tampines Court, Shunfu Ville, Rio Casa, Changi Garden, City Towers, Royalville, Goh & Goh Building and Raintree Gardens."
  },
];
const LoannInfo = [
  {
    lawyerName: "Huai Yuan Chia",
    yearofpra: 4,
    link: "https://dentons.rodyk.com/en/huaiyuan-chia",
    hp: "+65 6885 7947",
    lang: "Mandarin,English",
    pos: "Partner",
    price:3900,
    des:"Huai Yuan’s experience spans a wide range of contentious and non-contentious civil and commercial matters. In addition to complex international and domestic commercial disputes and multi-jurisdictional matters, Huai Yuan has acted on and advised on matters concerning fraud, debt recovery, breaches of directors’ duties, claims for breach of trust, banking, finance and securities claims, insolvency, insurance claims, labour and employment disputes, non-compete disputes, misuse of confidential information, professional negligence and medical negligence. His practice includes acting for individuals with regard to white collar / financial crimes, and investigations on behalf of companies. He also regularly advises institutional clients and start-ups (including tech start-ups) on legal matters, including contractual disputes."
  },
];
const ImmigrationInfo = [
  {
    lawyerName: "Dalia Wong",
    yearofpra: 14,
    link: "https://www.fragomen.com/people/dalia-wong",
    hp: "+65 6854 5175",
    lang: "Mandarin,English",
    pos: "Partner",
    price:3400,
    des:"Dalia manages the inbound practice of Fragomen in Singapore, leading a large team of managers and consultants in providing a wide scope of Singapore immigration services to multinational, regional and local corporations. She is responsible for overseeing inbound visa and employment authorization matters as well as permanent resident and citizenship applications.\n Dalia has experience devising practical and compliant immigration solutions for clients on mergers and acquisitions, short-term assignments and projects to Singapore. She also provides strategic support and immigration training and updates to client HR and global mobility teams, to keep them abreast of changes in Singapore’s work authorization regime, including implementation of Singapore’s Fair Consideration Framework. "
  },
  {
    lawyerName: "Kenneth Lau",
    yearofpra: 13,
    link: "https://www.fragomen.com/people/kenneth-lau",
    hp: " +65 6854 5168",
    lang: "Mandarin,English",
    pos: "Partner",
    price:3130,
    des:"Kenneth is a Partner at Fragomen's Singapore office, where he manages the firm's Asia Pacific Coordination Center (APCC). In this capacity, he supervises a team of experienced consultants, coordinating international personnel transfer programs into the region, and holds oversight of the APCC's regional network of partner Local Advisors. In addition, Kenneth has experience within Fragomen as an Associate and Global Client Services Manager, previously based out of Fragomen's Santa Clara and Phoenix offices. His experience includes assisting a variety of clients with their global immigration needs, including coordinating and strategically consulting on their employees' moves worldwide. Prior to joining Fragomen in 2008, Kenneth was a global associate with a U.S.-based immigration law firm, where he managed a team that assisted corporate clients with transfers into Western Europe."
  },
];
const OthersInfo = [];

Services.getLayout = (services) => <MyLayout number="4">{services}</MyLayout>;
