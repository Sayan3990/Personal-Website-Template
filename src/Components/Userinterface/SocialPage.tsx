import React, { Component } from 'react';

// importing react-bootstrap components
import { Container, Table } from 'react-bootstrap';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { socialinfoList } from '../../shared/YourInformation';

export default class SocialPage extends Component {

    public render() {
        return (<>
                <Container>
                    <h1 id="main-banner-h1">Social Media</h1>
                    <Table className="table table-responsive table-light ">
                        <tbody>
                            {
                                socialinfoList.map(( oneInfo, index ) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <a href={oneInfo.link} target="_blank">
                                                    {oneInfo.name}
                                                </a>
                                            </td>
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
 