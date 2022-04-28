import { Component, OnInit } from '@angular/core';
import { AuthResponseData } from 'src/app/models/authResponseData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public isLoggedin=false;
  public user?:AuthResponseData;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.isLoggedin=this.auth.isLoggedIn;
    this.user=this.auth.user;
    this.auth.userUpdated.subscribe(()=>{
      this.isLoggedin=this.auth.isLoggedIn;
      this.user=this.auth.user;
    });
  }

}
