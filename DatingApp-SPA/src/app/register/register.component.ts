import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.initialRegiForm();
  }

  initialRegiForm(){
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, this.matchValues()])
    })
    this.registerForm.controls.password.valueChanges.subscribe(()=>{
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })
  }

matchValues(): ValidatorFn{
  return (c: AbstractControl) =>{
    return c?.value ===c.parent?.controls['password'].value ?
    null : {isMatch: true};
  }
}

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
