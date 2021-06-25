import React, { Component } from 'react';

// importing react-bootstrap components
import { Container, Table } from 'react-bootstrap';

// Provide your information here and add more
const yourName: string = "Your Name";
const infoList = [
    {
        key: "Full name",
        value: "Your Full Name"
    },
    {
        key: "Birth Place",
        value: "Duis aute, irure dolor, in reprehenderit"
    },
    {
        key: "Date of Birth",
        value: "23/09/1967"
    },
    {
        key: "Gender",
        value: "Male"
    },
    {
        key: "Parent",
        value: "Father Name & Mother Name"
    },
    {
        key: "Address",
        value: "Minim veniam, quis"
    },
    {
        key: "Company",
        value: "Consequat"
    },
    {
        key: "Currently",
        value: "Your position"
    }
];


export default class PersonalPage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Personal Information</h1>
                    <div className="profile-logo">
                        {/* Provide your photo and name */}
                        <img id="profile-photo" src="./assets/blank-profile-picture.png" alt="Profile Photo" />
                        <p id="profile-name" >{yourName}</p>
                    </div>
                    <div className="profile-info">
                        <p id="profile-info-text">
                            Introductory Words -----
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Table>
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
 