import styled  from "styled-components";
import { NavLink } from "react-router-dom";

export const ProfileSideBarContainer=styled.div`
display: flex;
 flex-direction: column;
 background-color: rgb(255, 255, 255);
    color: rgb(29, 38, 48);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(219, 224, 229, 0.65);
    border-radius: 12px; 
`
/**------------------------------------------------------------ */

export const  EditOptionContainer=styled.div`
display: block;
`

export const  EditOption=styled.div`
display: block;

justify-content: center;
align-items: center;

margin: 15px 15px;
float: right;
height: 30px;
width: 30px;
text-align: center;
border-radius: 7px;
cursor: pointer;
&:hover{
    background-color: #BCCACA;
}
`
export const  EditOptionCircle=styled.span`
width: 3px;
display:  flex;

 

height: 3px;
 margin: 1px;
border-radius: 50%;
border: 1px solid black;
`
/**------------------------------------------------------------ */

export const ProfilePictureContainer=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr;
grid-template-areas: 
'profilePic'
 'NameAndSocial'
;
 
`

export const ProfileAvatar=styled.img`
grid-area: profilePic;
height: 125px;
width: 125px;
margin: auto;
border-radius: 50%;
border: 1px dashed blue;
`

export const ProfileAvatarPicker=styled.img`
grid-area: profilePic;
height: 125px;
width: 125px;
cursor: pointer;
margin: auto;
color: whitesmoke;
border-radius: 50%;
&:hover{
     background-color: #3C4040;
    opacity: 0.6;

 }
 

`

export const NameAndSocialContainer=styled.div`
display: flex;
grid-area: NameAndSocial;
justify-content: center;
text-align: center;
flex-direction: column;
margin: 0;
`
export const Name=styled.h1`
 font-size: 20px;
 margin-top: 5px;
 
`
export const Profession=styled.p`
 font-size: 15px;
 font-weight: 500;
 margin-top: 5px;
 
`

export const SocialLinkContainer=styled.div`
  display: inline-flex;
  justify-content: center;
  margin-top:5px;
`


export const SocialLink=styled.img`
 width: 30px;
 height: 30px;
 cursor: pointer;
 margin: 5%;
`

/**------------------------------------------------------------ */

export const OverViewContainer=styled.div`
display: flex;
justify-content: space-around;
margin-top:10px;
`


export const OverViewElement=styled.div`
 display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
margin: 0;
`

/**------------------------------------------------------------ */

export const MenuContainer=styled.div`
 display: flex;
flex-direction: column;
margin-top:15px;

`

export const Menu=styled(NavLink)`
 display: flex;
 margin: 3px;
 
 text-decoration: none;
 color: black;
 padding: 10px;
 border-radius: 10px;

 &:hover{
    background-color: #BCCACA;
 }
 
 &:active{
    background-color: #BCCACB;
    color: blue;
 }
`
export const Icon=styled.div`
 
`
export const Text=styled.p`
 margin-left: 10px;
`