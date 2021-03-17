import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { EnsureImportedOnceModule } from './guards/ensure-imported-once.guard';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';
import { HttpErrorService } from './services/http-error.service';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule, CommonModule, HttpClientModule],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: HttpErrorService,
    },
  ],
})
export class CoreModule extends EnsureImportedOnceModule {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent, 'CoreModule');
  }
}
