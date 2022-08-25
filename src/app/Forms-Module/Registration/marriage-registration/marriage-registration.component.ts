import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-marriage-registration',
  templateUrl: './marriage-registration.component.html',
  styleUrls: ['./marriage-registration.component.scss']
})
export class MarriageRegistrationComponent implements OnInit {

  mrgeType: any;
  mrgeTypeOptions: SelectItem[] = [];
  mrgeDetails: any;
  mrgeDetailsOptions: SelectItem[] = [];
  mrgeDate: any;
  fromRegDate: any;
  toRegDate: any;
  appNumber: any;
  year: any;

  constructor() { }

  ngOnInit(): void {
  }

}
