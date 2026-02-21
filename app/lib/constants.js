const tabs = [
    {
        name: 'Inicio',
        url: '/dashboard',
        svg: `
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
            <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
            <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.4 0 .77-.24.92-.62.15-.37.07-.8-.22-1.09l-8.99-9a.996.996 0 0 0-1.41 0l-9.01 9c-.29.29-.37.72-.22 1.09s.52.62.92.62Zm7 7v-5h4v5zm2-15.59 6 6V20h-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5H6v-9.59z"></path>
            </svg>
        `
    },
    {
        name: 'Productos',
        url: '/dashboard/products',
        svg: `
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
            <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
            <path d="M7.79 7.79A6.06 6.06 0 0 0 6 12.12V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-7.88c0-1.64-.64-3.17-1.79-4.33A4.1 4.1 0 0 1 15 4.88V4h1V2H8v2h1v.88c0 1.1-.43 2.14-1.21 2.91M13 4v.88c0 1.63.64 3.17 1.79 4.33.75.75 1.16 1.74 1.2 2.79H11v6h5v2H8v-7.88c0-1.1.43-2.14 1.21-2.91A6.06 6.06 0 0 0 11 4.88V4z"></path>
            </svg>
        `
    }
]

const modules = [
    {
        name: 'Productos',
        url: '/dashboard/products',
        description: 'Administra los productos',
        svg: `
            <svg  xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" viewBox="0 0 24 24" >
            <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
            <path d="M7.79 7.79A6.06 6.06 0 0 0 6 12.12V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-7.88c0-1.64-.64-3.17-1.79-4.33A4.1 4.1 0 0 1 15 4.88V4h1V2H8v2h1v.88c0 1.1-.43 2.14-1.21 2.91M13 4v.88c0 1.63.64 3.17 1.79 4.33.75.75 1.16 1.74 1.2 2.79H11v6h5v2H8v-7.88c0-1.1.43-2.14 1.21-2.91A6.06 6.06 0 0 0 11 4.88V4z"></path>
            </svg>
        `
    }
]

const icons = {
    back: `
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
        fill="currentColor" viewBox="0 0 24 24" >
        <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
        <path d="m6 12 6 5v-4h6v-2h-6V7z"></path>
        </svg>
    `
}

export {tabs, modules, icons};