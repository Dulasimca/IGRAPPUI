import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ec-search-and-apply-cc',
  templateUrl: './ec-search-and-apply-cc.component.html',
  styleUrls: ['./ec-search-and-apply-cc.component.scss']
})
export class EcSearchAndApplyCCComponent implements OnInit {
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
  plotNo: any;
  flatNo: any;
  doorNo: any;
  wardNo: any;
  blockNo: any;
  east: any;
  west: any;
  north: any;
  south: any;
  otherInfo: any;
  otherRegDoc: any;
  typeCaptcha: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
