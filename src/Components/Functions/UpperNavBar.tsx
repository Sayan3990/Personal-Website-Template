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


export default class UpperNavBar extends Component {

    constructor( props: ActiveSideNavBarElement ) {
        super(props);
        this.handleUpperNavBar = this.handleUpperNavBar.bind(this);
    }

    state: IState = {
        isVisible: false
    }

    handleUpperNavBar() {
        this.setState({ isVisible: !this.state.isVisible })
    }

    public render() {
        const height :string = this.state.isVisible? "auto" : "2.4rem";
        return (
            <div className="u-navbar" style={{ height: height }}>
                <nav className="u-nav">
                    <div>
                        <div className="u-nav_logo" onClick={this.handleUpperNavBar}> 
                            <div className="u-nav_logo-icon"> 
                                { getIcon(-2) }
                            </div>
                            <span className="u-nav_logo-name">
                                    Sayan Bhattacharyya
                            </span>
                        </div>
                        <hr/>
                        <div className="u-nav_list">
                            {
                                navList.map(( navElement, index ) => {
                                    return (
                                        <Link to={navElement.link} className="u-nav_link" key={index}>
                                        {
                                            <>
                                                {
                                                    getIcon( navElement.image )
                                                }
                                                <span className={ "u-nav_name" }>
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
 