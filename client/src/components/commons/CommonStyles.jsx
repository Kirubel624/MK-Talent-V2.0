import { Form } from 'antd';
import styled from 'styled-components';
const ButtonStyle = styled.div`
   button{
    font-size: 17px;
   margin-right: 20px;
   border:  1px solid gray;
   padding: 7px 17px;
   border-radius: 5px;
   }
   button:hover{
    border: 1px solid #11699c;
    color: #11699c;
   }
   .disable,.disable:hover{
    color: gray;
    border:  1px solid gray;


   } 
   `;


const FormStyle = styled(Form)`
  /* width: 100%;
  border:  1px solid red; */


`

 const FlexStyle = styled.div`
  display: flex;
  gap: 10px;
  
  /* border:  1px solid gray; */
  width: 100%;
  
  
 `  
  
  export {
    ButtonStyle,
    FlexStyle,
    FormStyle
  }