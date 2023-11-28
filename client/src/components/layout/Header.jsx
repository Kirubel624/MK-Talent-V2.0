import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import { Avatar,Button,Layout,theme } from 'antd'
import React from 'react'
import styled from 'styled-components'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    ArrowLeftOutlined
  } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;
  

const LayoutHeader = ({collapsed,collapsed2,setCollapsed,setOpen,open}) => {
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
      } = theme.useToken();

  return (
    <Header

    style={{
      padding: 0,
      background: '#2b2b2b',
      position: "sticky",
      top: 0,
      zIndex: 100
    }}
  >
    <HeaderStyle>
      <div className='header__left'>
      <Button
        type="text"
        icon={collapsed2 ? (collapsed ? <MenuUnfoldOutlined style={{color:'white'}} /> : <MenuFoldOutlined style={{color:'white'}}  />) : ""}
        onClick={() =>{
          setCollapsed(!collapsed);
        }}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
          display:collapsed2?"":"none"
        }}
      />

      <Button
        type="text"
        icon={<ArrowLeftOutlined style={{color:'white'}}  />}
        onClick={() => {navigate(-1)
    const y = JSON.parse(localStorage.getItem('keyPath'))
    y.pop()
    localStorage.setItem('keyPath',JSON.stringify(y))
        
        }}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      </div>


      <div className='header_right_con'>
        <span className='header__right'>
          <WrenchScrewdriverIcon  className="h-5 w-5 text-white" />
          <p className='text-white'>System Amdin</p>
        </span>
        <span className='header__right'>
          <Avatar className=' bg-white' size="45" icon={<UserOutlined className='text-black' />} />
          <p className='text-white'>Marshal Yordanos</p>
        </span>
      </div>

    </HeaderStyle>
  </Header>
  )
}



const HeaderStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

.header_right_con{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  gap: 20px;
  /* color: #2b2b2b; */
}
.header__right{
  display: flex;
  align-items: center;
  gap:10px;
}

`

export default LayoutHeader;