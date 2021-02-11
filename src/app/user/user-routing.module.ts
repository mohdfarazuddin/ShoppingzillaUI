import { LoginComponent } from './../user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './../user/register/register.component';

const routes: Routes = [
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
