export const menus =[
    {
        id: 1,
        link: '/dashboard',
        icon: 'assets/images/home-outline.svg',
        title: 'Dashboard',
        role: ['agent', 'admin', 'user']
    },
    {
        id: 14,
        link: '/media',
        icon: 'assets/images/person-outline.svg',
        title: 'Media',
        role: ['admin' ]
    },
    {
        id: 15,
        link: '/social-post',
        icon: 'assets/images/person-outline.svg',
        title: 'Social Post',
        role: ['admin' ]
    },
    {
        id: 16,
        link: '/grab-post',
        icon: 'assets/images/person-outline.svg',
        title: 'Grab Post',
        role: ['agent' ]
    },
    {
        id: 2,
        link: '/users',
        icon: 'assets/images/person-outline.svg',
        title: 'Users',
        role: ['admin' ]
    },
    {
        id: 5,
        link: '/purchase-history',
        icon: 'assets/images/time-outline.svg',
        title: 'Purchase History',
        role: ['admin']
    },
    {
        id: 6,
        link: '/membership-verification',
        icon: 'assets/images/checkbox-outline.svg',
        title: 'Membership Verification',
        role: ['admin']

    },
    {
        id:7,
        link: '/commission-management',
        icon: 'assets/images/cash-outline.svg',
        title: 'Commission Management',
        role: ['agent']

    },
    {
        id:8,
        link: '/pending-users',
        icon: 'assets/images/time-outline.svg',
        title: 'Pending Users',
    },
    {
        id:9,
        link: '/commission-history',
        icon: 'assets/images/time-outline.svg',
        title: 'Commission History',
        role: ['admin']
    },
    {
        id:10,
        link: '/role-management',
        icon: 'assets/images/person-outline.svg',
        title: 'Role Management',
        role: ['admin']
    },
    {
        id:11,
        link: '/add-role-management',
        icon: 'assets/images/person-outline.svg',
        title: 'Add Role Management',
        role: ['admin']
    },
    {
        id: 3,
        icon: 'assets/images/settings-outline.svg',
        title: 'CMS',
        role: ['admin'],
        subMenus: [{
            id: 1,
            link: '/blogs',
            icon: 'assets/images/person-outline.svg',
            title: 'Blogs',
        },
        {
            id: 2,
            link: '/faq',
            icon: 'assets/images/person-outline.svg',
            title: 'Faq',
        }
    ]
    },
    {
        id: 12,
        icon: 'assets/images/settings-outline.svg',
        title: 'Lead-management',
        role: ['agent'],

        subMenus: [{
            id: 1,
            link: '/custom-leads',
            icon: 'assets/images/person-outline.svg',
            title: 'Custom Leads',
        },
        {
            id: 1,
            link: '/pending-leads',
            icon: 'assets/images/person-outline.svg',
            title: 'Pending Leads',
        },
        {
            id: 13,
            link: '/completed-leads',
            icon: 'assets/images/person-outline.svg',
            title: 'Completed Leads',
        }
    ]
    },

]