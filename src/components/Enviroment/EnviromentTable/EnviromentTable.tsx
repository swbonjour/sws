import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { EnviromentTableItem, EnviromentTableItemProps } from './EnviromentTableItem/EnviromentTableItem';
import { EnviromentTableItemEmpty } from './EnviromentTableItemEmpty/EnviromentTableItemEmpty';

import './EnviromentTable.style.scss';
import { getAllStrings } from 'utils/ApiIntegration.utils';
import { setStringsData } from 'store/slices/stringsSlice';
import { StringInterface } from 'types/string.type';

export interface RecursiveComponentProps {
  rowName: string,
  mainCosts: number,
  equipmentCosts: number,
  overheads: number,
  estimatedProfit: number,
  empty?: boolean,
  id?: number,
  depth: number,
  children: object[] | undefined,
}

const RecursiveComponent = ({ rowName, mainCosts, equipmentCosts, overheads, estimatedProfit, id, depth, children }: RecursiveComponentProps) => {
  return (
    <div>
      <EnviromentTableItem rowName={rowName} mainCosts={mainCosts} equipmentCosts={equipmentCosts} overheads={overheads} estimatedProfit={estimatedProfit} key={id} id={id} depth={depth}></EnviromentTableItem>

      {Array.isArray(children) ? (
        <div>
          {children.map(item => (
            //@ts-ignore
            <RecursiveComponent rowName={item.rowName} mainCosts={item.mainCosts} equipmentCosts={item.equipmentCosts} overheads={item.overheads} estimatedProfit={item.estimatedProfit} key={item.id} id={item.id} depth={depth + 1} children={item.child}/>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export const EnviromentTable = () => {
  const strings = useSelector((state: any) => state.stringReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await getAllStrings();
      dispatch(setStringsData(response));
    }
    getData();
  }, [strings])

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
        <EnviromentTableItemEmpty></EnviromentTableItemEmpty> :
        strings?.map((item: StringInterface) => (
          <RecursiveComponent rowName={item.rowName} mainCosts={item.mainCosts} equipmentCosts={item.equipmentCosts} overheads={item.overheads} estimatedProfit={item.estimatedProfit} key={item.id} id={item.id} depth={0} children={item.child}></RecursiveComponent>
          ))}
    </div>
  )
}
