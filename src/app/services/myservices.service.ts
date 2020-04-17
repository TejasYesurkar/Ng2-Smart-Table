import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  private apiUrl ='http://dagduteli.com/distri/AngaulrReport/';

  constructor(
    private http:HttpClient
  ) { }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };


  NorderReport(){
   return this.http.get<any>(`${this.apiUrl}NoorderReport.php`);
      }

RetDetailsReport(){
  return this.http.get(`${this.apiUrl}RetailerList.php`);
}

ActiveReport(){
  return this.http.get(`${this.apiUrl}ActiveReport.php`);
}
    }