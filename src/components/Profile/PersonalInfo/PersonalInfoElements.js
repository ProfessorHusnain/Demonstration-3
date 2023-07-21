import  styled  from "styled-components";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export const PersonalInfoContainer=styled.div`
background-color: rgb(255, 255, 255);
    color: rgb(29, 38, 48);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(219, 224, 229, 0.65);
    border-radius: 12px; 

    
`
export const Title=styled.h1`
 
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.57;
   padding: 25px;

   border-bottom: 1px solid rgba(219, 224, 229, 0.65);
  
`

export const FiledContainer=styled.div`
 display: flex;
 flex-direction: column;
 padding: 0 25px;
`

export const RowWrapper=styled.div`
 display: flex;
 flex-direction: row;
 gap: 20px;
 margin: 10px 0;
`

export const RowMapper=styled.div`
 display: flex;
 flex-direction: column;

 width: 100%;
 
`
export const Label =styled.label`
     font-size: 0.875rem;
    line-height: 1.4375em;
    font-family: "Inter var";
    white-space: nowrap;
    padding:8px ;
    color: rgb(91, 107, 121);
`

export const InputFiled = styled.input`
padding: 14px;
border-radius: 6px;
border: 1.5px solid darkgrey;
cursor: pointer;
 
&:focus{
     border-color: blue;
     outline: none;
}
`


export const SelectionFiledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  justify-content: space-evenly;
`

export const SelectionFiled = styled.select`
padding: 14px;
border-radius: 6px;
width: 100%;
border: 1.5px solid darkgrey;
cursor: pointer;

&:focus{
     border-color: blue;
     outline: none;
}

`

export const PhoneInputFiled = styled(PhoneInput)`
.PhoneInputCountry {
padding: 14px;
border-radius: 6px;
border: 1.5px solid darkgrey;
cursor: pointer;
&:focus{
     border-color: blue;
     outline: none;
}
}

.PhoneInputInput{
     padding: 14px;
border-radius: 6px;
border: 1.5px solid darkgrey;
cursor: pointer;
&:focus{
     border-color: blue;
     outline: none;
}
}
`

export const AddressFiled = styled.textarea`
padding: 14px;
border-radius: 6px;
 max-width: inherit;
 min-width: 90%;
  
 max-height: 30px;
 min-height: 30px;
 line-height: 1.4375em;
border: 1.5px solid darkgrey;
cursor: pointer;

&:focus{
     border-color: blue;
     outline: none;
}
`



export const CountrynputFiled = styled(PhoneInput)`
.PhoneInputCountry {
padding: 14px;
width: 100%;
border-radius: 6px;
border: 1.5px solid darkgrey;
cursor: pointer;
 
&:focus{
     border-color: blue;
     outline: none;
}
}
.PhoneInputCountrySelect{
     position: relative;
    top: 0;
    left: 0;
 
    height: 100%;
    width: 80%;
    z-index: 1;
     border: none;
    opacity: 1;
    cursor: pointer;
 
}
select {
     border: none;
     outline: none;
}

.PhoneInputCountry{
 
  display: flex;
  justify-content: end;
}

.PhoneInputCountryIconImg.PhoneInputCountryIcon,
.PhoneInputCountryIcon--border{
     position: absolute;
     width: 25px;
     height: 19px;
     z-index: 1;
     padding: 1px;
     top: -1;
     background-color: none;
    box-shadow: none;
     left: 0;
     margin-left: 5px;
      
    
}
 
.PhoneInputInput,
.PhoneInputCountrySelectArrow,
.PhoneInputInternationalIconPhone
  {
     display: none;
}
`



export const SkillContainer=styled(RowWrapper)`
 flex-wrap: wrap;
 
`
export const SkillAdder=styled(InputFiled)`
 appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
     flex-grow: 1;
     border: none;
    width: max-content;
   
    &:focus{
     border-bottom: 1px solid darkgray;
     border-radius: none;
     outline: none;
}
 
`


export const SkillData=styled.datalist`
   appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-calendar-picker-indicator:none; 
`

export const SkillVeiwerBox=styled.div`
  padding: 1px;
border-radius: 16px;
width: fit-content;
display: flex;
 
border: 1.5px solid darkgrey;

`
export const SkillVeiwerIcon=styled.img`
   width: 15px;
   height: 15px;
   padding: 5px;
   cursor: pointer;
 margin: auto;
`
export const Note=styled(AddressFiled)`
margin-top: 15px;
max-height: 150px;
min-height: 150px;
height: 150px;

max-width: 95%;
min-width: 95%;
width: 95%;
cursor: pointer;
  
`
export const ButtonContainer=styled.div`
 
     
     padding: 5px;
     margin-top: 5px;
     display: flex;
     justify-content: end;
  
`


export const Button=styled.button`
 
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: ${({outline})=>outline?'1px':'0px'} ;
    border: ${({outline})=>outline?'1px solid ':'0px'};
    cursor: pointer;
    user-select: none;
    appearance: none;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Inter var";
    font-size: 0.875rem;
    line-height: 1.75;
     margin: 4px;
    padding: 6px 16px;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: ${({outline})=>outline?'black':'rgb(255, 255, 255)'};
    background-color: ${({outline})=>outline?'white':'rgb(70, 128, 255)'};
    box-shadow: none;
    font-weight: 400;

`

