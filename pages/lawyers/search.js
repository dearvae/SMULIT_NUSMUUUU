import { useState } from "react";
import { Row, Col, Slider, Select, Input } from "antd";
import MyCard from "../../component/lawyers/myCard";

export default function Search(props) {
  let data = props.serviceType;
  const { Option } = Select;


  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
    setFilterPrice(value);
  }
  function yop(value) {
    setStartyear(value[0])
    setEndyear(value[1])
  }
  const price = {
    0: "$0",
    1000: "$1000",
    3000: "$3000",
    5000: {
      style: {
        color: "#f50",
      },
      label: <strong>$5000</strong>,
    },
  };
  const practices = {
    1: "1",
    5: "5",
    10: "10",
    20: "20",
    30: "30",
    40: {
      style: {
        color: "#f50",
      },
      label: <strong>40</strong>,
    },
  };

  const [searchName, setSearchName] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [startyear, setStartyear] = useState("");
  const [endyear, setEndyear] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
 

  return (
    <div>
      <hr></hr>
      <div>
        <Row>
          <Col span={12}>
            <Input
              size="medium"
              bordered={true}
              placeholder="Search by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            ></Input>
          </Col>
          <Col span={6} offset={3}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Language"
              optionFilterProp="children"
              onChange={(value) => {
                setFilterLanguage(value);
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Mandarin">Mandarin</Option>
              <Option value="English">English</Option>
              <Option value="French">French</Option>
            </Select>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <label style={{ fontSize: 18 }} htmlFor="priceSlider">
              Price slider
            </label>
          </Col>
          <Col span={6}>
            <Slider
              id="priceSlider"
              range
              marks={price}
              max={5000}
              min={0}
              step={500}
              defaultValue={[0, 5000]}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
          </Col>
          <Col span={2} offset={2}>
            <label style={{ fontSize: 18 }} htmlFor="priceSlider">
              Year of practices
            </label>
          </Col>
          <Col span={6}>
            <Slider
              id="yopSlider"
              range
              marks={practices}
              max={40}
              min={1}
              step={1}
              defaultValue={[0, 40]}
              onChange={onChange}
              onAfterChange={yop}
            />
          </Col>
        </Row>
        <hr></hr>
        {data
          .filter((val) => {
            if (searchName == "" && filterLanguage == "" && startyear=="" && endyear=="") {
              return val;
            } else if (
              val.lawyerName.toLowerCase().includes(searchName.toLowerCase()) &&
              val.lang.includes(filterLanguage) && val.yearofpra <= endyear && val.yearofpra >= startyear 
            ) {
              return val; 
            }
          })
          .map((val, key) => {
            return (
              <MyCard
                lawyerName={val.lawyerName}
                des={val.des}
                link={val.link}
                yearofpra={val.yearofpra}
                hp={val.hp}
                lang={val.lang}
                pos={val.pos}
              />
            );
          })}
      </div>
    </div>
  );
}
