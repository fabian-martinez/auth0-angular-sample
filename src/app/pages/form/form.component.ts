import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsService } from '../../services/custom-validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder,
              private customValidator:CustomValidatorsService) { 
    this.createForm()
    //this.watchForm()
    this.watchArray()
  }

  ngOnInit(): void {
  }

  get invalid_email() {
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  get invalid_name() {
    return this.form.get('name').invalid && this.form.get('name').touched
  }

  get invalid_filed_async(){
    return this.form.get('async_validator').invalid && this.form.get('async_validator').touched
  }

  get invalid_text_grup() {
    return this.form.get('form_grup.text_grup').invalid && this.form.get('form_grup.text_grup').touched
  }

  get from_array(){
    return this.form.get('form_array') as FormArray
  }

  createForm(){
    this.form = this.formBuilder.group({
      email:['fabian@test.com',Validators.required],
      name:['fabianM',[Validators.required, Validators.minLength(5), this.customValidator.customValidatorName]],
      async_validator:['123456',Validators.required,this.customValidator.asyncValidation],
      option:['1',],
      multipleOption:[['1'],],
      textbox:['it is a textbox with \n multiple line',],
      checkin:[false,],
      form_grup:this.formBuilder.group({
        text_grup:['text grup',Validators.required],
        range:[80]
      }),
      form_array:this.formBuilder.array([])
    }
    )
  }

  watchForm(){
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
    this.form.statusChanges.subscribe(status => {
      console.log(status);
    })
  }

  watchArray(){
    this.form.get('form_array').statusChanges.subscribe(value => {
      console.log(value);
    })
  }

  save(){
    console.log(this.form);

    if(this.form.invalid){
      return Object.values(this.form.controls).forEach( control => {
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => {
            control.markAllAsTouched()
          })
        }
        control.markAllAsTouched()
      })
    }
  }

  addFormArrayItem(){
    this.from_array.push(this.formBuilder.control([''], Validators.required))
    this.from_array.controls.forEach(item => item.untouched)
  }
  
  deleteFormArrayItem(i){
    this.from_array.removeAt(i)
  }

  invalidArrayItem(i): boolean {
    return this.from_array.at(i).invalid && this.from_array.at(i).touched
  }

}
