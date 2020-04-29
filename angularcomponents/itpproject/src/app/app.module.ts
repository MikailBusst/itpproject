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
import { RetrieveEmailComponent } from './retrieve-email/retrieve-email.component';
import { RetrieveOtpComponent } from './retrieve-otp/retrieve-otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResubmitDocumentsComponent } from './resubmit-documents/resubmit-documents.component';
import { SignupComponent } from './signup/signup.component';
import { SubmitDocumentsComponent } from './submit-documents/submit-documents.component';
import { SubmitAppendixAComponent } from './submit-appendix-a/submit-appendix-a.component';
import { DisclaimerVerificationComponent } from './disclaimer-verification/disclaimer-verification.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

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
    RedownloadReferenceComponent,
    RetrieveEmailComponent,
    RetrieveOtpComponent,
    ResetPasswordComponent,
    ResubmitDocumentsComponent,
    SignupComponent,
    SubmitDocumentsComponent,
    SubmitAppendixAComponent,
    DisclaimerVerificationComponent,
    StudentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
