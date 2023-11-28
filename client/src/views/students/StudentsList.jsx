import React, { useState } from 'react'
import CommonTable from '../../components/commons/CommonTable'
import {
    MoreOutlined
} from '@ant-design/icons';
import { Button, Divider, Dropdown,message } from 'antd';
import styled from 'styled-components';
import CommonModal from '../../components/commons/CommonModel';
import StudentsEdit from './StudentsEdit';
import {MODE} from '../../AppEnum';


const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sydney No. 1 Lake Park',
    },
];


const StudentsList = () => {
    const [studentdsData,setStudentsData] = useState(data)
    const [studentSelection,setStudentSelection] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode,setMode] = useState(MODE.NEW);


    const handlePagination=(page,pageSize)=>{
        alert('pppppppp')
    }

    const onClick = (re) => {
        // message.info(`Click on item ${key}`);
        console.log(re)
      };
    
    const items = [
        {
            key: 'edit',
            label: (
                <Button type="text">Edit</Button>
            ),
            
        },
        {
            key: 'delete',
            label: (
                <Button type="text"> Delete</Button>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            ),
        },
    ];
    
    const columns = [
    
        {
            title: '',
            dataIndex: 'action',
            render: (_, recored) => {
                return (
                    <Dropdown
                        menu={{
                            items,
                            onClick:({key})=>{
                                if(key=='edit'){
                                    setMode(MODE.EIDT)
                                    setIsModalOpen(true)
                                }else if(key === 'delete'){
                                    message.info("klm")
                                }
                            }
                        }}
                        trigger={['click']}
    
                        placement="bottomLeft"
                    >
                        <Button type='text' icon={<MoreOutlined style={{fontSize:20}} />} onClick={() => {
                            console.log(recored)
                        }}>
    
                        </Button>
                    </Dropdown>
                )
            },
    
        },
    
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
            width: '33%'
        },
    
        {
            title: 'Age',
            dataIndex: 'age',
            width: '33%'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '34%'
        },
    ];
    
    


    return (
        <div>
           
            
            <CommonModal width={1000} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
               <StudentsEdit mode={mode} setIsModalOpen={setIsModalOpen} /> 
            </CommonModal>

            <HeaderStyle>

            <Button onClick={()=>{
                setMode(MODE.NEW)
                setIsModalOpen(true)
            }}  size='large' >Add</Button>
             
            <Button  size='large'>Print</Button>
               
            </HeaderStyle>

            <CommonTable 
                rowSelectionType={"checkbox"}
                data={studentdsData}
                columns={columns}
                setSelection={setStudentSelection}
                handlePagination={handlePagination}
                total={15}

                />
        </div>
    )
}

const HeaderStyle = styled.div`
display: flex;
justify-content: flex-end;
            button{
                margin-left:15px;
                background: #096e30;
                padding: 7px 30px !important;
                /* background: #0a3158; */

                color: wheat;
                /* padding: 10px 20px; */
            }
            button:hover{
                color: white;
            }
`

export default StudentsList