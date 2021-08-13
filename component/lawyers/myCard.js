import { SearchOutlined } from "@ant-design/icons";
import { Card, Avatar, Button, Drawer, Row, Col } from "antd";
import { useState } from "react";
const { Meta } = Card;
import Link from 'next/link';

export default function MyCard(props) {
  const gridStyle = {
    width: "30%",
    margin: "30px 50px 0px 100px",
  };
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card.Grid style={gridStyle} hoverable={false}>
        <Card
          style={{ width: 400 }}
          actions={[
            <div>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  size="middle"
                  onClick={showDrawer}
                >
                  More about me
                </Button>
              <Drawer
                title={props.lawyerName + "'s Profile"}
                placement="right"
                width={500}
                closable={false}
                onClose={onClose}
                visible={visible}
              >
                <h3>Personal information</h3>
                <Row>
                  <Col span={12}>
                    <label>Full Name: {props.lawyerName}</label>
                  </Col>
                  <Col span={12}>
                    <label>Contact Number:{props.hp} </label>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col span={12}>
                    <label>Spoken: {props.lang}</label>
                  </Col>
                  <Col span={12}>
                    <label>Position: {props.pos}</label>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <label>Year of Practice: {props.yearofpra}</label>
                  </Col>
                </Row>
                <Row>
                  <hr></hr>
                  <p>{props.des}</p>
                  <a href={props.link}>More information</a>
                </Row>
              </Drawer>
            </div>,
          ]}
        >
          <Meta
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                style={{ width: 100, height: 100 }}
              />
            }
            title={props.lawyerName}
            description={"Contact Number:" + props.hp}
          />
        </Card>
      </Card.Grid>
    </div>
  );
}
