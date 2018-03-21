import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CascadingPanelComponent } from './cascading-panel/cascading-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './action/action.component';
import { FeaturedComponent } from './featured/featured.component';
import { FactsComponent } from './facts/facts.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CascadingPanelComponent,
    NavbarComponent,
    HeaderComponent,
    ActionComponent,
    FeaturedComponent,
    FactsComponent,
    ContactComponent,
    FooterComponent    
  ],
  exports: [
    CascadingPanelComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
