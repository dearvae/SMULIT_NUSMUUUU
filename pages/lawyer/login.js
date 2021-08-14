
import Link from 'next/link'
import React from 'react';
import AuthApi from "../api/AuthApi"
import {PageHeader, Button, Form, Input,Checkbox,message} from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter();

    const onFinish = async (values) => {
        console.log('Success:', values);
        const result = await AuthApi.authLoginLawyer(values.email, values.password);
          if (result.data.statusCode == 200) {
              router.push("/lawyer/profile") //todo save the returned token and id to session
              //show login success
              message.success('Login Success!')
          } else {
              //show error message
              message.error('email/password is wrong!')
          }
        console.log(result);
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
     <>
      <div>
        <PageHeader className="site-page-header" style={{marginTop:"40px"}}/>
          <div style={{textAlign:"center"}}>
            <img style={{margin:'1em', height:'100px'}} src="/logo.png"/>
          </div>
          <h1 style ={{textAlign:'center',margin:'1em', fontSize:"30px"}}>Volunteer Lawyer Portal </h1>
            <div style ={{textAlign:'center'}}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                    offset: 8,
                    span: 8,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 8,
                    }}
                >

                    <Button        
                    shape="round"
                    style={{marginTop:"20px", width:"200px", height:"40px",fontSize:"20px", 
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderColor:"#349beb",backgroundColor:"#349beb",color:"white"}} htmlType="submit">          
                        <a>Login Now</a>
                    </Button>
                    
                    <br></br>
                    <br></br>

                    <Button        
                    shape="round"
                    style={{marginTop:"20px", width:"200px", height:"40px",fontSize:"20px", 
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderColor:"#f4801b",backgroundColor:"#f4801b",color:"white"}} htmlType="submit">
                        <Link href="/lawyer/register">
                            <a>Sign Up Here</a>
                        </Link> 
                    </Button>
           
     
                </Form.Item>
                </Form>
            </div>  
      </div>
     </>
    )
  }