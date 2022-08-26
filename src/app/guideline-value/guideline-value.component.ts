import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-guideline-value',
  templateUrl: './guideline-value.component.html',
  styleUrls: ['./guideline-value.component.scss']
})
export class GuidelineValueComponent implements OnInit {
  list: any[] = [];
  showSearch: boolean = false;
  fromDate: any;
  toDate: any;
  selectedValue: string = '0';
  zoneOptions: SelectItem[] = [];
  zone: any;
  subRegistrarOptions: SelectItem[] = [];
  subRegistrar: any;
  registrationVillageOptions: SelectItem[] = [];
  registrationVillage: any;
  constructor() { }

  ngOnInit(): void {
    this.list = [
      { 'title': 'From 9-6-2017', 'fdate': '9-6-2017', 'tdate': '' },
      { 'title': 'From 1-4-2012 To 8-6-2017', 'fdate': '1-4-2012', 'tdate': '8-6-2017' },
      { 'title': 'From 10-4-2012 To 8-6-2018', 'fdate': '10-4-2012', 'tdate': '8-6-2018' },
      { 'title': 'From 10-4-2014 To 8-6-2019', 'fdate': '10-4-2014', 'tdate': '8-6-2019' },
    ]
  }

  onShowSearch(data: any) {
    this.showSearch = true;
    this.fromDate = data.fdate;
    this.toDate = data.tdate;
  }

}
