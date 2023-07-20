import React from 'react'

import {
  InfoCardContainer,
  ProgressContainer,
  Progress,
  ContentContainer,
  ButtonContainer,
  Button,
  ContentTitle,
  ContentDescription
 
}
from './InfoCardElements.js'

const InfoCard = () => {
  return (
   <InfoCardContainer >
<ProgressContainer>
    <Progress/>
</ProgressContainer>
<ContentContainer>
<ContentTitle>Edit Your Profile</ContentTitle>
<ContentDescription>Complete your profile to unlock all features</ContentDescription>
</ContentContainer>

<ButtonContainer><Button>Edit Your Profile</Button></ButtonContainer>
   </InfoCardContainer>
    )
}

export default InfoCard
