import React from 'react'
import { InfoCard as InfoCardContainer, MainContent, ProfileContainer, SideBar as SideBarContainer  } from './ProfileElements'
import InfoCard from './InfoCard'
import SideBar from './SideBar'
import PersonalInfo from './PersonalInfo'
import Footer from '../Footer'

const Profile = () => {
    return (
        <ProfileContainer>

            <InfoCardContainer>
                <InfoCard>
                    
                </InfoCard>
            </InfoCardContainer>
            <SideBarContainer>
                <SideBar />
            </SideBarContainer>
            <MainContent>

                <PersonalInfo>
                    
                </PersonalInfo>
                <Footer/>
            </MainContent>
          
  
        </ProfileContainer>
    )
}

export default Profile
