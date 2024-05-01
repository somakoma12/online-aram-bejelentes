import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-valasztoeredmeny',
  templateUrl: './valasztoeredmeny.component.html',
  styleUrl: './valasztoeredmeny.component.scss'
})
export class ValasztoeredmenyComponent {

  @Input() erkolcsv : string;

  constructor() {
    this.erkolcsv=""
  }

  

}
