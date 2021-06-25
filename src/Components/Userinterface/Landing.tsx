import React, { Component } from 'react';

// importing react-bootstrap components
import { Container } from 'react-bootstrap';

export default class LandingPage extends Component {

    public render() {
        return (<>
                <Container>
                <h1 id="main-banner-h1">Welcome!</h1>
                    <p>
                    Personal Website UI Template using React-TypeScript Class components. Personal website can be about anything you want, including hobbies, pets, or information like academics, achievements, work Experiences. It can be a family website that shares your adventures with loved ones along with an area for comments and discussion.
                    </p>
                    <br />
                    <h3>Quick Start</h3>
                    <br />
                    <h5>Do you Want to use this template quickly? - follow the steps</h5>
                    <ul>
                        <li>
                            First you have to download this repo in your local directory or refer <a href="https://github.com/Sayan3990/Personal-Website-Template#readme" target="_blank"> installation</a> section
                        </li>
                        <li>
                            If you wanted to edit this template with your information quickly
                        </li>
                        <li>
                            Go to <code>'/src/shared'</code> folder and open <code>'YourInformation.ts'</code> file 
                        </li>
                        <li>
                            Here you can add or edit your information, which will automatically reflected to the website
                        </li>
                        <li>
                            A basic format is given with dummy words, you can add more sections, texts and icons                   
                        </li>
                        <li>                    
                            Use command <code>`npm run`</code> in the root directory to see your personal website locally              
                        </li>
                        <li>              
                             Now, You can deploy your personal website               
                        </li>
                    </ul>
                </Container>
            </>
        )
    }
}
