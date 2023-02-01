import React from 'react'

import './EnviromentTable.style.scss';

export const EnviromentTable = () => {
  return (
    <div className='enviroment_table'>
        <header className='enviroment_table__header'>
            <div className='enviroment_table__header-titles'>
                <p>Уровень</p>
                <p>Наименование работ</p>
            </div>
            <div className='enviroment_table__header-attributes'>
                <p>Основная з/п</p>
                <p>Оборудование</p>
                <p>Накладные расходы</p>
                <p>Сметная прибыль</p>
            </div>
        </header>
    </div>
  )
}
