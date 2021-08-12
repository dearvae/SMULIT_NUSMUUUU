import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyLayout from '../component/global/layout'
import Link from 'next/link'
import { Card, Col, Row, Button} from 'antd';

const { Meta } = Card;

export default function Home() {
  return (
    //
    
    <div className="site-card-wrapper" style={{display: 'flex',justifyContent:'center',alignItems:'center',height: '100vh'}}>
        <Row gutter={16} align="center">
          <Col span={8}>
            <Card
            style={{ width: 350 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Link href="/test"><Button type='primary'>Check my Eligibility</Button></Link>
            ]}
          >
            <Meta
              title="Check My Eligibility"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Link href="/clinics"><Button type='primary'>View All Clinics</Button></Link>
              ]}
            >
              <Meta
                title="View all Clinics"
                description="This is the description"
              />
            </Card>
        </Col>
        <Col span={8}>
          <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Link href="/services"><Button type='primary'>View all Lawyers</Button></Link>
              ]}
            >
              <Meta
                title="View all Lawyers"
                description="This is the description"
              />
            </Card>
        </Col>
        </Row>
      </div>
  )
}
Home.getLayout = (home) => (
  <MyLayout number="1">
    {home}
  </MyLayout>
)