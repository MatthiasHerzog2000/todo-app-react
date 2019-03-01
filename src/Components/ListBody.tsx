import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import {IListBodyProps} from './IListBodyProps';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import {Redirect} from 'react-router-dom';
import { IListBodyState } from './IListBodyState';

class ListBody extends React.Component < IListBodyProps, IListBodyState > {
    constructor(props : IListBodyProps) {
        super(props);
        this.state = {
            shouldRedirect: false
        }
    }
    render() {
        if(this.state.shouldRedirect) {
            return <Redirect to={{
                pathname: '/list-details/' + this.props.appointment.id,
                state: {
                    appointments: this.props.allAppointments
                }}}></Redirect>
        }
        return (
            <ListItem divider>
                <ListItemText
                    primary={this.props.appointment.title}
                    secondary={this.props.appointment.email + '--' + this.props.appointment.firstname + ' ' + this.props.appointment.lastname}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => this.props.deleteAppointment(this.props.appointment.id)} aria-label="Delete">
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton onClick={() => this.setState({shouldRedirect: true})} aria-label="Info">
                        <InfoIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default ListBody