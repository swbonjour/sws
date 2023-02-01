import React, { useEffect, useState } from 'react'

import { EnviromentTableItem } from './EnviromentTableItem/EnviromentTableItem';

import './EnviromentTable.style.scss';
import { getAllStrings } from 'utils/ApiIntegration.utils';
import { StringInterface } from 'types/string.type';

export const EnviromentTable = () => {
  const [enviromentItems, setEnviromentItems] = useState<StringInterface[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await getAllStrings();
      setEnviromentItems(response);
    }
    getData();
  }, [])

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

        {enviromentItems?.map((item) => (
          <EnviromentTableItem rowName={item.rowName} mainCosts={item.mainCosts} equipmentCosts={item.equipmentCosts} overheads={item.overheads} estimatedProfit={item.estimatedProfit} key={item.id}></EnviromentTableItem>
        ))}
    </div>
  )
}
