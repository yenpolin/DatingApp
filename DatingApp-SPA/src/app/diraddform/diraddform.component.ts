import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diraddform',
  templateUrl: './diraddform.component.html',
  styleUrls: ['./diraddform.component.scss']
})
export class DiraddformComponent implements OnInit {

value: any={}
user: any={}
  //value: Value = new Value();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  
CreateValue(){
  this.http.post("http://localhost:5000/api/auth/diradd", this.value).toPromise();
  this.value={};
}

CreateUser(){
  this.http.post("http://localhost:5000/api/auth/register", this.user).toPromise();
  this.user={};
}


}

/*
class Value{
  id: number;
  name: string;
}
*/
