import {Appointment} from "../models/appointment";

export interface IAppointmentProviderState {
    appointments
        ?
        : Appointment[];
    addAppointment
        ? (appointment : Appointment)
        : void;
    deleteAppointment?(id: string): Appointment[];
}