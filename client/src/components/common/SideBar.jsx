import React, { useState } from 'react'
import {
    VideoCameraOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FileTextOutlined,
    TrophyOutlined,
    WechatOutlined
  } from '@ant-design/icons';
import { HomeIcon, BookOpenIcon, BookmarkSquareIcon, Cog6ToothIcon, CalendarDaysIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/solid';

  import JobIcon from '../../assets/suitcase.svg'
  import EventIcon from '../../assets/event.svg'
  import PeopleIcon from '../../assets/people.svg'
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link, NavLink } from 'react-router-dom';
import { Header,Content } from 'antd/es/layout/layout';

const SideBar = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const profileMenu = (
        <Menu>
          <Menu.Item key={10}>
            <NavLink to="">
              Profile
            </NavLink>
          </Menu.Item>
          <Menu.Item key={12}>
            <NavLink
              onClick=""
              to={"#logout"}
            >
              Logout
            </NavLink>
          </Menu.Item>
        </Menu>
      );
  return (
    <div>
       <Layout  className=" bg-white" style={{ minHeight: "100vh" }}>
       <Sider
     width={200}
     style={{
       overflow: 'clip',
       height: '100vh',
       position: 'sticky',
       top: 0,
       left: 0,
       zIndex: 100,
       backgroundColor: "#6D77CB",
       color:"white"
     }}
     onCollapse={() => setCollapsed(!collapsed)}
    trigger={null}
    collapsible
    collapsed={collapsed}>
<div>
            <div
              className="bg-[#6D77CB] p-4  brder-2 flex-col flex items-center justify-center w-full"
            >
              <NavLink className="borer-2 p-8 flex flex-col items-center justify-between" to={"/dashboard"}>
              <img src='https://res.cloudinary.com/dvqawl4nw/image/upload/v1700055132/gil7oxmzhprppghno7qe.png' width={100} height={100} />
         
              </NavLink>
            </div>
            <Menu
              theme={'dark'}
              style={{ backgroundColor: "#6D77CB"}}
              mode="inline"
              className=' border-red-900'
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="1" icon={<HomeIcon width={20} height={20}  />}>
                <Link className='' to={"/home"}>Home</Link>
              </Menu.Item>
          
              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="2" icon={<VideoCameraOutlined width={20} height={20}  />}>
                <Link  to={"/video"}>Video</Link>
              </Menu.Item>

              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="3" icon={<UserGroupIcon width={20} height={20} />}>
                <Link  to={"/people"}>People</Link>
              </Menu.Item>
              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="4" icon={<CalendarDaysIcon width={20} height={20} />}>
                <Link  to={"/event"}>Event</Link>
              </Menu.Item>
              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="5" icon={<BriefcaseIcon width={20} height={20} />}>
                <Link  to={"/job"}>Job</Link>
              </Menu.Item>
              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="6" icon={<FileTextOutlined width={20} height={20} />}>
                <Link  to={"/blog"}>Blog</Link>
              </Menu.Item>
              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="7" icon={<TrophyOutlined width={20} height={20} />}>
                <Link  to={"/reward"}>Reward</Link>
              </Menu.Item>
              <Menu.Item className='border border-transparent transition ease-in-out duration-400 hover:border-white' key="8" icon={<WechatOutlined width={20} height={20} />}>
                <Link  to={"/chat"}>Chat</Link>
              </Menu.Item>
            </Menu>
          </div>
    </Sider>
    <Layout>
        <Header  
        style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #ffffff",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
          className="site-layout-background p-0 m-0">
<div className='flex items-center justify-between '>
      
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />

   <div className='flex flex-row justify-evenly'><Dropdown  overlay={profileMenu}
                    placement="bottomLeft"
                    arrow>
                      <Avatar src=""alt='profileimg'/>
                      </Dropdown> <h1 className='text-lg pl-2 pr-4'>Admin</h1></div>

    
      </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 500,
            background: colorBgContainer,
            overflowY: 'auto', // enable vertical scrolling
          }}
         
        >
          <div className='flex items-center justify-center'>
          <div
                  className={`flex-grow border-solid ${
                    props.sidebar && "flex flex-1 justify-center"
                  } border-r-[1px] border-[#d2d2d2] `}
                >
                   {props.children}
                </div>
          </div>
          
        </Content>
       </Layout>
       </Layout>
      
    </div>
  )
}

export default SideBar
