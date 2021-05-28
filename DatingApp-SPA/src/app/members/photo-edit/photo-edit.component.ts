import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Photo } from 'src/app/_model/photo';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
@Input() photos: Photo[];
@Output() getMemberPhotoChange= new EventEmitter<string>();
uploader:FileUploader;
hasBaseDropZoneOver: false;
baseUrl=environment.apiUrl;
currentMain: Photo;

  constructor(private authService: AuthService, private userService: UserService, private alertifyServicey: AlertifyService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public initializeUploader(){
    this.uploader = new FileUploader({
      url: this.baseUrl + 'user/' + this.authService.docodedToken.nameid +'/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024
    });

    this.uploader.onAfterAddingFile = (file) =>{file.withCredentials= false;};

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);
      }

    } 
  }

  public setPhotoToMain(photo: Photo){
    this.userService.setMainPhoto(this.authService.docodedToken.nameid, photo.id).subscribe(()=>
      {this.currentMain=this.photos.filter(p => p.isMain == true)[0];
      this.currentMain.isMain = false;
      photo.isMain = true;
      this.getMemberPhotoChange.emit(photo.url);
      }, 
    error=>{this.alertifyServicey.error(error);})


  }

}
