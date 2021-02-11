import { IUserdto } from "./userdto.interface"

export class Userdto implements IUserdto {
    jwtToken : string;
    refreshToken : string;
    userID : string;
    emailID : string;
    Role : string;
    firstName : string;
    lastName : string;
    mobileNo : string
}