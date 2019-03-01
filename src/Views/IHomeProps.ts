import {Appointment} from "../models/appointment";

export interface IHomeProps {
    allAppointments?: Appointment[];
    addAppointment?(appointmentToAdd : Appointment) : void;
    deleteAppointment?(id: string): Appointment[];
}