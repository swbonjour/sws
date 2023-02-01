import React from 'react'

import { EnviromentTable } from './EnviromentTable/EnviromentTable';

import './Enviroment.scss';

export const Enviroment = () => {
  return (
    <main className='enviroment'>
        <header className='enviroment__header'>
            <div className="enviroment__header-title">
                <p>Строительно-монтажные работы</p>
            </div>
        </header>

        <EnviromentTable></EnviromentTable>
    </main>
  )
}
