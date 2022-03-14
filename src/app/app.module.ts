import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ui2Component } from './ui2/ui2.component';

// décorateur
@NgModule({
  declarations: [
    AppComponent,
    Ui2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    Ui2Component
  ]
})

export class AppModule { }
