import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Photo } from 'src/app/_model/photo';
import { User } from 'src/app/_model/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
user: User;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alert: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data =>{
      this.user = data['user'];
    });

    this.galleryOptions = [
      {
          width: '500px',
          height: '500px',
          imagePercent: 100,
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      }];

      this.galleryImages = this.getPhotoUrls();

      
      
  }

 
 

  getPhotoUrls(){
    const PhotoUrls=[];
    for (const photo of this.user.photos) {
      PhotoUrls.push({
        small: photo.url,
        medium: photo.url,
        large: photo.url,
        description: photo.description
      });
    }
    return PhotoUrls;
  }
/*
 loadUser(){
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
      }, 
    error => {
      this.alert.error(error);});
      
  }*/

}
