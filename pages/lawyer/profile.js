import Link from 'next/link'
import { Card, Col, Row, Button, Upload, message} from 'antd';
import MyLayout from '../../component/global/lawyerlayout';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';



export default function Profile() {


  return (
   <>
  <div style={{color:"red"}}>this is profile page</div>
  <div>test</div>

   </>
  )
}


Profile.getLayout = (profile) => (
  <MyLayout number="3">
    {profile}
  </MyLayout>
)