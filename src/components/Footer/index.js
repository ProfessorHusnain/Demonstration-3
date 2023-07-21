import React from 'react'
import { FooterContainer } from './FooterElements'
import { Label } from '../Profile/PersonalInfo/PersonalInfoElements'

const Footer = () => {
  return (
    <FooterContainer>
        <Label>&copy;  { new Date().getFullYear()} All rights reserved.</Label>
    </FooterContainer>
  )
}

export default Footer
