import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NatureClub } from 'src/app/models/natureClub';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-reg-to-naturalist-club',
  templateUrl: './reg-to-naturalist-club.component.html',
  styleUrls: ['./reg-to-naturalist-club.component.css']
})
export class RegToNaturalistClubComponent implements OnInit {

  public natureClubForm:FormGroup;
  
  constructor(private regService:RegistrationService, private auth:AuthService, private router:Router) { 
    this.natureClubForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'grade':new FormControl(null, [Validators.required, this.checkGrade]),
      'allergy':new FormArray([]),
      'activity':new FormArray([])
    });
  }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn){
      this.router.navigate(["/login"]);
    }
  }

  onSubmit(){
    console.log(this.natureClubForm.value);
    this.regService.addNaturalistClubRegistration(this.natureClubForm.value).subscribe((response)=>{});
    this.natureClubForm.reset();
  }

  checkGrade(control:FormControl): {[s:string]:boolean}|null {
    if (control.value>='6' && control.value<='12'){
      return null;
    }else{
      return {'gradeIncorrect':true}
    }
  }

  addAllergy(){
    const input=new FormControl(null, Validators.required);
    (<FormArray>this.natureClubForm.get('allergy')).push(input);
  }

  removeAllergy(){
    (<FormArray>this.natureClubForm.get('allergy')).removeAt((<FormArray>this.natureClubForm.get('allergy')).length-1);
  }

  
  addActivity(){
    const activity=new FormGroup({
      year:new FormControl(null, Validators.required),
      title:new FormControl(null, Validators.required),
      type:new FormControl(null, Validators.required)
    });
    (<FormArray>this.natureClubForm.get('activity')).push(activity);
  }
  
  get allergies(){
    return (<FormArray>this.natureClubForm.get('allergy')).controls;
  }
  get activities(){
    return (<FormArray>this.natureClubForm.get('activity')).controls;
  }

  toFormGroup(el:AbstractControl):FormGroup{
    return <FormGroup>el;
  }  
  
}
