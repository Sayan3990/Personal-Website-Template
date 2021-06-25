import React, { Component } from 'react';

// importing react-bootstrap components
import { Container } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { achievementsinfoList } from '../../shared/YourInformation';


export default class AchievementsPage extends Component {
 
    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Achievements</h1>
                    <div className="info">
                        <p>
                            Introductory Words -----
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <table className="table table-responsive table-light table-hover ">
                            <thead>
                                <th>Event Name</th>
                                <th>Venue</th>
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Result</th>
                            </thead>
                            <tbody>
                                {
                                    achievementsinfoList.map(( oneInfo, index ) => {
                                        return (
                                            <tr key={index}>
                                                <td>{oneInfo.name}</td>
                                                <td>{oneInfo.location}</td>
                                                <td>{oneInfo.date}</td>
                                                <td>{oneInfo.topic}</td>
                                                <td>{oneInfo.result}</td>
                                            </tr>
                                        )
                                    })
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </Container>
            </>
        )
    }
}
 