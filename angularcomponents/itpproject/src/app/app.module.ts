import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { MenuComponent } from './menu/menu.component';
import { AaWaitComponent } from './aa-wait/aa-wait.component';
import { ItpAdvisorAssignComponent } from './itp-advisor-assign/itp-advisor-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent,
    MenuComponent,
    AaWaitComponent,
    ItpAdvisorAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
