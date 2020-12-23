import React from 'react'
import '../../../src/App.css'
import { Link } from 'react-router-dom'
export default function View(props) {
    return (
        <div>
            {props.info &&
                <div className='detals'>
                    <img src={props.info.strDrinkThumb} className='imgDetals' />
                    <div className="text">
                        <h1>{props.info.strDrink}</h1>
                        <br />
                        <br />
                        <p>{props.info.strInstructions}</p>
                        <div className="infoIng">
                            <div>
                                <b>Ingradients</b>
                                <ol>
                                    <Link to={'/ingradients/' + props.info.strIngredient1}><li className='ingradient'>{props.info.strIngredient1}</li></Link>
                                    <Link to={'/ingradients/' + props.info.strIngredient2}><li className='ingradient'>{props.info.strIngredient2}</li></Link>
                                    <Link to={'/ingradients/' + props.info.strIngredient3}><li className='ingradient'>{props.info.strIngredient3}</li></Link>
                                    <Link to={'/ingradients/' + props.info.strIngredient4}><li className='ingradient'>{props.info.strIngredient4}</li></Link>
                                    <Link to={'/ingradients/' + props.info.strIngredient5}><li className='ingradient'>{props.info.strIngredient5}</li></Link>
                                </ol >
                            </div>
                            <div>
                                <b>Measure</b>
                                <ol>
                                    <li className='ingradient'>{props.info.strMeasure1}</li>
                                    <li className='ingradient'>{props.info.strMeasure2}</li>
                                    <li className='ingradient'>{props.info.strMeasure3}</li>
                                    <li className='ingradient'>{props.info.strMeasure4}</li>
                                    <li className='ingradient'>{props.info.strMeasure5}</li>
                                </ol>
                            </div>
                        </div>
                    </div >
                </div>
            }
        </div >
    )
}
