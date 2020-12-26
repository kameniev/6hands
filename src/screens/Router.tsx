import { FirstScreen, SecondScreen, MainScreen } from './index'
import React, { Component } from 'react'
import {NativeRouter, Route, Switch} from 'react-router-native'




export default class Router extends Component {
    render() {
        return(
           
            <NativeRouter>
                    <Switch>
                        <Route exact path="/" component={FirstScreen}/>
                        <Route exact path="/login" component={SecondScreen}/>
                        <Route exact path="/search" component={MainScreen}/>
                    </Switch>    
            </NativeRouter>
           
        )
    }
}







