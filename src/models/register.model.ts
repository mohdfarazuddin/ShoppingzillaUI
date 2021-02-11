import { IRegister } from './register.interface';
export class Register implements IRegister {
    firstName : string;
    lastName : string;
    mobileNo : string;
    emailID : string;
    password : string;
    password2 : string
}