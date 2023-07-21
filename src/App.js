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
import Header from "./components/Header";
import Profile from "./components/Profile";

import { BrowserRouter as Router } from "react-router-dom";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <AppContainer isSidebarOpen={isSidebarOpen}>
      <Router>
        {/** <!-------------------------------SideBar----------------------------------!> */}
        <SideBarContainer>
          <SideBar isOpen={isSidebarOpen} />
        </SideBarContainer>

        {/** <!--------------------------------NavBar---------------------------------!> */}
        <NavBarContainer >
          <Header handleToggleSidebar={handleToggleSidebar} />
        </NavBarContainer>

        {/** <!---------------------------------MainContent--------------------------------!> */}
        <MainContent>
          <Profile />

          {/** <!---------------------------------Footer--------------------------------!> */}
          <FooterContainer>

          </FooterContainer>
        </MainContent>
      </Router>
    </AppContainer>
  );
}

export default App;
