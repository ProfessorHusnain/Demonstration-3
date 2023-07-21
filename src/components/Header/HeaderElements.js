import  styled  from "styled-components";

import { AiOutlineSearch } from 'react-icons/ai';

export const HeaderContainer=styled.div`
 display: flex;
 justify-content: space-around;
 height: 100%;
 
`

export const LeftContainer=styled.div`
 
 
 display: flex;
 justify-content: end;
`

export const RightContainer=styled.div`
 display: flex;
 height: 100%;
   
  
`

 
 
export const BurgerSing=styled.div`
 margin: auto 10px;
 
`
export const InputFiled = styled.input`
padding: 14px;
border-radius: 6px;
border: 1.5px solid darkgrey;
cursor: pointer;
 margin: auto;
&:focus{
     border-color: blue;
     outline: none;
}
`


export const InputContainer = styled.div`
display: flex;
margin: auto;
align-items: center;
border: 1px solid #ccc;
border-radius: 6px;
padding: 8px;
`;

export const StyledInput = styled.input`
border: none;
outline: none;
flex: 1;

cursor: pointer;
background-color: transparent;
padding-left: 10px;
font-size: 16px;
`;

export const StartIcon = styled(AiOutlineSearch)`
font-size: 20px;
margin-right: 8px;
color: #555;
`;
