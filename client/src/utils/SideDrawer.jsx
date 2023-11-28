import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import styled from 'styled-components';
const SideDrawer = ({open,setOpen,children}) => {
//   const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  const onClose = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
        {/* <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group> */}
        {/* <Button type="primary" onClick={showDrawer}>
          Open
        </Button> */}
      </Space>
      <DrawerStyle
        // title="Basic Drawer"
        style={{padding:0,width:300}}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {children}
      </DrawerStyle>
    </>
    

  );
};


const DrawerStyle = styled(Drawer)`
      .ant-drawer-body{
        padding: 0 !important;
      }
    `
export default SideDrawer;