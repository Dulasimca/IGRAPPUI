import { Component, OnInit } from '@angular/core';
import { TableConstants } from '../Common-Module/table-constants';

@Component({
  selector: 'app-tell-me-how',
  templateUrl: './tell-me-how.component.html',
  styleUrls: ['./tell-me-how.component.scss']
})
export class TellMeHowComponent implements OnInit {
  tellmehowCols: any;
  tellmehowList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tellmehowCols = TableConstants.tellmehowColumns

    this.tellmehowList = [
      {
        'header': 'Birth and Death Registration',
        'data': [
          { 'sno': '1', 'detail': 'Application Fee (not applicable to court)', 'fee': 'Rs.100', },
          { 'sno': '2', 'detail': 'Search fee for the first year the search is carried out', 'fee': 'Rs.100', },
          { 'sno': '3', 'detail': 'For every such additional year if the search is continued', 'fee': 'Rs.200', },
          { 'sno': '4', 'detail': 'Provide filter for every birth or death', 'fee': 'Rs.200', },
          { 'sno': '4', 'detail': 'For each additional copy of the filter', 'fee': 'Rs.100', },
          { 'sno': '4', 'detail': 'Provide filter for every birth or death', 'fee': 'Rs.100', },

        ]
      },
      {
        'header': 'The Ticket',
      },
      {
      'header': 'Registration on Documents',
    },
    {
      'header': 'Marriage registration',
    },
     
    {
      'header': 'Chits',
    },
    {
      'header': 'Societies Registration',
    },
    {
      'header': 'Partnership Firms'
    }
    ]
  }

}
