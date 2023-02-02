import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { EnviromentItemSvg } from 'assets/EnviromentItemSvg'

import './EnviromentTableItemEmpty.style.scss';
import { createString } from 'utils/ApiIntegration.utils';
import { setStringsData } from 'store/slices/stringsSlice';

export const EnviromentTableItemEmpty = () => {
  const [rowNameInput, setRowNameInput] = useState('');
  const [mainCostsInput, setMainCostsInput] = useState('');
  const [equipmentCostsInput, setEquipmentCostsInput] = useState('');
  const [overheadsInput, setOverheadsInput] = useState('');
  const [estimatedProfitInput, setEstimatedProfitInput] = useState('');

  const strings = useSelector((state: any) => state.stringReducer.value)
  const dispatch = useDispatch();

  const handleCreateString = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      if(rowNameInput !== '' && mainCostsInput !== '' && equipmentCostsInput !== '' && overheadsInput !== '' && estimatedProfitInput !== '') {
        const data = await createString(rowNameInput, Number(mainCostsInput), Number(equipmentCostsInput), Number(overheadsInput), Number(estimatedProfitInput), null);
        dispatch(setStringsData([data.current, ...strings]))
        }
        }
    }

    return (
      <div className='enviroment_item'>
          <div className='enviroment_item-titles'>
              <EnviromentItemSvg></EnviromentItemSvg>
              <input type="text" value={rowNameInput} onInput={(e) => {const target = e.target as HTMLInputElement; setRowNameInput(target.value)}}/>
          </div>
          <div className="enviroment_item-attributes">
              <input type="text" value={mainCostsInput} onInput={(e) => {const target = e.target as HTMLInputElement; setMainCostsInput(target.value)}}/>
              <input type="text" value={equipmentCostsInput} onInput={(e) => {const target = e.target as HTMLInputElement; setEquipmentCostsInput(target.value)}}/>
              <input type="text" value={overheadsInput} onInput={(e) => {const target = e.target as HTMLInputElement; setOverheadsInput(target.value)}} onKeyDown={handleCreateString}/>
              <input type="text" value={estimatedProfitInput} onInput={(e) => {const target = e.target as HTMLInputElement; setEstimatedProfitInput(target.value)}}/>
          </div>
      </div>
    )
}