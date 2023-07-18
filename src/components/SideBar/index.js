import React from 'react'
import {
    SideBarContainer,
    SideBarTitle,
    SideBarIcon,
    SideBarText,
    SideBarFiled

} from './SideBarElements.js'

const dummyMenu=[ 
    {icon:"./images/spider-man.svg",text:"I'm Menu"},
    {icon:"./images/spider-man.svg",text:"I'm Menu"},
    {icon:"./images/spider-man.svg",text:"I'm Menu"},
    {icon:"./images/spider-man.svg",text:"I'm Menu"},
    {icon:"./images/spider-man.svg",text:"I'm Menu"},
    {icon:"./images/spider-man.svg",text:"I'm Menu"},
    {icon:"./images/spider-man.svg",text:"I'm Menu"}
]

const SideBar = ({ isOpen }) => {
    return (
        <SideBarContainer >
            <SideBarTitle><h1>Logo</h1></SideBarTitle>
            <SideBarFiled isOpen={isOpen}>
                {dummyMenu.map((i)=>{
                    return(
                        <>
                        <SideBarIcon src={i.icon} alt={i.text}></SideBarIcon>
                        <SideBarText isOpen={isOpen}>{i.text}</SideBarText>
                        </>
                    )
                })}
              
            </SideBarFiled>
        </SideBarContainer>
    )
}

export default SideBar
