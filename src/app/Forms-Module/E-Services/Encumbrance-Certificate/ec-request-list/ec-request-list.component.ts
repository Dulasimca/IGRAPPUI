import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ec-request-list',
  templateUrl: './ec-request-list.component.html',
  styleUrls: ['./ec-request-list.component.scss']
})
export class EcRequestListComponent implements OnInit {
  applicationNo: any;
  applicationStartDate: Date = new Date();
  applicationEndDate: Date = new Date();
  applicationStatusOptions: SelectItem[] = [];
  applicationStatus: any;
  paymentStatusOptions: SelectItem[] = [];
  paymentStatus: any;
  constructor() { }

  ngOnInit(): void {
  }

}
