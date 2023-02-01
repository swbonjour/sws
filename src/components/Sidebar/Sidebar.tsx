import React, { useState } from 'react'

import { SidebarItem } from './SidebarItem/SidebarItem'
import { ArrowSvg } from 'assets/ArrowSvg'

import './Sidebar.style.scss'

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(4);

  const imitatedSidebarItemsTitleArray: string[] = ['По проекту', 'Объекты', 'РД', 'МТО', 'СМР']
  return (
    <div className='sidebar'>
        <header className='sidebar__header'>
            <div className='sidebar__header-text'>
                <p className="sidebar__header-title">Название проекта</p>
                <p className="sidebar__header-abbreviation">Аббревиатура</p>
            </div>
            <ArrowSvg></ArrowSvg>
        </header>

        <section className='sidebar__content'>
            {imitatedSidebarItemsTitleArray.map((title, index) => (
                <SidebarItem title={title} key={index} onClick={() => {setSelectedItem(index)}} selected={selectedItem === index ? 'selected' : null}></SidebarItem>
            ))}
        </section>
    </div>
  )
}
