import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import SideNavBar from '../Functions/SideNavBar';
import UpperNavBar from '../Functions/UpperNavBar';

interface IState {
    isVisible: boolean
}

export default class LandingPage extends Component {
 
    state: IState = {
        isVisible: false
    }

    public render() {
        return (<>
                <UpperNavBar />
                <SideNavBar />
                <Container>
                    <h1>LANDING</h1>
                </Container>
            </>
        )
    }
}
 