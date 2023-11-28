import React, { useState } from 'react'
import { Button, Form, Input, InputNumber, Select, Switch } from 'antd';
import styled from 'styled-components';
import { ButtonStyle, FlexStyle, FormStyle } from '../../components/commons/CommonStyles';
const { Option } = Select;

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = (values) => {
  console.log(values);
};
const StudentsEdit = ({setIsModalOpen,mode}) => {
  const [switch2,setSwitch2] = useState("")
  
  return (
    <div>
       <FormStyle
    layout="vertical"
    name="nest-messages"
    onFinish={onFinish}
    
    validateMessages={validateMessages}
  >
   <FlexStyle>
   <Form.Item
      className=' flex-1'
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input  
      className='border-gray-400 py-2'
      />
    </Form.Item>

   

    <Form.Item
      className=' flex-1 border-gray-400'
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input 
      className='border-gray-400 py-2'
      
      />
    </Form.Item>
    <Form.Item
      
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
        },

      ]}
     
    >
      <InputNumber 
      className='border-gray-400 py-1'
      style={{
        minWidth:150
       }} 
      />
    </Form.Item>


   </FlexStyle>

   <Form.Item
        name="gender"
        label="Gender"
        className=' flex-1'
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select
        className='border-gray-400 '
        placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Switch" valuePropName="checked">
        <Switch checked={switch2} onChange={(value)=>setSwitch2(value)} style={{background:switch2?'blue':'gray'}} />
      </Form.Item>
    <Form.Item 
    className=' flex-1'
    name={['user', 'website']} label="Website">
      <Input 
      className='border-gray-400 py-2'
      />
    </Form.Item>
    <Form.Item 
    className=' flex-1'
    name={['user', 'introduction']} label="Introduction">
      <Input.TextArea
      className='border-gray-400 py-2'
      />
    </Form.Item>
    {/* <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    > */}
     <ButtonStyle>
     <button   className='disable' onClick={()=>setIsModalOpen(false)} >
        cancel
      </button>
      <button  type="submit" >
        Submit
      </button>
     </ButtonStyle>
    {/* </Form.Item> */}
  </FormStyle>

    </div>
  )
}





  

export default StudentsEdit