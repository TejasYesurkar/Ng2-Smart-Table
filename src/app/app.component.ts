import { Component, OnInit } from '@angular/core';
import {MyservicesService}from './services/myservices.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'smartTable';
}
