import React from 'react'
import { BurgerSearchContainer,InputContainer,StartIcon,StyledInput, BurgerSing, HeaderContainer, InputFiled, LeftContainer, RightContainer, SearchContainer } from './HeaderElements'
import { IoMdNotifications } from 'react-icons/io'
import { TbLanguage as Language } from 'react-icons/tb'
import { BiMessageSquareDots } from 'react-icons/bi'
import { AiFillWindows } from 'react-icons/ai'
import { EditOption, EditOptionCircle, EditOptionContainer, ProfileAvatar } from '../Profile/SideBar/SideBarElements'
const Header = ({handleToggleSidebar}) => {
  return (
    <HeaderContainer>
      <LeftContainer>

        <BurgerSing onClick={handleToggleSidebar}>  
          <EditOptionContainer >
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
      <EditOptionContainer  >
        <EditOption style={{height:'45px',width:'45px'}}>
          <BiMessageSquareDots style={{marginTop:'6px',height:'30px',width:'30px'}}/>

        </EditOption>
        <EditOption style={{height:'45px',width:'45px'}}>
        <IoMdNotifications style={{marginTop:'6px',height:'30px',width:'30px'}}/>
        </EditOption>

        <EditOption style={{height:'45px',width:'45px'}}>
        <Language style={{marginTop:'6px',height:'30px',width:'30px'}}/>
  
        </EditOption>
        <EditOption style={{height:'45px',width:'45px'}}>
        <AiFillWindows style={{marginTop:'6px',height:'30px',width:'30px'}}/>
          
        </EditOption>
        </EditOptionContainer>
       <ProfileAvatar src='./images/my-avatar.png' style={{height:'45px',width:'45px',backgroundColor:'blue'}}></ProfileAvatar>
      </RightContainer>
    </HeaderContainer>
  )
}

export default Header
