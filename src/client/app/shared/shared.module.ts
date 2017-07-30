import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from "./ui-elements/sidenav/sidenav.component";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
      CommonModule,
      RouterModule
  ],
  declarations: [
      SidenavComponent,
  ],
  exports: [
      CommonModule,
      FormsModule,
      RouterModule,
      SidenavComponent,
  ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [

            ],
        };
    }
}
