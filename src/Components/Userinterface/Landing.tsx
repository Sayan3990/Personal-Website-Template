import React, { Component } from 'react';

import SideNavBar from '../Functions/SideNavBar';

interface IState {
    isVisible: boolean
}

export default class LandingPage extends Component {
 
    state: IState = {
        isVisible: false
    }

    public render() {
        return ( 
            <>
                <SideNavBar />
                <h1>LANDING</h1>
            </>
        )
    }
}
 