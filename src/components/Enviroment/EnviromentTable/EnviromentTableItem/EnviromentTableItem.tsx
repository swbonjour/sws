import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { EnviromentItemSvg } from 'assets/EnviromentItemSvg'
import { DeleteBucketSvg } from 'assets/DeleteBucketSvg';

import './EnviromentTableItem.style.scss';
import { changeString, deleteString } from 'utils/ApiIntegration.utils';
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

  const [changeItem, setChangeItem] = useState(false)

  const [rowNameInput, setRowNameInput] = useState(rowName);
  const [mainCostsInput, setMainCostsInput] = useState(`${mainCosts}`);
  const [equipmentCostsInput, setEquipmentCostsInput] = useState(`${equipmentCosts}`);
  const [overheadsInput, setOverheadsInput] = useState(`${overheads}`);
  const [estimatedProfitInput, setEstimatedProfitInput] = useState(`${estimatedProfit}`);

  const handleChangeItem = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      if(rowNameInput !== rowName || mainCostsInput !== String(mainCosts) || equipmentCostsInput !== String(equipmentCosts) || overheadsInput !== String(overheads) || estimatedProfitInput !== String(estimatedProfit)) {
        const data = await changeString(id, rowNameInput, Number(mainCostsInput), Number(equipmentCostsInput), Number(overheadsInput), Number(estimatedProfitInput))
        setChangeItem(false);
      }
    }
  }

  console.log(rowNameInput);
  
  return (
    <div>
      <div className='enviroment_item'>
          <div className='enviroment_item-titles'>
              {!hoverDelete && <div onMouseEnter={() => {setHoverDelete(true)}}><EnviromentItemSvg></EnviromentItemSvg></div>}
              {hoverDelete && <div className="enviroment_item-titles_hover" onMouseLeave={() => {setHoverDelete(false)}}>
                <div onClick={handleCreateNewItem}><EnviromentItemSvg></EnviromentItemSvg></div>
                <div onClick={handleDeleteString} style={{paddingTop: '0.2rem'}}><DeleteBucketSvg></DeleteBucketSvg></div>
              </div>}
              {(changeItem && <input type='text' value={rowNameInput} onInput={(e) => {const target = e.target as HTMLInputElement; setRowNameInput(target.value)}}></input>) || <p onDoubleClick={() => {setChangeItem(true)}}>{ rowNameInput }</p>}
          </div>
          <div className="enviroment_item-attributes">
              {(changeItem && <input type='text' value={mainCostsInput} onInput={(e) => {const target = e.target as HTMLInputElement; setMainCostsInput(target.value)}}></input>) || <p onDoubleClick={() => {setChangeItem(true)}}>{ mainCostsInput }</p>}
              {(changeItem && <input type='text' value={equipmentCostsInput} onInput={(e) => {const target = e.target as HTMLInputElement; setEquipmentCostsInput(target.value)}}></input>) || <p onDoubleClick={() => {setChangeItem(true)}}>{ equipmentCostsInput }</p>}
              {(changeItem && <input type='text' value={overheadsInput} onKeyDown={handleChangeItem} onInput={(e) => {const target = e.target as HTMLInputElement; setOverheadsInput(target.value)}}></input>) || <p onDoubleClick={() => {setChangeItem(true)}}>{ overheadsInput }</p>}
              {(changeItem && <input type='text' value={estimatedProfitInput} onInput={(e) => {const target = e.target as HTMLInputElement; setEstimatedProfitInput(target.value)}}></input>) || <p onDoubleClick={() => {setChangeItem(true)}}>{ estimatedProfitInput }</p>}
          </div>
      </div>

      {itemCreationValue && id === itemCreationValue[1] && <EnviromentTableItemEmpty></EnviromentTableItemEmpty>}
    </div>
  )
}
