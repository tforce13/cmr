import { ModalComponent } from './components/modal/modal.component';
import { MDBBootstrapModulePro } from './../typescripts/pro/index';
import { MDBBootstrapModule } from './../typescripts/free/index';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alerts/alert/alert.component';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { OverlayCardComponent } from './components/overlay-card/overlay-card.component';
import { PanelComponent } from './components/panel/panel.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './components/notification/notification.service';
import { CascadingPanelComponent } from './components/cascading-panel/cascading-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionComponent } from './components/action/action.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FactsComponent } from './components/facts/facts.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './../core/auth.service';
import { AuthGuard } from './../core/auth.guard';
import { NotifyService } from './../core/notify.service';
import { CompareComponent } from './components/compare/compare.component';
import { SelectUserPipe } from './pipes/select-user.pipe';
import { SelectProfilePipe } from './pipes/select-profile.pipe';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),

  ],
  declarations: [
    AlertComponent,
    CascadingCardComponent,
    OverlayCardComponent,
    PanelComponent,
    ModalComponent,
    NotificationComponent,
    CascadingPanelComponent,
    NavbarComponent,
    HeaderComponent,
    ActionComponent,
    FeaturedComponent,
    FactsComponent,
    ContactComponent,
    CompareComponent,        
    FooterComponent,
    SelectUserPipe,
    SelectProfilePipe
  ],
  exports: [
    MDBBootstrapModule,
    MDBBootstrapModulePro,    
    CascadingCardComponent,
    OverlayCardComponent,
    PanelComponent,
    ModalComponent,
    NotificationComponent,
    CascadingPanelComponent,
    NavbarComponent,
    HeaderComponent,
    ActionComponent,
    FeaturedComponent,
    FactsComponent,
    ContactComponent,
    CompareComponent,            
    FooterComponent
  ],
  providers: [
    NotificationService,
    AuthService,
    AuthGuard,
    NotifyService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
