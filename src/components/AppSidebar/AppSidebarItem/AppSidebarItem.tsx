import React from 'react'

import { AppSidebarItemSvg } from 'assets/AppSidebarItemSvg'

import './AppSidebarItem.style.scss';

interface AppSidebarItemProps {
    title: string,
    selected: string | null,
    onClick: () => void,
}

export const AppSidebarItem = ({ title, onClick, selected }: AppSidebarItemProps) => {
    console.log(selected);
  return (
    <div className={`app_sidebar-item app_sidebar-item_${selected}`} onClick={onClick}>
        <AppSidebarItemSvg></AppSidebarItemSvg>
        <p className='app_sidebar-item_title'>{ title }</p>
    </div>
  )
}
