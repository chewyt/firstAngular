import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CounterComponent } from './counter/counter.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CounterComponent
  ]
})
export class UserAuthModule { 

  count: number = 0;
  counter(type: String){
    this.count++;
  }



}
