import React from 'react'
import { BurgerSearchContainer,InputContainer,StartIcon,StyledInput, BurgerSing, HeaderContainer, InputFiled, LeftContainer, RightContainer, SearchContainer } from './HeaderElements'
import { AiOutlineMenu } from 'react-icons/ai'
import { EditOption, EditOptionCircle, EditOptionContainer } from '../Profile/SideBar/SideBarElements'
const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>

        <BurgerSing>  
          <EditOptionContainer>
          <EditOption style={{backgroundColor:'darkgray'}}>
            <EditOptionCircle style={{display:'flex',margin:'1px auto',height:'8px',border:'1.5px solid black'}}/>
            <EditOptionCircle style={{display:'flex',margin:'1px auto'}} />
            <EditOptionCircle style={{display:'flex',margin:'1px auto',height:'8px'}} />
          </EditOption>
        </EditOptionContainer></BurgerSing>
        <InputContainer>
      <StartIcon />
      <StyledInput type="text" placeholder="Ctrl + K" />
    </InputContainer>
      </LeftContainer>
      <RightContainer>
        <BurgerSing><AiOutlineMenu /></BurgerSing>
        <InputFiled>
        </InputFiled>
      </RightContainer>
    </HeaderContainer>
  )
}

export default Header
