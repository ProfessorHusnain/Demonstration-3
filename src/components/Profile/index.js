import React from 'react'
import { InfoCard as InfoCardContainer, MainContent, ProfileContainer, SideBar as SideBarContainer  } from './ProfileElements'
import InfoCard from './InfoCard'
import SideBar from './SideBar'

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
            <MainContent>MainContent</MainContent>
          

        </ProfileContainer>
    )
}

export default Profile
