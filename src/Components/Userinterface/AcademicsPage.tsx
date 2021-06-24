import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import SideNavBar from '../Functions/SideNavBar';
import UpperNavBar from '../Functions/UpperNavBar';

interface IState {
    isVisible: boolean
}

export default class AcademicsPage extends Component {
 
    state: IState = {
        isVisible: false
    }

    public render() {
        return (<>
                <UpperNavBar />
                <SideNavBar />
                <Container>
                    <h1>Academics</h1>
                </Container>
            </>
        )
    }
}
 