 
import  styled, {keyframes}  from "styled-components";

export const InfoCardContainer=styled.div`
  display: grid;
  background-image: url('./images/OIP.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 125px;
  background-position: center;
    border-radius: 12px; 

  grid-template-columns: 15% 1fr 1fr 1fr;
  grid-template-areas: 'progressBarContainer contentContainer span buttonContainer';
`
/*-----------------------------------------------------------------*/
export const ProgressContainer=styled.div`
grid-area: progressBarContainer;
 display: flex;
 justify-content: center;
 margin: auto;
`

export const Progress=styled.div`
 background-color: red;
border-radius: 50%;
width: 100px;
height: 100px;
 
`
 


/*-----------------------------------------------------------------*/
export const ContentContainer=styled.div`
grid-area: contentContainer;
display :flex ;
justify-content: center;
flex-direction: column;
`

export const ContentTitle=styled.h1`

 font-size: 20px;
`

export const ContentDescription=styled.p`
 
`

/*-----------------------------------------------------------------*/
export const ButtonContainer=styled.div`
grid-area: buttonContainer;
display: flex;
  justify-content: center;  
  align-items: center;  
`

export const Button=styled.button`
    display: flex;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    cursor: pointer;
    user-select: none;
    appearance: none;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Inter var";
    font-size: 0.875rem;
    line-height: 1.75;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgb(255, 255, 255);
    background-color: rgb(70, 128, 255);
    box-shadow: none;
    font-weight: 400;

`