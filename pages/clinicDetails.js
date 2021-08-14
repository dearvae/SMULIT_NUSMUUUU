
import MyLayout from '../component/global/layout'
import { Carousel, Breadcrumb, Descriptions, Badge} from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import {
    LeftOutlined
  } from '@ant-design/icons';
import queryString from 'query-string'; 

const LAWFIRM = [
  {id:"1",name:"Law Society South East District",postalcode:"408600",walkin:1,shariah:0,address:'Singapore Post Centre #02-01 10 Eunos Road 8Singapore 408600',region:'East',citizenship:['Permanent Resident','Singaporean'],'shariah':1,description:"Members of the public/residents need to call Law Society of Singapore at 65360650 for appointment. They can also email to ProBonoServices@lawsoc.org.sg or register at any Family Service Centre. See website for more details.",website:"https://legalclinics.sg/index.php?item=51",phone:"65360650",email:"probonoservices@lawsoc.org.sg",openinghrs:"Tuesdays 7 - 9pm"},
  {id:"2",name:"Law Society North West District",postalcode:"730900",walkin:0,shariah:1,address:'Woodlands Civic Centre 6th floor 900 South Woodlands Drive Singapore 730900',region:'North',citizenship:['Permanent Resident','Singaporean'],'shariah':1,description:"Members of the public/residents need to call Law Society of Singapore at 65360650 for appointment. They can also email to ProBonoServices@lawsoc.org.sg or register at any Family Service Centre. See website for more details.",website:"https://legalclinics.sg/index.php?item=51",phone:"65360650",email:"probonoservices@lawsoc.org.sg",openinghrs:"Mondays 7-9pm"},
  {id:"3",name:"HELP Centre - Clinic",postalcode:"059725",walkin:1,shariah:0,address:'Family and Juvenile Court Building Level 3 3 Havelock Square Singapore 059725',region:'Central',citizenship:['Singaporean','Permanent Resident','Other'],'shariah':0,description:"@HELP Services Centre: free consultations with lawyers from volunteer law firms. For civil cases only. Strictly by appointment only. Please contact The Law Society of Singapore - Pro Bono Services Office at 6536 0650 for the appointment.",website:"http://app.subcourts.gov.sg/subcourts/page.aspx?pageid=77220&secid=1",phone:"65360650",email:"probonocenter@smu.edu.sg",openinghrs:"Every Wednesday 11am - 1pm"},
  {id:"4",name:"Family Court Legal Clinic",postalcode:"64355110",walkin:0,shariah:0,address:'Family and Juvenile Court Building 3 Havelock Square Singapore 059725',region:'Central',citizenship:['Singaporean','Permanent Resident','Other'],'shariah':0,description:"Legal advice is for a Family Law/Family Court related matter. Each consultation is limited to a 20 minutes.Please call 64355110 to make an appointment. This clinic is run by the Law Society.",website:"https://www.familyjusticecourts.gov.sg/QuickLink/Pages/ServicesOverview.aspx",phone:"64355110",email:"probonocenter@smu.edu.sg",openinghrs:"Wednesday 4:30pm to 5:50pm"}
]

// Opening hours / eligibility / phone / address / website / Detailed Description

function onChange(a, b, c) {
    console.log(a, b, c);
  }

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function ClinicDetails() {

    const [selectedFirm,setFirm] = useState(0);
    const [language,setLanguage] = useState(true);
    
    useEffect(()=>{
            const id = queryString.parse(location.search).id;
            const lang = queryString.parse(location.search).lang;
            if (lang == "false"){
              setLanguage(false);
            }
            var details = null;
            for (let firm of LAWFIRM){
                if (firm.id == id){
                    details = firm;
                }
            }
            setFirm(details);
            },[selectedFirm]);
    console.log('checking selected firm:',selectedFirm);
    console.log('checking selected language:',String(language));
    
  return ( 
    <div>
        <Breadcrumb>
            <Breadcrumb.Item>
            <a href="\clinics"><LeftOutlined />  Back to Clinics</a>
            </Breadcrumb.Item>
        </Breadcrumb>

        <br></br>
        <h2>{selectedFirm.name}</h2>
        
        <Carousel afterChange={onChange}>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        <Descriptions title={"About " + selectedFirm.name} bordered>
        
            <Descriptions.Item label={language ? "Opening Hours" : "营业时间"}>{selectedFirm.openinghrs}</Descriptions.Item>
            <Descriptions.Item label={language ? "Address" : "地址"} span={2}>{selectedFirm.address}</Descriptions.Item>
            <Descriptions.Item label={language ? "Background" : "背景"} span={3}>
                {selectedFirm.description}
            </Descriptions.Item>
            <Descriptions.Item label={language ? "Email" : "电子邮箱"} >
                <a href={'mailto:'+selectedFirm.email}>{selectedFirm.email}</a>
            </Descriptions.Item>
            <Descriptions.Item label={language ? "Contact" : "联系号码"} span={2}>{selectedFirm.phone}</Descriptions.Item>
            <Descriptions.Item label={language ? "Website" : "网站"} >
                <a href={selectedFirm.website}>{selectedFirm.website}</a>
                </Descriptions.Item>
            
        </Descriptions>

  </div>
  )
}

ClinicDetails.getLayout = (clinic) => (
    <MyLayout number="2">
      {clinic}
    </MyLayout>
  )