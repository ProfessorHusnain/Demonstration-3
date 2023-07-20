import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({ isSidebarOpen }) => (isSidebarOpen ? "0.2fr" : "0.05fr")} 1fr;
  grid-template-rows: 8% auto 5%;
  grid-template-areas:
    "SideBar NavBar"
    "SideBar MainContent"
    "SideBar Footer";
  grid-gap: 2px;
  background-color: rgb(248, 249, 250);;
  @media (max-width: 1060px) {
    grid-template-columns: 100%;
    grid-template-rows: 8% 87% 5%;
    grid-template-areas:"NavBar" "MainContent" "Footer";
  }
`

export const SideBarContainer = styled.div`
 grid-area: SideBar;
 @media (max-width: 1060px) {
   display:none;
  }
`

export const NavBarContainer = styled.header`
 grid-area: NavBar;
`


export const MainContent = styled.main`
 grid-area: MainContent;
 
`

export const FooterContainer = styled.footer`
grid-area: Footer;
`

