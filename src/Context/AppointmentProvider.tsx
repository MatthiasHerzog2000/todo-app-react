import {IAppointmentProviderState} from "./IAppointmentProviderState";
import React from "react";
import {Appointment} from "../models/appointment";

const AppointmentContext = React.createContext < IAppointmentProviderState > ({})
export const AppointmentConsumer = AppointmentContext.Consumer;

class AppointmentProvider extends React.Component < {},
IAppointmentProviderState > {
    constructor(props : {}) {
        super(props);
        this.state = {
            appointments: [],
            addAppointment: (appointmentToAdd : Appointment) => this.addAppointment(appointmentToAdd),
            deleteAppointment: (id : string) => this.deleteAppointment(id),
        }
    }
    addAppointment = (appointmentToAdd : Appointment) => {
        
        this.setState({
            appointments: [
                ...this.state.appointments as Appointment[],
                appointmentToAdd
            ]
        });
        (this.state.appointments);
    }
    deleteAppointment = (id: string): Appointment[] => {
        let copyAppointments = this.state.appointments as Appointment[];
        copyAppointments.splice(copyAppointments.findIndex(appointment => appointment.id === id), 1)
        this.setState({appointments: copyAppointments});
        return this.state.appointments as Appointment[];
    }
    render() {
        return (
            <AppointmentContext.Provider value={this.state}>
                {this.props.children}
            </AppointmentContext.Provider>
        )
    }
}
export default AppointmentProvider