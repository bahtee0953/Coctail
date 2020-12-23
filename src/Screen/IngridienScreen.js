import React, { useEffect, useState } from 'react'
import { SEARCHBYNAME } from '../Config'

export default function IngridienScreen(props) {
    const [ing, setIng] = useState(null)
    useEffect(() => {
        let param = props.match.params.name
        getIngredient(param)
    }, [])
    const getIngredient = async (prm) => {
        let resp = await fetch(SEARCHBYNAME + prm)
        let req = await resp.json()
        setIng(req ? req.ingredients[0] : null)
    }
    return (
        <div>
            <button onClick={
                props.history.goBack
            }>
                {"<---"}
            </button>
            {ing ?
                <div>
                    <h1><i>{ing.strIngredient}</i></h1>
                    <b><i>{ing.strDescription}</i></b>
                </div>
                : <h1>Error</h1>
            }
        </div>
    )
}
