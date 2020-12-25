import React, { useState, useEffect } from 'react'
import View from '../component/Detail/View'
import { COCTAILBYID } from '../Config';
import Button from '@material-ui/core/Button';

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
            <Button variant="contained" color="secondary" onClick={
                props.history.goBack
            }>
                {'<---'}
            </Button>
            <View 
                info={fullInfo}
            />
        </div>
    )
}
