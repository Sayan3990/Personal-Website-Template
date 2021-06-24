import React, { Component } from 'react';

// React Routing
import { Link } from "react-router-dom";
import * as routes from '../../Constants/routes';

import { navList } from '../../shared/SideBarInfo';
import { getIcon } from './NavBarFN';

interface ActiveSideNavBarElement {
    ElementId: string
}

interface IState {
    isVisible: boolean
}


export default class SideNavBar extends Component {

    constructor( props: ActiveSideNavBarElement ) {
        super(props);
        this.handleSideNavBar = this.handleSideNavBar.bind(this);
    }

    state: IState = {
        isVisible: true
    }

    handleSideNavBar() {
        this.setState({ isVisible: !this.state.isVisible })
    }

    public render() {
        const width :string = this.state.isVisible? "17rem" : "3.7rem";
        return (
            <div className="l-navbar" style={{ width: width }}>
                <nav className="nav">
                    <div>
                        <div className="nav_logo" > 
                            <div className="nav_logo-icon" onClick={this.handleSideNavBar}>
                                {
                                    !this.state.isVisible ?
                                    <>
                                        { getIcon(-1) }
                                    </>
                                    :<>
                                        { getIcon(0) }
                                    </>
                                }
                            </div>
                            <Link to={routes.LANDING} className="nav_logo-name">
                                    Sayan Bhattacharyya
                            </Link>
                        </div>
                        <hr/>
                        <div className="nav_list">
                            {
                                navList.map(( navElement, index ) => {
                                    return (
                                        <Link to={navElement.link} className="nav_link" key={index}>
                                        {
                                            <>
                                                {
                                                    getIcon( navElement.image )
                                                }
                                                <span className={ "nav_name" }>
                                                        {navElement.title}
                                                </span>
                                            </>
                                        }
                                        </Link>
                                    )                                  
                                })

                            }         
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
 