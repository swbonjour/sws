import React from 'react'

import { Header } from 'components/Header/Header'
import { Sidebar } from 'components/Sidebar/Sidebar'
import { Enviroment } from 'components/Enviroment/Enviroment'

import { getAllStrings } from 'utils/ApiIntegration.utils'

import './HomePage.style.scss'

export const HomePage = () => {
  getAllStrings();
  return (
    <div className='home_page'>
        <Header></Header>
        <section className='home_page__section'>
          <Sidebar></Sidebar>
          <Enviroment></Enviroment>
        </section>
    </div>
  )
}
