import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
