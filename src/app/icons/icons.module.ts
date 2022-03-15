import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconCloseComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconCloseComponent
  ]
})
export class IconsModule { }
