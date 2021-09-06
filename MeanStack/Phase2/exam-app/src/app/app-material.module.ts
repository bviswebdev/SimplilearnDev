import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatRadioModule],
  exports: [MatButtonModule, MatCheckboxModule, MatRadioModule],
})
export class AppMaterialModule {}
