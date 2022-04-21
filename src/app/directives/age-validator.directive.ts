import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAgeValidator]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:AgeValidatorDirective,
      multi:true
    }
  ]
})
export class AgeValidatorDirective implements Validator {

  constructor() { }
  validate(control: FormControl): ValidationErrors | null {
    let birthYear:number=control.value;
    let thisYear = new Date().getFullYear();
    let age= thisYear-birthYear;
    if(age < 12 || age > 18){
      return{'error':'Age is not valid'}
    }
    console.log(age);
    return null;
    
  }
  }
