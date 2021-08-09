
import { Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
export default function MyCard(props) {
  return (
   <>
 <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="vercel.svg"
      />
    }
    actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title={props.title}
      description={props.description}
    />
  </Card>
   </>
  )
}
