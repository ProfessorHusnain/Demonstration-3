import React from 'react'
import { SideBarContainer } from './SideBarElements.js'

const SideBar = ({isOpen}) => {
  return (
     <SideBarContainer isOpen={isOpen}>
        <SideBarTitle></SideBarTitle>
        <SideBarIcon></SideBarIcon>
        <SideBarText></SideBarText>
     </SideBarContainer>
  )
}

export default SideBar
