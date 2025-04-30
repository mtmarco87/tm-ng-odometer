/**
 * Created: 2017-02-23 by Jose Andres
 * Modified:
 *   - 2020-03-31 by Marco Trinastich
 */

import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TmNgOdometerComponent } from "./tm-ng-odometer/tm-ng-odometer.component";

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
