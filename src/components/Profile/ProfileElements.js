import  styled  from "styled-components";

export const ProfileContainer=styled.div`
 display: grid;
 grid-template-columns: 23% auto;
 grid-template-rows: 20% auto;
 height: 100vh;
 grid-gap: 15px;
 margin: 30px;
 grid-template-areas: "infoCard infoCard" 
 "Sidebar MainContent" ;
`

export const InfoCard=styled.div`
 grid-area: infoCard;
 
`

export const SideBar=styled.div`
 grid-area: Sidebar;
 
 
`

export const MainContent=styled.div`
 grid-area: MainContent;
 
`

 