import {Appointment} from "../models/appointment";
import { RouteComponentProps } from "react-router";

export interface IListBodyProps {
    appointment : Appointment;
    allAppointments : Appointment[];
    deleteAppointment(id: string): void;
}