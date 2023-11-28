import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import styled from 'styled-components';





const CommonTable = ({ data, columns, rowSelectionType, setSelection, handlePagination,total }) => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
    handlePagination(current, pageSize);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelection(selectedRows)
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.age === 'Disabled User',
      name: record.name,
    }),
  };
  return (
    <TableStyle>

      <Table
        rowSelection={{
          type: rowSelectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={{
          total: total,
          defaultPageSize: 10,
          defaultCurrent: 1,
          pageSizeOptions: ['10', '20'],
          showSizeChanger: true,
          onChange: onShowSizeChange

        }}
        className=' text-base'
      />
    </TableStyle>
  );
}

const TableStyle = styled.div`
border: 1px solid #e2e2e2;
margin-top: 20px;
background-color: white;
    th{
        font-size: 17px;


    }

    tr{
        font-size: 15px;
    }
`

export default CommonTable;



