import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cc-search-and-apply-cc',
  templateUrl: './cc-search-and-apply-cc.component.html',
  styleUrls: ['./cc-search-and-apply-cc.component.scss']
})
export class CcSearchAndApplyCcComponent implements OnInit {

  activeTabIndex: any;
  docType: any;
  docOptions: SelectItem[] = [];
  subregOfce: any;
  subregOptions: SelectItem[] = [];
  year: any;
  yearOptions: SelectItem[] = [];
  bookNo: any;
  bookOptions: SelectItem[] = [];
  docNumber: any;
  typeCaptcha: any;

  constructor() { }

  ngOnInit(): void {
  }

}
