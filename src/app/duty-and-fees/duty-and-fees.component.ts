import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TableConstants } from '../Common-Module/table-constants';



@Component({
  selector: 'app-duty-and-fees',
  templateUrl: './duty-and-fees.component.html',
  styleUrls: ['./duty-and-fees.component.scss']
})
export class DutyAndFeesComponent implements OnInit {
  DutyandFeesList: any[] = [];
  dutycols: any[] = [];
 
  constructor() { }

  ngOnInit(): void {
    // this.dutycols = TableConstants.DutyAndFeesColumns;
    this.DutyandFeesList = [
      {
      'dutycols' :[
        { field: 'Categories of Document', header: 'Categories of Document', align: 'left !important'},
        { field: 'Stamp Duty', header: 'Stamp Duty', align: 'left !important'},
        { field: 'Registration Fee', header: 'Registration Fee', align: 'left !important'},
      ],
        'header': 'Stamp Duty and Registration Fee',
        'data': [
          { 'Categories of Document': '1.Conveyance (Sale)', 'Stamp Duty': '7% on the market value of the property', 'Registration Fee': '4% on the market value of property.', },
          { 'Categories of Document': '2.Gift', 'Stamp Duty': '7% on the market value of the Property', 'Registration Fee': '4% on the market value of the property.', },
          { 'Categories of Document': '3.Exchange', 'Stamp Duty': '7% on the market value of the property', 'Registration Fee': '4% on the market value of the property.', },
          { 'Categories of Document': '4.Simple Mortage', 'Stamp Duty': '1% (on the loan amount) subject to a maximum of Rs 40,000/-', 'Registration Fee': '1% (on the loan amount) subject to a maximum of Rs 10,000/-', },
          { 'Categories of Document': '5.Mortage with possession', 'Stamp Duty': '4% on loan amount', 'Registration Fee': '1% subject to the maximum of Rs.2,00,000/-', },
          { 'Categories of Document': '6.Agreement to Sale', 'Stamp Duty': 'Rs.20', 'Registration Fee': '1% on the money advanced(1% on total consideration if possession is given)', },
          { 'Categories of Document': '7.Agreement relating to construction of building', 'Stamp Duty': '1 % on the cost of the proposed construction or the value of construction or the consideration specified in the agreement whichever is higher', 'Registration Fee': '1 % on the cost of the proposed construction or the value of construction or the consideration specified in the agreement whichever is higher', },
          { 'Categories of Document': '8.Cancellation', 'Stamp Duty': 'Rs.50', 'Registration Fee': 'Rs.50', },
          { 'Categories of Document': '9.Partition', 'Stamp Duty': '', 'Registration Fee': '', },
          { 'Categories of Document': 'i)Partition among Family members', 'Stamp Duty': '1% on the market value of the property subject to a maximum of Rs.25000/- for each share', 'Registration Fee': '1% subject to a maximum of Rs.4000/- for each share.', },
          { 'Categories of Document': 'ii)Partition among Non family members', 'Stamp Duty': '4% on the market value of the property for separated shares', 'Registration Fee': '1% on the market value of the property for separated shares', },
          { 'Categories of Document': '10.Power of Attorney', 'Stamp Duty': '', 'Registration Fee': '', },
          { 'Categories of Document': 'i) General Power of Attorney to SELL the immovable property', 'Stamp Duty': 'Rs.100', 'Registration Fee': 'Rs.10,000', },
          { 'Categories of Document': 'ii) General Power of Attorney to SELL the immovable property (Power is given to family member)', 'Stamp Duty': 'Rs.100', 'Registration Fee': 'Rs.1000', },
          { 'Categories of Document': 'iii) General Power of Attorney to SELL the movable property & for other purposes', 'Stamp Duty': 'Rs.100', 'Registration Fee': 'Rs.50', },
          { 'Categories of Document': 'iv) General Power of Attorney given for consideration', 'Stamp Duty': '4% on Consideration', 'Registration Fee': '1% on Consideration or Rs.10,000/- whichever is higher', },
          { 'Categories of Document': '11.Settlement', 'Stamp Duty': '', 'Registration Fee': '', },
          { 'Categories of Document': 'i)In favour of family members', 'Stamp Duty': '1% On the market value of the property but not exceeding Rs.25000/-', 'Registration Fee': '1% on the market value of the property subject to a maximum of Rs.4000/-', },
          { 'Categories of Document': 'ii) Other Cases', 'Stamp Duty': '7%  on the market value of the property', 'Registration Fee': '4% on the Market Value', },
          { 'Categories of Document': '12.Partnership deed', 'Stamp Duty': '', 'Registration Fee': '', },
          { 'Categories of Document': 'i)Where the capital doest not exceed Rs.500', 'Stamp Duty': 'Rs.50', 'Registration Fee': '1% on the Capital invested', },
          { 'Categories of Document': 'ii) Other Cases', 'Stamp Duty': 'Rs.300', 'Registration Fee': '1% on the capital invested', },
          { 'Categories of Document': '13.Memoradum of Deposit of Title Deeds', 'Stamp Duty': '0.5% on loan amount(subject to a maximum of Rs.30000/-)', 'Registration Fee': '1% on loan amount subject to a maximum of Rs 6000/-', },
          { 'Categories of Document': '14.Release', 'Stamp Duty': '', 'Registration Fee': '', },
          { 'Categories of Document': 'i) Release among family members (co - parcenars)', 'Stamp Duty': '1% on the market value of the property but not exceeding Rs.25000/-', 'Registration Fee': '1% on the market value of the property subject to a maximum of Rs.4000/-', },
          { 'Categories of Document': 'ii) Release among non family members (co - owner & benami release)', 'Stamp Duty': '7% on the market value of the property', 'Registration Fee': '1% on the market value of the property', },
          { 'Categories of Document': '15.Lease', 'Stamp Duty': '', 'Registration Fee': '', },
          { 'Categories of Document': 'Lease below 30 years', 'Stamp Duty': '1 %   on the total amount of rent, premium, fine etc', 'Registration Fee': '1% subject to a maximum of Rs.20000/-', },
          { 'Categories of Document': 'Lease upto 99 years', 'Stamp Duty': '4 %  on the total amount of rent, premium, fine etc', 'Registration Fee': '1% subject to a maximum of Rs.20000/-', },
          { 'Categories of Document': 'Lease above 99 years or perpetual Leave', 'Stamp Duty': '7 %  on the total amount of rent, fine, premium of advance, if any, payable.', 'Registration Fee': '1% subject to a maximum of Rs.20000/-', },
          { 'Categories of Document': '16.Declaration of Trust (if property is there, it would be considered as sale)', 'Stamp Duty': 'Rs.180', 'Registration Fee': '1% on the Amount', },
        ]
      },
      {
        'dutycols' :[
        { field: 'Category', header: 'Category', align: 'left !important'},
        { field: 'Registration Fee', header: 'Registration Fee', align: 'left !important'},
        ],
        'header': 'Fees for getting encumbrance certificate for one survey',
        'data': [
          { 'Category': 'E.C. Application fee', 'Registration Fee': 'Rs.1', },
          { 'Category': 'Search Fee for 1st year', 'Registration Fee': 'Rs.30', },
          { 'Category': 'Search fee for every additional year', 'Registration Fee': 'Rs.10', },
          { 'Category': 'Additional Fees in Computerised period ie from 1987', 'Registration Fee': 'Rs.100', },
          { 'Category': 'Urgent EC in Non Computerization period', 'Registration Fee': 'Double the required fee', },
        ]
      },
      {
        'dutycols' :[
        { field: 'Category', header: 'Category', align: 'left !important'},
        { field: 'Registration Fee', header: 'Registration Fee', align: 'left !important'},
        ],
        'header': 'Fees for Certified copies',
        'data': [
          { 'Category': 'Application fees', 'Registration Fee': 'Rs.1', },
          { 'Category': 'Search Fee for 1st year', 'Registration Fee': 'Rs.10', },
          { 'Category': 'Computer Fees', 'Registration Fee': 'Rs.100', },
          { 'Category': 'Copying Fees for copies made by Scanning Machine for the copy of Each Page', 'Registration Fee': 'Rs.10', },
          { 'Category': 'Stamp Duty', 'Registration Fee': 'Rs.20', },

        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
          ],
        'header': 'Fee for Hindu Marriage Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'For the Registration of a Marriage which will be exclusive of any other fees levied by devasthanam for marriages in temples', 'Amount': 'Rs.100', },
          { 'S.No': '2', 'Fee Description': 'For a certified copy of an entry in Hindu Marriage Register', 'Amount': 'Rs.10', },
          { 'S.No': '3', 'Fee Description': 'For making a search ', 'Amount': '', },
          { 'S.No': '', 'Fee Description': 'a) if the entry is of the current', 'Amount': 'Rs.10', },
          { 'S.No': '', 'Fee Description': 'b) if the entry relates to any previous year or years  (for each such year) ', 'Amount': 'Rs.10', },
          { 'S.No': '4', 'Fee Description': 'For Registering a marriage at any place outside the office of the Marriage Registrar to be appropriated by the Marriage Registrar in addition to the fee in entry (1) above', 'Amount': 'Rs.50', },
          { 'S.No': '5', 'Fee Description': 'Application fees for registering a marriage at any place outside the office of the marriage Registrar', 'Amount': 'Rs.200', },
          { 'S.No': '6', 'Fee Description': 'CD Fees', 'Amount': 'Rs.100', },
        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Description', header: 'Description', align: 'left !important'},
          { field: 'Fees', header: 'Fees', align: 'left !important'},
        ],
        'header': 'Document Writers Fee',
        'data': [
          { 'S.No': '1', 'Description': 'When the value specified in the document does not exceed Rs.10,000/-', 'Fees': 'Rs.50', },
          { 'S.No': '2', 'Description': 'When such value exceeds Rs.10,000/- but does not exceed Rs.50,000/-', 'Fees': 'Rs.100', },
          { 'S.No': '3', 'Description': 'When such value exceeds Rs.50,000/- but does not exceeds Rs.1,00,000/-', 'Fees': 'Rs.150', },
          { 'S.No': '4', 'Description': 'When such value exceeds Rs.1,00,000/- but does not exceeds Rs.2,00,000/-', 'Fees': 'Rs.200', },
          { 'S.No': '5', 'Description': 'When such value exceeds Rs.2,00,000/- but does not exceeds Rs.5,00,000/-', 'Fees': 'Rs.300', },
          { 'S.No': '6', 'Description': 'When such value exceeds Rs.5,00,000/-', 'Fees': 'Rs.400', },


          { 'S.No': '1', 'Description': 'Deposit of  title deeds', 'Fees': 'Rs.100', },
          { 'S.No': '2', 'Description': 'Lease deed', 'Fees': 'Rs.100', },
          { 'S.No': '3', 'Description': 'Mortgage deed', 'Fees': 'Rs.100', },
          { 'S.No': '4', 'Description': 'Release deed', 'Fees': 'Rs.100', },
          { 'S.No': '5', 'Description': 'Trust deed', 'Fees': 'Rs.100', },
          { 'S.No': '6', 'Description': 'Partnership deed', 'Fees': 'Rs.100', },


          { 'S.No': '1', 'Description': 'Acknowledgement', 'Fees': 'Rs.50', },
          { 'S.No': '2', 'Description': 'Receipt', 'Fees': 'Rs.50', },
          { 'S.No': '3', 'Description': 'Award', 'Fees': 'Rs.50', },
          { 'S.No': '4', 'Description': 'Cancellation', 'Fees': 'Rs.50', },
          { 'S.No': '5', 'Description': 'Divorce', 'Fees': 'Rs.50', },
          { 'S.No': '6', 'Description': 'Power of Attorny', 'Fees': 'Rs.50', },
          { 'S.No': '7', 'Description': 'Promissory note', 'Fees': 'Rs.50', },
          { 'S.No': '8', 'Description': 'Agreement', 'Fees': 'Rs.50', },


          { 'S.No': '1', 'Description': 'When the document involves not more than two schedule', 'Fees': 'Rs.200', },
          { 'S.No': '2', 'Description': 'When the document involves more than two schedules, fee for each schedule', 'Fees': 'Rs.100', },
          { 'S.No': '3', 'Description': 'Maximum fees', 'Fees': 'Rs.500', },


        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
        ],
        'header': 'Fee for TamilNadu Marriage Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'For the Registration of a Marriage, if memorandam is presented for registration within a period of 90 days from the Date of Marriage', 'Amount': 'Rs.100', },
          { 'S.No': '2', 'Fee Description': 'For the Registration of a Marriage, if memorandam is presented for registration within a further period of 60 days after the expiry of the period of 90 days', 'Amount': 'Rs.150', },
          { 'S.No': '3', 'Fee Description': 'For the Registration of a Marriage, if memorandam is presented for registration after 150 days', 'Amount': 'Rs.1150', },
          { 'S.No': '4', 'Fee Description': 'For a certified copy', 'Amount': 'Rs.10', },
          { 'S.No': '5', 'Fee Description': 'For making a search ', 'Amount': '', },
          { 'S.No': '', 'Fee Description': 'a) if the entry is of the current', 'Amount': 'Rs.15', },
          { 'S.No': '', 'Fee Description': 'b) if the entry relates to any previous year or years (for each such year) ', 'Amount': 'Rs.5', },
          { 'S.No': '6', 'Fee Description': 'CD Fees', 'Amount': 'Rs.100', },
          { 'S.No': '7', 'Fee Description': 'For a certified copy of an entry in Tamil Nadu Marriage Register (Per Page)', 'Amount': 'Rs.10', },
        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
        ],
        'header': 'Fee for Special Marriage Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'For every notice of intended marriage or application for the registration of a marriage', 'Amount': 'Rs.3', },
          { 'S.No': '2', 'Fee Description': 'For solemnizing or registering a marriage', 'Amount': 'Rs.10', },
          { 'S.No': '3', 'Fee Description': 'For a certified copy of an entry in Special Marriage Register  (Per Page)', 'Amount': 'Rs.2', },
          { 'S.No': '4', 'Fee Description': 'For making a search ', 'Amount': '', },
          { 'S.No': '', 'Fee Description': 'a) if the entry is of the current', 'Amount': 'Rs. 0.5', },
          { 'S.No': '', 'Fee Description': 'b) if the entry relates to any previous year or years  (for each such year)', 'Amount': 'Rs.1', },
          { 'S.No': '5', 'Fee Description': 'For solemnizing a marriage at any place outside the office of the Marriage officer in addition to the fee in entry 2', 'Amount': 'Rs.15', },
          { 'S.No': '6', 'Fee Description': 'CD Fees (During Marriage solemnization/ Registration)', 'Amount': 'Rs.100', },
        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
        ],
        'header': 'Fee for Christian Marriage Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'For a certified copy of an entry in Christian Marriage', 'Amount': 'Rs.10', },
          { 'S.No': '2', 'Fee Description': 'For making a search', 'Amount': '', },
          { 'S.No': '', 'Fee Description': 'a) if the entry is of the current', 'Amount': 'Rs.10', },
          { 'S.No': '', 'Fee Description': 'b) if the entry relates to any previous year or years  (for each such year)', 'Amount': 'Rs.10', },
          { 'S.No': '3', 'Fee Description': 'Application Fees (Court Fee Label)', 'Amount': 'Rs.10', },
        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
        ],
        'header': 'Fee for Birth and Death Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'Application Fees (Court Fees Stamp)', 'Amount': 'Rs.5', },
          { 'S.No': '2', 'Fee Description': 'Search for a single entry in the first year for which the search is made', 'Amount': 'Rs.100', },
          { 'S.No': '3', 'Fee Description': 'For every additional year for which the search is continued', 'Amount': 'Rs.100', },
          { 'S.No': '4', 'Fee Description': 'For granting extract relating to each birth or death', 'Amount': 'Rs.200', },
          { 'S.No': '5', 'Fee Description': 'For every additional copies of extract', 'Amount': 'Rs.200', },
          { 'S.No': '6', 'Fee Description': 'For granting non availability certificate', 'Amount': 'Rs.100', },
        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
        ],
        'header': 'Fee for Firm Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'Filing of statement under section 58( Apply for registration)', 'Amount': 'Rs.200', },
          { 'S.No': '2', 'Fee Description': 'Filing of statement under section 60 (Change of address/firm name)', 'Amount': 'Rs.50', },
          { 'S.No': '3', 'Fee Description': 'For intimation under section 61(Closing and opening of branches)', 'Amount': 'Rs.50', },
          { 'S.No': '4', 'Fee Description': 'For intimation under section 62 (Change in name/address of the partners)', 'Amount': 'Rs.50', },
          { 'S.No': '5', 'Fee Description': 'For notice under section 63 (Dissolution /withdrawal of minor)', 'Amount': 'Rs.50', },
          { 'S.No': '6', 'Fee Description': 'Application under section 64 (Rectification of mistakes)', 'Amount': 'Rs.50', },
          { 'S.No': '7', 'Fee Description': 'Inspection of register of firms under sub section 2 of section 66 (For each Firm in the register)', 'Amount': 'Rs.25', },
          { 'S.No': '8', 'Fee Description': 'Inspection of document relating a firm under sub section 2 of section 66 (For all documents relating to one Firm)', 'Amount': 'Rs.50', },
          { 'S.No': '9', 'Fee Description': 'Copies from the register of firms', 'Amount': 'Rs.10', },
        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
        ],
        'header': 'Fee for Chit Fund Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'For the application for previous sanction to commence or conduct a chit under sub-section (2) of Section 4.', 'Amount': '', },
          { 'S.No': '', 'Fee Description': 'a) When the duration of the chit does not extend beyond a year', 'Amount': 'Rs.20/- per ticket or instalment whichever is higher subject to a minimum of Rs.500/-', },
          { 'S.No': '', 'Fee Description': 'b) When the duration of the chit extends beyond a year', 'Amount': '', },
          { 'S.No': '', 'Fee Description': '(1)When the chit amount does not exceed Rs.5,000/-', 'Amount': 'Rs.30/- per ticket or instalment whichever is higher subject to a minimum of Rs.500/-', },
          { 'S.No': '', 'Fee Description': '(2) When the chit amount exceeds Rs. 5,000/- but does not exceed Rs. 10,000/-', 'Amount': 'Rs.50/-per ticket or instalment whichever is higher subject to a minimum of Rs.800/-', },
          { 'S.No': '', 'Fee Description': '(3) When the chit amount exceeds Rs.10,000/- but does not exceed Rs. 20,000/-', 'Amount': 'Rs.80/- per ticket or instalment whichever is higher subject to a minimum of Rs.1200/-', },
          { 'S.No': '', 'Fee Description': '(4) When the chit amount exceeds Rs.20,000/- but does not exceed Rs. 30,000/-', 'Amount': 'Rs.120/- per ticket or instalment whichever is higher subject to a minimum of Rs.1600/', },
          { 'S.No': '', 'Fee Description': '(5) When the chit amount exceeds Rs.30,000/- but does not exceed Rs. 40,000/-', 'Amount': 'Rs.160/- per ticket or instalment whichever is higher subject to a minimum of Rs.2000/-', },
          { 'S.No': '', 'Fee Description': '(6) When the chit amount exceeds Rs.40,000/- but does not exceed Rs. 50,000/-', 'Amount': 'Rs.200/- per ticket or instalment whichever is higher subject to a minimum of Rs.2500/-', },
          { 'S.No': '', 'Fee Description': '(7) When the chit amount exceeds Rs. 50,000/- but does not exceed Rs. 1,00,000/-', 'Amount': 'Rs.250/- per ticket or instalment whichever is higher subject to a minimum of Rs.3000/-', },
          { 'S.No': '', 'Fee Description': '(8) When the chit amount exceeds Rs. 1,00,000/- but does not exceed Rs. 2,00,000/-', 'Amount': 'Rs.300/- per ticket or instalment whichever is higher subject to minimum of Rs.3500/-', },
          { 'S.No': '', 'Fee Description': '(9) When the Chit amount exceeds Rs.2,00,000/-', 'Amount': 'Rs.350/- per ticket or instalment whichever is higher subject to minimum of Rs.4000/-', },
          { 'S.No': '2', 'Fee Description': 'For filing the chit agreement with the Registrar and the Registration of chit under Section 7', 'Amount': 'Rs.100', },
          { 'S.No': '3', 'Fee Description': 'For filing the declaration with the Registrar and the grant of a certificate of commencement under sub-Section (1) of Section 9For filing the declaration with the Registrar and the grant of a certificate of commencement under sub-Section (1) of Section 9For filing the declaration with the Registrar and the grant of a certificate of commencement under sub-Section (1) of Section 9.', 'Amount': 'Rs.60', },
          { 'S.No': '4', 'Fee Description': 'For filing the certificate under sub-Section (2) of Section 10 -- ( Form 7, Letter about Agreement copy furnished to the subscribers)', 'Amount': 'Rs.50', },
          { 'S.No': '5', 'Fee Description': 'For filing a copy of the minutes of the proceedings under Section 18.', 'Amount': 'Rs.50', },
          { 'S.No': '6', 'Fee Description': 'For filing the audited balance sheet under Section 24-', 'Amount': '', },
          { 'S.No': '', 'Fee Description': '(a) When the aggregate chit amount of chits covered by the balance sheet does not exceed Rs.5,000/-', 'Amount': 'Rs.200', },
          { 'S.No': '', 'Fee Description': '(b) When such amount exceeds Rs.5000/- but does not exceed Rs.10,000-', 'Amount': 'Rs.500', },
          { 'S.No': '', 'Fee Description': '(c) When such amount exceeds Rs.10,000/- but does not exceed Rs.20,000/-', 'Amount': 'Rs.800', },
          { 'S.No': '', 'Fee Description': '(d)When such amount exceeds Rs. 20,000/- but does not exceed Rs.30,000/-', 'Amount': 'Rs.1000', },
          { 'S.No': '', 'Fee Description': '(e)When such amount exceeds Rs. 30,000/- but does not exceed Rs. 40,000/-', 'Amount': 'Rs.1200', },
          { 'S.No': '', 'Fee Description': '(f)When such amount exceeds Rs. 40,000/-', 'Amount': 'Rs.1500', },
          { 'S.No': '7', 'Fee Description': 'For the application for extension of time for filing the declaration under sub-Section (3) of Section 7', 'Amount': 'Rs.500', },
          { 'S.No': '8', 'Fee Description': 'For the application to offer as security the immovable property under sub-rule (5) of rule 18', 'Amount': '', },
          { 'S.No': '', 'Fee Description': '(i) situated outside the jurisdiction of the Registrar but within the State.', 'Amount': 'Rs.400', },
          { 'S.No': '', 'Fee Description': '(ii) situated outside the State.', 'Amount': 'Rs.1000', },
          { 'S.No': '', 'Fee Description': '(iii) for inspecting the immovable property offered as security under Section 20 to fix value of the property by the Deputy Registrar of chits.', 'Amount': 'Rs.1000', },
          { 'S.No': '9', 'Fee Description': 'for the application for permission to substitute the security during the currency of the chit under sub-Section (3) of Section 20.', 'Amount': 'Rs.1000', },
          { 'S.No': '10', 'Fee Description': 'for the application for the prior approval of the Registrar to open a new place of business under sub-Section (1) of Section 19.', 'Amount': 'Rs.1000', },
          { 'S.No': '11', 'Fee Description': 'for the application for extension of time to file copies of documents under Section 75.', 'Amount': 'Rs.600', },
          { 'S.No': '12', 'Fee Description': 'for the application to award compensation against frivolous or vexatious petition for winding up of chit under sub-section (1) of Section 58.', 'Amount': 'Rs.250', },
          { 'S.No': '13', 'Fee Description': 'For Filing a copy of each entry relating to the removal of defaulting subscriber under sub-section (3) of Section 28.', 'Amount': 'Rs.100', },
          { 'S.No': '14', 'Fee Description': 'For Filing a copy of each entry relating to the substitution of a subscriber under sub-section (2) of Section 29.', 'Amount': 'Rs.100', },
          { 'S.No': '15', 'Fee Description': 'For Filing a copy of entry relating to transfer of the rights of Foreman under Section 37', 'Amount': 'Rs.100', },
          { 'S.No': '16', 'Fee Description': 'For Filing a copy of entry, relating to transfer of non-prized subscriber"s right under Section 37.', 'Amount': 'Rs.100', },
          { 'S.No': '17', 'Fee Description': 'For Filing a copy of assent of all non- prized and unpaid prized subscribers for withdrawal of a foreman of chit under Section 41.', 'Amount': 'Rs.100', },
          { 'S.No': '18', 'Fee Description': 'For Filing a copy of consent of all non- prized and unpaid prized subscribers to the termination of Chit under Section 41.', 'Amount': 'Rs.100', },
          { 'S.No': '19', 'Fee Description': 'For application for winding up of Chit-', 'Amount': '', },
          { 'S.No': '', 'Fee Description': '(a) When the chit amount does not exceed Rs.5,000/-', 'Amount': 'Rs.400', },
          { 'S.No': '', 'Fee Description': '(b) When the chit amount exceeds Rs. 5,000/-', 'Amount': 'Rs.800', },
          { 'S.No': '20', 'Fee Description': 'For inspection of one or more records relating to a chit under Section 62 for each inspection.', 'Amount': 'Rs.100', },
          { 'S.No': '21', 'Fee Description': 'For every 100 words or part thereof of a copy or extract of the records relating to a chit furnished under Section 64.', 'Amount': 'Rs.20', },
          
        ]
      },
      {
        'dutycols' :[
          { field: 'S.No', header: 'S.No', align: 'left !important'},
          { field: 'Fee Description', header: 'Fee Description', align: 'left !important'},
          { field: 'Amount', header: 'Amount', align: 'left !important'},
        ],
        'header': 'Fee for Society Registration',
        'data': [
          { 'S.No': '1', 'Fee Description': 'For Registration of a society', 'Amount': 'Rs.4000', },
          { 'S.No': '2', 'Fee Description': 'For filing of any document during the first financial year of the society.', 'Amount': 'Rs.200', },
          { 'S.No': '3', 'Fee Description': 'For filing of any document from the second financial year of the society,-', 'Amount': '', },
          { 'S.No': '', 'Fee Description': 'a) when the annual receipt or expenditure of the society during the preceding financial year does not exceed one lakh rupees;', 'Amount': 'Rs.100', },
          { 'S.No': '', 'Fee Description': 'b) when the annual receipt or expenditure of the society during the preceding financial year exceeds one lakh rupees but does not exceed five lakh rupees;', 'Amount': 'Rs.200', },
          { 'S.No': '', 'Fee Description': 'c) when the annual receipt or expenditure of the society during the preceding financial year exceeds five lakh rupees but does not exceeds ten lakh rupees;', 'Amount': 'Rs.300', },
          { 'S.No': '', 'Fee Description': 'd) when the annual receipt or expenditure of the society during the preceding financial year exceeds ten lakh rupees but does not exceed fifteen lakh rupees;', 'Amount': 'Rs.400', },
          { 'S.No': '', 'Fee Description': 'e) when the annual receipt or expenditure of the society during the preceding financial year exceeds fifteen lakh rupees but does not exceed twenty lakh rupees;', 'Amount': 'Rs.500', },
          { 'S.No': '', 'Fee Description': 'f) when the annual receipt or expenditure of the society during the preceding financial year exceeds twenty lakh rupees;', 'Amount': 'Rs.600', },
          { 'S.No': '4', 'Fee Description': 'For every inspection of documents (whether one or more) in the custody of the registrar relating to one and the same society', 'Amount': 'Rs.400', },
          { 'S.No': '5', 'Fee Description': 'For issue of certificate of registration or certificate of registration on change of name', 'Amount': 'Rs.500', },
          { 'S.No': '6', 'Fee Description': 'For every copy or extract of any document in the custody of the registrar', 'Amount': 'Rs.20 per page', },
          { 'S.No': '7', 'Fee Description': 'For a  search of documents referred to in items 4 to 6. if the year of registration of the society is not given in the application', 'Amount': 'Rs.200', },
          { 'S.No': '8', 'Fee Description': '', 'Amount': 'Rs.200', },
        ]
      }
    ]
  }

}
