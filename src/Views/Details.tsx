import React from "react";
import {IDetailsProps} from "./IDetailsProps";
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import AlarmIcon from '@material-ui/icons/Alarm';
import DescriptionIcon from '@material-ui/icons/Description';
import {IDetailsState} from "./IDetailsState";
import {Appointment} from "../models/appointment";
import styles from './Details.module.css';
import {Divider} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

class Details extends React.Component < IDetailsProps,
IDetailsState > {
    constructor(props : IDetailsProps) {
        super(props);
        this.state = {
            selectedAppointment: this
                .props
                .location
                .state
                .appointments
                .find((appointment : Appointment) => appointment.id === this.props.match.params.id)
        }
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <main className={styles.root}>
                    <Typography variant="h2" align="center">
                        {this.state.selectedAppointment.title}
                    </Typography>
                    <Divider></Divider>
                    <Grid container spacing={24} className={styles.mt}>
                        <Grid container item xs={6} justify="center">
                            <Typography variant="h4">
                                <AccountCircleIcon fontSize="large"/> {this.state.selectedAppointment.firstname}
                                {this.state.selectedAppointment.lastname}
                            </Typography>
                        </Grid>
                        <Grid container item xs={6} justify="center">
                            <Typography variant="h4">
                                <EmailIcon fontSize="large"/> {this.state.selectedAppointment.email}
                            </Typography>
                        </Grid>
                        <Grid container item xs={6} justify="center">
                            <Typography variant="h4">
                                <DescriptionIcon fontSize="large"/> {this.state.selectedAppointment.description}
                            </Typography>
                        </Grid>
                        <Grid container item xs={6} justify="center">
                            <Typography variant="h4">
                                <AlarmIcon fontSize="large"/> {new Intl
                                    .DateTimeFormat('de-AT', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                })
                                    .format(this.state.selectedAppointment.date)}
                            </Typography>
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
}
export default Details;