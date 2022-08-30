import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EcSearchAndApplyCCComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-search-and-apply-cc/ec-search-and-apply-cc.component';
import { EcViewECComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-view-ec/ec-view-ec.component';
import { MarriageRegistrationComponent } from './Forms-Module/Registration/marriage-registration/marriage-registration.component';
import { EcRequestListComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-request-list/ec-request-list.component';
import { CircularsComponent } from './circulars/circulars.component';
import { FirmRegistartionComponent } from './Forms-Module/Registration/firm-registartion/firm-registartion.component';
import { AdjudicationRequestListComponent } from './Forms-Module/Registration/Adjudication-Registration/adjudication-request-list/adjudication-request-list.component';
import { CcBirthDeathComponent } from './Forms-Module/E-Services/certified-copy/cc-birth-death/cc-birth-death.component';
import { CcSearchAndApplyCcComponent } from './Forms-Module/E-Services/certified-copy/cc-search-and-apply-cc/cc-search-and-apply-cc.component';
import { CcRequestListComponent } from './Forms-Module/E-Services/certified-copy/cc-request-list/cc-request-list.component';
import { ViewTokenAvailabilityComponent } from './Forms-Module/E-Services/view-token-availability/view-token-availability.component';
import { PublicUtilityFormsComponent } from './public-utility-forms/public-utility-forms.component';
import { SocietyRegistrationComponent } from './Forms-Module/Registration/society-registration/society-registration.component';
import { GuidelineValueComponent } from './guideline-value/guideline-value.component';
import { UserManualComponent } from './user-manual/user-manual.component';
import { TellMeHowComponent } from './tell-me-how/tell-me-how.component';
import { KnowYourJurisdictionComponent } from './know-your-jurisdiction/know-your-jurisdiction.component';
import { CitizenCharterComponent } from './citizen-charter/citizen-charter.component';
import { DutyAndFeesComponent } from './duty-and-fees/duty-and-fees.component';
import { PWDCalculatorComponent } from './Forms-Module/Others/pwd-calculator/pwd-calculator.component';
import { LoginComponent } from './login/login.component';
import { RestAPIService } from './Services/restAPI.service';

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
    EcRequestListComponent,
    CircularsComponent,
    FirmRegistartionComponent,
    SocietyRegistrationComponent,
    CcRequestListComponent,
    AdjudicationRequestListComponent,
    CcSearchAndApplyCcComponent,
    DutyAndFeesComponent,    
    CcBirthDeathComponent,
    ViewTokenAvailabilityComponent,
    PublicUtilityFormsComponent,
    GuidelineValueComponent,
    UserManualComponent,
    TellMeHowComponent,
    KnowYourJurisdictionComponent,
    CitizenCharterComponent,
    PWDCalculatorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    AccordionModule,
    TableModule,
    TabViewModule,
    SidebarModule,
    MenuModule,
    CheckboxModule,
    OverlayPanelModule,
    ],
  providers: [RestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
