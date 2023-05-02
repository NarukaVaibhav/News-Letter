import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   d= new Date();
   current_date = this.d.getFullYear + "-" + (this.d.getMonth() + 1) + "-" + this.d.getDate; 
  constructor(public http:HttpClient) { }
  test(){
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from='+this.current_date+'&sortBy=publishedAt&apiKey=cd97ac58ba284e3395b01912212825de')
  }
}
