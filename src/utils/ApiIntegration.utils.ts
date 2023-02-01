import axios from 'axios'

import { eID, APIUrl } from './dotenv.util'

import { StringInterface } from 'types/string.type'

export const getAllStrings = async (): Promise<StringInterface[]> => {
    const getAllStringUrl = `v1/outlay-rows/entity/${eID}/row/list`

    let response: StringInterface[] | [] = [];
    await axios.get(`${APIUrl}/${getAllStringUrl}`)
        .then((res) => {
            response = res.data;
        })
    return response;
}

