import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CcRequestListComponent } from './E-Services/certified-copy/cc-request-list/cc-request-list.component';
import { EcSearchAndApplyCCComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-search-and-apply-cc/ec-search-and-apply-cc.component';
import { EcViewECComponent } from './Forms-Module/E-Services/Encumbrance-Certificate/ec-view-ec/ec-view-ec.component';
import { FirmRegistartionComponent } from './Forms-Module/Registration/firm-registartion/firm-registartion.component';
import { SocietyRegistrationComponent } from './Registration/society-registration/society-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'encumbrance-search', component: EcSearchAndApplyCCComponent },
  { path: 'encumbrance-viewEC', component: EcViewECComponent },
  { path: 'firm-registration', component: FirmRegistartionComponent},
  { path: 'societ-registration', component: SocietyRegistrationComponent},
  { path: 'request-list', component: CcRequestListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
