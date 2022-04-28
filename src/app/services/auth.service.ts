import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthResponseData } from '../models/authResponseData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn=false;
  public user?:AuthResponseData;
  private key="AIzaSyDgnh39EhoH7Tg_y67AOC5OwBIVXjuSNfg";

  constructor(private http:HttpClient) { }

  private authAPICall(url:string, email:String, password:String){
    return this.http.post<AuthResponseData>(url,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(  tap(  (response)=>{
      this.isLoggedIn=true;
      this.user=response;
    }));
  }



  public register(email:String,password:String){
    return this.authAPICall("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.key,email,password);
  }

  public login(email:String,password:String){
    return this.authAPICall("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.key,email,password);
  }

  public logout(){
    this.isLoggedIn=false;
    this.user=undefined;
  }
}
