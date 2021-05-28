import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
@Input() userc : User;
  constructor() { }

  ngOnInit() {
  }

}
