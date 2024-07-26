/**
 * Title: app.module.ts
 * Author: Professor Krasso and Brock Hemsouvanh
 * Date: 8/5/23
 * Updated: 07/20/2024 by Brock Hemsouvanh and Mackenzie Lubben-Ortiz
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { FaqComponent } from './faq/faq.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PieComponent } from './pie/pie.component';

import { CookieService } from 'ngx-cookie-service';
import { EmployeeService } from './services/employee.service';
import { AuthService } from './services/auth.service';
import { SecurityModule } from './security/security.module';
import { ServiceRequestComponent } from './service-request/service-request.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
    NavComponent,
    FooterComponent,
    NotFoundPageComponent,
    AdminComponent,
    ForgotPasswordComponent,
    EmployeeDirectoryComponent,
    FaqComponent,
    MyProfileComponent,
    PieComponent,
    ServiceRequestComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SecurityModule,
  ],
  providers: [
    CookieService,
    EmployeeService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
