import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import {FaGithub,FaBook,FaBars} from 'react-icons/fa'
import {headerCss} from '../helpers/componentStyle'
class Header extends React.Component {

    state = {
        mobileMoreAnchorEl: null,
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = (url)=> {
        if(url){
            window.open(url,'_blank')
        }
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={e=>this.handleMobileMenuClose('https://reactjs.org/docs/getting-started.html')}>
                    <IconButton color="inherit">
                        <FaBook />
                    </IconButton>
                    <p>React Docs</p>
                </MenuItem>
                <MenuItem onClick={e=>this.handleMobileMenuClose('https://github.com/ErSachinVashist/React-boiler')}>
                    <IconButton color="inherit">
                        <FaGithub />
                    </IconButton>
                    <p>Git Repo</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            React-Boiler-Plate
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton color="inherit"
                                        onClick={()=>window.open('https://reactjs.org/docs/getting-started.html','_blank')}
                            >
                                <FaBook />
                            </IconButton>
                            <IconButton color="inherit"
                                        onClick={()=>window.open('https://github.com/ErSachinVashist/React-boiler','_blank')}
                            >
                                <FaGithub />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <FaBars />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(headerCss)(Header);
