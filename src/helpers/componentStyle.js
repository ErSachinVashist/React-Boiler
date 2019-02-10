
const headerCss=(theme)=>({
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        title: {
            display: 'block'
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    })

const footerCss=(theme)=>({
        root: {
            width: '100%',
            position:'fixed',
            bottom: '0px'
        },
        grow: {
            flexGrow: 1,
        },
    title: {
        fontSize:'15px',
        display: 'block'
    },
         appBarRoot:{
            background:'slategrey'
    }
    })

const homeCss=(theme)=>({
    card: {
        maxWidth: 400,
        margin:'14vh auto'
},
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

export {
    headerCss,
    footerCss,
    homeCss
}
