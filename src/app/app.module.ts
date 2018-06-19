import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ZipcodesComponent } from './story/zipcodes/zipcodes.component';
import { PlanoptionsComponent } from './story/planoptions/planoptions.component';
import { FamilydemographicComponent } from './story/familydemographic/familydemographic.component';
import { SummaryComponent } from './story/summary/summary.component';
import { HealthdemographicComponent } from './story/healthdemographic/healthdemographic.component';
import { StoryComponent } from './story/story.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { RouteModule } from './routing/route.module';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodesComponent,
    PlanoptionsComponent,
    FamilydemographicComponent,
    SummaryComponent,
    HealthdemographicComponent,
    StoryComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
