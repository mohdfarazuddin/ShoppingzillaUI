import { constants } from "buffer";

export class Routes {
    
    public static API_ENDPOINT='https://localhost:44364/api/';

    public static loginurl = Routes.API_ENDPOINT + 'user/login';

    public static registerurl = Routes.API_ENDPOINT + 'user/register';
}