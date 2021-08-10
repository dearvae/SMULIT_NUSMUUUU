import MyLayout from '../../component/global/layout'

export default function Service() {
  return (
    <>
    {/* <div style={{paddingTop:"90px"}}>
    <Row gutter={[8, 8]}>
   <Col span={8} >
       <MyCard title="title1" description="hi"/>
     </Col>
     <Col span={8} >
       <MyCard title="title2" description="hi"/>
     </Col>  <Col span={8} >
       <MyCard title="title3" description="hi"/>
     </Col> */}
 
   {/* </Row>
   </div>
   <div>test</div> */}
    </>
  )
}

Service.getLayout = (service) => (
    <MyLayout number="4">
      {service}
    </MyLayout>
  )