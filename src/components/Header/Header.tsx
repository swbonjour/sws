import React from 'react'

import { MenuSvg } from 'assets/MenuSvg'
import { BackSvg } from 'assets/BackSvg'

import './Header.style.scss'

export const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
            <ul className='header__nav_list'>
                <li className='header__nav_list-item'><MenuSvg></MenuSvg></li>
                <li className='header__nav_list-item'><BackSvg></BackSvg></li>
                <li className='header__nav_list-item_text'><p>Просмотр</p></li>
                <li className='header__nav_list-item_text'><p>Управление</p></li>
            </ul>
        </nav>
    </header>
  )
}
