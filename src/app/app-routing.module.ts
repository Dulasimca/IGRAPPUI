import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircularsComponent } from './circulars/circulars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcRequestListComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-request-list/ec-request-list.component';
import { CcRequestListComponent } from './E-Services/certified-copy/cc-request-list/cc-request-list.component';
import { EcSearchAndApplyCCComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-search-and-apply-cc/ec-search-and-apply-cc.component';
import { EcViewECComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-view-ec/ec-view-ec.component';
import { FirmRegistartionComponent } from './Forms-Module/Registration/firm-registartion/firm-registartion.component';
import { AdjudicationRequestListComponent } from './Forms-Module/Registration/Adjudication-Registration/adjudication-request-list/adjudication-request-list.component';
import { MarriageRegistrationComponent } from './Forms-Module/Registration/marriage-registration/marriage-registration.component';
import { CcSearchAndApplyCcComponent } from './E-Services/certified-copy/cc-search-and-apply-cc/cc-search-and-apply-cc.component';
import { ViewTokenAvailabilityComponent } from './Forms-Module/E-Services/view-token-availability/view-token-availability.component';
import { SocietyRegistrationComponent } from './Forms-Module/Registration/society-registration/society-registration.component';
import { GuidelineValueComponent } from './guideline-value/guideline-value.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'encumbrance-search', component: EcSearchAndApplyCCComponent },
  { path: 'encumbrance-viewEC', component: EcViewECComponent },
  { path: 'encumbrance-request-list', component: EcRequestListComponent },
  { path: 'circular', component: CircularsComponent },
  { path: 'firm-registration', component: FirmRegistartionComponent},
  { path: 'societ-registration', component: SocietyRegistrationComponent},
  { path: 'request-list', component: CcRequestListComponent},
  { path: 'marriage-registration', component: MarriageRegistrationComponent },
  { path: 'ad-request-list', component: AdjudicationRequestListComponent },
  { path: 'cc-search-apply', component: CcSearchAndApplyCcComponent },
  { path: 'token-availability', component: ViewTokenAvailabilityComponent },
  { path: 'cc-search-apply', component: CcSearchAndApplyCcComponent },
  { path: 'guideline-value', component: GuidelineValueComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
