import * as Icon from 'react-bootstrap-icons';


// Pages
import AcademicsPage from '../Userinterface/AcademicsPage';
import AchievementsPage from '../Userinterface/AchievementsPage';
import AIPage from '../Userinterface/AIPage';
import ContactPage from '../Userinterface/Contact';
import CPPage from '../Userinterface/CPPage';
import ExperiencePage from '../Userinterface/ExperiencePage';
import FeedbackPage from '../Userinterface/FeedbackPage';
import GithubPage from '../Userinterface/GithubPage';
import HirePage from '../Userinterface/Hireme';
import HobbiesPage from '../Userinterface/HobbiesPage';
import LandingPage from '../Userinterface/Landing';
import PersonalPage from '../Userinterface/PersonalPage';
import SocialPage from '../Userinterface/SocialPage';
import CSEPage from '../Userinterface/CSEPage';
import WebDevPage from '../Userinterface/WebDevPage';


const iconStyle = { color: "white",
        transform: "scale(140%) translateY(6%)",
        margin: "auto 1rem auto 0.3rem"
    };


export function getIcon(id: number) {
    switch(id){
        case -2:
            return  <i className='fas fa-bars' style={{ color: "white",
                        transform: "scale(130%)",
                        margin: "auto 0.7rem auto 0.3rem"}}>                                    
                    </i>
        case -1:
            return <Icon.LayoutSidebar style={iconStyle} />
        case 0:
            return <Icon.LayoutSidebarInset style={iconStyle} />
        case 1:
            return <Icon.PersonLinesFill style={iconStyle} />
        case 2:
            return <Icon.BookHalf style={iconStyle} />
        case 3:
            return <Icon.Award style={iconStyle} />
        case 4:
            return <Icon.Briefcase style={iconStyle} />
        case 5:
            return <Icon.Laptop style={iconStyle} />
        case 6:
            return <Icon.Github style={iconStyle} />
        case 7:
            return <Icon.Globe2 style={iconStyle} />
        case 8:
            return <Icon.CodeSquare style={iconStyle} />
        case 9:
            return  <i className='fas fa-robot' style={{ color: "white",
                        transform: "scale(130%)",
                        margin: "auto 0.7rem auto 0.3rem"}}>                                    
                    </i>
        case 10:
            return <Icon.PeopleFill style={iconStyle} />
        case 11:
            return <Icon.Stars style={iconStyle} />
        case 12:
            return <Icon.TelephoneFill style={iconStyle} />
        case 13:
            return <Icon.Person style={iconStyle} />
        case 14:
            return <Icon.ChatRightText style={iconStyle} />
        default:
            return <Icon.Alt style={iconStyle} />
    }
}

export function getSelectedPage(id: number) {
    switch(id){
        case 0:
            return <LandingPage />
        case 1:
            return <PersonalPage />
        case 2:
            return <AcademicsPage />
        case 3:
            return <AchievementsPage />
        case 4:
            return <ExperiencePage />
        case 5:
            return <CSEPage />
        case 6:
            return <GithubPage />
        case 7:
            return <WebDevPage />
        case 8:
            return <CPPage />
        case 9:
            return  <AIPage />
        case 10:
            return <SocialPage />
        case 11:
            return <HobbiesPage />
        case 12:
            return <ContactPage />
        case 13:
            return <HirePage />
        case 14:
            return <FeedbackPage />
        default:
            return <LandingPage />
    }
}

export function getGreeting() {
    const currHr = new Date().getHours();
    if (currHr < 12 && currHr >= 4) return "Good Morning!";
    else if (currHr >= 12 && currHr < 18) return "Good Afternoon!";
    else if (currHr >= 18 && currHr <= 23) return "Good Evening!";
    else return "Welcome!";
}