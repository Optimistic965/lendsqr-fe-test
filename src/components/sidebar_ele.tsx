import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/sidebarEle.scss"

type SidebarEleProps = {
  classN?: string,
  mainIcon: string,
  message: string,
  optional? :  string
}

export const  SidebarEle = ({classN, mainIcon, message, optional}: SidebarEleProps) => {
  return (
    <NavLink to={`/${message.toLowerCase()}`} className={`first_tab ${classN}`}>
        <div className="icon_cont">
            <img src={mainIcon} alt="icon" />
        </div>
        <p>{message}</p>
       { optional && <div><img src={optional} alt="icon" /></div>}
    </NavLink>
  )
}
