import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { CompanyConfigurationComponent } from './components/company-configuration/company-configuration.component';
import { TypesOfRightsComponent } from './components/types-of-rights/types-of-rights.component';
import { MainComponent } from './components/main/main.component';
import { RegistroComponent } from './components/registro/registro.component';
import { StripeComponent } from './components/stripe/stripe.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FeaturesComponent } from './components/features/features.component';
import { PreRegistroComponent } from './components/pre-registro/pre-registro.component';
import { PrincingComponent } from './components/princing/princing.component';
import { VerificationComponent } from './components/verification/verification.component';
import { AnualPricingComponent } from './components/anual-pricing/anual-pricing.component';
import { AreasLegalesComponent } from './components/areas-legales/areas-legales.component';
import { MonthPricingComponent } from './components/month-pricing/month-pricing.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PricingExtendedComponent } from './components/pricing-extended/pricing-extended.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: MainComponent }, // Ruta principal
  { path: 'login', component: LoginComponent },
  { path: 'singUp', component: SingUpComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'accountSettings', component: AccountSettingsComponent },
  { path: 'companyConfiguration', component: CompanyConfigurationComponent },
  { path: 'typesOfRights', component: TypesOfRightsComponent },
  { path: 'main', component: MainComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'stripe', component: StripeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'preregistro', component: PreRegistroComponent },
  { path: 'pricing', component: PrincingComponent },
  {path: 'pricing-ext', component: PricingExtendedComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'anual-pricing', component: AnualPricingComponent},
  {path: 'month-pricing', component: MonthPricingComponent},
  {path: 'areas', component: AreasLegalesComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
