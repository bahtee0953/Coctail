import React, { useState, useEffect } from 'react'
import View from '../component/Detail/View'
import { COCTAILBYID } from '../Config'

export default function DetailScreen(props) {
    const [fullInfo, setfullInfo] = useState(null)
    useEffect(() => {
        let param = props.match.params.id
        getDetailInfo(param)
    }, [])
    const getDetailInfo = async (prm) => {
        let resp = await fetch(COCTAILBYID + prm)
        let req = await resp.json()
        console.log(req.drinks[0])
        setfullInfo(req.drinks[0])
    }
    return (
        <div>
            <button className='back' onClick={
                props.history.goBack
            }>
                {'<---'}
            </button>
            <View
                info={fullInfo}
            />
        </div>
    )
}
