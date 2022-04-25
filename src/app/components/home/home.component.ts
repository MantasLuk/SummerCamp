import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/register';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public registrations:Registration[]=[];

  constructor(private registrationService:RegistrationService) { }

  private loadData(){
    this.registrationService.getRegistrations().subscribe((response)=>{
      this.registrations=response;
    });
  }

  ngOnInit(): void {
    this.loadData()
  }

  deleteReg(id:String){
    this.registrationService.deleteReg(id).subscribe((response)=>{
      this.loadData();
    });
  }
}
