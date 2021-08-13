import { Injectable } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { element } from 'protractor';

interface FormValidatorResponse {
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  customValidatorName(control: FormControl):FormValidatorResponse{
    if (control.value?.toLowerCase() === 'no valido') {
      return {
        custom: true
      }
    }
    return null
  }

  validateArray(form_array_name:string){
    console.log('enter to array validation');
    return (formGrup: FormGroup) => {
      let formArray = formGrup.controls[form_array_name] as FormArray
      formArray.controls.forEach(element => {
        if (!element.value) {
          console.log('Invalid');
          element.setErrors({custom: true})
        }else{
          element.setErrors(null)
        }
      });
    }
  }

  asyncValidation(control: FormControl):Promise<FormValidatorResponse>|Observable<FormValidatorResponse>{
    // if(!control.value){
    //   return null
    // }
    return new Promise((res,rej) => {
        setTimeout(() => {
          if (control.value === 'async invalid') {
            res({async_res:true})
          }else{
            res(null)
          }
        },3500)
      })
    }


}
