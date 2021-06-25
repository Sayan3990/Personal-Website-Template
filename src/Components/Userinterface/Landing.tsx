import React, { Component } from 'react';

// importing react-bootstrap components
import { Container } from 'react-bootstrap';

export default class LandingPage extends Component {

    public render() {
        return (<>
                <Container>
                <h1 id="main-banner-h1">Welcome!</h1>
                    <p>
                    Personal Website UI Template using React-TypeScript Class components
                    Personal website can be about anything you want, including hobbies, pets, or information like academics, achievements, work Experiences.
                    <br />
                    It can be a family website that shares your adventures with loved ones along with an area for comments and discussion.
                    </p>
                    <br />
                    <h3>Quick Start</h3>
                    <br />
                    <h5>Do you Want to use this template quickly? - follow the steps</h5>
                    <ul>
                        <li>
                            <h6>
                                First you have to download this repo in your local directory.
                            </h6>
                        </li>
                        <li>
                            <h6>
                                If you wanted to edit this template with your information quickly.
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Go to '/src/shared' folder and open 'YourInformation.ts'
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Here you can add or edit your information, which will automatically reflected to the website
                            </h6>
                        </li>
                        <li>
                            <h6>
                                I have given a basic format to start, you can add more sections, texts and icons
                            </h6>
                        </li>
                    </ul>
                </Container>
            </>
        )
    }
}
