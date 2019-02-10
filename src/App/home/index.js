import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {homeCss} from '../../helpers/componentStyle';
class Home extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={require('../../assests/images/reactHome.png')}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom align='center'>
                        Ready to kick start your project !!
                    </Typography>
                    <Typography variant="body1" align='center'>
                        Start editing you app from ./src
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(homeCss)(Home);
