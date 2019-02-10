import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {footerCss} from '../helpers/componentStyle'
import {FaLinkedin,FaFacebook,FaInstagram} from "react-icons/fa";
import {ChangeAuthor} from '../actions/authorAction'

class Footer extends React.Component {
    componentWillMount() {
        this.props.ChangeAuthor({name:'Sachin Vashist'})
    }

    render() {
        const { classes,author } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" classes={{
                    root:classes.appBarRoot
                }}>
                    <Toolbar variant="dense">
                        <Typography className={classes.title} variant="caption" color="inherit" noWrap>
                            By {author.name}
                        </Typography>
                        <div className={classes.grow} />
                        <IconButton color="inherit"
                                    onClick={()=>window.open('https://www.linkedin.com/in/sachin-vashist','_blank')}
                        >
                            <FaLinkedin />
                        </IconButton>
                        <IconButton color="inherit"
                                    onClick={()=>window.open('https://www.facebook.com/vashist82','_blank')}
                        >
                            <FaFacebook />
                        </IconButton>
                        <IconButton color="inherit"
                                    onClick={()=>window.open('https://www.instagram.com/vashist797','_blank')}
                        >
                            <FaInstagram />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(footerCss),
    connect(store=>({
        author:store.AuthorReducer
    }),{ChangeAuthor})
    )(Footer);
