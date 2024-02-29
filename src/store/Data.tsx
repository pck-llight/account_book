import {atom} from "jotai";

interface DataType {
    date: Date,
    price: number,
    usage: string,
    isPlus: boolean,
}

export const dataAtom = atom<DataType[]>([])

//데이터는? ID : 날짜, value : 금액, 사용처 (지출인지 아닌지 판별)