import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_model/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
user: User;
@HostListener('window: beforeunload', ['$event'])

  unloadNotification($event: any){
    if (this.editForm.dirty){
      $event.returnValue=true;
    }
  }


  constructor(private http: HttpClient, private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data =>{
      this.user = data['user'];
    });
  }

  updateUser(){
    this.http.put('http://localhost:5000/api/users/'+this.authService.docodedToken.nameid, this.user).subscribe(next =>
      {    this.alertify.success('profile updated');
      this.editForm.reset(this.user);}, 
      error => {this.alertify.error(error);}

      
  );


  }

  updateMainPhoto(photoUrl){
    this.user.photoUrl=photoUrl;
  }
}
