import React from 'react'

import { EnviromentItemSvg } from 'assets/EnviromentItemSvg'

import './EnviromentTableItem.style.scss';

interface EnviromentTableItemProps {
  rowName: string,
  mainCosts: number,
  equipmentCosts: number,
  overheads: number,
  estimatedProfit: number
}

export const EnviromentTableItem = ({ rowName, mainCosts, equipmentCosts, overheads, estimatedProfit }: EnviromentTableItemProps) => {
  return (
    <div className='enviroment_item'>
        <div className='enviroment_item-titles'>
            <EnviromentItemSvg></EnviromentItemSvg>
            <p>{ rowName }</p>
        </div>
        <div className="enviroment_item-attributes">
            <p>{ mainCosts }</p>
            <p>{ equipmentCosts }</p>
            <p>{ overheads }</p>
            <p>{ estimatedProfit }</p>
        </div>
    </div>
  )
}
