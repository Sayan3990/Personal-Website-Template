import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import SideNavBar from '../Functions/SideNavBar';
import UpperNavBar from '../Functions/UpperNavBar';

interface IState {
    isVisible: boolean
}

export default class CPPage extends Component {
 
    state: IState = {
        isVisible: false
    }

    public render() {
        return (<>
                <UpperNavBar />
                <SideNavBar />
                <Container>
                    <h1>Competitive Programming</h1>
                </Container>
            </>
        )
    }
}
 