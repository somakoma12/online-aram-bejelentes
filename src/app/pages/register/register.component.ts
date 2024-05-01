import { Location } from '@angular/common';
import { Component, OnInit, model } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Felhasznalo } from '../../shared/models/Felhasznalo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  signUpForm = this.createForm({
    username: '',
    password: '',

    address: ''
  })

  constructor(private fb: FormBuilder, private location: Location) {

  }


  ngOnInit(): void {

  }

  createForm(model: Felhasznalo) {
    return this.fb.group(model);
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {

  }

}
