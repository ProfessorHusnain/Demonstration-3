import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({ isSidebarOpen }) => (isSidebarOpen ? "0.2fr" : "0.09fr")} 1fr;
  grid-template-rows: 8% auto;
  grid-template-areas:
    "SideBar NavBar"
    "SideBar MainContent";
  grid-gap: 2px;
 
  @media (max-width: 1060px) {
    grid-template-columns: 100%;
    grid-template-rows: 8% 87%;
    grid-template-areas:"NavBar" "MainContent";
  }
`

export const SideBarContainer = styled.div`
 grid-area: SideBar;
 position: sticky;
  top: 0;
  left: 0;
  z-index: 4;
   
  overflow-y: auto;
  grid-row: 1 / span 3;
  border-right: 1px dotted darkgray;
 @media (max-width: 1060px) {
   display:none;
  }
`

export const NavBarContainer = styled.header`
 grid-area: NavBar;
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
 z-index: 3;
`


export const MainContent = styled.main`
 grid-area: MainContent;
 height: 100%;  
  overflow-y: auto;  
`

export const FooterContainer = styled.footer`
 
  
`

