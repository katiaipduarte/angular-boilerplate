import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EnsureImportedOnceModule } from './guards/ensure-imported-once.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [],
})
export class CoreModule extends EnsureImportedOnceModule {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent, 'CoreModule');
  }
}
