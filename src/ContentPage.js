import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MenuOne } from './MenuOne.js';
import { MenuTwo } from './MenuTwo.js';

export class ContentPage extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/menu1" component={MenuOne} />
                    <Route path="/menu2" component={MenuTwo} />
                </Switch>
            </div>
        )
    }
}