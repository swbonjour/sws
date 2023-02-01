import axios from 'axios'

import { eID, APIUrl } from './dotenv.util'

import { StringCreationInterface, StringInterface } from 'types/string.type'

export async function getAllStrings(): Promise<StringInterface[]> {
    const getAllStringUrl = `v1/outlay-rows/entity/${eID}/row/list`

    let response: StringInterface[] | [] = [];
    await axios.get(`${APIUrl}/${getAllStringUrl}`)
        .then((res) => {
            response = res.data;
        })
    return response;
}

export async function createString(rowName: string, mainCosts: number, equipmentCosts: number, overheads: number, estimatedProfit: number, parentId: number | null): Promise<StringCreationInterface> {
    const createStringUrl = `v1/outlay-rows/entity/${eID}/row/create`

    const dataToCreate: StringInterface = {
        equipmentCosts: equipmentCosts,
        estimatedProfit: estimatedProfit,
        machineOperatorSalary: 0,
        mainCosts: mainCosts,
        materials: 0,
        mimExploitation: 0,
        parentId: null || parentId,
        overheads: overheads,
        rowName: rowName,
        salary: 0,
        supportCosts: 0,
        total: 0
    }

    let response: StringCreationInterface | {} = {};
    await axios.post(`${APIUrl}/${createStringUrl}`, dataToCreate)
        .then((res) => {
            response = res.data;
        })
    
    //@ts-ignore
    return response;
}

