import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as mat from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    mat.MatFormFieldModule,
    mat.MatSelectModule,
    mat.MatButtonModule,
    mat.MatInputModule,
    mat.MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
