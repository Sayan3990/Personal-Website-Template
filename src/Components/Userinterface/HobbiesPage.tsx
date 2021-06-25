import React, { Component } from 'react';

// importing react-bootstrap components
import { Container, Table } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { hobbiesinfoList } from '../../shared/YourInformation';

export default class HobbiesPage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Hobbies</h1>
                    <Table className="table table-responsive table-light table-hover ">
                            <tbody>
                                {
                                    hobbiesinfoList.map(( oneInfo, index ) => {
                                        return (
                                            <tr key={index}>
                                                <th>{oneInfo.subject}</th>
                                                <td>{oneInfo.info}</td>
                                            </tr>
                                        )
                                    })
                                }
                            
                            </tbody>
                        </Table>
                </Container>
            </>
        )
    }
}
 