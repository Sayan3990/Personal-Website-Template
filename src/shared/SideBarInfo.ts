// Here your SideNavBar and UpperNarBar Elements are listed
// Your can add more sections here
// Don't forget to provide corresponding icons if you have changed navList
// Pages will be rendered according to their indexes

export const navList = [
    {
        title: "Personal Information",
    },
    {
        title: "Academics",
    },
    {
        title: "Achievements",
    },
    {
        title: "Work Experience",
    },
    {
        title: "Social Media",
    },
    {
        title: "Hobbies",
    },
    {
        title: "Contact",
    }
];

// According to this configuration, getSelectedPage Function will return

// default -> LandingPage
// case 0: -> PersonalPage
// case 1 -> AcademicsPage
// case 2 -> AchievementsPage
// case 3 -> ExperiencePage
// case 4 -> SocialPage
// case 5 -> HobbiesPage
// case 6 -> ContactPage

// As, the pages will be returned according to the corresponding indexes
// So, maintaining proper index is important here
// Same for the corresponding icons