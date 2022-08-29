import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cc-birth-death',
  templateUrl: './cc-birth-death.component.html',
  styleUrls: ['./cc-birth-death.component.scss']
})
export class CcBirthDeathComponent implements OnInit {
  docType: any;
  docOptions: SelectItem [] = [];
  certNumber: any;
  fatherName: any;
  sroName: any;
  sronameOptions: SelectItem [] = [];
  tosubsequentYear: any;
  tosubyearOptions: SelectItem [] = [];
  regNum: any;
  appName: any;
  motherName: any;
  dob: Date = new Date();
  village: any;
  villageOptions: SelectItem [] = [];
  fromsubsequentYear: any;
  fromsubyearOptions: SelectItem [] = [];
  activeTabIndex: any;

  constructor() { }

  ngOnInit(): void {
  }

}
