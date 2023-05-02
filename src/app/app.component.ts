import { Component , OnInit } from '@angular/core';
import{HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newsBody =[];
  card =[];


 ngOnInit(){

  }

  constructor(public http:HttpService){
    this.http.test().subscribe((result)=>{
       this.newsBody=result["articles"];
      console.log(result);

      for(let k in this.newsBody)
      {
        this.card.push(this.newsBody[k]);
      } 

    },
    (err)=>{
      console.log(err);
    })
  }
}
