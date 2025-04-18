/**
 * Modified by Marco Trinastich on 2020/03/31
 * Created by Jose Andres on 2017/02/23
 */

import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TmNgOdometerComponent } from "./odometer/odometer.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TmNgOdometerComponent],
  exports: [TmNgOdometerComponent],
})
export class TmNgOdometerModule {
  static forRoot(): ModuleWithProviders<TmNgOdometerModule> {
    return {
      ngModule: TmNgOdometerModule,
    };
  }
}
