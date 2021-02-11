import { IRefreshToken } from "./refreshtoken.interface";

export class RefreshToken implements IRefreshToken {
    jwtToken : string;
    refreshToken : string
}