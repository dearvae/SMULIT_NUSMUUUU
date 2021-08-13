
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
    {id:"1",name:"David's Firm",postalcode:"543273",walkin:1,shariah:1,address:'Punggol Centre',region:'W',citizenship:['Permanent Resident','Singaporean'],'shariah':1,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"},
    {id:"2",name:"Kelvin's Firm",postalcode:"549272",walkin:0,shariah:1,address:'Jurong Centre',region:'E',citizenship:['Other'],'shariah':1,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"},
    {id:"3",name:"Benjamins's Firm",postalcode:"456098",walkin:1,shariah:0,address:'Clementi',region:'E',citizenship:['Singaporean'],'shariah':0,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"},
    {id:"4",name:"Jason's Firm",postalcode:"123098",walkin:0,shariah:0,address:'Bedok',region:'S',citizenship:['Permanent Resident'],'shariah':0,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"}
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
    
    useEffect(()=>{
            const id = queryString.parse(location.search).id;
            var details = null;
            for (let firm of LAWFIRM){
                if (firm.id == id){
                    details = firm;
                }
            }
            setFirm(details);
            },[selectedFirm]);
    console.log('checking selected firm:',selectedFirm);
    
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
            <Descriptions.Item label="Opening Hours">{selectedFirm.openinghrs}</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>{selectedFirm.address}</Descriptions.Item>
            <Descriptions.Item label="Background" span={3}>
                {selectedFirm.description}
            </Descriptions.Item>
            <Descriptions.Item label="Email" >
                <a href={'mailto:'+selectedFirm.email}>{selectedFirm.email}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Contact" span={2}>{selectedFirm.phone}</Descriptions.Item>
            <Descriptions.Item label="Website" >
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