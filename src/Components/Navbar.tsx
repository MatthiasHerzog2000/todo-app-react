import React from 'react'
import {withStyles, createStyles, WithStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {INavbarState} from './INavbarState';
import {Redirect} from 'react-router';

const styles = createStyles({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
});
export interface INavbarProps extends WithStyles < typeof styles > {}

class Navbar extends React.Component < INavbarProps,
INavbarState > {
    constructor(props : INavbarProps) {
        super(props);
        this.state = {
            shouldRedirect: false
        }
    }
    render() {
        const {classes} = this.props;
        if (this.state.shouldRedirect) {
            this.setState({shouldRedirect: false})
            return <Redirect to='/'></Redirect>
        }
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        ReactJS TODO APP
                    </Typography>
                    <Button color="inherit" onClick={() => this.setState({shouldRedirect: true})}>Home</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navbar);