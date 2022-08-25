import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ec-view-ec',
  templateUrl: './ec-view-ec.component.html',
  styleUrls: ['./ec-view-ec.component.scss']
})
export class EcViewECComponent implements OnInit {
  selectedValue: string = '0';
  zoneOptions: SelectItem[] = [];
  zone: any;
  districtOptions: SelectItem[] = [];
  district: any;
  subRegistrarOptions: SelectItem[] = [];
  subRegistrar: any;
  ecStartDate: Date = new Date();
  ecEndDate: Date = new Date();
  villageOptions: SelectItem[] = [];
  village: any;
  surveyNo: any;
  subDivisionNo: any;
  typeCaptcha: string = '';
  plotNo: any;
  flatNo: any;
  docSubRegistrar: any;
  documentNo: any;
  yearOptions: SelectItem[] = [];
  year: any;
  documentTypeOptions: SelectItem[] = [];
  documentType: any;

  constructor() { }

  ngOnInit(): void {
  }

}
