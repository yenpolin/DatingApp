import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
model: any = {};
RegisterForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  initialRegiForm(){}

  register(){
  /*this.authService.register(this.model).subscribe(()=>{
  this.alertify.success("register successful");},
  error=>{this.alertify.error(error)});*/
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled')
  }

 

}
