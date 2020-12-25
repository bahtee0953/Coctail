import React from 'react'
import { Link } from 'react-router-dom'
import '../../../src/App.css'
export default function List(props) {
    return (
        <div className='card'>
            {props.data ?
                props.data.map(el => {
                    return (
                        <Link to={'/detail/' + el.idDrink} key={el.idDrink} style={{ color: 'black' }}>
                            <div>
                                <h3 className='name'>{el.strDrink}</h3>
                                <img className='imgDrink' src={el.strDrinkThumb} />
                            </div>
                        </Link>
                    )
                })
                : <div class="loader"></div>
            }
        </div>
    )
}
