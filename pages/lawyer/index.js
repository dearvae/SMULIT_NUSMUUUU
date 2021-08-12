import MyLayout from '../../component/global/lawyerlayout'
import Link from 'next/link'
import { Card, Col, Row, Button} from 'antd';


export default function Home() {
    return (
     <>
  
      <div>
        hello
      </div>
     </>
    )
  }

  Home.getLayout = (home) => (
    <MyLayout number="1">
      {home}
    </MyLayout>
  )