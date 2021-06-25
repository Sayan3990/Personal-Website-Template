import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

interface IState {
    isVisible: boolean
}

export default class LandingPage extends Component {
 
    state: IState = {
        isVisible: false
    }

    public render() {
        return (<>
                <Container>
                <h1 id="main-banner-h1">Landing</h1>
                    
                </Container>
            </>
        )
    }
}
