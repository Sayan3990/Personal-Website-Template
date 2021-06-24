import React, { Component } from 'react';

// React Routing
import { Link } from "react-router-dom";
import * as routes from '../../Constants/routes';

import { navList } from '../../shared/SideBarInfo';
import * as Icon from 'react-bootstrap-icons';

const iconStyle = { color: "white", transform: "scale(160%)", margin: "auto 1rem auto 0.3rem" };

interface ActiveSideNavBarElement {
    ElementId: string
}

interface IState {
    isVisible: boolean
}


function getIcon(id: number) {
    switch(id){
        case 1:
            return <Icon.PersonFill style={iconStyle} />
        case 2:
            return <Icon.Book style={iconStyle} />
        case 3:
            return <Icon.Award style={iconStyle} />
        case 4:
            return <Icon.Briefcase style={iconStyle} />
        case 5:
            return <Icon.Laptop style={iconStyle} />
        case 6:
            return <Icon.Github style={iconStyle} />
        case 7:
            return <Icon.Alt style={iconStyle} />
        case 8:
            return <Icon.Heart style={iconStyle} />
        case 9:
            return <Icon.ArrowsExpand style={iconStyle} />
        case 10:
            return <Icon.Globe style={iconStyle} />
        case 11:
            return <Icon.Alt style={iconStyle} />
        default:
            return <Icon.Alt style={iconStyle} />
    }
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
            <div className="l-navbar" style={{ width: width }}>
                <nav className="nav">
                    <div>
                        <a href="#" className="nav_logo" onClick={this.handleSideNavBar}> 
                            <span className="nav_logo-name">Sayan Bhattacharyya</span>
                        </a>
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
                                                }{
                                                    this.state.isVisible ?
                                                    <span className={ "nav_name" }>
                                                            {navElement.title}
                                                    </span>
                                                    :""
              
                                                }
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
 