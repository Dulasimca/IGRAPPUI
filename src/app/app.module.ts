import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EcSearchAndApplyCCComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-search-and-apply-cc/ec-search-and-apply-cc.component';
import { EcViewECComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-view-ec/ec-view-ec.component';
import { MarriageRegistrationComponent } from './Forms-Module/Registration/marriage-registration/marriage-registration.component';
import { FirmRegistartionComponent } from './Forms-Module/Registration/firm-registartion/firm-registartion.component';
import { SocietyRegistrationComponent } from './Registration/society-registration/society-registration.component';
import { CcRequestListComponent } from './E-Services/certified-copy/cc-request-list/cc-request-list.component';
import { AdjudicationRequestListComponent } from './Forms-Module/Registration/Adjudication-Registration/adjudication-request-list/adjudication-request-list.component';
import { CcSearchAndApplyCcComponent } from './E-Services/certified-copy/cc-search-and-apply-cc/cc-search-and-apply-cc.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    EcSearchAndApplyCCComponent,
    EcViewECComponent,
    MarriageRegistrationComponent,
    FooterComponent,
    FirmRegistartionComponent,
    SocietyRegistrationComponent,
    CcRequestListComponent,
    AdjudicationRequestListComponent,
    CcSearchAndApplyCcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
