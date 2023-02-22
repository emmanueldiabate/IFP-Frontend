import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,ReactiveFormsModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, FormsModule, IonicModule.forRoot()],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

