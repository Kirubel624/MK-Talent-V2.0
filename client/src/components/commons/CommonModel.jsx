import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const CommonModal = ({children,isModalOpen,setIsModalOpen,handleSubmit,width}) => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      
      <Modal 
      width={width}
      footer={false}
      
      title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};
export default CommonModal;