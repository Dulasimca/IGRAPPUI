import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-firm-registartion',
  templateUrl: './firm-registartion.component.html',
  styleUrls: ['./firm-registartion.component.scss']
})
export class FirmRegistartionComponent implements OnInit {

  appNum: any;
  status: any;
  statusOptions: SelectItem [] = [];
  createdDate: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
