import React, { useState } from 'react'
import '../../../src/App.css'
export default function SearcBar(props) {
    const [value, setValue] = useState('')
    return (
        <div id='search'>
            <div className="box">
                <input
                    className='input'
                    type="text"
                    value={value}
                    placeholder='search coctail'
                    onChange={event => {
                        setValue(event.target.value)
                        props.getCoctailsByName(value)
                    }}
                />

                <select
                    className='select'
                    onChange={(event) => {
                        props.filterByAlc(event.target.value)
                    }}>
                    <option value="All" default>all</option>
                    <option value="Alcoholic">alko</option>
                    <option value="Non_Alcoholic">not alko</option>
                </select>
            </div>

        </div>

    )
}
