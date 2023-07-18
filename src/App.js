import { useState } from "react";
import {
  AppContainer,
  NavBarContainer,
  SideBarContainer,
  MainContent,
  FooterContainer
}
  from "./AppElements";
import SideBar from "./components/SideBar";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContainer isSidebarOpen={isSidebarOpen}>
      <SideBarContainer>
        <SideBar isOpen={isSidebarOpen}></SideBar> 
      </SideBarContainer>
      <NavBarContainer onClick={handleToggleSidebar}>Hello </NavBarContainer>
      <MainContent> </MainContent>
      <FooterContainer> </FooterContainer>
    </AppContainer>
  );
}

export default App;
