import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../models/register';
import { map } from 'rxjs/operators';
import { NatureClub } from '../models/natureClub';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private readonly url:String="https://summercampregister-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http:HttpClient) { }


  public addRegistration(registration:Registration){
    return this.http.post(this.url+'/registrations.json',registration);
  }

  public addNaturalistClubRegistration(registration:NatureClub){
    return this.http.post(this.url+'/regToNaturalistClub.json',registration);
  }

  public getRegistration(id:String){
    return this.http.get<Registration>(this.url+"/registrations/"+id+".json").pipe( map((response)=>{
      response.id=id;
      return response;
    }));
  }

  public getRegistrations(){
    return this.http.get<{[key:string]:Registration}>(this.url+"/registrations.json").pipe(map((response)=>{
        const regArray:Registration[]=[];
        for(let key in response){
        regArray.push({...response[key],id:key})
      }
      return regArray;
    }));
  }

  public updateRegistration(registration:Registration){
    return this.http.patch(this.url+"/registrations/"+registration.id+".json", registration);
  }

  public deleteReg(id:String){
    return this.http.delete(this.url+"/registrations/"+id+".json")
  }
}
