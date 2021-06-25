import React, { Component } from 'react';

// importing react-bootstrap components
import { Container, Table } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { academicinfoList } from '../../shared/YourInformation';

export default class AcademicsPage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Academics</h1>
                    <div className="info">
                        <p>
                            Introductory Words -----
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Table className="table table-responsive table-light table-hover ">
                            <thead>
                                <th>College/School Name</th>
                                <th>Location</th>
                                <th>Course</th>
                                <th>Academic Year</th>
                                <th>Your Score</th>
                            </thead>
                            <tbody>
                                {
                                    academicinfoList.map(( oneInfo, index ) => {
                                        return (
                                            <tr key={index}>
                                                <td>{oneInfo.name}</td>
                                                <td>{oneInfo.location}</td>
                                                <td>{oneInfo.course}</td>
                                                <td>{oneInfo.year}</td>
                                                <td>{oneInfo.score}</td>
                                            </tr>
                                        )
                                    })
                                }
                            
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </>
        )
    }
}
 