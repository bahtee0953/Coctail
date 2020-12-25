import React, { useState, useEffect } from 'react'
import List from '../component/Home/List'
import SearcBar from '../component/Home/SearcBar'
import { COCTAIL_ALL, FILTERBYALKO, SEARCHBYNAME } from '../Config'
import '../../src/App.css'

export default function HomeScreen() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getAllCoctails()
    }, [])
    const getAllCoctails = async () => {
        let resp = await fetch(COCTAIL_ALL)
        let request = await resp.json()
        setData(request.drinks)
    }
    const getCoctailsByName = async (latter) => {
        if (latter.lenght <= 1 || latter == '') {
            getAllCoctails()
        }
        else {
            let resp = await fetch(SEARCHBYNAME + latter)
            let request = await resp.json()
            setData(request.drinks)
        }
    }

    const filterByAlc = async (filtr) => {
        if (filtr == 'All') {
            getAllCoctails()
        } else {
            let resp = await fetch(FILTERBYALKO + filtr)
            let req = await resp.json()
            setData(req.drinks)
        }
    }
    return (
        <div>
            <h1 className='home'>Coctail Bar</h1>
            <SearcBar
                getCoctailsByName={getCoctailsByName}
                filterByAlc={filterByAlc}
            />
            <List
                data={data}
            />
        </div>
    )
}
