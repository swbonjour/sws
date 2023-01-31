import React, { useState } from 'react'

import { AppSidebarItem } from './AppSidebarItem/AppSidebarItem'
import { ArrowSvg } from 'assets/ArrowSvg'

import './AppSidebar.style.scss'

export const AppSidebar = () => {
  const [selectedItem, setSelectedItem] = useState(4);

  const imitatedSidebarItemsTitleArray: string[] = ['По проекту', 'Объекты', 'РД', 'МТО', 'СМР']
  return (
    <div className='app_sidebar'>
        <header className='app_sidebar__header'>
            <div className='app_sidebar__header-text'>
                <p className="app_sidebar__header-title">Название проекта</p>
                <p className="app_sidebar__header-abbreviation">Аббревиатура</p>
            </div>
            <ArrowSvg></ArrowSvg>
        </header>

        <section className='app_sidebar__content'>
            {imitatedSidebarItemsTitleArray.map((title, index) => (
                <AppSidebarItem title={title} key={index} onClick={() => {setSelectedItem(index)}} selected={selectedItem === index ? 'selected' : null}></AppSidebarItem>
            ))}
        </section>
    </div>
  )
}
