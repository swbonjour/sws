import React from 'react'

import { EnviromentItemSvg } from 'assets/EnviromentItemSvg'

import './EnviromentTableItem.style.scss';

export const EnviromentTableItem = () => {
  return (
    <div className='enviroment_item'>
        <div className='enviroment_item-titles'>
            <EnviromentItemSvg></EnviromentItemSvg>
            <p>Южная строительная площадка</p>
        </div>
        <div className="enviroment_item-attributes">
            <p>20 348</p>
            <p>1 750</p>
            <p>108,07</p>
            <p>1 209 122,5</p>
        </div>
    </div>
  )
}
