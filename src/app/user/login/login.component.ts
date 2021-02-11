import { IUserdto } from '../../../models/userdto.interface';
import { Userdto } from '../../../models/userdto.model';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Login } from 'src/models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  login : Login = new Login();
  userdto : Userdto = new Userdto();

  loginForm = this.formBuilder.group({
    emailID: ['', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.maxLength(20), Validators.minLength(6)]]
  });

  onLogin(form) : void{
    this.login = form,
    this.userService.login(this.login).subscribe((data:IUserdto) => {this.userdto = data;
      localStorage.setItem("jwtToken", this.userdto.jwtToken);
      localStorage.setItem("refreshToken", this.userdto.refreshToken);
    });
  }

}
