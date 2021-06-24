import React, { Component } from 'react';

// style sheets
import './App.css';

// Functions
import { getIcon, getSelectedPage, getGreeting } from './Components/Functions/NavBarFN';
import { navList } from './shared/SideBarInfo';

interface IState {
  header_background_style: {
    height: string,
    height2: string,
    opacity: string
  }
  selectedElement: number,
  isVisible: boolean,
  isUpperVisible: boolean
}

class App extends Component {

  constructor( props: {} ) {
      super(props);
      this.handleSideNavBar = this.handleSideNavBar.bind(this);
      this.handleUpperSideNavBar = this.handleUpperSideNavBar.bind(this);
      this.setRenderedPage = this.setRenderedPage.bind(this);
  }

  state: IState = {
    header_background_style: { height: "0", height2: "100px", opacity: "1" },
    selectedElement: 0,
    isVisible: true,
    isUpperVisible: false
  }

  setRenderedPage(ElementId: number) {
    this.setState({
      selectedElement: ElementId,
      header_background_style: { height: '100vh', opacity: "0" },
    })
    setTimeout(() => this.setState(
      {
        header_background_style: { height: '0px', opacity: "0" }
      }
    ), 500)
    setTimeout(() => this.setState(
      {
        header_background_style: { height: '0px', opacity: "1" }
      }
    ), 900)
  }

  setRenderedUpperPage(ElementId: number) {
    this.setState({
      selectedElement: ElementId,
      header_background_style: { height2: '100vh' },
      isUpperVisible: false
    })
    setTimeout(() => this.setState(
      {
        header_background_style: { height2: '100px' }
      }
    ), 500)
  }

  handleSideNavBar() {
      this.setState({ 
        isVisible: !this.state.isVisible, 
      })
  }

  handleUpperSideNavBar() {
    this.setState({ 
      isUpperVisible: !this.state.isUpperVisible,
    })
  }

  public render() {
      const width :string = this.state.isVisible? "17rem" : "3.7rem";
      const height :string = this.state.isUpperVisible? "auto" : "2.4rem";
      return (
        <>
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
                  <span onClick={ () => this.setRenderedPage(0) } className="nav_logo-name">
                          Sayan Bhattacharyya
                  </span>
                </div>
                <hr/>
                <div className="nav_list">
                  {
                    navList.map(( navElement, index ) => {
                      return (
                        <span className={ "nav_link "
                          + (navElement.image === this.state.selectedElement?
                          "active" : "") }
                          onClick={ ()=> this.setRenderedPage(navElement.image) }
                          key={index}
                        >
                        {
                          <>
                            {
                                getIcon( navElement.image )
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
                  <div className="u-nav_logo-icon" onClick={this.handleUpperSideNavBar}> 
                    { getIcon(-2) }
                  </div>
                  <span className="u-nav_logo-name">
                    Sayan Bhattacharyya
                  </span>
                </div>
                <hr/>
                <div onClick={ () => this.setRenderedUpperPage(0)} className="u-nav_list">
                  {
                    navList.map(( navElement, index ) => {
                      return (
                        <span onClick={ () => this.setRenderedUpperPage(navElement.image) }
                          className="u-nav_link" key={index}
                        >
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
                        </span>
                      )     
                    })
                  }         
                 </div>
              </div>
            </nav>
          </div>
          <h1 id="main-banner-h1" style={{ left: width,
              opacity: this.state.header_background_style.opacity
          }}>
            {
              this.state.selectedElement !== 0 ?
              navList[this.state.selectedElement - 1].title
              : getGreeting()
            }
          </h1>
          <div className="rendered-page-area" style={{ left: width, width: "calc(100% - " + width + ")" }}>
            <div className="main-header-upper" style={
              {
                height: this.state.header_background_style.height
              }
            }>
            </div>
            <div className="main-header-background" 
              style={
                {
                  top: this.state.header_background_style.height
                }
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="#388bff" fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,64C672,53,768,75,864,96C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
              </svg>
            </div>
          </div>
          <div className="rendered-page-area-900">
            <div className="main-header-upper-900" style={
              {
                height: this.state.header_background_style.height2
              }
            }>
            </div>
            <div className="main-header-background-900" 
              style={
                {
                  top: this.state.header_background_style.height2
                }
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="#388bff" fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,64C672,53,768,75,864,96C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
              </svg>
            </div>
          </div>
          {
              getSelectedPage(this.state.selectedElement)
          }
        </>
      )
  }
}

export default App;
