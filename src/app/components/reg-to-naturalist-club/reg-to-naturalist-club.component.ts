import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-to-naturalist-club',
  templateUrl: './reg-to-naturalist-club.component.html',
  styleUrls: ['./reg-to-naturalist-club.component.css']
})
export class RegToNaturalistClubComponent implements OnInit {

  public natureClubForm:FormGroup;
  
  constructor() { 
    this.natureClubForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'email':new FormControl(null, Validators.required),
      'grade':new FormControl(null, [Validators.required, this.checkGrade])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.natureClubForm.value);
    this.natureClubForm.reset();
  }

  checkGrade(control:FormControl): {[s:string]:boolean}|null {
    if (control.value>='6' && control.value<='12'){
      return null;
    }else{
      return {'gradeIncorect':true}
    }
  }
}
