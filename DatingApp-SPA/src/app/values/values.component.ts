import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
valuesVal: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response=>{
      this.valuesVal = response;
    }, error => {console.log(error);})
  }
}
