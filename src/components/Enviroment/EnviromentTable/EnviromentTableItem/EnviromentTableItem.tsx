import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { EnviromentItemSvg } from 'assets/EnviromentItemSvg'
import { DeleteBucketSvg } from 'assets/DeleteBucketSvg';

import './EnviromentTableItem.style.scss';
import { deleteString } from 'utils/ApiIntegration.utils';
import { deleteStringData } from 'store/slices/stringsSlice';

import { EnviromentTableItemEmpty } from '../EnviromentTableItemEmpty/EnviromentTableItemEmpty';

interface EnviromentTableItemProps {
  rowName: string,
  mainCosts: number,
  equipmentCosts: number,
  overheads: number,
  estimatedProfit: number,
  empty?: boolean,
  id?: number,
}

export const EnviromentTableItem = ({ rowName, mainCosts, equipmentCosts, overheads, estimatedProfit, empty, id }: EnviromentTableItemProps) => {

  const [hoverDelete, setHoverDelete] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteString = async (e: React.MouseEvent<HTMLDivElement>) => {
    deleteString(id);
    dispatch(deleteStringData(id))
  }

  if(!empty) {
    return (
      <div className='enviroment_item'>
          <div className='enviroment_item-titles'>
              {!hoverDelete && <div onMouseEnter={() => {setHoverDelete(true)}}><EnviromentItemSvg></EnviromentItemSvg></div>}
              {hoverDelete && <div className="enviroment_item-titles_hover" onMouseLeave={() => {setHoverDelete(false)}}>
                <EnviromentItemSvg></EnviromentItemSvg>
                <div onClick={handleDeleteString} style={{paddingTop: '0.2rem'}}><DeleteBucketSvg></DeleteBucketSvg></div>
              </div>}
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
  } else {
    return (
      <EnviromentTableItemEmpty></EnviromentTableItemEmpty>
    )
  }
}
