import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  items: MenuItem[] = [];
  isLoggedIn: boolean = false;
  showOverlay: boolean = false;
  constructor(private _authService: AuthService) {
    this._authService.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
    });
   }

  ngOnInit(): void {
    this.items = [{
      label: 'Registration', icon: 'fa fa-user-circle',
      items: [
        { label: 'Marriage Registration', icon: 'pi pi-fw pi-plus',
        routerLink: '/marriage-registration', command: ()=> this.display = false },
        { label: 'Firm Registration', icon: 'pi pi-fw pi-download',
        routerLink: '/firm-registration', command: ()=> this.display = false  },
        { label: 'Society Registration', icon: 'pi pi-fw pi-download',
        routerLink: '/society-registration', command: ()=> this.display = false  },
        { label: 'Adjudication  Registration', icon: 'pi pi-fw pi-download',
        routerLink: '/adjudication-request-list', command: ()=> this.display = false  },
      ]
    },
    {
      label: 'E-Services', icon: 'pi pi-fw pi-user-plus',
      items: [
        { label: 'View Token Availability', icon: 'pi pi-fw pi-user-plus',
        routerLink: '/token-availability', command: ()=> this.display = false },
        { label: 'Encumbrance Certificate', icon: 'pi pi-fw pi-user-minus',
          items: [
            { label: 'Request List', routerLink: '/encumbrance-request-list', command: ()=> this.display = false },
            { label: 'Search and Apply EC', routerLink: '/encumbrance-search', command: ()=> this.display = false },
            { label: 'View EC', routerLink: '/encumbrance-viewEC', command: ()=> this.display = false }
          ]
        },
        { label: 'Certified copy', icon: 'pi pi-fw pi-user-minus',
        items: [
          { label: 'Request List', routerLink: '/cc-request-list', command: ()=> this.display = false },
          { label: 'Birth/Death', routerLink: '/cc-birth-death', command: ()=> this.display = false },
          { label: 'Search and Apply CC', routerLink: '/cc-search-apply', command: ()=> this.display = false },
        ] }
      ]
    },
    {
      label: 'Others', icon: 'pi pi-fw pi-user-plus',
      items: [
        { label: 'Circular', icon: 'pi pi-fw pi-user-plus', routerLink: '/circular', command: ()=> this.display = false },
        { label: 'Guideline Value', icon: 'pi pi-fw pi-user-minus', routerLink: '/guideline-value', command: ()=> this.display = false }
      ]
    },
    {
      label: 'Help', icon: 'pi pi-fw pi-user-plus',
      items: [
        { label: 'User Manual', icon: 'pi pi-fw pi-user-plus',
        routerLink: '/user-manual', command: ()=> this.display = false },
        { label: 'Tell Me How', icon: 'pi pi-fw pi-user-minus',
        routerLink: '/tell-me-how', command: ()=> this.display = false},
        { label: 'Portal Utility Service', 
        items: [
          { label: 'Public Utility form', routerLink: '/public-utility', command: ()=> this.display = false},
          { label: 'Know your Jurisdiction', routerLink: '/jurdication', command: ()=> this.display = false },
          { label: 'PWD Calculator', routerLink: '/pwd-calculator', command: ()=> this.display = false }
        ]
      },
      { label: 'Duty and Fees', routerLink: '/duty-and-fees', command: ()=> this.display = false },
      ]
    },
    {
      label: 'More',
      items: [
        { label: 'Citizen Charter', routerLink: '/citizen-charter', command: ()=> this.display = false },
        {
          label: 'Logout', icon: 'pi pi-fw pi-sign-out', command: () => this.onLogout()
        }
      ]
    },
    ];
  }

  onLogout() {
    this._authService.logout();
    this.display = false;
  }

  toggleMenu() {
    this.display = !this.display;
  }

}
