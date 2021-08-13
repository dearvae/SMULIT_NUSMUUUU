import MyLayout from '../../component/global/lawyerlayout'
import Link from 'next/link'
import React, { useState }  from 'react';
import 'antd/dist/antd.css';
import {  Button,List, Card, Modal } from 'antd';

  const data = [
    {
        title: 'Divorce',
        image:'/divorce.png',
        label: 'Divorce', 
        value: 'Divorce' 
    },
    {
        title: 'Will',
        image:'/will.png',
        label: 'Will', 
        value: 'Will' 
    },
    {
        title: 'Employment',
        image:'/employment.png',
        label: 'Employment', 
        value: 'Employment' 
    },
    {
        title: 'Criminal',
        image:'/criminal.png',
        label: 'Criminal', 
        value: 'Criminal'
    },
    {
        title: 'Dispute Resolution',
        image:'/dispute.png',
        label: 'Dispute Resolution', 
        value: 'Dispute Resolution'
    },
    {
        title: 'Real Estate',
        image:'/real-estate-agency.png',
        label: 'Real Estate', 
        value: 'Real Estate'
    },
    {
      title: 'Loan',
      image:'/loan.png',
      label: 'Loan', 
      value: 'Loan'
    },
    {
      title: 'Immigration',
      image:'/immigration.png',
      label: 'Immigration', 
      value: 'Immigration'
    },
    {
        title: 'Others',
        image:'/others.png',
        label: 'Others', 
        value: 'Others'
    },
  ];

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
     <>
        <div style={{margin:'1em'}}>
            <h1 style ={{textAlign:'center',margin:'2em'}}>Your Registered Service(s)</h1>
            <List
                grid={{ gutter: 20, column: 3 }}
                dataSource={data}
                renderItem={item => (
                <List.Item style={{textAlign:'center'}}>
                    <Card title={item.title} >
                        <img src={item.image} style={{width:'100px'}}></img>                   
                    </Card>

                    <Button type="primary" onClick={showModal} style={{marginTop:"10px"}}>
                        Add Service Fee
                      </Button>
                      <Modal title="Add Service Fee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        Service Fee (SGD): <input></input>
      
                      </Modal>

                </List.Item>
                )}
            />
        </div>
     </>
    )
  }

  Home.getLayout = (home) => (
    <MyLayout number="1">
      {home}
    </MyLayout>
  )