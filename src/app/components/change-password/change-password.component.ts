import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/models/authResponseData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn){
      this.router.navigate(["/login"]);
    }
  }

  public onSubmit(form:NgForm){
    const password:String=form.value.password;
    let respObs:Observable<AuthResponseData>;
      respObs=this.auth.changePassword(password);
      respObs.subscribe({
        next:()=>{
          this.router.navigate(['/']);
        }
    })
  } 
}


