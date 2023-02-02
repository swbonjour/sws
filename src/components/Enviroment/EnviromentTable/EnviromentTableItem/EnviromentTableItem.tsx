import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { EnviromentItemSvg } from 'assets/EnviromentItemSvg'
import { DeleteBucketSvg } from 'assets/DeleteBucketSvg';

import './EnviromentTableItem.style.scss';
import { deleteString } from 'utils/ApiIntegration.utils';
import { deleteStringData } from 'store/slices/stringsSlice';
import { setItemCreationValue } from 'store/slices/itemCreationSlice';

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

export const EnviromentTableItem = ({ rowName, mainCosts, equipmentCosts, overheads, estimatedProfit, id }: EnviromentTableItemProps) => {

  const [hoverDelete, setHoverDelete] = useState(false);

  const itemCreationValue = useSelector((state: any) => state.itemReducer.value)
  const dispatch = useDispatch();

  const handleDeleteString = async (e: React.MouseEvent<HTMLDivElement>) => {
    deleteString(id);
    dispatch(deleteStringData(id))
  }

  const handleCreateNewItem = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setItemCreationValue(id));
  }

  console.log(id, itemCreationValue);
  
  return (
    <div>
      <div className='enviroment_item'>
          <div className='enviroment_item-titles'>
              {!hoverDelete && <div onMouseEnter={() => {setHoverDelete(true)}}><EnviromentItemSvg></EnviromentItemSvg></div>}
              {hoverDelete && <div className="enviroment_item-titles_hover" onMouseLeave={() => {setHoverDelete(false)}}>
                <div onClick={handleCreateNewItem}><EnviromentItemSvg></EnviromentItemSvg></div>
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

      {itemCreationValue && id === itemCreationValue[1] && <EnviromentTableItemEmpty></EnviromentTableItemEmpty>}
    </div>
  )
}
