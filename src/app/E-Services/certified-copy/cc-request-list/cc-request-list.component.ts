import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cc-request-list',
  templateUrl: './cc-request-list.component.html',
  styleUrls: ['./cc-request-list.component.scss']
})
export class CcRequestListComponent implements OnInit {

  appNum: any;
  appstartDate: Date = new Date();
  appendDate: Date = new Date();
  documentType: any;
  doctypeOptions: SelectItem [] = [];
  appStatus: any;
  appstatusOptions: SelectItem [] = [];
  payStatus: any;
  paymentstatusOptions: SelectItem [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
