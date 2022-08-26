import { Component, OnInit } from '@angular/core';
import { TableConstants } from '../Common-Module/table-constants';

@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['./circulars.component.scss']
})
export class CircularsComponent implements OnInit {
  circularList: any[] = [];
  circularCols: any;
  constructor() { }

  ngOnInit(): void {
    this.circularCols = TableConstants.CircularColumns;
    this.circularList = [
      {
        'header': 'Award & Recognition',
        'data': [
          { 'letterNo': '127', 'letterDate': '21/10/2021', 'title': 'Indian Partenership Act, 1932 - Amendment', },
          { 'letterNo': '124', 'letterDate': '22/01/2021', 'title': 'Ease of Doing Business', },
          { 'letterNo': '128', 'letterDate': '01/10/2021', 'title': 'Jurisdiction of Firms Registration', },
          { 'letterNo': '131', 'letterDate': '07/11/2021', 'title': 'Fees Amendment Firms Registration', },
        ]
      },
      {
        'header': 'Lands Prohibited for Registration',
        'data': []
      },
      {
        'header': 'Document Registration',
        'data': []
      },
      {
        'header': 'Document Registration',
        'data': []
      },
      {
        'header': 'PWD Scheduled Rates',
        'data': []
      },
      {
        'header': 'Registration Fees',
        'data': []
      },
      {
        'header': 'Acts and Rules',
        'data': []
      }
    ]
  }

}
