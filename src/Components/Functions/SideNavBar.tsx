import React, { Component } from 'react';

// React Routing
import { Link } from "react-router-dom";
import * as routes from '../../Constants/routes';

import { navList } from '../../shared/SideBarInfo';

interface ActiveSideNavBarElement {
    ElementId: number
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
        const width :string = this.state.isVisible? "16rem" : "4rem";
        return (
            <div className="l-navbar" id="nav-bar" style={{ width: width }}>
                <nav className="nav">
                    <div>
                        <a href="#" className="nav_logo" onClick={this.handleSideNavBar}> 
                            <i className='bx bx-layer nav_logo-icon'></i>
                            <span className="nav_logo-name">BBBootstrap</span>
                        </a>
                        <div className="nav_list">
                            {
                                navList.map(( navElement, index ) => {
                                    return (
                                        <Link to={navElement.link} className="nav_link" key={index}>
                                        {
                                            this.state.isVisible ? 
                                            <span className="nav_name" style={{color: "white"}}>{navElement.title}</span>
                                            :<i className={navElement.image}></i>
                                        }
                                        </Link>
                                    )                                  
                                })

                            }         
                        </div>
                    </div> 
                    <a href="#" className="nav_link">
                        <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span>
                    </a>
                </nav>
            </div>
        )
    }
}
 