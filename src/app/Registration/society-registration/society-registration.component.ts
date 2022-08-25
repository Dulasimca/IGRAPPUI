import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-society-registration',
  templateUrl: './society-registration.component.html',
  styleUrls: ['./society-registration.component.scss']
})
export class SocietyRegistrationComponent implements OnInit {

  appNum: any;
  status: any;
  statusOptions: SelectItem [] = [];
  requestDate: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
