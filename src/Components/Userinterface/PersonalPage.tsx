import React, { Component } from 'react';

// importing react-bootstrap components
import { Container, Table } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { infoList, basicinfo } from '../../shared/YourInformation';

export default class PersonalPage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Personal Information</h1>
                    <div className="profile-logo">
                        {/* Provide your photo and name */}
                        <img id="profile-photo" src="./assets/blank-profile-picture.png" alt="Profile Photo" />
                        <h4 id="profile-name">{basicinfo.yourName}</h4>
                    </div>
                    <div className="profile-info">
                        <p id="profile-info-text">
                            Introductory Words -----
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Table className="table table-responsive table-light table-hover ">
                            <tbody>
                                {
                                    infoList.map(( oneInfo, index ) => {
                                        return (
                                            <tr key={index}>
                                                <th style={{ paddingRight: "2rem" }}>
                                                    {oneInfo.key + ": "}
                                                </th>
                                                <td>{oneInfo.value}</td>
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
 