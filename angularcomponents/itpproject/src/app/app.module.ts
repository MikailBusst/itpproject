import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
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
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { EditCompanyRegistrationComponent } from './edit-company-registration/edit-company-registration.component';
import { LoginComponent } from './login/login.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { AaApproveComponent } from './aa-approve/aa-approve.component';

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
    StudentRegistrationComponent,
    CompanyRegistrationComponent,
    EditCompanyRegistrationComponent,
    LoginComponent,
    StudentTableComponent,
    AaApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'disclaimer',
        component: DisclaimerComponent
      },
      {
        path: 'aa_wait',
        component: AaWaitComponent
      },
      {
        path: 'itp_advisor_assign',
        component: ItpAdvisorAssignComponent
      },
      {
        path: 'registration_failure',
        component: RegistrationFailureComponent
      },
      {
        path: 'registration_complete',
        component: RegistrationCompleteComponent
      },
      {
        path: 'itp_advisor_assigned',
        component: ItpAdvisorAssignedComponent
      },
      {
        path: 'itp_advisor',
        component: ItpAdvisorComponent
      },
      {
        path: 'download_reference',
        component: DownloadReferenceComponent
      },
      {
        path: 'redownload_reference',
        component: RedownloadReferenceComponent
      },
      {
        path: 'retrieve_email',
        component: RetrieveEmailComponent
      },
      {
        path: 'retrieve_otp',
        component: RetrieveOtpComponent
      },
      {
        path: 'reset_password',
        component: ResetPasswordComponent
      },
      {
        path: 'resubmit_documents',
        component: ResubmitDocumentsComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'submit_documents',
        component: SubmitDocumentsComponent
      },
      {
        path: 'submit_appendix_a',
        component: SubmitAppendixAComponent
      },
      {
        path: 'disclaimer_verification',
        component: DisclaimerVerificationComponent
      },
      {
        path: 'student_registration',
        component: StudentRegistrationComponent
      },
      {
        path: 'company_registration',
        component: CompanyRegistrationComponent
      },
      {
        path: 'edit_company_registration',
        component: EditCompanyRegistrationComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'student_table',
        component: StudentTableComponent
      },
      {
        path: 'aa_approve',
        component: AaApproveComponent
      },
      {
        path: '',
        component: StudentRegistrationComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
