import React, { Component } from 'react';

// style sheets App.css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Our NavBarFN Functions
import { getIcon, getSelectedPage } from './Components/Functions/NavBarFN';

// Importing our navList
import { navList } from './shared/SideBarInfo';

// Go to '/src/shared/YourInformation.ts' file to edit information 
import { basicinfo } from './shared/YourInformation';

// Write your name here
const yourName = basicinfo.yourName;

// Interface for App state variables
interface INITIAL_STATE {
  selectedElement: number,
  isSideNavBarVisible: boolean,
  isUpperNavBarVisible: boolean
  mode: boolean
}

// App Class Components
class App extends Component {

  constructor( props: {} ) {
      super(props);
      // binding all functions
      this.handleSideNavBar = this.handleSideNavBar.bind(this);
      this.handleUpperNavBar = this.handleUpperNavBar.bind(this);
      this.setRenderedPage = this.setRenderedPage.bind(this);
      this.updateWidthAndHeight = this.updateWidthAndHeight.bind(this);
      window.addEventListener('resize', this.updateWidthAndHeight);
  }

  // Initializing state
  state: INITIAL_STATE = {
    selectedElement: -1,
    isSideNavBarVisible: true,
    isUpperNavBarVisible: false,
    mode: !(window.innerWidth <= 900)
  }

  // set rendered page id according to index for Side Nav Bar
  setRenderedPage(ElementId: number) {
    this.setState({
      selectedElement: ElementId
    })
  }

  // set rendered page id according to index for Upper Nav Bar
  setRenderedUpperPage(ElementId: number) {
    this.setState({
      selectedElement: ElementId,
      isUpperNavBarVisible: false
    })
  }

  // Handling Side Nav bar
  handleSideNavBar() {
      this.setState({ 
        isSideNavBarVisible: !this.state.isSideNavBarVisible, 
      })
  }

  // Handling Upper Nav bar
  handleUpperNavBar() {
    this.setState({ 
      isUpperNavBarVisible: !this.state.isUpperNavBarVisible,
    })
  }

  // Getting Window Width
  updateWidthAndHeight() {
    if (window.innerWidth <= 900) {
      this.setState({ mode: false })
    } else {
      this.setState({ mode: true })
    }
  }

  // Render function
  public render() {

    // Setting Width for SideNavBar 
      const widthTemp :string = this.state.isSideNavBarVisible? "17rem" : "3.7rem";

    // Handling 900px mobile view
      const width: string = (window.innerWidth <= 900 ? "0rem" : widthTemp);
      const height :string = this.state.isUpperNavBarVisible? "auto" : "2.4rem";
      return (
        <>
        {/* Side Nav Bar */}
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
                  <span onClick={ () => this.setRenderedPage(-1) } className="nav_logo-name">
                          {yourName}
                  </span>
                </div>
                <hr/>
                {/* navList deployment for Side Nav bar */}
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
                    {
                      !this.state.isUpperNavBarVisible ?
                      <>
                          { getIcon(-3) }
                      </>
                      :<>
                          { getIcon(-4) }
                      </>
                    }
                  </div>
                  <span onClick={ () => this.setRenderedUpperPage(-1) } className="u-nav_logo-name">
                    {yourName}
                  </span>
                </div>
                <hr/>
                {/* navList deployment for Upper Nav bar */}
                <div className="u-nav_list">
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
                              <span className="u-nav_name">
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
          {/* Rendering Selected Page */}
          {
            this.state.mode?
            <div className="main-container" 
              style={{ left: width, width: "calc(100% - " + width + ")" }}>
              {
                getSelectedPage(this.state.selectedElement)
              }
            </div>
            :
            <div className="main-container-2" 
              style={{ left: "0", width: "100%" }}>
              {
                getSelectedPage(this.state.selectedElement)
              }
            </div>
          }
        </>
      )
  }
}

export default App;
