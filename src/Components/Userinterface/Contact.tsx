import React, { Component } from 'react';

// importing react-bootstrap components
import { Container, Table } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { basicinfo } from '../../shared/YourInformation';

export default class ContactPage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Contact</h1>
                    <div className="profile-info">
                        <Table className="table table-responsive table-light">
                            <tbody>
                                <tr>
                                    <th>Name: </th>
                                    <td>{basicinfo.yourName}</td>
                                </tr>
                                <tr>
                                    <th>Email: </th>
                                    <td>
                                        <a href={"mailto:" + basicinfo.email} target="_blank">
                                            {basicinfo.email}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Phone: </th>
                                    <td>{basicinfo.phone}</td>
                                </tr>
                                <tr>
                                    <th>Website: </th>
                                    <td>
                                        <a href={basicinfo.website} target="_blank">
                                            {basicinfo.website}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </>
        )
    }
}
 