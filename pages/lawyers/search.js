import { useState, useEffect } from "react";
import { Row, Col, Slider, Select, Input } from "antd";
import MyCard from "../../component/lawyers/myCard";

export default function Search(props) {
  let language=props.lang
  const { Option } = Select;
  let data = props.serviceType;

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function onChange(value) {}

  function onAfterChange(value) {
    console.log("price", value);
    setFilterminPrice(value[0]);
    setFiltermaxPrice(value[1]);
  }
  function yop(value) {
    console.log("yop", value);
    setStartyear(value[0]);
    setEndyear(value[1]);
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
  const [filterminPrice, setFilterminPrice] = useState(0);
  const [filtermaxPrice, setFiltermaxPrice] = useState(5000);
  const [startyear, setStartyear] = useState(1);
  const [endyear, setEndyear] = useState(40);
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
              placeholder={language ? "Search by name " : "按名字搜索"}
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            ></Input>
          </Col>
          <Col span={6} offset={3}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder={language  ? "Language" : "按语言搜索"}
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
              <Option value="Mandarin">
                {language ? "Mandarin" : "华文"}
              </Option>
              <Option value="English">
                {language ? "English" : "英文"}
              </Option>
              <Option value="French">
                {language  ? "French" : "法语"}
              </Option>
            </Select>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <label style={{ fontSize: 18 }} htmlFor="priceSlider">
              {language  ? "Price" : "价格"}
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
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
          </Col>
          <Col span={2} offset={4}>
            <label style={{ fontSize: 18 }} htmlFor="priceSlider">
              {language  ? "Year of Practice" : "从业经验"}
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
              onChange={onChange}
              onAfterChange={yop}
              //tooltipVisible={true}
              //tooltipPlacement="bottom"
            />
          </Col>
        </Row>
        <hr></hr>
        {() => {
          if (data == undefined) {
            data = props.serviceType;
            console.log("data is undefined");
          }
        }}
        {data
          .filter((val) => {
            if (
              searchName == "" &&
              filterLanguage == "" &&
              startyear == 1 &&
              endyear == 40 &&
              filterminPrice == 0 &&
              filtermaxPrice == 5000
            ) {
              return val;
            } else if (
              val.lawyerName.toLowerCase().includes(searchName.toLowerCase()) &&
              val.lang.includes(filterLanguage) &&
              val.yearofpra >= startyear &&
              val.yearofpra <= endyear &&
              val.price >= filterminPrice &&
              val.price <= filtermaxPrice
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
                price={val.price}
                setting_lang={language}
              />
            );
          })}
      </div>
    </div>
  );
}
