import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyLayout from '../component/global/layout'
import Link from 'next/link'
import { Card, Col, Row, Button, PageHeader, Radio} from 'antd';

const { Meta } = Card;
const en = {
  "title1" : "Legal Aid Bureau's Legal Aid",
  "subtitle1" : 'Do I qualify for legal aid?',
  "buttonText1" : "Take the Means Test",
  "title2" : "Free Legal Clinic",
  "subtitle2" : 'Looking for free legal advice?',
  "buttonText2" : "View All Clinics",
  "title3" : "Professional Lawyers",
  "subtitle3" : 'Looking for legal representation?',
  "buttonText3" : "View Lawyers",
}

const zh = {
  "title1" : "法律援助",
  "subtitle1" : '我是否有资格获得法律援助?',
  "buttonText1" : "开始测试",
  "title2" : "免费法律咨询",
  "subtitle2" : '寻找免费的法律咨询？',
  "buttonText2" : "浏览所有法律诊所",
  "title3" : "专业律师",
  "subtitle3" : '正在寻找法律代表？',
  "buttonText3" : "查看律师",
}
export default function Home(Props) {
  const {language, setLanguage} = Props;
  const text = language === 'en' ? en : zh;
  function onChange(e) {
    console.log('radio1 checked', e.target.value);
      setLanguage(e.target.value);
    };

    const options = [
      { label: '中文', value: 'zh' },
      { label: 'English', value: 'en' },
    ];
  return (
    //
    <>
    <PageHeader
      className="site-page-header"
      extra={<Radio.Group options={options}  optionType="button"
      buttonStyle="solid"
      onChange={onChange} value={language} />}
      />
    <div style={{paddingTop:'100px', height: '100vh'}}>
        <Row gutter={16} align="center">
          <Col span={8}>
            <Card
            style={{ width: 350 }}
            cover={
              <img
                alt="example"
                src="https://www.picpedia.org/chalkboard/images/means-test.jpg"
              />
            }
            actions={[
              <Link href="/test"><Button type='primary'>{text.buttonText1}</Button></Link>
            ]}
          >
            <Meta
              title={text.title1}
              description={text.subtitle1}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJI1_MbiVzjWmlcoTMGikpOjGLf4XIBhGQRA&usqp=CAU"
                />
              }
              actions={[
                <Link href="/clinics"><Button type='primary'>{text.buttonText2}</Button></Link>
              ]}
            >
              <Meta
                 title={text.title2}
                 description={text.subtitle2}
              />
            </Card>
        </Col>
        <Col span={8}>
          <Card
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou83-sb3nWDU87BoHzyp3LEdjq89UfQBsgQ&usqp=CAU"
                />
              }
              actions={[
                <Link href="/services"><Button type='primary'>{text.buttonText3}</Button></Link>
              ]}
            >
              <Meta
                    title={text.title3}
                    description={text.subtitle3}
              />
            </Card>
        </Col>
        </Row>
      </div>
      </>
  )
}
Home.getLayout = (home) => (
  <MyLayout number="1">
    {home}
  </MyLayout>
)