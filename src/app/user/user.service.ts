import { Routes } from '../shared/Routes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserdto } from 'src/models/userdto.interface';
import { Login } from 'src/models/login.model';
import { Register } from 'src/models/register.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(login : Login) {
    return this.http.post<IUserdto>(Routes.loginurl,login);
  }

  register(register : Register) {
    return this.http.post<IUserdto>(Routes.registerurl,register);
  }

}
