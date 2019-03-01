import React, {SyntheticEvent} from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from './Home.module.css';
import {DatePicker} from "material-ui-pickers";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {Appointment} from "../models/appointment";
import List from "@material-ui/core/List";
import ListBody from "../Components/ListBody";
import {AppointmentConsumer} from "../Context/AppointmentProvider";
import {IHomeState} from "./IHomeState";
import { IHomeProps } from "./IHomeProps";
import { IAppointmentProviderState } from "../Context/IAppointmentProviderState";

class Home extends React.Component < IHomeProps,
IHomeState > {
    constructor(props : {}) {
        super(props);
        this.state = {
            appointments: [],
            email: '',
            firstname: '',
            lastname: '',
            date: new Date(),
            description: '',
            title: '',
            valid: true,
            date_error_text: '',
            description_error_text: '',
            email_error_text: '',
            firstname_error_text: '',
            lastname_error_text: '',
            title_error_text: ''
        }
    }
    ID = () => {
        return '_' + Math
            .random()
            .toString(36)
            .substr(2, 9);
    }
    checkEmail = () => {
        (this.state);
        if (this.state.email.length === 0) {
            this.setState({email_error_text: 'Value is required', valid: false});
        } else if (!/.+@.+\..+/.test(this.state.email)) {
            this.setState({email_error_text: 'Email is not correct', valid: false});
        } else {
            this.setState({email_error_text: '', valid: true});
        }
    }
    checkFirstName = () => {
        this.state.firstname.length === 0
            ? this.setState({firstname_error_text: 'Value is required', valid: false})
            : this.setState({firstname_error_text: '', valid: true})
    }
    checkLastName = () => {
        this.state.lastname.length === 0
            ? this.setState({lastname_error_text: 'Value is required', valid: false})
            : this.setState({lastname_error_text: '', valid: true})
    }
    checkDescription = () => {
        this.state.description.length === 0
            ? this.setState({description_error_text: 'Value is required', valid: false})
            : this.setState({description_error_text: '', valid: true})
    }
    checkTitle = () => {
        this.state.title.length === 0
            ? this.setState({title_error_text: 'Value is required', valid: false})
            : this.setState({title_error_text: '', valid: true})
    }
    checkDate = () => {
        this.state.date === null
            ? this.setState({date_error_text: 'Value is required', valid: false})
            : this.setState({date_error_text: '', valid: true})
    }
    componentWillMount() {
        this.setState({appointments: this.props.allAppointments as Appointment[]})
    }
    delAppointment = (id: string) => {
        if(typeof this.props.deleteAppointment === "function")
        this.setState({appointments: this.props.deleteAppointment(id)});
    }
    submit = (e : SyntheticEvent) => {
        e.preventDefault();
        this.checkDate();
        this.checkDescription();
        this.checkEmail();
        this.checkFirstName();
        this.checkLastName();
        this.checkTitle();
        if (this.state.valid) {
            ('valid');
            const newAppointment = new Appointment(this.ID(), this.state.firstname, this.state.lastname, this.state.email, this.state.date, this.state.title, this.state.description);
            this.setState({
                appointments: [
                    ...this.state.appointments,
                    newAppointment
                ]
            });
            if(typeof this.props.addAppointment === "function")
            this.props.addAppointment(newAppointment);
        }
        ('Hello');
    }
    render() {
        const {
            email_error_text,
            firstname_error_text,
            lastname_error_text,
            date_error_text,
            title_error_text,
            description_error_text
        } = this.state;
        return (
            <div>
                <main className={styles.root}>
                    <form onSubmit={(e : SyntheticEvent) => this.submit(e)}>
                        <Grid container spacing={24}>
                            <Grid item xs={4}>
                                <FormControl
                                    error={email_error_text.length > 0}
                                    onBlur={this.checkEmail}
                                    fullWidth>
                                    <InputLabel htmlFor="email-input">Email address</InputLabel>
                                    <Input
                                        onChange={(e) => this.setState({email: e.target.value})}
                                        id="email-input"
                                        aria-describedby="my-helper-text"/>
                                    <FormHelperText id="email-text">{email_error_text}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl
                                    error={firstname_error_text.length > 0}
                                    onBlur={this.checkFirstName}
                                    fullWidth>
                                    <InputLabel htmlFor="firstname-input">Firstname</InputLabel>
                                    <Input
                                        onChange={(e) => this.setState({firstname: e.target.value})}
                                        id="firstname-input"
                                        aria-describedby="my-helper-text"/>
                                    <FormHelperText id="firstname-text">{firstname_error_text}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl
                                    error={lastname_error_text.length > 0}
                                    onBlur={this.checkLastName}
                                    fullWidth>
                                    <InputLabel htmlFor="lastname-input">Lastname</InputLabel>
                                    <Input
                                        onChange={(e) => this.setState({lastname: e.target.value})}
                                        id="lastname-input"
                                        aria-describedby="my-helper-text"/>
                                    <FormHelperText id="lastname-text">{lastname_error_text}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl
                                    error={description_error_text.length > 0}
                                    onBlur={this.checkDescription}
                                    fullWidth>
                                    <InputLabel htmlFor="description-input">Description</InputLabel>
                                    <Input
                                        onChange={(e) => this.setState({description: e.target.value})}
                                        multiline
                                        rows="4"
                                        id="description-input"
                                        aria-describedby="my-helper-text"/>
                                    <FormHelperText id="description-text">{description_error_text}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={styles.centerTextField}>
                                <FormControl
                                    error={title_error_text.length > 0}
                                    onBlur={this.checkTitle}
                                    fullWidth>
                                    <InputLabel htmlFor="title-input">Title</InputLabel>
                                    <Input
                                        onChange={(e) => this.setState({title: e.target.value})}
                                        id="title-input"
                                        aria-describedby="my-helper-text"/>
                                    <FormHelperText id="title-text">{title_error_text}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={styles.centerTextField}>
                                <FormControl
                                    error={date_error_text.length > 0}
                                    onBlur={this.checkDate}
                                    fullWidth>
                                    <DatePicker value={this.state.date} onChange={(e) => this.setState({date: e})}/>
                                    <FormHelperText id="date-text">{date_error_text}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-end">
                            <Button
                                disabled={!this.state.valid}
                                variant="contained"
                                color="primary"
                                type="submit">Submit</Button>
                        </Grid>

                    </form>
                    <Divider variant="middle" className={styles.mx}></Divider>
                    <List>
                        {this
                            .state
                            .appointments
                            .map((appointment, index) => {
                                return (
                                    <ListBody
                                        allAppointments={this.state.appointments}
                                        key={index}
                                        appointment={appointment}
                                        deleteAppointment={this.delAppointment}></ListBody>
                                )
                            })}
                    </List>
                </main>
            </div>
        )
    }
}
const ConnectHomeWithContext = (props: IHomeProps) => {
    return <AppointmentConsumer>
        {(state: IAppointmentProviderState) => (
             <Home
                {...props}
                addAppointment={state.addAppointment}
                allAppointments={state.appointments}
                deleteAppointment={state.deleteAppointment}
            />
        )}
    </AppointmentConsumer>
}
export default ConnectHomeWithContext;