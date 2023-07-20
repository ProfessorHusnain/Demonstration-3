import React from 'react'
import { BsPerson } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';
import { PiPasswordBold } from 'react-icons/pi';
import { VscSettings } from 'react-icons/vsc';
import {
    EditOptionCircle,
    EditOption,
    EditOptionContainer,
    ProfileSideBarContainer,
    ProfilePictureContainer,
    ProfileAvatar,
    ProfileAvatarPicker,
    NameAndSocialContainer,
    Name,
    Profession,
    SocialLinkContainer,
    SocialLink,
    OverViewContainer,
    OverViewElement,
    MenuContainer,
    Menu,
    Icon,
    Text

} from './SideBarElements'

const SocialLinkImages = [
    './images/google.svg',
    './images/facebook.svg',
    './images/apple.svg',
]
const OverViewData = [
    { titel: 'Post', count: '86' },
    { titel: 'Project', count: '40' },
    { titel: 'Members', count: '4.5K' },
]

const MenuData = [
    { icon: <BsPerson/>, text: 'Personal Information' },
    { icon: <MdPayment/>, text: 'Payment' },
    { icon: <PiPasswordBold/>, text: 'Password' },
    { icon: <VscSettings/>, text: 'Setting' },
    
]


const SideBar = () => {
    return (
        <ProfileSideBarContainer>

            <EditOptionContainer>
                <EditOption>
                    <EditOptionCircle />
                    <EditOptionCircle />
                    <EditOptionCircle />
                </EditOption>
            </EditOptionContainer>

            <ProfilePictureContainer>
                <ProfileAvatar src='./images/my-avatar.png' />
                <ProfileAvatarPicker />
                <NameAndSocialContainer>
                    <Name>Husnain</Name>
                    <Profession>Full Stack Develpor</Profession>
                    <SocialLinkContainer>
                        {SocialLinkImages.map((i) => {
                            return (
                                <SocialLink src={i} alt='s-icon' />
                            )
                        })}
                    </SocialLinkContainer>
                </NameAndSocialContainer>
                <OverViewContainer>
                    {OverViewData.map((d) => {
                        return (
                            <OverViewElement>
                                <Name>{d.count}</Name>
                                <Profession>{d.titel}</Profession>
                            </OverViewElement>
                        )
                    })}


                </OverViewContainer>
            </ProfilePictureContainer>

            <MenuContainer>

                {MenuData.map((d)=>{
                    return(
                        <Menu>
                        <Icon>{d.icon}</Icon>
                         <Text>{d.text}</Text>
                    </Menu>
                    )
                })}
              
               
            </MenuContainer>
        </ProfileSideBarContainer>
    )
}

export default SideBar
