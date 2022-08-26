import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-utility-forms',
  templateUrl: './public-utility-forms.component.html',
  styleUrls: ['./public-utility-forms.component.scss']
})
export class PublicUtilityFormsComponent implements OnInit {

  publicUtilityCols: any;
  publicUtilityData: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.publicUtilityCols = [
      {field: 'Sale/Conveyance deed' , header: 'Title'},
      {field: 'Englishdoc.pdf' , header: 'English'},
      {field: 'Tamil.doc.pdf' , header: 'Tamil'}

    ]
  }

}
