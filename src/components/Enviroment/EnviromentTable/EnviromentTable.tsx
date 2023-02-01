import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { EnviromentTableItem } from './EnviromentTableItem/EnviromentTableItem';

import './EnviromentTable.style.scss';
import { getAllStrings } from 'utils/ApiIntegration.utils';
import { setStringsData } from 'store/slices/stringsSlice';
import { StringInterface } from 'types/string.type';

export const EnviromentTable = () => {
  const strings = useSelector((state: any) => state.stringReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await getAllStrings();
      dispatch(setStringsData(response));
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

        {strings?.length === 0 ? 
        <EnviromentTableItem rowName={''} mainCosts={0} equipmentCosts={0} overheads={0} estimatedProfit={0} empty={true}></EnviromentTableItem> :
        strings?.map((item: StringInterface) => (
          <EnviromentTableItem rowName={item.rowName} mainCosts={item.mainCosts} equipmentCosts={item.equipmentCosts} overheads={item.overheads} estimatedProfit={item.estimatedProfit} key={item.id}></EnviromentTableItem>
          ))}
    </div>
  )
}
