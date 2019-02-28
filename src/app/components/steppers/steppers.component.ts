import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-steppers',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.css']
})
export class SteppersComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstnameCtrl: new FormControl('', Validators.required),
      lastnameCtrl: new FormControl('', Validators.required),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      telCtrl: new FormControl('', [Validators.required,Validators.min(9),Validators.minLength(10),
        Validators.pattern('[0-9 ]*')]),
      addressCtrl: new FormControl('', Validators.required),
    });
    this.secondFormGroup = this._formBuilder.group({
      otherCtrl: ['', Validators.required]
    });
    
  }
  // ['', Validators.compose([Validators.required, Validators.email]),

  
    // this.firstFormGroup = new FormGroup({
    //   firstnameCtrl : new FormControl('', Validators.required),
    //   lastnameCtrl : new FormControl('', Validators.required),
    //   emailCtrl : new FormControl('', [Validators.required,Validators.minLength(2)]),
    //   telCtrl : new FormControl('', [Validators.required,Validators.minLength(9)]),
    //   addressCtrl : new FormControl('', [Validators.required, Validators.email]),
    // })
    // this.firstFormGroup = this._formBuilder.group({firstnameCtrl: ['', Validators.required]}); //ชื่อ
    // this.firstFormGroup = this._formBuilder.group({lastnameCtrl: ['', Validators.required]}); //นามสกุล
    // this.firstFormGroup = this._formBuilder.group({emailCtrl: ['', Validators.required]}); //อีเมลล์
    // this.firstFormGroup = this._formBuilder.group({telCtrl: ['', Validators.required]}); //เบอร์โทร
    // this.firstFormGroup = this._formBuilder.group({addressCtrl: ['', Validators.required]}); //ที่อยู่
  

}
