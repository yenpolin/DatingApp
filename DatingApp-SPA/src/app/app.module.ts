import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { DiraddformComponent } from './diraddform/diraddform.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';




@NgModule({
  declarations: [								
    AppComponent,
      UserlistComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      TestComponent,
      DiraddformComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [
    ErrorInterceptorProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
