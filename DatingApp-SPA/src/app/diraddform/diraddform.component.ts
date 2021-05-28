import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Value } from 'src/app/_model/value';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-diraddform',
  templateUrl: './diraddform.component.html',
  styleUrls: ['./diraddform.component.scss']
})
export class DiraddformComponent implements OnInit {

value1: any={};
user: any={};
id: number;
value2: any={};
id2: number;

  //value: Value = new Value();

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    
  }

  
CreateValue(){
  this.http.post("http://localhost:5000/api/auth/diradd", this.value1.name).subscribe(next => {
    this.alertify.success('Created');
    this.value1.name=null;
  });
  
}

/*
CreateValue2(){
  this.http.post("http://localhost:5000/api/values/", this.value1).subscribe(next =>{
    this.alertify.success('Created');
    this.value1=null;
  });
}
*/

CreateUser(){
  this.http.post("http://localhost:5000/api/auth/register", this.user).toPromise();
  this.user={};
}

DelValue1(){
  this.http.delete("http://localhost:5000/api/auth/" + this.id).subscribe(next =>{
    this.id= null;
  this.alertify.success('deleted')
  }, 
  error => {this.alertify.error(error);
  });
  
}

UpdateValue(){
  this.http.put("http://localhost:5000/api/auth/"+ this.value2.id, this.value2).subscribe(next =>{
  
  this.alertify.success('updated ')
  }, 
  error => {this.alertify.error(error);
  });

}

}

/*
class Value{
  id: number;
  name: string;
}
*/
