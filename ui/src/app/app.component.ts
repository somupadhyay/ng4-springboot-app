import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  backend:string = "fail";
  constructor(private http: Http){}

  ngOnInit(){
    this.http.get("/api/test-app")
    .map(res => res.text())
    .subscribe( res =>{
     this.title = this.title +" backend app connection "+ res;
      console.log(res);
    });
  }
}
