
import MyLayout from '../component/global/layout'
import { Input, Card, Col, Row, Radio,Tag,Select,Button,Divider, Collapse} from 'antd';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ConsoleSqlOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;

const CURRENTPOSTAL = 543272;

const LAWFIRM = [
  {id:"1",name:"David's Firm",postalcode:"543273",walkin:1,shariah:1,address:'Punggol Centre',region:'W',citizenship:['Permanent Resident','Singaporean'],'shariah':1,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"},
  {id:"2",name:"Kelvin's Firm",postalcode:"178903",walkin:0,shariah:1,address:'Jurong Centre',region:'E',citizenship:['Other'],'shariah':1,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"},
  {id:"3",name:"Benjamins's Firm",postalcode:"119077",walkin:1,shariah:0,address:'Clementi',region:'E',citizenship:['Singaporean'],'shariah':0,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"},
  {id:"4",name:"Jason's Firm",postalcode:"199008",walkin:0,shariah:0,address:'Bedok',region:'S',citizenship:['Permanent Resident'],'shariah':0,description:"we are xxxxxxxxxxxxxxxx",website:"www.123.com",phone:"68281951",email:"probonocenter@smu.edu.sg",openinghrs:"Monday - Friday : 6.30pm - 8.30pm (except public holiday)"}
]

function getUserPostalCode() {

  let getLocationPromise = new Promise((resolve, reject) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var point = new google.maps.LatLng(lat, long);
            new google.maps.Geocoder().geocode(
                {'latLng': point},
                function (res, status) {
                    var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                    $("#location").val(zip);          
                }
            );
            //let long = position.coords.longitude
            resolve({zip:postalcode})
        })
    } else {
        reject("your browser doesn't support geolocation API")
    }
})

getLocationPromise.then((location) => {
  console.log(location.postalcode)
}).catch((err) => {
    console.log(err)
})
  
} 

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
  const [originalList,setOriginalList] = useState(LAWFIRM);
  const [filteredList,setFilteredList] = useState(originalList);
  const [selectedRegion,setRegion] = useState(null);
  const [selectedWalkIn,setWalkIn] = useState(null);
  const [selectedCitizenship,setCitizenship] = useState(null);
  const [selectedShariah,setShariah] = useState(0);
   
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

  var handleFilter = () => {
    var filter = []
    if (selectedWalkIn) filter.push(selectedWalkIn);
    if (selectedShariah) filter.push(selectedShariah);
    if (selectedRegion) filter.push(selectedRegion);
    if (selectedCitizenship) filter.push(selectedCitizenship);
    setFilteredList(searchChange(filter,originalList));
  }

  var clearFilter = () =>{
    setFilteredList(originalList);
    setWalkIn(null);
    setShariah(null);
    setRegion(null);
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
      });
  }

  return (
    <div stype={{justifyContent:'center',alignItems:'center'}}>
      <h2 style={{fontSize:"30px"}}>Clinics</h2>
        
        <div>
          <h3>Find Nearest Clinics By Filter</h3>
          <Row gutter={[32, 16]} justify="space-between">
            <Col span={16}>
              <Search name="name" placeholder="Enter Law Firm Name " allowClear enterButton="Search" size="large"  onKeyUp={handleSearchTerm}/>
            </Col>
            <Col span={8}>
            <Search placeholder="Enter Postal Code to Find Nearby Clinics" size="large" onSearch={getLocation} enterButton />
              {/* <Button type="primary" name="postalcode" size="large" onClick={getLocation}>Find Nearby Clinic</Button> */}
            </Col>
          
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
                <h4>Walk In</h4>
              </Row>
              <Row>
                <Radio.Group size="large" name='walkin' onChange={handleWalkIn}>
                  <Radio.Button value="1">Yes</Radio.Button>
                  <Radio.Button value="0">No</Radio.Button>
                </Radio.Group>
              </Row>
            </Col>

            <Col>
              <Row>
                <h4>Shariah</h4>
              </Row>
              <Row>
                <Radio.Group defaultValue="a" size="large" name='shariah' onChange={handleShariah}>
                  <Radio.Button value="1">Yes</Radio.Button>
                  <Radio.Button value="0">No</Radio.Button>
                </Radio.Group>
              </Row>
            </Col>

            <Col>
              <Row>
                <h4>Citizenship</h4>
              </Row>
              <Row>
                <Select size="large"style={{ width: 200 }} name='citizenship' onChange={handleCitizenship}>
                  <Option value="Singaporean">Singaporean</Option>
                  <Option value="Permanent Resident">Permanent Resident</Option>
                  <Option value="Other">Others</Option>
                </Select>
              </Row>
            </Col>

            <Col>
            <br></br>
              <Row>
                <Col>
                  <Button type="primary" onClick={handleFilter} size="large">Search</Button>
                </Col>
                <Col>
                <Button size="large" onClick={clearFilter}>Clear</Button>   
                </Col>
              </Row>
            </Col>       
        </Row>
      </div>
      <Divider />
      <div className="site-card-wrapper" style={{height: '90vh'}}>
      <h3 style={{margin:"5vh",textAlignVertical: "center",textAlign: "center",fontSize:"25px"}}>Search Results</h3>
      
      <Row gutter={[16,16]}>
      {filteredList.map(lawfirm => {
              return (
                <Col key={lawfirm.id} span={8}>
                  <Link href={"/clinicDetails?id="+lawfirm.id}>
                    <Card title={lawfirm.name}
                      hoverable
                      style={{ width: 350 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                      <Meta title={lawfirm.name} description={lawfirm.description}/>  
                      <div style={{marginTop:"1vh"}}>
                        {lawfirm.hasOwnProperty("distance") ?
                          <Tag color="yellow" key={lawfirm.id+lawfirm.distance}>{lawfirm.distance}KM away</Tag> : ""
                        }
                          <Tag color="green" key={lawfirm.id+lawfirm.address}>{lawfirm.address}</Tag>
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