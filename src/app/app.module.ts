
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {Routes,RouterModule}from'@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchForPdfComponent } from './search-for-pdf/search-for-pdf.component';
import { PriorityComponent } from './priority/priority.component';
import { AboutComponent } from './about/about.component';
const routes:Routes=[
  {path:"priority",component:PriorityComponent},
  {path:"search",component:SearchForPdfComponent},
  {path:"",component:AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SearchForPdfComponent,
    PriorityComponent,
    AboutComponent
    ],
  imports: [
    NgbModule,
    RouterModule.forRoot(routes), 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    