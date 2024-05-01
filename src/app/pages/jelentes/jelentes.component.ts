import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Jelentes } from '../../shared/models/Jelentes';
import { Ora } from '../../shared/models/Ora';
import { Komment } from '../../shared/models/Komment';


@Component({
  selector: 'app-jelentes',
  templateUrl: './jelentes.component.html',
  styleUrl: './jelentes.component.scss'
})
export class JelentesComponent implements OnInit {

  aramjelentes: string = '';
  oracl = new Ora(-1);
  jelentescl = new Jelentes(this.oracl);

  fontoskomment: string = '';
  kommentcl = new Komment('');

  oszinteseg = "";

  ngOnInit(): void {
    
  }

  addAram() {
    if (this.aramjelentes) {
      this.oracl.kwhallas = parseInt(this.aramjelentes)
      
    }
  }

  addComment() {
    if (this.fontoskomment) {
      this.kommentcl.comment = this.fontoskomment;
    }
  }
}
