import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from 'src/app/models/register';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    let fData=f.form.value;
    const registration=new Registration(
      fData.name,
      fData.surname,
      fData.year,
      fData.gender,
      fData.email,
      fData.phone,
      fData.grade,
    );
      this.registrationService.addRegistration(registration).subscribe((response)=>{
        console.log("Registration added: ");
        console.log(response);
      });
  }
}
