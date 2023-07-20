import React, { useState } from 'react'
import {
  PersonalInfoContainer,
  Title,
  FiledContainer,
  RowWrapper,
  RowMapper,
  Label,
  InputFiled,
  SelectionFiled,
  SelectionFiledContainer,
  PhoneInputFiled,
  AddressFiled,
  CountrynputFiled
} from './PersonalInfoElements'
 
 
const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 }, // Leap year has 29 days
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
];

const years = [];

for (let year = 1975; year <= 2050; year++) {
  years.push([year]);
}

const PersonalInfo = () => {

  const [phoneNumber,setPhoneNumber]=useState()
  const [country,setCountry]=useState()

  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <PersonalInfoContainer>
      <Title>
        Personal Information
      </Title>
      <FiledContainer>
      <RowWrapper>
        <RowMapper>
          <Label>First Name</Label>
          <InputFiled/>
        </RowMapper>
        <RowMapper>
          <Label>First Name</Label>
          <InputFiled/>
        </RowMapper>
      </RowWrapper>


      <RowWrapper>
        <RowMapper>
          <Label>Email Address</Label>
          <InputFiled/>
        </RowMapper>
        <RowMapper>
          <Label>Date of Birth (+18)</Label>
          <SelectionFiledContainer>
          <SelectionFiled>
            {
              months.map((m)=>{
                return(
                  <option>{m.name}</option>
                )
              })
            }
          </SelectionFiled>
          <SelectionFiled>
          {
              days.map((m)=>{
                return(
                  <option>{m}</option>
                )
              })
            }
          </SelectionFiled>
          <SelectionFiled>
          {
              years.map((m)=>{
                return(
                  <option>{m}</option>
                )
              })
            }
          </SelectionFiled>
          </SelectionFiledContainer>
          
        </RowMapper>
      </RowWrapper>

      <RowWrapper>
        <RowMapper>
          <Label>Phone Number</Label>
          <PhoneInputFiled
          value={phoneNumber}
          onChange={setPhoneNumber}
          defaultCountry='PK'
          international 
          countryCallingCodeEditable={false}
          />
        </RowMapper>
        <RowMapper>
          <Label>Designation</Label>
          <InputFiled/>
        </RowMapper>
      </RowWrapper>


      </FiledContainer>

      <Title>
      Address
      </Title>
      <FiledContainer>

      <RowWrapper>
        <RowMapper>
          <Label>Address 01</Label>
          <AddressFiled/>
        </RowMapper>
        <RowMapper>
          <Label>Address 02</Label>
          <AddressFiled/>
        </RowMapper>
      </RowWrapper>


      <RowWrapper>
        <RowMapper>
          <Label>Country</Label>
          <CountrynputFiled
          value={country}
          onChange={setCountry}
          defaultCountry='PK'
          />
        </RowMapper>
        <RowMapper>
          <Label>State</Label>
          <InputFiled/>
        </RowMapper>
      </RowWrapper>

      </FiledContainer>
      <Title>Skills</Title>

    </PersonalInfoContainer>
  )
}

export default PersonalInfo
