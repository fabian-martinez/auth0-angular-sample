import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-protected-form',
  templateUrl: './protected-form.component.html',
  styles: [
  ]
})
export class ProtectedFormComponent implements OnInit {

  form: FormGroup

  get papers(){
    return this.form.get('papers') as FormArray
  }

  constructor(private fb:FormBuilder) {
    this.createForm()
    this.initData()
   }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.fb.group({
      /// account data
      nickname:[],
      email:[],
      /// personal data
      firstname:[],
      lastname:[],
      gender:[],
      birthdate:[],
      country:[],
      city:[],
      /// professional data
      affiliation:[],
      occupation:[],
      /// membership data
      is_ieee_member:[],
      membership_type:[],
      member_code:[],
      /// author information
      is_author:[],
      papers:this.fb.array([{},{}]),
      /// others validations
      habeas_data:[]
    }
    )
  }

  addPapers(){
    this.papers.push(
      this.fb.group({
        id:[],
        paper_name:[],
        paper_authors:[]
      })
    )
  }

  save(){
    console.log(this.form.value);
  }

  initData(){
    this.form.reset({
      /// account data
      nickname:"jhon.doe",      
      email:"jhon.doe@email.com",  
      /// personal data
      firstname:"jhon",    
      lastname:"doe",
      gender:'m',      
      birthdate:"1993-08-19",
      country:'COL',
      city:'BOG',
      /// professional data
      affiliation:'IEEE',
      occupation:'Software Engineer',
      /// membership data
      is_ieee_member:true,
      membership_type:'YP',
      member_code:'1234',
      /// author data
      is_author:true,
      papers:[{
        id:1,
        apaper_name:'paper tittle',
        paper_authors:[{name:'Jhon Doe',email:'jhon.doe@mail.com'},
                       {name:'Jane Doe',email:'jane.doe@mail.com'}]
      },{
        id:2,
        apaper_name:'paper tittle',
        paper_authors:[{name:'Jhon Doe',email:'jhon.doe@mail.com'},
                       {name:'Jane Doe',email:'jane.doe@mail.com'}]
      }],
      /// others validations
      habeas_data:true
    })
  }

}
