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
                    <p>
                    Here, you will be getting this basic template of my personal website. Visit <a href="https://github.com/Sayan3990/Personal-Website-Template" target="_blank" rel="noopener noreferrer">Personal Website Template</a> for more details or see the <a href="https://personal-website-template-by-sayan.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed site</a>. You can also refer quick start section to deploy your personal website. Read <a href="https://github.com/Sayan3990/Personal-Website-Template#readme" target="_blank" rel="noopener noreferrer">README</a> carefully if you are new in react.
                    </p>
                    <br />
                    <h3>Dependencies</h3>
                    <ul>
                        <li>
                            <code>
                            react@17.0.2
                            </code>
                        </li>
                        <li>
                            <code>
                            react-dom@17.0.2
                            </code>
                        </li>
                        <li>
                            <code>
                            react-scripts@4.0.3
                            </code>
                        </li>
                        <li>
                            <code>
                            typescript@4.3.4
                            </code>
                        </li>
                        <li>
                            <code>
                            bootstrap@4.6.0
                            </code>
                        </li>
                        <li>
                            <code>
                            react-bootstrap@1.6.1
                            </code>
                        </li>
                        <li>
                            <code>
                            react-bootstrap-icons@1.5.0
                            </code>
                        </li>
                    </ul>
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
