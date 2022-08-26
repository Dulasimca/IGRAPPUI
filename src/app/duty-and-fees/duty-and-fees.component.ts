import { Component, OnInit } from '@angular/core';
import { TableConstants } from '../Common-Module/table-constants';



@Component({
  selector: 'app-duty-and-fees',
  templateUrl: './duty-and-fees.component.html',
  styleUrls: ['./duty-and-fees.component.scss']
})
export class DutyAndFeesComponent implements OnInit {
  DutyandFeesList: any[] = [];
  dutyAndFeesCols: any;
 
  constructor() { }

  ngOnInit(): void {
    this.dutyAndFeesCols = TableConstants.DutyAndFeesColumns;
    this.DutyandFeesList = [
      {
        'header': 'Stamp Duty and Registration Fee',
        'data': [
          { 'Categories of Document': '1.Conveyance (Sale)', 'Stamp Duty': '7% on the market value of the property', 'Registration Fee': '4% on the market value of property.', },
          { 'Categories of Document': '2.Gift', 'Stamp Duty': '7% on the market value of the Property', 'Registration Fee': '4% on the market value of the property.', },
          { 'Categories of Document': '3.Exchange', 'Stamp Duty': '7% on the market value of the property', 'Registration Fee': '4% on the market value of the property.', },
          { 'Categories of Document': '4.Simple Mortage', 'Stamp Duty': '1% (on the loan amount) subject to a maximum of Rs 40,000/-', 'Registration Fee': '1% (on the loan amount) subject to a maximum of Rs 10,000/-', },
        ]
      },
      {
        'header': 'Fees for getting encumbrance certificate for one survey',
        'data': []
      },
      {
        'header': 'Fees for Certified copies',
        'data': []
      },
      {
        'header': 'Fee for Hindu Marriage Registration',
        'data': []
      },
      {
        'header': 'Document Writers Fee',
        'data': []
      },
      {
        'header': 'Fee for TamilNadu Marriage Registration',
        'data': []
      },
      {
        'header': 'Fee for Special Marriage Registration',
        'data': []
      },
      {
        'header': 'Fee for Christian Marriage Registration',
        'data': []
      },
      {
        'header': 'Fee for Birth and Death Registration',
        'data': []
      },
      {
        'header': 'Fee for Firm Registration',
        'data': []
      },
      {
        'header': 'Fee for Chit Fund Registration',
        'data': []
      },
      {
        'header': 'Fee for Society Registration',
        'data': []
      }
    ]
  }

}
