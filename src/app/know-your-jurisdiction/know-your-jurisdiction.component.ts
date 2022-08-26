import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-your-jurisdiction',
  templateUrl: './know-your-jurisdiction.component.html',
  styleUrls: ['./know-your-jurisdiction.component.scss']
})
export class KnowYourJurisdictionComponent implements OnInit {

  streetName: any;
  villageName: any;
  constructor() { }

  ngOnInit(): void {
  }

}
