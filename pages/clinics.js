
import MyLayout from '../component/global/layout'
import { Input, Card, Col, Row, Radio,Tag,Select,Button,Slider,InputNumber} from 'antd';
import React, { useState } from 'react'
import Link from 'next/link'
import { ConsoleSqlOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;

const CURRENTPOSTAL = 543676;

const LAWFIRM = [
  {id:"1",name:"David's Firm",postalcode:"543273",freeconsult:1,address:'Punggol Centre',region:'W',speciality:['Will','Divorce'],description:"we are xxxxxxxxxxxxxxxx"},
  {id:"2",name:"Kelvin's Firm",postalcode:"549272",freeconsult:0,address:'Jurong Centre',region:'E',speciality:['Divorce'],description:"we are xxxxxxxxxxxxxxxx"},
  {id:"3",name:"Benjamins's Firm",postalcode:"456098",freeconsult:1,address:'Clementi',region:'E',speciality:['Divorce'],description:"we are xxxxxxxxxxxxxxxx"},
  {id:"4",name:"Jason's Firm",postalcode:"123098",freeconsult:0,address:'Bedok',region:'S',speciality:['Will'],description:"we are xxxxxxxxxxxxxxxx"},
]

// use latitude instead of postalcode

function getLocation() {
  var longi = 0;
  var lati = 0;
  let getLocationPromise = new Promise((resolve, reject) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude
            let long = position.coords.longitude
            resolve({latitude: lat, 
                    longitude: long})
        })
    } else {
        reject("your browser doesn't support geolocation API")
    }
})

getLocationPromise.then((location) => {
  console.log(location.latitude)
}).catch((err) => {
    console.log(err)
})
  console.log(lati,longi);
} 

function searchChange(filter,listtofilter){
  console.log('checking filter:',filter);
  var result = [];

    if (filter == ""){
      return listtofilter
    }
  
    for (var i = 0; i < listtofilter.length; i++) {
      let checker = 1;

      for (let value of filter){
        for (let key in value){
          let len = value[key].length;
          
          if ((String(listtofilter[i][key]).substring(0,len)).toLowerCase()!= value[key].toLowerCase()){
            console.log('checking value key:',value[key]);
            console.log('checking listotfilter:',String(listtofilter[i][key]).substring(0,len));
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
  const [originalList,setAllList] = useState(LAWFIRM);
  const [filteredList,setFilteredList] = useState(LAWFIRM);
  const [selectedRegion,setRegion] = useState(null);
  const [selectedConsult,setConsult] = useState(null);
  const [selectedSpeciality,setSpeciality] = useState(null);
  const [userLocation, setLocation] = useState(0);

  var handleLocation = (position) => {
    setLocation({'lat':position.coords.latitude,'long':position.coords.longitude})
  }

  var handleSearchTerm = (value) => {
    setSearchTerm([{"name":value.target.value}]); 
    setFilteredList(searchChange([{name:value.target.value}],originalList));
  }

  var handleRegion = (value) => {
    setRegion({"region":value.target.value});
  }

  var handleConsult = (value) => {
    setConsult({"freeconsult":value.target.value});
  }

  var handleSpeciality = (value) => {
    setSpeciality({"speciality":value});
  }

  var handleFilter = () => {
    var filter = []
    if (selectedConsult) filter.push(selectedConsult);
    if (selectedSpeciality) filter.push(selectedSpeciality);
    if (selectedRegion) filter.push(selectedRegion);
    // console.log('check values:\n consult:',selectedConsult,'\n selectedspeciality:',selectedSpeciality,'\nselectedregion:',selectedRegion);
    setFilteredList(searchChange(filter,originalList));
  }

  var clearFilter = () =>{
    setFilteredList(originalList);
    setConsult(null);
    setSpeciality(null);
    setRegion(null);
    window.location.reload();
  }

  var getLocation = ()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div stype={{justifyContent:'center',alignItems:'center'}}>
      <h2 style={{fontSize:"30px"}}>Clinics</h2>
        <div>
          <h3>Find Nearest Clinics By Filter</h3>
          
          <Row>
            <Col span={16}>
              <Search name="name" placeholder="Enter Law Firm Name " allowClear enterButton="Search" size="large"  onKeyUp={handleSearchTerm}/>
            </Col>
            <Col span={8}>
              <Button type="primary" name="postalcode" size="large" onClick={getLocation}>Find Nearby Clinic</Button>
            </Col>
          </Row>

          <Row justify="space-between">

            <Col>
              <h4>Regional Search</h4>
              <Radio.Group size="large" name="region" onChange={handleRegion}>
                <Radio.Button value="N" >North</Radio.Button>
                <Radio.Button value="S" >South</Radio.Button>
                <Radio.Button value="E" >East</Radio.Button>
                <Radio.Button value="W" >West</Radio.Button>
                <Radio.Button value="C" >Central</Radio.Button>
              </Radio.Group>
            </Col>

            <Col>
              <Row>
                <h4>Consultation Type</h4>
              </Row>
              <Row>
                <Radio.Group defaultValue="a" size="large" name='freeconsult' onChange={handleConsult}>
                  <Radio.Button value="1">Free Consultation</Radio.Button>
                  <Radio.Button value="0">Paid Consultation</Radio.Button>
                </Radio.Group>
              </Row>
            </Col>

            <Col>
              <Row>
                <h4>Speciality Search</h4>
              </Row>
              <Row>
                <Select size="large"style={{ width: 300 }} name='speciality' onChange={handleSpeciality}>
                  <Option value="divorce">Divorce</Option>
                  <Option value="Will">Will</Option>
                </Select>
              </Row>
            </Col>

            <Col>
              <Row>  </Row>
              <Row>
                <Button type="primary" onClick={handleFilter} size="large">Search</Button>
                <Button size="large" onClick={clearFilter}>Clear</Button>   
              </Row>
            </Col>

                     
          </Row>
        </div>
      <div className="site-card-wrapper" style={{height: '90vh'}}>
      <h3 style={{margin:"5vh",textAlignVertical: "center",textAlign: "center",fontSize:"25px"}}>Search Results</h3>
      
      <Row gutter={[16,16]}>
      {filteredList.map(lawfirm => {
              var consult = "Paid Consultation";
              if(lawfirm.freeconsult){
                 consult = 'Free Consultation';
              }

              return (
                <Col key={lawfirm.id} span={8}>
                  <Card title={lawfirm.name}
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title={lawfirm.name} description={lawfirm.description}/>
                    <div style={{marginTop:"1vh"}}>
                        <Tag color="green" key={lawfirm.id+lawfirm.address}>{lawfirm.address}</Tag>
                        {lawfirm.speciality.map(speciality => {
                          return (
                            <Tag color="blue" key={lawfirm.id+speciality}>{speciality}</Tag>
                          )})
                        }
                        <Tag color="purple" key={lawfirm.id+consult}>{consult}</Tag>
                    </div>
                  </Card>
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