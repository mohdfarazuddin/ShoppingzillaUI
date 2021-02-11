import { Userdto } from '../../../models/userdto.model';
import { Register } from '../../../models/register.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUserdto } from 'src/models/userdto.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  register: Register = new Register();
  userdto: Userdto = new Userdto();

  registerForm = this.formBuilder.group({
    firstName: ['', [ Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
    mobileNo : ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
    emailID: ['', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    password2: ['', [ Validators.required, Validators.maxLength(20), Validators.minLength(6)]]
  } ,{validator: this.checkIfMatchingPasswords('password', 'password2') });

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  onRegister(form) : void{
    this.register = form,
    this.userService.register(this.register).subscribe((data:IUserdto) => {this.userdto = data;
      localStorage.setItem("jwtToken", this.userdto.jwtToken);
      localStorage.setItem("refreshToken", this.userdto.refreshToken);
      });
  }

}
