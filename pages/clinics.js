
import MyLayout from '../component/global/layout'
import { Input, Card, Col, Row, Radio,Tag,Select,Button,Divider, Collapse,Slider,Switch} from 'antd';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ConsoleSqlOutlined } from '@ant-design/icons';
React.useLayoutEffect = React.useEffect; 

const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;

const marks = {
  0: '0 KM',
  5: '5 KM',
  10: '10 KM',
  15: '15 KM',
  20: {
    style: {
      color: '#f50',
    },
    label: <strong>20 KM</strong>,
  },
};

const LAWFIRM = [
  {id:"1",name:"Law Society South East District",postalcode:"408600",walkin:1,shariah:0,address:'Singapore Post Centre #02-01 10 Eunos Road 8Singapore 408600',region:'East',citizenship:['Permanent Resident','Singaporean'],'shariah':1,description:"Members of the public/residents need to call Law Society of Singapore at 65360650 for appointment. They can also email to ProBonoServices@lawsoc.org.sg or register at any Family Service Centre. See website for more details.",website:"https://legalclinics.sg/index.php?item=51",phone:"65360650",email:"probonoservices@lawsoc.org.sg",openinghrs:"Tuesdays 7 - 9pm"},
  {id:"2",name:"Law Society North West District",postalcode:"730900",walkin:0,shariah:1,address:'Woodlands Civic Centre 6th floor 900 South Woodlands Drive Singapore 730900',region:'North',citizenship:['Permanent Resident','Singaporean'],'shariah':1,description:"Members of the public/residents need to call Law Society of Singapore at 65360650 for appointment. They can also email to ProBonoServices@lawsoc.org.sg or register at any Family Service Centre. See website for more details.",website:"https://legalclinics.sg/index.php?item=51",phone:"65360650",email:"probonoservices@lawsoc.org.sg",openinghrs:"Mondays 7-9pm"},
  {id:"3",name:"HELP Centre - Clinic",postalcode:"059725",walkin:1,shariah:0,address:'Family and Juvenile Court Building Level 3 3 Havelock Square Singapore 059725',region:'Central',citizenship:['Singaporean','Permanent Resident','Other'],'shariah':0,description:"@HELP Services Centre: free consultations with lawyers from volunteer law firms. For civil cases only. Strictly by appointment only. Please contact The Law Society of Singapore - Pro Bono Services Office at 6536 0650 for the appointment.",website:"http://app.subcourts.gov.sg/subcourts/page.aspx?pageid=77220&secid=1",phone:"65360650",email:"probonocenter@smu.edu.sg",openinghrs:"Every Wednesday 11am - 1pm"},
  {id:"4",name:"Family Court Legal Clinic",postalcode:"64355110",walkin:0,shariah:0,address:'Family and Juvenile Court Building 3 Havelock Square Singapore 059725',region:'Central',citizenship:['Singaporean','Permanent Resident','Other'],'shariah':0,description:"Legal advice is for a Family Law/Family Court related matter. Each consultation is limited to a 20 minutes.Please call 64355110 to make an appointment. This clinic is run by the Law Society.",website:"https://www.familyjusticecourts.gov.sg/QuickLink/Pages/ServicesOverview.aspx",phone:"64355110",email:"probonocenter@smu.edu.sg",openinghrs:"Wednesday 4:30pm to 5:50pm"}
]

function sort(tosort){
  var sortlength = tosort.length;
  var min_idx = null;

  for (let k =0 ; k < sortlength ; k++){
    min_idx = k

    for(let j=k+1;j< sortlength;j++){
      if (tosort[min_idx].distance > tosort[j].distance){
        min_idx = j;
      }
    }
    
    [tosort[min_idx],tosort[k]] = [tosort[k],tosort[min_idx]];
  }

}


function searchChange(filter,listtofilter){
  var result = [];

    if (filter == ""){
      return listtofilter
    }
  
    for (var i = 0; i < listtofilter.length; i++) {
      let checker = 1;

      for (let value of filter){
        for (let key in value){
          let len = value[key].length;

          if (key == "distance" && listtofilter[i].distance > value.distance){
            checker = 0;
          }
          
          if (key !="distance" && (String(listtofilter[i][key]).substring(0,len)).toLowerCase()!= String(value[key]).toLowerCase()){
            checker = 0;
          } 
        }
      }
      if(checker) result.push(listtofilter[i]);
    }
    return result;
}

