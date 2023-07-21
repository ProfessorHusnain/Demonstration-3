import  styled  from "styled-components";

export const SideBarContainer=styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: 0.08fr 1fr;
 height: 100vh;
   
 background-color: white;
`

export const SideBarTitle=styled.div`
 
 text-align: center;
 margin: 5% 0;
 h1{
    color: #3D30BC;
    margin: 0%;
    font-weight: 900;
    font-size:25px ;
 }
 

`

export const SideBarFiled=styled.div`
 display: grid;
 grid-template-columns: ${({isOpen})=>(isOpen?'1fr 3fr':'1fr')};
  margin: 0 auto;
 
  align-items: center;
 
`

export const SideBarIcon=styled.img`
  width: 35px;
  height: 35px;
 
  
`


export const SideBarText=styled.p`
 
  font-weight: 600;
  display: ${({isOpen})=>(isOpen?'block':'none')};
 

`