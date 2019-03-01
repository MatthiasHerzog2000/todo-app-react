import {Appointment} from "../models/appointment";

export interface IHomeState {
    appointments : Appointment[];
    title : string;
    description : string;
    firstname : string;
    lastname : string;
    email : string;
    date : Date;
    valid : boolean;
    title_error_text : string,
    description_error_text : string,
    firstname_error_text : string,
    lastname_error_text : string,
    date_error_text : string,
    email_error_text : string
}