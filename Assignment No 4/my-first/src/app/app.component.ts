import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first';
  
  username:string;
  password:string;
  
  constructor(){}

}
ngOnInit(){

}

loginInUser(){
  if(this.username =="Tejas" && this.password =="12345")(
    console.log("welcome to dashboard")
  )
  else(
    console.log("error");
  )
}