export default function Clinics() {

  const [searchTerm,setSearchTerm] = useState(null);
  const [originalList,setOriginalList] = useState(LAWFIRM);
  const [filteredList,setFilteredList] = useState(originalList);
  const [selectedRegion,setRegion] = useState(null);
  const [selectedWalkIn,setWalkIn] = useState(null);
  const [selectedCitizenship,setCitizenship] = useState(null);
  const [selectedShariah,setShariah] = useState(0);
  const [distanceSlider,setDistanceSlider] = useState(1);
  const [selectedDistance,setDistance] = useState(0);
  const [language,setLanguage] = useState(true);
   
  var handleSearchTerm = (value) => {
    setSearchTerm([{"name":value.target.value}]); 
    setFilteredList(searchChange([{name:value.target.value}],originalList));
  }

  var handleRegion = (value) => {
    setRegion({"region":value.target.value});
  }

  var handleWalkIn = (value) => {
    setWalkIn({"walkin":value.target.value});
  }

  var handleShariah = (value) => {
    setShariah({'shariah':value.target.value});
  }

  var handleCitizenship = (value) => {
    setCitizenship({"citizenship":value});
  }
  
  var handleDistance =(value) =>{
    setDistance({'distance':value});
  }

  var handleLanguage = (value) =>{
    setLanguage(value);
    console.log('current language is:',value);
  }

  var handleFilter = () => {
    var filter = []
    if (selectedWalkIn) filter.push(selectedWalkIn);
    if (selectedShariah) filter.push(selectedShariah);
    if (selectedRegion) filter.push(selectedRegion);
    if (selectedCitizenship) filter.push(selectedCitizenship);
    if (selectedDistance) filter.push(selectedDistance);
    setFilteredList(searchChange(filter,originalList));
  }

  var clearFilter = () =>{
    setFilteredList(originalList);
    setWalkIn(null);
    setShariah(null);
    setRegion(null);
    setDistance(null);
    window.location.reload();
  }

  function getLocation(value){

    //get current postalcode
    var postalcode = value;

    // //API call to get distance
    var comparestr = "";
    var result = [];
    for (let ele of originalList){
      comparestr = comparestr + String(ele.postalcode) + "," ;
    }
    comparestr = comparestr.slice(0,-1);

    var url = "https://app.zipcodebase.com/api/v1/distance?apikey=846f1be0-fb6b-11eb-b243-8b039ec3b8c3&code="+postalcode+"&compare="+comparestr+"&country=sg";
    console.log(url);
    //API call
    axios.get(url)
    .then(res => {
      var distances = res.data.results;
      for (let distance in distances){
        for (let firm of originalList){
          if(distance == firm.postalcode){
            let temp = firm;
            temp["distance"] = distances[distance];
            result.push(temp);
            }
        }
      }
      sort(result);
      console.log('this is result:',result)
      setFilteredList(result);
      console.log('this is filtered:',filteredList);
      setDistanceSlider(0);
      });
  }

  return (
    <div stype={{justifyContent:'center',alignItems:'center'}}>
      <Row>
        <Col span={21}>
          <h2 style={{fontSize:"30px"}}>Clinics</h2> 
        </Col>
        <Col>
          <br></br> 
           {language ? "Language :   " : "语言 :   "  }
              <Switch defaultChecked checkedChildren="EN" unCheckedChildren="CH" onChange={handleLanguage}/>
        </Col>
      </Row>
        <div>
          <h3>{language ? "Find Nearest Clinics By Filter" : "寻找附近的法律援助中心"  }</h3>
          <Row gutter={[32, 16]} justify="space-between">
            <Col span={8}>
              <Search name="name" placeholder={language ? "Enter Clinic Name" : "输入法律援助中心"  } allowClear enterButton={language ? "Search" : "搜索"  } size="large"  onKeyUp={handleSearchTerm}/>
            </Col>

            <Col span={8}>
              <Search placeholder={language ? "Enter Postal Code to Find Nearby Clinics" : "输入邮政编码"} size="large" onSearch={getLocation} enterButton />
              {/* <Button type="primary" name="postalcode" size="large" onClick={getLocation}>Find Nearby Clinic</Button> */}
            </Col>

            <Col span={8}>
              <Slider marks={marks} max={20} defaultValue={0} disabled={distanceSlider} onChange={handleDistance} />
            </Col>

            <Col>
              <h4>{language ? "Regional Search" : "区域"}</h4>
              <Radio.Group size="large" name="region" onChange={handleRegion}>
                <Radio.Button value="North" >North</Radio.Button>
                <Radio.Button value="South" >South</Radio.Button>
                <Radio.Button value="East" >East</Radio.Button>
                <Radio.Button value="West" >West</Radio.Button>
                <Radio.Button value="Central" >Central</Radio.Button>
              </Radio.Group>
            </Col>

            <Col>
              <Row>
                <h4>{language ? "Walk In" : "是否需要预约"}</h4>
              </Row>
              <Row>
                <Radio.Group size="large" name='walkin' onChange={handleWalkIn}>
                  <Radio.Button value="1">{language ? "Yes" : "是"}</Radio.Button>
                  <Radio.Button value="0">{language ? "No" : "否"}</Radio.Button>
                </Radio.Group>
              </Row>
            </Col>

            <Col>
              <Row>
                <h4>{language ? "Shariah" : "伊斯兰教"}</h4>
              </Row>
              <Row>
                <Radio.Group defaultValue="a" size="large" name='shariah' onChange={handleShariah}>
                  <Radio.Button value="1">{language ? "Yes" : "是"}</Radio.Button>
                  <Radio.Button value="0">{language ? "No" : "否"}</Radio.Button>
                </Radio.Group>
              </Row>
            </Col>

            <Col>
              <Row>
                <h4>{language ? "Citizenship" : "国籍"}</h4>
              </Row>
              <Row>
                <Select size="large"style={{ width: 200 }} name='citizenship' onChange={handleCitizenship}>
                  <Option value="Singaporean">{language ? "Singaporean" : "新加坡"}</Option>
                  <Option value="Permanent Resident">{language ? "Permanent Resident" : "永久居民"}</Option>
                  <Option value="Other">{language ? "Others" : "其它"}</Option>
                </Select>
              </Row>
            </Col>

            <Col>
            <br></br>
              <Row>
                <Col>
                  <Button type="primary" onClick={handleFilter} size="large">{language ? "Search" : "搜索"}</Button>
                </Col>
                <Col>
                <Button size="large" onClick={clearFilter}>{language ? "Clear" : "清空"}</Button>   
                </Col>
              </Row>
            </Col>       
        </Row>
      </div>
      <Divider />
      <div className="site-card-wrapper">
      <h3 style={{margin:"5vh",textAlignVertical: "center",textAlign: "center",fontSize:"25px"}}>{language ? "Search Results" : "搜索结果"}</h3>
      
      <Row gutter={[16,16]}>
      {filteredList.map(lawfirm => {
              return (
                <Col key={lawfirm.id} span={8}>
                  <Link href={"/clinicDetails?id="+lawfirm.id+"&lang="+language}>
                    <Card title={lawfirm.name}
                      hoverable
                      style={{ width: 350 }}
                      cover={<img alt="example" src="https://ericmembers.files.wordpress.com/2017/02/legal.png" />}>
                      <Meta title={lawfirm.name}/>  
                      <div style={{marginTop:"1vh"}}>
                        {lawfirm.hasOwnProperty("distance") ?
                          <Tag color="yellow" key={lawfirm.id+lawfirm.distance}>{lawfirm.distance}KM away</Tag> : ""
                        }
                          <Tag color="green" key={lawfirm.id+lawfirm.address}>{lawfirm.region}</Tag>
                          {lawfirm.citizenship.map(citizenship => {
                            return (
                              <Tag color="blue" key={lawfirm.id+"citizenship"+citizenship}>{citizenship}</Tag>
                            )})
                          }
                          <Tag color="purple" key={lawfirm.id+lawfirm.walkin}>{lawfirm.walkin ? "Walk-In" : "Appointment Only"}</Tag>
                          {lawfirm.shariah ?<Tag color="orange" key={lawfirm.id+"shariah"+lawfirm.shariah}>Shariah</Tag>: ""}
                      </div>
                    </Card>
                  </Link>
                </Col>
              )
            })
          }
      </Row>
    </div>
  </div>
  )
}


Clinics.getLayout = (clinic) => (
    <MyLayout number="2">
      {clinic}
    </MyLayout>
  )