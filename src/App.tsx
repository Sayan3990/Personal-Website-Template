import React, { Component } from 'react';

// style sheets App.css
import './App.css';

// Importing React Bootstrap Components
import { Container } from 'react-bootstrap';

// Our NavBarFN Functions
import { getIcon, getSelectedPage } from './Components/Functions/NavBarFN';

// Importing our navList
import { navList } from './shared/SideBarInfo';

// Write your name here
const yourName = 'Your Name';

// Interface for App state variables
interface INITIAL_STATE {
  selectedElement: number,
  isSideNavBarVisible: boolean,
  isUpperNavBarVisible: boolean
}

class App extends Component {

  constructor( props: {} ) {
      super(props);
      this.handleSideNavBar = this.handleSideNavBar.bind(this);
      this.handleUpperNavBar = this.handleUpperNavBar.bind(this);
      this.setRenderedPage = this.setRenderedPage.bind(this);
  }

  state: INITIAL_STATE = {
    selectedElement: 0,
    isSideNavBarVisible: true,
    isUpperNavBarVisible: false
  }

  setRenderedPage(ElementId: number) {
    this.setState({
      selectedElement: ElementId
    })
  }

  setRenderedUpperPage(ElementId: number) {
    this.setState({
      selectedElement: ElementId,
      isUpperNavBarVisible: false
    })
  }

  handleSideNavBar() {
      this.setState({ 
        isSideNavBarVisible: !this.state.isSideNavBarVisible, 
      })
  }

  handleUpperNavBar() {
    this.setState({ 
      isUpperNavBarVisible: !this.state.isUpperNavBarVisible,
    })
  }

  public render() {
      const width :string = this.state.isSideNavBarVisible? "17rem" : "3.7rem";
      const height :string = this.state.isUpperNavBarVisible? "auto" : "2.4rem";
      return (
        <>
          <div className="l-navbar" style={{ width: width }}>
            <nav className="nav">
              <div>
                <div className="nav_logo" > 
                  <div className="nav_logo-icon" onClick={this.handleSideNavBar}>
                    {
                        !this.state.isSideNavBarVisible ?
                        <>
                            { getIcon(-2) }
                        </>
                        :<>
                            { getIcon(-1) }
                        </>
                    }
                  </div>
                  <span onClick={ () => this.setRenderedPage(0) } className="nav_logo-name">
                          {yourName}
                  </span>
                </div>
                <hr/>
                <div className="nav_list">
                  {
                    navList.map(( navElement, index ) => {
                      return (
                        <span className={ "nav_link "
                          + (index === this.state.selectedElement?
                          "active" : "") }
                          onClick={ ()=> this.setRenderedPage(index) }
                          key={index}
                        >
                        {
                          <>
                            {
                                getIcon( index )
                            }
                            <span className="nav_name">
                                    {navElement.title}
                            </span>
                          </>
                        }
                        </span>
                      )                                  
                    })
                  }         
                </div>
              </div>
            </nav>
          </div>
          <div className="u-navbar" style={{ height: height }}>
            <nav className="u-nav">
              <div>
                <div className="u-nav_logo"> 
                  <div className="u-nav_logo-icon" onClick={this.handleUpperNavBar}> 
                    { getIcon(-2) }
                  </div>
                  <span className="u-nav_logo-name">
                    {yourName}
                  </span>
                </div>
                <hr/>
                <div onClick={ () => this.setRenderedUpperPage(0)} className="u-nav_list">
                  {
                    navList.map(( navElement, index ) => {
                      return (
                        <span onClick={ () => this.setRenderedUpperPage( index ) }
                          className="u-nav_link" key={index}
                        >
                          {
                            <>
                              {
                                getIcon( index )
                              }
                              <span className={ "u-nav_name" }>
                                {navElement.title}
                              </span>
                            </>
                          }
                        </span>
                      )     
                    })
                  }         
                 </div>
              </div>
            </nav>
          </div>
          <Container className="main-container">
            {
              getSelectedPage(this.state.selectedElement)
            }
          </Container>
        </>
      )
  }
}

export default App;
