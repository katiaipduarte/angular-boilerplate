import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule, FlexLayoutModule],
  entryComponents: [],
})
export class SharedModule {}
