import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { CompanyConfigurationComponent } from './components/company-configuration/company-configuration.component';
import { TypesOfRightsComponent } from './components/types-of-rights/types-of-rights.component';
import { MainComponent } from './components/main/main.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StripeComponent } from './components/stripe/stripe.component';
import { PlanesComponent } from './components/planes/planes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FeaturesComponent } from './components/features/features.component';
import { FuntionsComponent } from './components/funtions/funtions.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PreRegistroComponent } from './components/pre-registro/pre-registro.component';
import { AreasLegalesComponent } from './components/areas-legales/areas-legales.component';
import { PrincingComponent } from './components/princing/princing.component';
import { VerificationComponent } from './components/verification/verification.component';
import { AnualPricingComponent } from './components/anual-pricing/anual-pricing.component';
import { MonthPricingComponent } from './components/month-pricing/month-pricing.component';
import { PricingExtendedComponent } from './components/pricing-extended/pricing-extended.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    BienvenidaComponent,
    AccountSettingsComponent,
    CompanyConfigurationComponent,
    TypesOfRightsComponent,
    MainComponent,
    RegistroComponent,
    NavbarComponent,
    StripeComponent,
    PlanesComponent,
    InicioComponent,
    FeaturesComponent,
    FuntionsComponent,
    CommentsComponent,
    PreRegistroComponent,
    AreasLegalesComponent,
    PrincingComponent,
    VerificationComponent,
    AnualPricingComponent,
    MonthPricingComponent,
    PricingExtendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
