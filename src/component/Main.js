import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../Screen/HomeScreen'
import DetailScreen from '../Screen/DetailScreen'
import IngridienScreen from '../Screen/IngridienScreen'
export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} /> {/* мы через / обращаемся другим страницам */}
            <Route exact path='/detail/:id' component={DetailScreen} />
            <Route exact path='/ingridient/:name' component={IngridienScreen} />
        </Switch>
    )
}
