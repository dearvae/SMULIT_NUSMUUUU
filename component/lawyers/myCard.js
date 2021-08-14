import { SearchOutlined } from "@ant-design/icons";
import { Card, Avatar, Button, Drawer, Row, Col } from "antd";
import { useState } from "react";
const { Meta } = Card;

export default function MyCard(props) {
  const [language,setLang] = useState("en");
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
                  {language == "en" ? "More About Me" : "更多关于我的信息"}
                </Button>
              <Drawer
                title={props.lawyerName}
                placement="right"
                width={500}
                closable={false}
                onClose={onClose}
                visible={visible}
              >
                <h3>{language == "en" ? "Personal Information" : "个人信息"}</h3>
                <Row>
                  <Col span={12}>
                    <label>{language == "en" ? "Name" : "名字"}: {props.lawyerName}</label>
                  </Col>
                  <Col span={12}>
                    <label>{language == "en" ? "Contact Number" : "联系方式"}:{props.hp} </label>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col span={12}>
                    <label>{language == "en" ? "Spoken Language" : "语言"}:{props.lang}</label>
                  </Col>
                  <Col span={12}>
                    <label>{language == "en" ? "Position" :"职位"}:{props.pos}</label>
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
            description={props.hp}
          />
        </Card>
      </Card.Grid>
    </div>
  );
}
