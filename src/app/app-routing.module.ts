import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircularsComponent } from './circulars/circulars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcRequestListComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-request-list/ec-request-list.component';
import { EcSearchAndApplyCCComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-search-and-apply-cc/ec-search-and-apply-cc.component';
import { EcViewECComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-view-ec/ec-view-ec.component';
import { FirmRegistartionComponent } from './Forms-Module/Registration/firm-registartion/firm-registartion.component';
import { AdjudicationRequestListComponent } from './Forms-Module/Registration/Adjudication-Registration/adjudication-request-list/adjudication-request-list.component';
import { MarriageRegistrationComponent } from './Forms-Module/Registration/marriage-registration/marriage-registration.component';
import { CcBirthDeathComponent } from './Forms-Module/E-Services/certified-copy/cc-birth-death/cc-birth-death.component';
import { CcSearchAndApplyCcComponent } from './Forms-Module/E-Services/certified-copy/cc-search-and-apply-cc/cc-search-and-apply-cc.component';
import { CcRequestListComponent } from './Forms-Module/E-Services/certified-copy/cc-request-list/cc-request-list.component';
import { ViewTokenAvailabilityComponent } from './Forms-Module/E-Services/view-token-availability/view-token-availability.component';
import { SocietyRegistrationComponent } from './Forms-Module/Registration/society-registration/society-registration.component';
import { GuidelineValueComponent } from './guideline-value/guideline-value.component';
import { UserManualComponent } from './user-manual/user-manual.component';
import { TellMeHowComponent } from './tell-me-how/tell-me-how.component';
import { PublicUtilityFormsComponent } from './public-utility-forms/public-utility-forms.component';
import { KnowYourJurisdictionComponent } from './know-your-jurisdiction/know-your-jurisdiction.component';
import { CitizenCharterComponent } from './citizen-charter/citizen-charter.component';
import { DutyAndFeesComponent } from './duty-and-fees/duty-and-fees.component';
import { PWDCalculatorComponent } from './Forms-Module/Others/pwd-calculator/pwd-calculator.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'encumbrance-search', component: EcSearchAndApplyCCComponent },
  { path: 'encumbrance-viewEC', component: EcViewECComponent },
  { path: 'encumbrance-request-list', component: EcRequestListComponent },
  { path: 'circular', component: CircularsComponent },
  { path: 'firm-registration', component: FirmRegistartionComponent},
  { path: 'society-registration', component: SocietyRegistrationComponent},
  { path: 'cc-request-list', component: CcRequestListComponent},
  { path: 'marriage-registration', component: MarriageRegistrationComponent },
  { path: 'adjudication-request-list', component: AdjudicationRequestListComponent },
  { path: 'duty-and-fees', component: DutyAndFeesComponent },
  { path: 'cc-birth-death', component: CcBirthDeathComponent},
  { path: 'token-availability', component: ViewTokenAvailabilityComponent },
  { path: 'guideline-value', component: GuidelineValueComponent },
  { path: 'user-manual', component: UserManualComponent},
  { path: 'tell-me-how', component: TellMeHowComponent},
  { path: 'cc-search-apply', component: CcSearchAndApplyCcComponent },
  { path: 'public-utility', component: PublicUtilityFormsComponent },
  { path: 'jurdication', component: KnowYourJurisdictionComponent },
  { path: 'citizen-charter', component: CitizenCharterComponent },
  { path: 'pwd-calculator', component: PWDCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
