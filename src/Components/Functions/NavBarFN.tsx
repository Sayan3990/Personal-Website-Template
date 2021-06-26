// Importing Icons
import * as Icon from 'react-bootstrap-icons';

// Importing Pages
import AcademicsPage from '../Userinterface/AcademicsPage';
import AchievementsPage from '../Userinterface/AchievementsPage';
import ContactPage from '../Userinterface/Contact';
import ExperiencePage from '../Userinterface/ExperiencePage';
import HobbiesPage from '../Userinterface/HobbiesPage';
import LandingPage from '../Userinterface/Landing';
import PersonalPage from '../Userinterface/PersonalPage';
import SocialPage from '../Userinterface/SocialPage';

// Icon Style
const iconStyle = { 
    color: "white",
    transform: "scale(150%) translateY(-10%)",
    margin: "auto 1rem auto 0.3rem"
};

// getIcon Functions - returns Icon according to index number
export function getIcon(id: number) {
    switch(id){
        case -4:
            return <Icon.X style={iconStyle} />
        case -3:
            return <Icon.Justify style={iconStyle} />
        case -2:
            return <Icon.LayoutSidebar style={iconStyle} />
        case -1:
            return <Icon.LayoutSidebarInset style={iconStyle} />
        case 0:
            return <Icon.PersonLinesFill style={iconStyle} />
        case 1:
            return <Icon.BookHalf style={iconStyle} />
        case 2:
            return <Icon.Award style={iconStyle} />
        case 3:
            return <Icon.Briefcase style={iconStyle} />
        case 4:
            return <Icon.PeopleFill style={iconStyle} />
        case 5:
            return <Icon.Stars style={iconStyle} />
        case 6:
            return <Icon.TelephoneFill style={iconStyle} />
        default:
            return <Icon.Alt style={iconStyle} />
    }
}

// getSelectedPage Function - returns corresponding Page according to index number
export function getSelectedPage(id: number) {
    switch(id){
        case 0:
            return <PersonalPage />
        case 1:
            return <AcademicsPage />
        case 2:
            return <AchievementsPage />
        case 3:
            return <ExperiencePage />
        case 4:
            return <SocialPage />
        case 5:
            return <HobbiesPage />
        case 6:
            return <ContactPage />
        default:
            return <LandingPage />
    }
}

// According to this configuration, getIcon and getSelectedPage Functions will return 
//  Index      getIcon             getSelectedPage
// --------------------------------------------------------
// default ->   Alt                  LandingPage
// case 0: ->   PersonaLinesFill     PersonalPage
// case 1 ->    BookHalf             AcademicsPage
// case 2 ->    Award                AchievementsPage
// case 3 ->    Briefcase            ExperiencePage
// case 4 ->    PeopleFill           SocialPage
// case 5 ->    Stars                HobbiesPage
// case 6 ->    TelephoneFill        ContactPage

