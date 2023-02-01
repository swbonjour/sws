import React from 'react'

import { AppSidebarItemSvg } from 'assets/AppSidebarItemSvg'

import './SidebarItem.style.scss';

interface SidebarItemProps {
    title: string,
    selected: string | null,
    onClick: () => void,
}

export const SidebarItem = ({ title, onClick, selected }: SidebarItemProps) => {
  return (
    <div className={`sidebar-item sidebar-item_${selected}`} onClick={onClick}>
        <AppSidebarItemSvg></AppSidebarItemSvg>
        <p className='sidebar-item_title'>{ title }</p>
    </div>
  )
}
