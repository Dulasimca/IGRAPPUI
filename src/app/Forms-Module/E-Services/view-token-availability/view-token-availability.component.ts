import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-view-token-availability',
  templateUrl: './view-token-availability.component.html',
  styleUrls: ['./view-token-availability.component.scss']
})
export class ViewTokenAvailabilityComponent implements OnInit {

  appDate: any;
  subregOfce: any;
  subregOptions: SelectItem [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
