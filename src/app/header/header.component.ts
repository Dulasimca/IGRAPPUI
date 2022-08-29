import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Registration',
      items: [
          {label: 'Marriage Registration', icon: 'pi pi-fw pi-plus'},
          {label: 'Firm Registration', icon: 'pi pi-fw pi-download'},
          {label: 'Society Registration', icon: 'pi pi-fw pi-download'},
          {label: 'Adjudication  Registration', icon: 'pi pi-fw pi-download'},
      ]
  },
  {
      label: 'E-Services',
      items: [
          {label: 'View Token Availability', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Encumbrance Certificate', icon: 'pi pi-fw pi-user-minus'},
          {label: 'Certified copy', icon: 'pi pi-fw pi-user-minus'}
      ]
  },
  {
    label: 'Others',
    items: [
        {label: 'Circular', icon: 'pi pi-fw pi-user-plus'},
        {label: 'Guideline Value', icon: 'pi pi-fw pi-user-minus'}
    ]
},
{
  label: 'Help',
  items: [
      {label: 'User Manual', icon: 'pi pi-fw pi-user-plus'},
      {label: 'Tell Me How', icon: 'pi pi-fw pi-user-minus'}
  ]
}
];
  }

  toggleMenu() {
    this.display = !this.display;
  }

}
