import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { github } from '@fortawesome/free-brand-icons';

import { AppComponent } from './app.component';
import { DashboardheaderComponent } from './core/dashboardheader/dashboardheader.component';
import { DashboardfooterComponent } from './core/dashboardfooter/dashboardfooter.component';
import { DashboardsidebarComponent } from './core/dashboardsidebar/dashboardsidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardheaderComponent,
    DashboardfooterComponent,
    DashboardsidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
