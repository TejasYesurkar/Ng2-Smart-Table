import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
  import { Ng2SmartTableModule} from 'ng2-smart-table';

import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule, 
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatNativeDateModule} from '@angular/material';
  import {MyservicesService} from './services/myservices.service';
import { NoorderComponent } from './noorder/noorder.component';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActiveRepoComponent } from './active-repo/active-repo.component';
@NgModule({
  declarations: [
    AppComponent,
    NoorderComponent,
    RetailerlistComponent,
    ActiveRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTabsModule,
    Ng2SmartTableModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    Ng2SmartTableModule,
    BrowserAnimationsModule
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
