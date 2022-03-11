import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { httpInterceptorProviders } from './interceptors';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    ConfirmationDialogComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule
  ],
  exports: [
    SideMenuComponent,
    LoginComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}