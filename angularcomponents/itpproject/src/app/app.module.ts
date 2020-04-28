import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { MenuComponent } from './menu/menu.component';
import { AaWaitComponent } from './aa-wait/aa-wait.component';
import { ItpAdvisorAssignComponent } from './itp-advisor-assign/itp-advisor-assign.component';
import { RegistrationFailureComponent } from './registration-failure/registration-failure.component';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { ItpAdvisorAssignedComponent } from './itp-advisor-assigned/itp-advisor-assigned.component';
import { ItpAdvisorComponent } from './itp-advisor/itp-advisor.component';
import { DownloadReferenceComponent } from './download-reference/download-reference.component';
import { RedownloadReferenceComponent } from './redownload-reference/redownload-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent,
    MenuComponent,
    AaWaitComponent,
    ItpAdvisorAssignComponent,
    RegistrationFailureComponent,
    RegistrationCompleteComponent,
    ItpAdvisorAssignedComponent,
    ItpAdvisorComponent,
    DownloadReferenceComponent,
    RedownloadReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
