const siteItems =
    [
        {
            id: 1,
            name: 'Samsung S22',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1603217192097-13c306522271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9wc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 2,
            name: 'Samsung S23',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 3,
            name: 'Samsung S24',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 4,
            name: 'Samsung S25',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRvcHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 5,
            name: 'Samsung S26',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 6,
            name: 'Samsung S27',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3dlYXRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 7,
            name: 'Samsung S28',
            price: 45000,
            image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRNyEpgyU5cvhAhv8jjNh_Ey-sj2GVfjOxsKpkbHE3s9lyMQFCxW5fH4ztVsN70bwQsCsbPTnUpn0vQEUv2LKHOf1ZBMEPcWBwm3UVgmBcQwx1st5F2RjYKw&usqp=CAE'

        },
        {
            id: 8,
            name: 'Samsung S29',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1545205597-ad550b48864f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3dlYXRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 9,
            name: 'Samsung S30',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 10,
            name: 'Samsung S31',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 11,
            name: 'Samsung S31',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1559034750-cdab70a66b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3Nlc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 12,
            name: 'Samsung S31',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1626818590159-04cb9274a5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
        },
        {
            id: 13,
            name: 'Samsung S25',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1623098943463-e4c0ebcf5f4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyZXNzZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 14,
            name: 'Samsung S26',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1626818590138-c1e906bf29be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRyZXNzZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 15,
            name: 'Samsung S27',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1528812969535-4bcefc071532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
        },
        {
            id: 16,
            name: 'Samsung S28',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1633077705107-8f53a004218f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGRyZXNzZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        }
    ]

export default siteItems;