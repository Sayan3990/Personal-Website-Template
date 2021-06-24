import * as Icon from 'react-bootstrap-icons';

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
            return <Icon.ChatRightText style={iconStyle} />
        default:
            return <Icon.Alt style={iconStyle} />
    }
}